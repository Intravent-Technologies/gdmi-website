import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-06";

function getClient(token?: string): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !token,
    perspective: "published",
    ...(token ? { token } : {}),
  });
}

export const client = getClient();
export const writeClient = getClient(process.env.SANITY_API_TOKEN);
