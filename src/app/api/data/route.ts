import { getEvents, getProjects, getSermons } from "@/lib/wordpress";
import { getGoogleCalendarEvents } from "@/lib/google-calendar";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  let data: unknown[] = [];
  if (type === "events") {
    const googleEvents = await getGoogleCalendarEvents();
    if (googleEvents.length > 0) {
      data = googleEvents;
    } else {
      data = await getEvents();
    }
  }
  else if (type === "projects") data = await getProjects();
  else if (type === "sermons") data = await getSermons();

  return Response.json({ data });
}
