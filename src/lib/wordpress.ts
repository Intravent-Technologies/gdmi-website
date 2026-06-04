const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
  ? `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2`
  : "";

async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  if (!WP_API_URL) {
    console.warn("NEXT_PUBLIC_WORDPRESS_URL not set. Using static fallback data.");
    return [] as unknown as T;
  }

  const url = new URL(`${WP_API_URL}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );
  }
  url.searchParams.append("_embed", "true");

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getPages(params?: Record<string, string>) {
  return fetchAPI<any[]>("pages", params);
}

export async function getPage(slug: string) {
  const pages = await fetchAPI<any[]>("pages", { slug });
  return pages[0] || null;
}

export async function getPosts(params?: Record<string, string>) {
  return fetchAPI<any[]>("posts", params);
}

export async function getPost(slug: string) {
  const posts = await fetchAPI<any[]>("posts", { slug });
  return posts[0] || null;
}

export async function getEvents(params?: Record<string, string>) {
  return fetchAPI<any[]>("events", params);
}

export async function getEvent(slug: string) {
  const events = await fetchAPI<any[]>("events", { slug });
  return events[0] || null;
}

export async function getProjects(params?: Record<string, string>) {
  return fetchAPI<any[]>("projects", params);
}

export async function getProject(slug: string) {
  const projects = await fetchAPI<any[]>("projects", { slug });
  return projects[0] || null;
}

export async function getSermons(params?: Record<string, string>) {
  return fetchAPI<any[]>("sermons", params);
}

export async function getMedia(id: number) {
  if (!WP_API_URL) return null;
  const res = await fetch(`${WP_API_URL}/media/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return res.json();
}
