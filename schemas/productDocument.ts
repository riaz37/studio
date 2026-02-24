import { defineType, defineField } from "sanity";

export default defineType({
    name: "productDocument",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        // ── Core Fields ──
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "menuDescription",
            title: "Menu Description",
            type: "string",
            description: "Short description shown in the navigation dropdown",
        }),
        defineField({
            name: "icon",
            title: "Product Icon Path",
            type: "string",
            description: "Path to icon SVG in /public/products/",
        }),
        defineField({
            name: "orderRank",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first",
        }),

        // ── Hero Section ──
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "array",
            of: [{ type: "string" }],
            description: "Subtitle lines shown in the product hero",
        }),
        defineField({
            name: "heroCenterIcon",
            title: "Hero Center Icon",
            type: "string",
            description: "Path to the center icon SVG",
        }),
        defineField({
            name: "heroCenterIconAlt",
            title: "Hero Center Icon Alt",
            type: "string",
        }),
        defineField({
            name: "heroDemoVideo",
            title: "Hero Demo Video Path",
            type: "string",
        }),
        defineField({
            name: "heroTagline",
            title: "Hero Tagline",
            type: "string",
        }),

        // ── Mission Section ──
        defineField({
            name: "missionTitle",
            title: "Mission Title",
            type: "string",
        }),
        defineField({
            name: "missionSubtitle",
            title: "Mission Subtitle",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "missionCards",
            title: "Mission Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── Automation Hub / Features Section ──
        defineField({
            name: "automationTitle",
            title: "Automation Section Title",
            type: "string",
        }),
        defineField({
            name: "automationSubtitle",
            title: "Automation Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "automationFeatures",
            title: "Automation Features",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── YouTube Video ──
        defineField({
            name: "youtubeVideoId",
            title: "YouTube Video ID",
            type: "string",
        }),
        defineField({
            name: "youtubeVideoTitle",
            title: "YouTube Video Title",
            type: "string",
        }),

        // ── Performance Metrics ──
        defineField({
            name: "performanceMetrics",
            title: "Performance Metrics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "value", title: "Value", type: "string" }),
                        defineField({ name: "label", title: "Label", type: "string" }),
                    ],
                    preview: {
                        select: { title: "value", subtitle: "label" },
                    },
                },
            ],
        }),

        // ── Aceternity Features Grid ──
        defineField({
            name: "aceternityTitle",
            title: "Features Grid Title",
            type: "string",
        }),
        defineField({
            name: "aceternitySubtitle",
            title: "Features Grid Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "aceternityFeatures",
            title: "Features Grid Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                        defineField({ name: "className", title: "Grid CSS Class", type: "string", description: "Tailwind grid classes for layout" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),
    ],
    preview: {
        select: { title: "name", subtitle: "description" },
    },
});
