import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "l6nyzvc2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-09-28"
});