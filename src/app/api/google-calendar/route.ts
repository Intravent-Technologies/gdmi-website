import { getGoogleCalendarEvents } from "@/lib/google-calendar";

export const revalidate = 3600;

export async function GET() {
  const events = await getGoogleCalendarEvents();
  return Response.json(events);
}
