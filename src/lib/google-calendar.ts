import { google } from "googleapis";
import type { Event } from "@/data/events";

const calendar = google.calendar("v3");

function formatGoogleDate(date: any): { date: string; time?: string } {
  if (!date) return { date: "TBD" };

  if (date.date) {
    // All-day event
    const d = new Date(date.date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return { date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` };
  } else if (date.dateTime) {
    // Timed event
    const d = new Date(date.dateTime);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateStr = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    
    // Format time
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeStr = `${hours}:${minutes} ${ampm}`;
    
    return { date: dateStr, time: timeStr };
  }
  
  return { date: "TBD" };
}

function parseDescription(description: string | null | undefined): { description: string; fullDescription?: string } {
  const clean = description?.replace(/<[^>]*>/g, "").trim() || "";
  return {
    description: clean.slice(0, 200),
    fullDescription: clean
  };
}

function getStatus(startDate: any): "upcoming" | "past" {
  const now = new Date();
  let eventStart: Date;
  
  if (startDate.date) {
    eventStart = new Date(startDate.date);
  } else if (startDate.dateTime) {
    eventStart = new Date(startDate.dateTime);
  } else {
    return "upcoming";
  }
  
  return eventStart > now ? "upcoming" : "past";
}

function getCategory(summary: string): string {
  const lowerSummary = summary.toLowerCase();
  if (lowerSummary.includes("crusade")) return "Crusade";
  if (lowerSummary.includes("summit")) return "Summit";
  if (lowerSummary.includes("conference")) return "Conference";
  if (lowerSummary.includes("outreach")) return "Outreach";
  if (lowerSummary.includes("women") || lowerSummary.includes("ladies")) return "Women's Conference";
  return "General";
}

export async function getGoogleCalendarEvents(): Promise<Event[]> {
  try {
    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
      ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
      : null;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!credentials || !calendarId) {
      console.warn("Google Calendar credentials not configured");
      return [];
    }

    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ["https://www.googleapis.com/auth/calendar.readonly"]
    );

    const response = await calendar.events.list({
      auth,
      calendarId,
      maxResults: 100,
      singleEvents: true,
      orderBy: "startTime",
    });

    const items = response.data.items || [];
    
    return items.map((item): Event => {
      const dateTime = formatGoogleDate(item.start);
      const desc = parseDescription(item.description);
      
      return {
        id: item.id || "",
        slug: item.id?.toLowerCase().replace(/\W+/g, "-") || "",
        title: item.summary || "Untitled Event",
        category: getCategory(item.summary || ""),
        date: dateTime.date,
        time: dateTime.time,
        location: item.location || "TBD",
        description: desc.description,
        fullDescription: desc.fullDescription,
        image: "", // We'll use a placeholder or allow configuration
        status: getStatus(item.start),
      };
    });
  } catch (error) {
    console.error("Error fetching Google Calendar events:", error);
    return [];
  }
}
