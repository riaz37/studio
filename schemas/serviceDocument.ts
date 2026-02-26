import { defineType, defineField } from "sanity";
import { isUniqueAcrossLanguage } from "./lib/isUniqueAcrossLanguage";

export default defineType({
    name: "serviceDocument",
    title: "Service",
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
            title: "Service Name",
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

        // ── Hero Section ──
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "array",
            of: [{ type: "string" }],
            description: "Subtitle lines shown in the service hero",
        }),
        defineField({
            name: "heroTagline",
            title: "Hero Tagline",
            type: "string",
        }),

        // ── Problem Section ──
        defineField({
            name: "problemTitle",
            title: "Problem Section Title",
            type: "string",
        }),
        defineField({
            name: "problemSubtitle",
            title: "Problem Section Subtitle",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "problemBadge",
            title: "Problem Badge",
            type: "string",
            description: 'Badge label for problem section (e.g. "The Challenge")',
        }),
        defineField({
            name: "problemItems",
            title: "Problem Items",
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

        // ── Features Section ──
        defineField({
            name: "featuresTitle",
            title: "Features Section Title",
            type: "string",
        }),
        defineField({
            name: "featuresSubtitle",
            title: "Features Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "featuresBadge",
            title: "Features Badge",
            type: "string",
            description: 'Badge label for features section (e.g. "What we deliver")',
        }),
        defineField({
            name: "featuresCentralNode",
            title: "Features Central Node Label",
            type: "string",
            description: 'Label for the central node in features (e.g. "Core Service")',
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                        defineField({ name: "icon", title: "Icon Name", type: "string", description: "Lucide icon name" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── Process Steps Section ──
        defineField({
            name: "processTitle",
            title: "Process Section Title",
            type: "string",
        }),
        defineField({
            name: "processSubtitle",
            title: "Process Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "processBadge",
            title: "Process Badge",
            type: "string",
            description: 'Badge label for process section (e.g. "Process")',
        }),
        defineField({
            name: "processSteps",
            title: "Process Steps",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "stepId", title: "Step Number", type: "string" }),
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "stepId" },
                    },
                },
            ],
        }),

        // ── Portal Video ──
        defineField({
            name: "portalVideoTitle",
            title: "Portal Video Title",
            type: "string",
        }),
        defineField({
            name: "portalVideoDescription",
            title: "Portal Video Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "beforeAfterLabel",
            title: "Before & After Badge Label",
            type: "string",
            description: 'Badge text for before/after section (e.g. "Before & after")',
        }),
        defineField({
            name: "beforeAfterTitle",
            title: "Before & After Section Title",
            type: "string",
            description: 'Title for before/after section (e.g. "See the difference")',
        }),

        // ── CTA Section ──
        defineField({
            name: "ctaTitle",
            title: "CTA Title",
            type: "string",
        }),
        defineField({
            name: "ctaSubtitle",
            title: "CTA Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "ctaButtonText",
            title: "CTA Button Text",
            type: "string",
        }),
        defineField({
            name: "ctaButtonLink",
            title: "CTA Button Link",
            type: "string",
        }),
    ],
    preview: {
        select: { title: "name", subtitle: "heroSubtitle" },
    },
});
