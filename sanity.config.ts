import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
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
            // ── Pages ──
            S.listItem()
              .title("Home Page")
              .child(
                S.documentTypeList("homePage").title("Home Page")
              ),
            S.listItem()
              .title("About Page")
              .child(
                S.documentTypeList("aboutPage").title("About Page")
              ),
            S.listItem()
              .title("Service Page")
              .child(
                S.documentTypeList("servicePage").title("Service Page")
              ),
            S.listItem()
              .title("Contact Page")
              .child(
                S.documentTypeList("contactPage").title("Contact Page")
              ),
            S.divider(),

            // ── Collections ──
            S.listItem()
              .title("Products")
              .child(
                S.documentTypeList("productDocument")
                  .title("Products")
                  .defaultOrdering([{ field: "orderRank", direction: "asc" }])
              ),
            S.listItem()
              .title("Case Studies")
              .child(
                S.documentTypeList("caseStudy")
                  .title("Case Studies")
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
            S.divider(),

            // ── Site-wide ──
            S.listItem()
              .title("Navigation & Footer")
              .child(
                S.documentTypeList("navigation").title("Navigation & Footer")
              ),
          ]),
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "ar", title: "Arabic" },
      ],
      schemaTypes: [
        "caseStudy",
        "homePage",
        "aboutPage",
        "productDocument",
        "servicePage",
        "contactPage",
        "navigation",
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
