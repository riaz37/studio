import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// Sanity Studio uses SANITY_STUDIO_ prefix for environment variables
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "";

const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing SANITY_STUDIO_PROJECT_ID. Please set it in your .env file."
  );
}

export default defineConfig({
  name: "default",
  title: "ESAP AI Studio",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Case Studies")
              .child(
                S.documentTypeList("caseStudy")
                  .title("Case Studies")
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
