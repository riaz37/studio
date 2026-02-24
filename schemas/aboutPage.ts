import { defineType, defineField } from "sanity";

export default defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        // ── Hero ──
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

        // ── Team Members ──
        defineField({
            name: "teamMembers",
            title: "Team Members",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
                        defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
                        defineField({ name: "image", title: "Photo URL", type: "url" }),
                    ],
                    preview: {
                        select: { title: "name", subtitle: "role" },
                    },
                },
            ],
        }),

        // ── History / Timeline ──
        defineField({
            name: "historyTitle",
            title: "History Section Title",
            type: "string",
        }),
        defineField({
            name: "historyPhases",
            title: "History Phases",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "year", title: "Year / Period", type: "string" }),
                        defineField({ name: "title", title: "Phase Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "year" },
                    },
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: "About Page" };
        },
    },
});
