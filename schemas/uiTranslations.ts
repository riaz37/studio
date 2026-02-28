import { defineType, defineField } from "sanity";

export default defineType({
    name: "uiTranslations",
    title: "UI Translations",
    type: "document",
    groups: [
        { name: "navigation", title: "Navigation" },
        { name: "loading", title: "Loading" },
        { name: "home", title: "Home" },
        { name: "about", title: "About" },
        { name: "contact", title: "Contact" },
        { name: "footer", title: "Footer" },
        { name: "menus", title: "Menus" },
        { name: "products", title: "Products" },
        { name: "service", title: "Service" },
        { name: "notFound", title: "Not Found" },
        { name: "error", title: "Error" },
        { name: "cta", title: "CTA" },
        { name: "caseStudy", title: "Case Study" },
        { name: "metrics", title: "Metrics" },
        { name: "cookieConsent", title: "Cookie Consent" },
    ],
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),

        // ── Navigation ──
        defineField({
            name: "navigation",
            title: "Navigation",
            type: "object",
            group: "navigation",
            fields: [
                defineField({ name: "home", title: "Home", type: "string" }),
                defineField({ name: "about", title: "About", type: "string" }),
                defineField({ name: "product", title: "Product", type: "string" }),
                defineField({ name: "service", title: "Service", type: "string" }),
                defineField({ name: "caseStudy", title: "Case Study", type: "string" }),
                defineField({ name: "contact", title: "Contact", type: "string" }),
                defineField({ name: "language", title: "Language", type: "string" }),
                defineField({ name: "getStarted", title: "Get Started", type: "string" }),
            ],
        }),

        // ── Loading ──
        defineField({
            name: "loading",
            title: "Loading",
            type: "object",
            group: "loading",
            fields: [
                defineField({ name: "message", title: "Message", type: "string" }),
                defineField({ name: "subMessage", title: "Sub Message", type: "string" }),
            ],
        }),

        // ── Home ──
        defineField({
            name: "home",
            title: "Home",
            type: "object",
            group: "home",
            fields: [
                defineField({
                    name: "reveal",
                    title: "Reveal",
                    type: "object",
                    fields: [
                        defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
                    ],
                }),
                defineField({
                    name: "showcase",
                    title: "Showcase",
                    type: "object",
                    fields: [
                        defineField({ name: "badge", title: "Badge", type: "string" }),
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
                        defineField({ name: "explore", title: "Explore", type: "string" }),
                        defineField({
                            name: "products",
                            title: "Products",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "erp",
                                    title: "ERP",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "name", title: "Name", type: "string" }),
                                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                                    ],
                                }),
                                defineField({
                                    name: "aiFramework",
                                    title: "AI Framework",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "name", title: "Name", type: "string" }),
                                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                                    ],
                                }),
                                defineField({
                                    name: "zakra",
                                    title: "Zakra",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "name", title: "Name", type: "string" }),
                                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                                    ],
                                }),
                                defineField({
                                    name: "jawib",
                                    title: "Jawib",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "name", title: "Name", type: "string" }),
                                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                                    ],
                                }),
                                defineField({
                                    name: "fasih",
                                    title: "Fasih",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "name", title: "Name", type: "string" }),
                                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),

        // ── About ──
        defineField({
            name: "about",
            title: "About",
            type: "object",
            group: "about",
            fields: [
                defineField({
                    name: "team",
                    title: "Team",
                    type: "object",
                    fields: [
                        defineField({ name: "placeholder", title: "Placeholder", type: "string", hidden: true }),
                    ],
                }),
            ],
        }),

        // ── Contact ──
        defineField({
            name: "contact",
            title: "Contact",
            type: "object",
            group: "contact",
            fields: [
                defineField({ name: "badge", title: "Badge", type: "string" }),
                defineField({
                    name: "title",
                    title: "Title",
                    type: "object",
                    fields: [
                        defineField({ name: "part1", title: "Part 1", type: "string" }),
                        defineField({ name: "part2", title: "Part 2", type: "string" }),
                        defineField({ name: "part3", title: "Part 3", type: "string" }),
                    ],
                }),
                defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                defineField({ name: "social", title: "Social", type: "string" }),
                defineField({
                    name: "form",
                    title: "Form",
                    type: "object",
                    fields: [
                        defineField({ name: "fullName", title: "Full Name", type: "string" }),
                        defineField({ name: "fullNamePlaceholder", title: "Full Name Placeholder", type: "string" }),
                        defineField({ name: "email", title: "Email", type: "string" }),
                        defineField({ name: "emailPlaceholder", title: "Email Placeholder", type: "string" }),
                        defineField({ name: "message", title: "Message", type: "string" }),
                        defineField({ name: "messagePlaceholder", title: "Message Placeholder", type: "string" }),
                        defineField({ name: "submit", title: "Submit", type: "string" }),
                        defineField({ name: "submitting", title: "Submitting", type: "string" }),
                        defineField({ name: "termsPrefix", title: "Terms Prefix", type: "string" }),
                        defineField({ name: "termsLink", title: "Terms Link", type: "string" }),
                    ],
                }),
                defineField({
                    name: "toasts",
                    title: "Toasts",
                    type: "object",
                    fields: [
                        defineField({ name: "acceptTerms", title: "Accept Terms", type: "string" }),
                        defineField({ name: "success", title: "Success", type: "string" }),
                        defineField({ name: "error", title: "Error", type: "string" }),
                    ],
                }),
            ],
        }),

        // ── Footer ──
        defineField({
            name: "footer",
            title: "Footer",
            type: "object",
            group: "footer",
            fields: [
                defineField({
                    name: "cta",
                    title: "CTA",
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
                        defineField({ name: "button", title: "Button", type: "string" }),
                    ],
                }),
                defineField({
                    name: "social",
                    title: "Social",
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                        defineField({ name: "connect", title: "Connect", type: "string" }),
                    ],
                }),
                defineField({
                    name: "menu",
                    title: "Menu",
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                    ],
                }),
                defineField({
                    name: "newsletter",
                    title: "Newsletter",
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
                        defineField({ name: "placeholder", title: "Placeholder", type: "string" }),
                        defineField({ name: "button", title: "Button", type: "string" }),
                    ],
                }),
                defineField({ name: "rights", title: "Rights", type: "string" }),
                defineField({
                    name: "legal",
                    title: "Legal",
                    type: "object",
                    fields: [
                        defineField({ name: "privacy", title: "Privacy", type: "string" }),
                        defineField({ name: "terms", title: "Terms", type: "string" }),
                    ],
                }),
            ],
        }),

        // ── Menus ──
        defineField({
            name: "menus",
            title: "Menus",
            type: "object",
            group: "menus",
            fields: [
                defineField({ name: "ourServices", title: "Our Services", type: "string" }),
                defineField({ name: "ourProducts", title: "Our Products", type: "string" }),
                defineField({ name: "impactAnalysis", title: "Impact Analysis", type: "string" }),
                defineField({ name: "serviceDescription", title: "Service Description", type: "text", rows: 2 }),
                defineField({ name: "productDescription", title: "Product Description", type: "text", rows: 2 }),
                defineField({ name: "telemetryPending", title: "Telemetry Pending", type: "string" }),
            ],
        }),

        // ── Products ──
        defineField({
            name: "products",
            title: "Products",
            type: "object",
            group: "products",
            fields: [
                defineField({
                    name: "erp",
                    title: "ERP",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string" }),
                        defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
                    ],
                }),
                defineField({
                    name: "aiFramework",
                    title: "AI Framework",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string" }),
                        defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
                    ],
                }),
                defineField({
                    name: "zakra",
                    title: "Zakra",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string" }),
                        defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
                    ],
                }),
                defineField({
                    name: "jawib",
                    title: "Jawib",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string" }),
                        defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
                    ],
                }),
                defineField({
                    name: "fasih",
                    title: "Fasih",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name", type: "string" }),
                        defineField({ name: "menuDescription", title: "Menu Description", type: "string" }),
                    ],
                }),
            ],
        }),

        // ── Service ──
        defineField({
            name: "service",
            title: "Service",
            type: "object",
            group: "service",
            fields: [
                defineField({
                    name: "hero",
                    title: "Hero",
                    type: "object",
                    fields: [
                        defineField({ name: "getStarted", title: "Get Started", type: "string" }),
                        defineField({ name: "viewFeatures", title: "View Features", type: "string" }),
                    ],
                }),
                defineField({
                    name: "problem",
                    title: "Problem Section",
                    type: "object",
                    fields: [
                        defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
                        defineField({ name: "defaultSubtitle", title: "Default Subtitle", type: "text", rows: 2 }),
                    ],
                }),
                defineField({
                    name: "features",
                    title: "Features Section",
                    type: "object",
                    fields: [
                        defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
                        defineField({ name: "defaultSubtitle", title: "Default Subtitle", type: "text", rows: 2 }),
                    ],
                }),
                defineField({
                    name: "video",
                    title: "Video Section",
                    type: "object",
                    fields: [
                        defineField({ name: "badge", title: "Badge", type: "string" }),
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
                    ],
                }),
                defineField({
                    name: "beforeAfter",
                    title: "Before & After",
                    type: "object",
                    fields: [
                        defineField({ name: "badge", title: "Badge", type: "string" }),
                        defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
                    ],
                }),
                defineField({
                    name: "cta",
                    title: "CTA Defaults",
                    type: "object",
                    fields: [
                        defineField({ name: "defaultTitle", title: "Default Title", type: "string" }),
                        defineField({ name: "defaultText", title: "Default Text", type: "text", rows: 2 }),
                        defineField({ name: "defaultButton", title: "Default Button", type: "string" }),
                    ],
                }),
                defineField({
                    name: "metadata",
                    title: "Metadata",
                    type: "object",
                    fields: [
                        defineField({ name: "notFoundTitle", title: "Not Found Title", type: "string" }),
                        defineField({ name: "notFoundDescription", title: "Not Found Description", type: "string" }),
                    ],
                }),
                defineField({ name: "defaultHeroSubtitle1", title: "Default Hero Subtitle Line 1", type: "string" }),
                defineField({ name: "defaultHeroSubtitle2", title: "Default Hero Subtitle Line 2", type: "string" }),
            ],
        }),

        // ── Not Found ──
        defineField({
            name: "notFound",
            title: "Not Found Page",
            type: "object",
            group: "notFound",
            fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                defineField({ name: "goHome", title: "Go Home Button", type: "string" }),
                defineField({ name: "contactUs", title: "Contact Us Button", type: "string" }),
                defineField({ name: "quickLinks", title: "Quick Links Title", type: "string" }),
            ],
        }),

        // ── Error ──
        defineField({
            name: "error",
            title: "Error Page",
            type: "object",
            group: "error",
            fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                defineField({ name: "errorId", title: "Error ID Label", type: "string" }),
                defineField({ name: "tryAgain", title: "Try Again Button", type: "string" }),
                defineField({ name: "goHome", title: "Go Home Button", type: "string" }),
                defineField({ name: "whatToDo", title: "What To Do Title", type: "string" }),
                defineField({ name: "tip1", title: "Tip 1", type: "string" }),
                defineField({ name: "tip2", title: "Tip 2", type: "string" }),
                defineField({ name: "tip3", title: "Tip 3", type: "string" }),
                defineField({ name: "contactSupport", title: "Contact Support", type: "string" }),
                defineField({ name: "criticalTitle", title: "Critical Error Title", type: "string" }),
                defineField({ name: "criticalDescription", title: "Critical Error Description", type: "text", rows: 2 }),
                defineField({ name: "reloadApp", title: "Reload App Button", type: "string" }),
                defineField({ name: "troubleshooting", title: "Troubleshooting Title", type: "string" }),
                defineField({ name: "clearCache", title: "Clear Cache Tip", type: "string" }),
                defineField({ name: "tryBrowser", title: "Try Browser Tip", type: "string" }),
                defineField({ name: "checkJs", title: "Check JS Tip", type: "string" }),
                defineField({ name: "contactIfPersists", title: "Contact If Persists Tip", type: "string" }),
            ],
        }),

        // ── CTA ──
        defineField({
            name: "cta",
            title: "CTA",
            type: "object",
            group: "cta",
            fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
                defineField({ name: "button", title: "Button", type: "string" }),
                defineField({ name: "productFallbackTitle", title: "Product Fallback Title", type: "string", description: "Use {name} as placeholder for the product name" }),
                defineField({ name: "productFallbackButton", title: "Product Fallback Button", type: "string" }),
            ],
        }),

        // ── Case Study ──
        defineField({
            name: "caseStudy",
            title: "Case Study",
            type: "object",
            group: "caseStudy",
            fields: [
                defineField({
                    name: "list",
                    title: "List Page",
                    type: "object",
                    fields: [
                        defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
                        defineField({ name: "heroTagline", title: "Hero Tagline", type: "string" }),
                        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
                        defineField({ name: "empty", title: "Empty State", type: "string" }),
                        defineField({ name: "featured", title: "Featured", type: "string" }),
                        defineField({ name: "viewDetails", title: "View Details", type: "string" }),
                        defineField({ name: "ariaLabel", title: "Aria Label", type: "string" }),
                    ],
                }),
                defineField({
                    name: "detail",
                    title: "Detail Page",
                    type: "object",
                    fields: [
                        defineField({ name: "loading", title: "Loading", type: "string" }),
                        defineField({ name: "loadingSubtitle", title: "Loading Subtitle", type: "string" }),
                        defineField({ name: "updating", title: "Updating", type: "string" }),
                        defineField({ name: "error", title: "Error", type: "string" }),
                        defineField({ name: "readMore", title: "Read More", type: "string" }),
                        defineField({ name: "showLess", title: "Show Less", type: "string" }),
                    ],
                }),
                defineField({
                    name: "metadata",
                    title: "Metadata",
                    type: "object",
                    fields: [
                        defineField({ name: "listTitle", title: "List Title", type: "string" }),
                        defineField({ name: "listDescription", title: "List Description", type: "text", rows: 3 }),
                        defineField({ name: "notFoundTitle", title: "Not Found Title", type: "string" }),
                        defineField({ name: "notFoundDescription", title: "Not Found Description", type: "string" }),
                    ],
                }),
            ],
        }),

        // ── Metrics ──
        defineField({
            name: "metrics",
            title: "Metrics",
            type: "object",
            group: "metrics",
            fields: [
                defineField({ name: "timeSavings", title: "Time Savings", type: "string" }),
                defineField({ name: "userSatisfaction", title: "User Satisfaction", type: "string" }),
                defineField({ name: "productivityIncrease", title: "Productivity Increase", type: "string" }),
                defineField({ name: "developerSatisfaction", title: "Developer Satisfaction", type: "string" }),
                defineField({ name: "fasterDevelopment", title: "Faster Development", type: "string" }),
                defineField({ name: "uptime", title: "Uptime", type: "string" }),
                defineField({ name: "fasterInformationRetrieval", title: "Faster Information Retrieval", type: "string" }),
                defineField({ name: "answerAccuracy", title: "Answer Accuracy", type: "string" }),
                defineField({ name: "timeSaved", title: "Time Saved", type: "string" }),
                defineField({ name: "firstContactResolution", title: "First Contact Resolution", type: "string" }),
                defineField({ name: "averageResponseTime", title: "Average Response Time", type: "string" }),
                defineField({ name: "customerSatisfaction", title: "Customer Satisfaction", type: "string" }),
                defineField({ name: "arabicTextAccuracy", title: "Arabic Text Accuracy", type: "string" }),
                defineField({ name: "dialectsSupported", title: "Dialects Supported", type: "string" }),
                defineField({ name: "arabicTokensTrained", title: "Arabic Tokens Trained", type: "string" }),
            ],
        }),
        // ── Cookie Consent ──
        defineField({
            name: "cookieConsent",
            title: "Cookie Consent",
            type: "object",
            group: "cookieConsent",
            fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                defineField({ name: "learnMore", title: "Learn More Link", type: "string" }),
                defineField({ name: "acceptAll", title: "Accept All Button", type: "string" }),
                defineField({ name: "reject", title: "Reject Button", type: "string" }),
            ],
        }),
    ],
    preview: {
        select: { language: "language" },
        prepare({ language }) {
            return {
                title: `UI Translations`,
                subtitle: language ? language.toUpperCase() : "No language set",
            };
        },
    },
});
