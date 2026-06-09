import { client } from "@/sanity/lib/client";
import type { SanityClient } from "@sanity/client";

export interface Event {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  schedule?: { time: string; activity: string }[];
  status: "upcoming" | "past";
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  videoUrl?: string;
  goal: number;
  raised: number;
  partners: number;
  category: string;
  status: "active" | "completed";
}

export interface Sermon {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  url: string;
  duration?: string;
}

function extractYoutubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

function formatDate(dateStr: string): string {
  if (!dateStr) return dateStr;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return `${months[m - 1]} ${d}, ${y}`;
}

const eventsQuery = `*[_type == "event"] | order(date desc) {
  _id,
  "slug": slug.current,
  title,
  category,
  date,
  time,
  location,
  description,
  fullDescription,
  "image": image.asset->url,
  schedule,
  status
}`;

const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  description,
  fullDescription,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
  videoUrl,
  goal,
  raised,
  partners,
  category,
  status
}`;

const sermonsQuery = `*[_type == "sermon"] | order(date desc) {
  _id,
  title,
  date,
  excerpt,
  youtubeUrl,
  duration
}`;

export async function getEvents(): Promise<Event[]> {
  try {
    const data = await client.fetch(eventsQuery);
    return (data || []).map((e: Record<string, unknown>) => ({
      id: e._id as string,
      slug: e.slug as string,
      title: e.title as string,
      category: e.category as string,
      date: formatDate(e.date as string),
      time: e.time as string | undefined,
      location: e.location as string,
      description: e.description as string,
      fullDescription: e.fullDescription as string | undefined,
      image: (e.image as string) || "",
      schedule: e.schedule as { time: string; activity: string }[] | undefined,
      status: (e.status as "upcoming" | "past") || "upcoming",
    }));
  } catch {
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await client.fetch(projectsQuery);
    return (data || []).map((e: Record<string, unknown>) => ({
      id: e._id as string,
      slug: e.slug as string,
      title: e.title as string,
      description: e.description as string,
      fullDescription: (e.fullDescription as string) || (e.description as string),
      image: (e.image as string) || "",
      gallery: (e.gallery as string[]) || [],
      videoUrl: e.videoUrl as string | undefined,
      goal: (e.goal as number) || 0,
      raised: (e.raised as number) || 0,
      partners: (e.partners as number) || 0,
      category: e.category as string,
      status: (e.status as "active" | "completed") || "active",
    }));
  } catch {
    return [];
  }
}

export async function getSermons(): Promise<Sermon[]> {
  try {
    const data = await client.fetch(sermonsQuery);
    return (data || []).map((e: Record<string, unknown>) => {
      const url = (e.youtubeUrl as string) || "";
      const ytId = extractYoutubeId(url);
      return {
        id: e._id as string,
        title: e.title as string,
        date: formatDate(e.date as string),
        excerpt: (e.excerpt as string) || "",
        thumbnail: ytId
          ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
          : "",
        url,
        duration: e.duration as string | undefined,
      };
    });
  } catch {
    return [];
  }
}
