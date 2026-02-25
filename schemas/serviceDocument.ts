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
            type: "text",
            rows: 3,
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
    ],
    preview: {
        select: { title: "name", subtitle: "heroSubtitle" },
    },
});
