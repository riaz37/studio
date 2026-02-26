import { defineType, defineField } from "sanity";

export default defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        // ── Hero Section ──
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
            description: "Main hero headline (e.g. 'ESAP AI')",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroSubtitle",
            title: "Hero Subtitle",
            type: "text",
            rows: 2,
            description: "Tagline below the hero title",
        }),
        defineField({
            name: "heroBadgePill",
            title: "Hero Badge Pill",
            type: "string",
            description: "Small badge text above the hero title (e.g. 'Exclusive')",
        }),
        defineField({
            name: "heroBadgeDescription",
            title: "Hero Badge Description",
            type: "string",
            description: "Description text next to the badge (e.g. 'Tomorrow's Edge, Built Today')",
        }),

        // ── Services Section ──
        defineField({
            name: "servicesTitle",
            title: "Services Section Title",
            type: "string",
        }),
        defineField({
            name: "servicesSubtitle",
            title: "Services Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "servicesBadge",
            title: "Services Badge Label",
            type: "string",
        }),
        defineField({
            name: "services",
            title: "Services",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "id", title: "ID", type: "string" }),
                        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                        defineField({ name: "image", title: "Image Path", type: "string", description: "Path to SVG in /public" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── Achievement Section ──
        defineField({
            name: "achievementsTitle",
            title: "Achievements Section Title",
            type: "string",
        }),
        defineField({
            name: "achievementsSubtitle",
            title: "Achievements Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "achievementsBadge",
            title: "Achievements Badge",
            type: "string",
            description: "Badge label for achievements section (e.g. 'Our Achievement')",
        }),
        defineField({
            name: "achievements",
            title: "Achievement Stats",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "number", title: "Number/Value", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "isHighlighted", title: "Highlighted?", type: "boolean", initialValue: false }),
                    ],
                    preview: {
                        select: { title: "number", subtitle: "label" },
                    },
                },
            ],
        }),

        // ── Mission Section ──
        defineField({
            name: "missionTitle",
            title: "Mission Section Title",
            type: "string",
        }),
        defineField({
            name: "missionSubtitle",
            title: "Mission Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "missionBadge",
            title: "Mission Badge",
            type: "string",
            description: "Badge label for mission section (e.g. 'Our Mission')",
        }),
        defineField({
            name: "missionCards",
            title: "Mission Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                        defineField({ name: "image", title: "Image Path", type: "string", description: "Path to SVG in /public" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── Technology Excellence Section ──
        defineField({
            name: "technologyTitle",
            title: "Technology Section Title",
            type: "string",
        }),
        defineField({
            name: "technologySubtitle",
            title: "Technology Section Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "technologyBadge",
            title: "Technology Badge",
            type: "string",
            description: "Badge label for technology section (e.g. 'Core Tech')",
        }),
        defineField({
            name: "technologyCards",
            title: "Technology Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                        defineField({ name: "image", title: "Image Path", type: "string" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "description" },
                    },
                },
            ],
        }),

        // ── Partners Section ──
        defineField({
            name: "partners",
            title: "Trusted Partners",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "logo", title: "Logo Path", type: "string", description: "Path to logo SVG in /public" }),
                        defineField({ name: "alt", title: "Alt Text", type: "string" }),
                    ],
                    preview: {
                        select: { title: "alt", subtitle: "logo" },
                    },
                },
            ],
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
            name: "ctaButtonHref",
            title: "CTA Button Link",
            type: "string",
        }),

        // ── Text Reveal Section ──
        defineField({
            name: "textRevealContent",
            title: "Text Reveal Content",
            type: "text",
            rows: 4,
            description: "The scrolling text reveal paragraph",
        }),
    ],
    preview: {
        prepare() {
            return { title: "Home Page" };
        },
    },
});
