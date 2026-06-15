import { getProjects, getSermons } from "@/lib/sanity";
import { getYouTubeVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  let data: unknown[] = [];
  if (type === "projects") data = await getProjects();
  else if (type === "sermons") {
    const [sanity, youtube] = await Promise.all([
      getSermons(),
      getYouTubeVideos(),
    ]);
    const seen = new Set<string>();
    data = [...youtube, ...sanity].filter((s) => {
      const key = (s as { url?: string }).url || "";
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  return Response.json({ data });
}
