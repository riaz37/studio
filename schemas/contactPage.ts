import { defineType, defineField } from "sanity";

export default defineType({
    name: "contactPage",
    title: "Contact Page",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Page Subtitle",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "email",
            title: "Contact Email",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Contact Phone",
            type: "string",
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "text",
            rows: 3,
        }),
    ],
    preview: {
        prepare() {
            return { title: "Contact Page" };
        },
    },
});
