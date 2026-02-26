import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from studio/.env
dotenv.config({ path: join(__dirname, "../.env") });

const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: "2024-02-25",
});

// Read the current JSON message files
const enMessages = JSON.parse(
    readFileSync(join(__dirname, "../../messages/en.json"), "utf-8")
);
const arMessages = JSON.parse(
    readFileSync(join(__dirname, "../../messages/ar.json"), "utf-8")
);

/**
 * Converts the flat JSON message structure into Sanity's camelCase field structure.
 * e.g. Navigation["case-study"] → navigation.caseStudy
 *      Products["ai-framework"] → products.aiFramework
 *      Metrics["Time Savings"]  → metrics.timeSavings
 */
function jsonToSanityFields(messages: any) {
    return {
        navigation: {
            home: messages.Navigation?.home,
            about: messages.Navigation?.about,
            product: messages.Navigation?.product,
            service: messages.Navigation?.service,
            caseStudy: messages.Navigation?.["case-study"],
            contact: messages.Navigation?.contact,
            getStarted: messages.Navigation?.getStarted,
        },
        loading: {
            message: messages.Loading?.message,
            subMessage: messages.Loading?.subMessage,
        },
        home: {
            reveal: { text: messages.Home?.reveal?.text },
            showcase: {
                badge: messages.Home?.showcase?.badge,
                title: messages.Home?.showcase?.title,
                subtitle: messages.Home?.showcase?.subtitle,
                explore: messages.Home?.showcase?.explore,
                products: {
                    erp: messages.Home?.showcase?.products?.erp,
                    aiFramework: messages.Home?.showcase?.products?.["ai-framework"],
                    zakra: messages.Home?.showcase?.products?.zakra,
                    jawib: messages.Home?.showcase?.products?.jawib,
                    fasih: messages.Home?.showcase?.products?.fasih,
                },
            },
        },
        about: {
            team: {},
        },
        contact: {
            badge: messages.Contact?.badge,
            title: messages.Contact?.title,
            description: messages.Contact?.description,
            social: messages.Contact?.social,
            form: messages.Contact?.form,
            toasts: messages.Contact?.toasts,
        },
        footer: {
            cta: messages.Footer?.cta,
            social: messages.Footer?.social,
            menu: messages.Footer?.menu,
            newsletter: messages.Footer?.newsletter,
            rights: messages.Footer?.rights,
            legal: messages.Footer?.legal,
        },
        menus: {
            ourServices: messages.Menus?.ourServices,
            ourProducts: messages.Menus?.ourProducts,
            impactAnalysis: messages.Menus?.impactAnalysis,
            serviceDescription: messages.Menus?.serviceDescription,
            productDescription: messages.Menus?.productDescription,
            telemetryPending: messages.Menus?.telemetryPending,
        },
        products: {
            erp: messages.Products?.erp,
            aiFramework: messages.Products?.["ai-framework"],
            zakra: messages.Products?.zakra,
            jawib: messages.Products?.jawib,
            fasih: messages.Products?.fasih,
        },
        service: {
            hero: messages.Service?.hero,
            problem: messages.Service?.problem,
            features: messages.Service?.features,
            video: messages.Service?.video,
            beforeAfter: messages.Service?.beforeAfter,
            cta: messages.Service?.cta,
            metadata: messages.Service?.metadata,
            defaultHeroSubtitle1: messages.Service?.defaultHeroSubtitle1,
            defaultHeroSubtitle2: messages.Service?.defaultHeroSubtitle2,
        },
        notFound: {
            title: messages.NotFound?.title,
            description: messages.NotFound?.description,
            goHome: messages.NotFound?.goHome,
            contactUs: messages.NotFound?.contactUs,
            quickLinks: messages.NotFound?.quickLinks,
        },
        error: {
            title: messages.Error?.title,
            description: messages.Error?.description,
            errorId: messages.Error?.errorId,
            tryAgain: messages.Error?.tryAgain,
            goHome: messages.Error?.goHome,
            whatToDo: messages.Error?.whatToDo,
            tip1: messages.Error?.tip1,
            tip2: messages.Error?.tip2,
            tip3: messages.Error?.tip3,
            contactSupport: messages.Error?.contactSupport,
            criticalTitle: messages.Error?.criticalTitle,
            criticalDescription: messages.Error?.criticalDescription,
            reloadApp: messages.Error?.reloadApp,
            troubleshooting: messages.Error?.troubleshooting,
            clearCache: messages.Error?.clearCache,
            tryBrowser: messages.Error?.tryBrowser,
            checkJs: messages.Error?.checkJs,
            contactIfPersists: messages.Error?.contactIfPersists,
        },
        cta: {
            title: messages.CTA?.title,
            subtitle: messages.CTA?.subtitle,
            button: messages.CTA?.button,
            productFallbackTitle: messages.CTA?.productFallbackTitle,
            productFallbackButton: messages.CTA?.productFallbackButton,
        },
        caseStudy: {
            list: messages.CaseStudy?.list,
            detail: messages.CaseStudy?.detail,
            metadata: messages.CaseStudy?.metadata,
        },
        metrics: {
            timeSavings: messages.Metrics?.["Time Savings"],
            userSatisfaction: messages.Metrics?.["User Satisfaction"],
            productivityIncrease: messages.Metrics?.["Productivity Increase"],
            developerSatisfaction: messages.Metrics?.["Developer Satisfaction"],
            fasterDevelopment: messages.Metrics?.["Faster Development"],
            uptime: messages.Metrics?.Uptime,
            fasterInformationRetrieval: messages.Metrics?.["Faster Information Retrieval"],
            answerAccuracy: messages.Metrics?.["Answer Accuracy"],
            timeSaved: messages.Metrics?.["Time Saved"],
            firstContactResolution: messages.Metrics?.["First Contact Resolution"],
            averageResponseTime: messages.Metrics?.["Average Response Time"],
            customerSatisfaction: messages.Metrics?.["Customer Satisfaction"],
            arabicTextAccuracy: messages.Metrics?.["Arabic Text Accuracy"],
            dialectsSupported: messages.Metrics?.["Dialects Supported"],
            arabicTokensTrained: messages.Metrics?.["Arabic Tokens Trained"],
        },
    };
}

async function seed() {
    console.log("Seeding UI translations to Sanity...\n");

    const enDoc = {
        _id: "uiTranslations-en",
        _type: "uiTranslations",
        language: "en",
        ...jsonToSanityFields(enMessages),
    };

    const arDoc = {
        _id: "uiTranslations-ar",
        _type: "uiTranslations",
        language: "ar",
        ...jsonToSanityFields(arMessages),
    };

    console.log("Creating EN document...");
    await client.createOrReplace(enDoc);
    console.log("  ✓ uiTranslations-en created");

    console.log("Creating AR document...");
    await client.createOrReplace(arDoc);
    console.log("  ✓ uiTranslations-ar created");

    console.log("\nDone! Both UI translation documents have been seeded.");
}

seed().catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
});
