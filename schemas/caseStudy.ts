import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      description:
        "Used on the Case Studies listing page. If empty, the first hero image will be used as fallback.",
    }),
    defineField({
      name: "heroImages",
      title: "Hero Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2).min(2).error("Exactly 2 hero images required"),
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.max(3).min(3).error("Exactly 3 images required per timeline entry"),
            },
          ],
          preview: {
            select: {
              title: "title",
              date: "date",
            },
            prepare({ title, date }) {
              return {
                title: title || "Untitled",
                subtitle: date ? new Date(date).toLocaleDateString() : "No date",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "thumbnail",
    },
  },
});
