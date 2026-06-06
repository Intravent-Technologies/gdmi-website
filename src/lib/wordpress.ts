export interface WPMedia {
  id: number;
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
}

export interface WPPostBase {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  _links?: Record<string, any>;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
}

export interface WPEvent extends WPPostBase {
  acf: {
    event_date: string;
    event_time?: string;
    location: string;
    category: string;
    status: "upcoming" | "past";
  };
}

export interface WPProject extends WPPostBase {
  acf: {
    goal?: number;
    raised?: number;
    partners?: number;
    category: string;
    status: "active" | "completed";
    gallery?: string[];
    video_url?: string;
  };
}

export interface WPSermon extends WPPostBase {
  acf: {
    sermon_date: string;
    excerpt: string;
    youtube_url: string;
    duration?: string;
  };
}

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

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
  ? `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`
  : "";

const DEFAULT_REVALIDATE = 300;

async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string>,
  revalidate = DEFAULT_REVALIDATE
): Promise<T[]> {
  if (!WP_API_URL) return [];

  const url = new URL(`${WP_API_URL}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );
  }
  url.searchParams.append("_embed", "true");
  url.searchParams.append("per_page", "100");

  const res = await fetch(url.toString(), {
    next: { revalidate },
  });

  if (!res.ok) return [];
  return res.json();
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function formatWPDate(dateStr: string): string {
  if (!dateStr || dateStr.length < 8) return dateStr;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const y = dateStr.slice(0, 4);
  const m = parseInt(dateStr.slice(4, 6), 10) - 1;
  const d = parseInt(dateStr.slice(6, 8), 10);
  if (isNaN(m) || isNaN(d)) return dateStr;
  return `${months[m]} ${d}, ${y}`;
}

function getFeaturedImageUrl(post: WPPostBase): string {
  if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    return post._embedded["wp:featuredmedia"][0].source_url;
  }
  return "";
}

export function wpEventToEvent(wp: WPEvent): Event {
  const raw = wp.content?.rendered || "";
  return {
    id: String(wp.id),
    slug: wp.slug,
    title: wp.title?.rendered || "",
    category: wp.acf?.category || "General",
    date: formatWPDate(wp.acf?.event_date || ""),
    time: wp.acf?.event_time || undefined,
    location: wp.acf?.location || "",
    description: stripHtml(raw).slice(0, 200),
    fullDescription: stripHtml(raw) || undefined,
    image: getFeaturedImageUrl(wp),
    status: wp.acf?.status || "upcoming",
  };
}

export function wpProjectToProject(wp: WPProject): Project {
  const raw = wp.content?.rendered || "";
  return {
    id: String(wp.id),
    slug: wp.slug,
    title: wp.title?.rendered || "",
    description: stripHtml(raw).slice(0, 200),
    fullDescription: stripHtml(raw) || "",
    image: getFeaturedImageUrl(wp),
    gallery: [],
    goal: wp.acf?.goal || 0,
    raised: wp.acf?.raised || 0,
    partners: wp.acf?.partners || 0,
    category: wp.acf?.category || "General",
    status: wp.acf?.status || "active",
    videoUrl: wp.acf?.video_url || undefined,
  };
}

export function wpSermonToSermon(wp: WPSermon): Sermon {
  return {
    id: String(wp.id),
    title: wp.title?.rendered || "",
    date: formatWPDate(wp.acf?.sermon_date || ""),
    excerpt: wp.acf?.excerpt || stripHtml(wp.excerpt?.rendered || ""),
    thumbnail: `https://img.youtube.com/vi/${extractYoutubeId(wp.acf?.youtube_url || "")}/maxresdefault.jpg`,
    url: wp.acf?.youtube_url || "",
    duration: wp.acf?.duration || undefined,
  };
}

function extractYoutubeId(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

export async function getEvents(): Promise<Event[]> {
  const posts = await fetchAPI<WPEvent>("events");
  return posts.length > 0 ? posts.map(wpEventToEvent) : [];
}

export async function getProjects(): Promise<Project[]> {
  const posts = await fetchAPI<WPProject>("projects");
  return posts.length > 0 ? posts.map(wpProjectToProject) : [];
}

export async function getSermons(): Promise<Sermon[]> {
  const posts = await fetchAPI<WPSermon>("sermons");
  return posts.length > 0 ? posts.map(wpSermonToSermon) : [];
}
