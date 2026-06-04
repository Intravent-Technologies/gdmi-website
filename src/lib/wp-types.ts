export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
  };
}

export interface WPPost extends WPPage {
  categories: number[];
  tags: number[];
}

export interface WPEvent {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  acf?: {
    event_date?: string;
    event_time?: string;
    location?: string;
    category?: string;
    status?: "upcoming" | "past";
    schedule?: { time: string; activity: string }[];
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
  };
}

export interface WPProject {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    goal?: number;
    raised?: number;
    partners?: number;
    category?: string;
    status?: "active" | "completed";
    gallery?: string[];
    video_url?: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
  };
}

export interface WPSermon {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  acf?: {
    sermon_date?: string;
    excerpt?: string;
    youtube_url?: string;
    duration?: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: Record<string, { source_url: string; width: number; height: number }>;
  };
}
