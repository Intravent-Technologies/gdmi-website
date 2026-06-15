import { getGoogleCalendarEvents } from "@/lib/google-calendar";

export const dynamic = "force-dynamic";

export async function GET() {
  const events = await getGoogleCalendarEvents();
  return Response.json(events);
}
