import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "legalPage",
    title: "Legal Page",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: "pageType",
            title: "Page Type",
            type: "string",
            options: {
                list: [
                    { title: "Privacy Policy", value: "privacy" },
                    { title: "Terms & Conditions", value: "terms" },
                ],

            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "lastUpdated",
            title: "Last Updated",
            type: "string",
            description: 'e.g. "December 2025"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "legalSection",
                    title: "Legal Section",
                    fields: [
                        defineField({
                            name: "heading",
                            title: "Section Heading",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "content",
                            title: "Content",
                            type: "array",
                            of: [
                                defineArrayMember({
                                    type: "block",
                                    styles: [
                                        { title: "Normal", value: "normal" },
                                        { title: "H3", value: "h3" },
                                    ],
                                    lists: [
                                        { title: "Bullet", value: "bullet" },
                                        { title: "Numbered", value: "number" },
                                    ],
                                    marks: {
                                        decorators: [
                                            { title: "Bold", value: "strong" },
                                            { title: "Italic", value: "em" },
                                        ],
                                        annotations: [
                                            {
                                                name: "link",
                                                type: "object",
                                                title: "Link",
                                                fields: [
                                                    {
                                                        name: "href",
                                                        type: "url",
                                                        title: "URL",
                                                        validation: (Rule: any) =>
                                                            Rule.uri({
                                                                allowRelative: true,
                                                                scheme: ["https", "mailto"],
                                                            }),
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: { title: "heading" },
                    },
                }),
            ],
        }),
        defineField({
            name: "contactEmail",
            title: "Contact Email",
            type: "string",
        }),
        defineField({
            name: "contactAddress",
            title: "Contact Address",
            type: "text",
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "pageType",
            language: "language",
        },
        prepare({ title, subtitle, language }) {
            return {
                title: title || "Untitled",
                subtitle: `${subtitle === "privacy" ? "Privacy Policy" : "Terms & Conditions"} (${language || "unknown"})`,
            };
        },
    },
});
