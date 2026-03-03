import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

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

/**
 * Patch the uiTranslations documents to add termsPrefix and termsLink
 * to the contact.form object for both EN and AR locales.
 */
async function patchTermsFields() {
    console.log("Patching termsPrefix & termsLink into uiTranslations...\n");

    // English
    console.log("Patching EN document...");
    await client
        .patch("uiTranslations-en")
        .set({
            "contact.form.termsPrefix": "By submitting, I agree to the ",
            "contact.form.termsLink": "ESAP Terms of Conditions",
        })
        .commit();
    console.log("  ✓ uiTranslations-en patched");

    // Arabic
    console.log("Patching AR document...");
    await client
        .patch("uiTranslations-ar")
        .set({
            "contact.form.termsPrefix": "من خلال الإرسال، أوافق على ",
            "contact.form.termsLink": "شروط وأحكام إساب",
        })
        .commit();
    console.log("  ✓ uiTranslations-ar patched");

    console.log("\nDone! termsPrefix & termsLink have been added to both locales.");
}

patchTermsFields().catch((err) => {
    console.error("Patch failed:", err);
    process.exit(1);
});
