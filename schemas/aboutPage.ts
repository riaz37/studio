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
        defineField({
            name: "heroBadge",
            title: "Hero Badge",
            type: "string",
            description: 'e.g. "Legacy & Vision"',
        }),
        defineField({
            name: "heroTitlePart1",
            title: "Hero Title Part 1 (prefix)",
            type: "string",
            description: 'Prefix before highlighted word, e.g. "Our " (empty for Arabic)',
        }),
        defineField({
            name: "heroTitlePart2",
            title: "Hero Title Part 2 (highlighted)",
            type: "string",
            description: 'Highlighted word, e.g. "Legacy" / "إرثنا"',
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

        // ── Team Labels ──
        defineField({
            name: "narrativeDesignation",
            title: "Narrative Designation Label",
            type: "string",
            description: 'Label above role field, e.g. "Designation" / "المسمى الوظيفي"',
        }),
        defineField({
            name: "teamCategoryLabel",
            title: "Team Category Label",
            type: "string",
            description: 'e.g. "CORE TEAM MEMBER" / "عضو الفريق الأساسي"',
        }),
        defineField({
            name: "teamLeadershipLabel",
            title: "Team Leadership Label",
            type: "string",
            description: 'e.g. "LEADERSHIP" / "القيادة"',
        }),
        defineField({
            name: "teamInnovationLabel",
            title: "Team Innovation Label",
            type: "string",
            description: 'e.g. "INNOVATION" / "الابتكار"',
        }),

        // ── History / Timeline ──
        defineField({
            name: "historyTitle",
            title: "History Section Title",
            type: "string",
        }),
        defineField({
            name: "historyBadge",
            title: "History Badge",
            type: "string",
        }),
        defineField({
            name: "historySubtitle",
            title: "History Subtitle",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "historyHook",
            title: "History Hook Line",
            type: "string",
            description: 'Short hook below subtitle, e.g. "Digitalizing what can\'t be digitalized — a real case study."',
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
                        defineField({ name: "phaseLabel", title: "Phase Label", type: "string", description: 'e.g. "Phase 1" / "المرحلة الأولى"' }),
                        defineField({ name: "highlight", title: "Phase Highlight", type: "string", description: "Callout text displayed at end of phase" }),
                    ],
                    preview: {
                        select: { title: "title", subtitle: "year" },
                    },
                },
            ],
        }),

        // ── Vision ──
        defineField({
            name: "visionTitle",
            title: "Vision Title",
            type: "string",
        }),
        defineField({
            name: "visionBody",
            title: "Vision Body",
            type: "text",
            rows: 6,
        }),
    ],
    preview: {
        prepare() {
            return { title: "About Page" };
        },
    },
});
