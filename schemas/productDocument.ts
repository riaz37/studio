import { defineType, defineField } from "sanity";
import { isUniqueAcrossLanguage } from "./lib/isUniqueAcrossLanguage";

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
            options: {
                source: "name",
                maxLength: 96,
                isUnique: isUniqueAcrossLanguage
            },
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

        // ── Hero CTA ──
        defineField({
            name: "exploreButton",
            title: "Explore Button Text",
            type: "string",
            description: 'CTA button in hero, e.g. "Explore Solution" / "استكشف الحل"',
        }),

        // ── Outcomes / Business Impact ──
        defineField({ name: "outcomesTitle", title: "Outcomes Section Title", type: "string" }),
        defineField({ name: "outcomesBadge", title: "Outcomes Badge", type: "string" }),

        // ── Demo / Solution Video ──
        defineField({ name: "demoTitle", title: "Demo Section Title", type: "string" }),
        defineField({ name: "demoSubtitle", title: "Demo Section Subtitle", type: "text", rows: 2 }),
        defineField({ name: "demoBadge", title: "Demo Badge", type: "string" }),

        // ── Architecture / Cinematic Reel ──
        defineField({ name: "architectureTitle", title: "Architecture Section Title", type: "string" }),
        defineField({ name: "architectureBadge", title: "Architecture Badge", type: "string" }),

        // ── Challenges (Cinematic Flow header) ──
        defineField({ name: "challengesBadge", title: "Challenges Badge", type: "string" }),
        defineField({ name: "challengesTitlePart1", title: "Challenges Title Part 1", type: "string" }),
        defineField({ name: "challengesTitlePart2", title: "Challenges Title Part 2 (highlighted)", type: "string" }),
        defineField({ name: "challengesSubtitle", title: "Challenges Subtitle", type: "text", rows: 3 }),

        // ── Cinematic Narrative Lines ──
        defineField({
            name: "cinematicNarrative",
            title: "Cinematic Narrative Lines",
            type: "object",
            fields: [
                defineField({ name: "introLine", title: "Intro Line", type: "string" }),
                defineField({ name: "problemsIntroLine", title: "Problems Intro Line", type: "string" }),
                defineField({ name: "epiphanyPreLine", title: "Epiphany Pre-Line", type: "string" }),
                defineField({ name: "solutionIntroLine", title: "Solution Intro Line", type: "string" }),
                defineField({ name: "recapLine", title: "Recap Line", type: "string" }),
            ],
        }),

        // ── Cinematic Problems ──
        defineField({
            name: "cinematicProblems",
            title: "Cinematic Problems",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Problem Title", type: "string" }),
                        defineField({ name: "description", title: "Problem Description", type: "text", rows: 3 }),
                        defineField({ name: "solTitle", title: "Solution Title", type: "string" }),
                        defineField({ name: "solDesc", title: "Solution Description", type: "text", rows: 3 }),
                        defineField({ name: "solImpact", title: "Solution Impact", type: "string", description: 'e.g. "+75% Time Savings"' }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "solTitle" },
                    },
                },
            ],
        }),

        // ── User Journey ──
        defineField({ name: "journeyTitle", title: "Journey Section Title", type: "string" }),
        defineField({ name: "journeySubtitle", title: "Journey Section Subtitle", type: "text", rows: 2 }),
        defineField({ name: "journeyBadge", title: "Journey Badge", type: "string" }),
        defineField({
            name: "journeyStages",
            title: "Journey Stage Labels",
            type: "array",
            of: [{ type: "string" }],
            description: 'Stage labels, e.g. ["Stage One", "Stage Two", ...]',
        }),
        defineField({
            name: "journeyLayers",
            title: "Journey Layers",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Layer Title", type: "string" }),
                        defineField({
                            name: "nodes",
                            title: "Node Labels",
                            type: "array",
                            of: [{ type: "string" }],
                        }),
                    ],
                    preview: {
                        select: { title: "title" },
                    },
                },
            ],
        }),
    ],
    preview: {
        select: { title: "name", subtitle: "description" },
    },
});
