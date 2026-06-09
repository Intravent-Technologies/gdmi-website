import type { Event } from "@/data/events";

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr.includes("T") ? dateStr : dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Africa/Lagos",
  });
}

function formatTime(dateTimeStr: string): string {
  const date = new Date(dateTimeStr);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Lagos",
  });
}

// Convention for Google Calendar event descriptions:
//   Category: Summit
//   Image: https://example.com/image.jpg
//   (blank line)
//   Your actual description text here...
function parseDescription(raw: string | undefined): {
  category: string;
  image: string;
  description: string;
  fullDescription: string;
} {
  if (!raw) {
    return { category: "Event", image: "", description: "", fullDescription: "" };
  }

  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let category = "Event";
  let image = "";
  const bodyLines: string[] = [];

  for (const line of lines) {
    const catMatch = line.match(/^Category:\s*(.+)/i);
    const imgMatch = line.match(/^Image:\s*(https?:\/\/\S+)/i);
    if (catMatch) {
      category = catMatch[1].trim();
    } else if (imgMatch) {
      image = imgMatch[1].trim();
    } else {
      bodyLines.push(line);
    }
  }

  const fullDescription = bodyLines.join("\n").trim();
  const description =
    fullDescription.length > 180
      ? fullDescription.slice(0, 177) + "..."
      : fullDescription;

  return { category, image, description, fullDescription };
}

interface GCalEvent {
  id: string;
  summary?: string;
  description?: string;
  location?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

export async function getGoogleCalendarEvents(): Promise<Event[]> {
  if (!CALENDAR_ID || !API_KEY) return [];

  const timeMin = new Date();
  timeMin.setFullYear(timeMin.getFullYear() - 1);

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`
  );
  url.searchParams.set("key", API_KEY);
  url.searchParams.set("orderBy", "startTime");
  url.searchParams.set("singleEvents", "true");
  url.searchParams.set("maxResults", "100");
  url.searchParams.set("timeMin", timeMin.toISOString());

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const items: GCalEvent[] = data.items || [];
    const now = new Date();

    return items.map((item) => {
      const startStr = item.start.dateTime || item.start.date || "";
      const { category, image, description, fullDescription } =
        parseDescription(item.description);

      const startDate = new Date(
        startStr.includes("T") ? startStr : startStr + "T12:00:00"
      );
      const status: "upcoming" | "past" = startDate >= now ? "upcoming" : "past";

      return {
        id: item.id,
        slug: slugify(item.summary || item.id),
        title: item.summary || "Untitled Event",
        category,
        date: formatDate(startStr),
        time: item.start.dateTime ? formatTime(item.start.dateTime) : undefined,
        location: item.location || "To be announced",
        description,
        fullDescription,
        image,
        status,
      };
    });
  } catch {
    return [];
  }
}
