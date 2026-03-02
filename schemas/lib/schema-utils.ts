import { defineField } from "sanity";

export const defineTranslationProduct = (
    name: string,
    title: string,
    options: { hasDescription?: boolean; hasMenuDescription?: boolean } = { hasDescription: true, hasMenuDescription: true }
) => {
    return defineField({
        name,
        title,
        type: "object",
        fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            ...(options.hasDescription ? [
                defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            ] : []),
            ...(options.hasMenuDescription ? [
                defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
            ] : []),
        ],
    });
};

export const defineSectionDefaults = (name: string, title: string) => {
    return defineField({
        name,
        title,
        type: "object",
        fields: [
            defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
            defineField({ name: "defaultSubtitle", title: "Default Subtitle", type: "text", rows: 2 }),
        ],
    });
};
