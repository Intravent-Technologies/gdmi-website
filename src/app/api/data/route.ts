import { getProjects, getSermons } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  let data: unknown[] = [];
  if (type === "projects") data = await getProjects();
  else if (type === "sermons") data = await getSermons();

  return Response.json({ data });
}
