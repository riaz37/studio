import { defineType, defineField } from "sanity";

export default defineType({
    name: "navigation",
    title: "Navigation",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        // ── Navbar Links ──
        defineField({
            name: "navLinks",
            title: "Navigation Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "href", title: "URL", type: "string", validation: (Rule) => Rule.required() }),
                    ],
                    preview: {
                        select: { title: "label", subtitle: "href" },
                    },
                },
            ],
        }),

        // ── Footer Links ──
        defineField({
            name: "footerLinks",
            title: "Footer Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "href", title: "URL", type: "string" }),
                    ],
                    preview: {
                        select: { title: "label", subtitle: "href" },
                    },
                },
            ],
        }),

        // ── CTA Button ──
        defineField({
            name: "ctaLabel",
            title: "CTA Button Label",
            type: "string",
        }),
        defineField({
            name: "ctaHref",
            title: "CTA Button Link",
            type: "string",
        }),

        // ── Footer Extras ──
        defineField({
            name: "copyrightText",
            title: "Copyright Text",
            type: "string",
        }),
        defineField({
            name: "newsletterTitle",
            title: "Newsletter Section Title",
            type: "string",
        }),
        defineField({
            name: "newsletterSubtitle",
            title: "Newsletter Subtitle",
            type: "text",
            rows: 2,
        }),
    ],
    preview: {
        prepare() {
            return { title: "Navigation & Footer" };
        },
    },
});
