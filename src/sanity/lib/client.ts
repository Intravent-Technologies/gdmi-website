import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-06";

function createSanityClient(token?: string): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !token,
    perspective: "published",
    ...(token ? { token } : {}),
  });
}

export const client = createSanityClient();
export const writeClient = createSanityClient(process.env.SANITY_API_TOKEN);
