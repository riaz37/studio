/**
 * Arabic Seed Script — Creates Arabic (ar) versions of all Sanity documents.
 *
 * Usage:
 *   cd studio
 *   npx tsx scripts/seed-ar.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
    apiVersion: "2024-01-01",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function seedArabic() {
    console.log("🌱 Starting Arabic seed...\n");

    // ── HOME PAGE ──
    console.log("📄 Creating Home Page (ar)...");
    await client.createOrReplace({
        _id: "homePage-ar",
        _type: "homePage",
        language: "ar",
        heroTitle: "حلول مدعومة بالذكاء الاصطناعي / للمؤسسات الحديثة",
        heroSubtitle: "أتمتة ذكية ووكلاء ذكاء اصطناعي لتعزيز إنتاجية مؤسستك.",
        heroBadgePill: "حصري",
        heroBadgeDescription: "حافة الغد، بنيت اليوم",

        servicesTitle: "ركّز على النمو",
        servicesSubtitle:
            "اكتشف مجموعتنا الشاملة من حلول الذكاء الاصطناعي المصممة لتحويل مؤسستك.",
        servicesBadge: "حلولنا",
        services: [
            {
                _key: "svc-agentic",
                id: "agentic",
                title: "تكامل الذكاء الاصطناعي الوكيل",
                description:
                    "دمج الوكلاء المستقلين بسلاسة في سير عملك لأتمتة عمليات اتخاذ القرارات المعقدة.",
                image: "/bento-grid/ailab.svg",
            },
            {
                _key: "svc-strategy",
                id: "strategy",
                title: "استراتيجية المؤسسات",
                description:
                    "خرائط طريق ذكاء اصطناعي مخصصة مصممة لتتوافق مع أهداف عملك وتدفع التحول الرقمي طويل المدى.",
                image: "/bento-grid/enterprise.svg",
            },
            {
                _key: "svc-faas",
                id: "faas",
                title: "بنية FaaS التحتية",
                description:
                    "بنية تحتية مُدارة لإطار عمل وكلاء الذكاء الاصطناعي كخدمة، تضمن القابلية للتوسع والأداء الأمثل.",
                image: "/bento-grid/faas.svg",
            },
            {
                _key: "svc-tailored",
                id: "tailored",
                title: "حلول مخصصة",
                description:
                    "أنظمة ذكاء اصطناعي مصممة خصيصاً لحل تحدياتك التشغيلية الفريدة واحتياجات صناعتك.",
                image: "/bento-grid/ailab.svg",
            },
            {
                _key: "svc-industry",
                id: "industry",
                title: "التميز الصناعي",
                description:
                    "الاستفادة من الخبرة المتخصصة في المجال لنشر حلول ذكاء اصطناعي تتجاوز معايير الصناعة للأمان والموثوقية.",
                image: "/bento-grid/faas.svg",
            },
            {
                _key: "svc-lab",
                id: "lab",
                title: "مختبر الابتكار",
                description:
                    "البحث المستمر والنمذجة السريعة لتقنيات الذكاء الاصطناعي المتطورة للحفاظ على تقدم مؤسستك.",
                image: "/bento-grid/ailab.svg",
            },
        ],

        achievementsTitle: "تأثيرنا",
        achievementsSubtitle: "مقاييس رئيسية تحدد نجاحنا.",
        achievementsBadge: "إنجازاتنا",
        achievements: [
            { _key: "ach-1", number: "99.9%", label: "موثوقية النظام", isHighlighted: false },
            { _key: "ach-2", number: "+50 ألف", label: "وكيل ذكاء اصطناعي نشط", isHighlighted: true },
            { _key: "ach-3", number: "10x", label: "مكاسب الكفاءة", isHighlighted: false },
        ],

        missionTitle: "مهمتنا الأساسية",
        missionSubtitle:
            "بناء طبقة الذكاء الأساسية لتمكين المؤسسات بما يتجاوز الحدود التقليدية.",
        missionBadge: "مهمتنا",
        missionCards: [
            {
                _key: "mis-1",
                title: "ديمقراطية الذكاء",
                description:
                    "جعل الذكاء الاصطناعي المتقدم بديهياً ومتاحاً من خلال الابتكار الصوتي أولاً.",
                image: "/landing/m1.webp",
            },
            {
                _key: "mis-2",
                title: "تسريع الابتكار",
                description:
                    "نشر الوكلاء المستقلين للقضاء على الاحتكاك وتسريع نمو الأعمال.",
                image: "/landing/m2.webp",
            },
            {
                _key: "mis-3",
                title: "أنظمة بيئية موحدة",
                description:
                    "ربط الأنظمة القديمة بالذكاء الاصطناعي المستقبلي لتطور مؤسسي سلس.",
                image: "/landing/m3.webp",
            },
        ],

        technologyTitle: "التميز التقني",
        technologySubtitle:
            "بنية تحتية متطورة تدعم الجيل القادم من الذكاء الاصطناعي للمؤسسات.",
        technologyBadge: "التقنية الأساسية",
        technologyCards: [],

        partners: [
            { _key: "p-1", logo: "/partners/emp.svg", alt: "شريك ١" },
            { _key: "p-2", logo: "/partners/emp-1.svg", alt: "شريك ٢" },
            { _key: "p-3", logo: "/partners/emp-2.svg", alt: "شريك ٣" },
            { _key: "p-4", logo: "/partners/emp-3.svg", alt: "شريك ٤" },
            { _key: "p-5", logo: "/partners/emp-4.svg", alt: "شريك ٥" },
            { _key: "p-6", logo: "/partners/emp-5.svg", alt: "شريك ٦" },
        ],

        ctaTitle: "مستعد لتحويل مؤسستك؟",
        ctaSubtitle: "ابدأ مع ESAP AI اليوم.",
        ctaButtonText: "ابدأ الآن",
        ctaButtonHref: "/contact",

        textRevealContent:
            "صنع طبقة الذكاء للغد. إطلاق إمكانات لا حدود لها.",
    });

    // ── ABOUT PAGE ──
    console.log("📄 Creating About Page (ar)...");
    await client.createOrReplace({
        _id: "aboutPage-ar",
        _type: "aboutPage",
        language: "ar",
        heroTitle: "إرثنا",
        heroSubtitle: "بناء الأساس لذكاء المؤسسات. من البدايات المتواضعة إلى البنية التحتية العالمية - هذه هي قصتنا.",
        heroBadge: "الإرث والرؤية",
        heroTitlePart1: "",
        heroTitlePart2: "إرثنا",
        teamMembers: [
            { _key: "tm-1", name: "بيكر أبو خاطر", role: "المؤسس", bio: "المؤسس الديناميكي والرؤيوي لـ ESAP AI، يقود مهمة بناء تقنيات مدعومة بالذكاء الاصطناعي تُعيد تعريف طريقة عمل المؤسسات والحكومات والأفراد.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-2", name: "عايد العنزي", role: "مدير علاقات الموارد البشرية", bio: "مدير علاقات الموارد البشرية في ESAP AI، يعزز ثقافة التعاون والشمولية والتميز عبر الفريق متعدد الجنسيات واللغات.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-3", name: "سيد إمام", role: "المؤسس المشارك وقائد الفريق", bio: "رائد في تطوير الذكاء الاصطناعي للمؤسسات والمؤسس المشارك لـ ESAP AI، يقود فرق الهندسة لتقديم حلول ذكاء اصطناعي قابلة للتوسع للمؤسسات حول العالم.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-4", name: "م. عثمان نظير", role: "المؤسس المشارك ومدير الذكاء الاصطناعي", bio: "مدير حلول الذكاء الاصطناعي والبيانات في ESAP AI، يصمم الطبقة الذكية التي تُشغّل مجموعة منتجات ESAP وأطر العمل المدعومة بالذكاء الاصطناعي.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-5", name: "عبدالله أبو خاطر", role: "مدير الابتكار الإبداعي", bio: "مدير الابتكار الإبداعي في ESAP AI، يمزج التفكير التصميمي مع التقنيات الناشئة لتشكيل تجارب جميلة وذكية في آنٍ واحد.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-6", name: "عمر أبو خاطر", role: "مدير الاستراتيجية", bio: "مدير الاستراتيجية في ESAP AI، يرسم خارطة طريق النمو ودخول السوق لتعزيز مكانة ESAP كقوة رائدة في تحول المؤسسات بالذكاء الاصطناعي.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-7", name: "علاء سعيد", role: "المدير المالي", bio: "المدير المالي في ESAP AI، يشرف على الاستراتيجية المالية والعمليات لضمان النمو المستدام والاستثمار في أبحاث الذكاء الاصطناعي المتطورة.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-8", name: "حامد حسن", role: "قائد مهندسي البرمجيات الأول", bio: "قائد فريق هندسة البرمجيات الأول في ESAP AI، يوجه تطوير أنظمة قوية وعالية الأداء تدعم محفظة منتجات ESAP AI.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-9", name: "محمد مصطفى", role: "مهندس برمجيات رئيسي ومدير التسليم", bio: "مهندس برمجيات رئيسي ومدير تسليم في ESAP AI، يضمن إنجاز المشاريع في الوقت المحدد وبالجودة المطلوبة من خلال الربط بين التنفيذ التقني وتوافق أصحاب المصلحة.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-10", name: "أسامة حسنين", role: "رئيس الواجهة الخلفية وهندسة الأنظمة", bio: "رئيس هندسة الواجهة الخلفية وهندسة الأنظمة في ESAP AI، يصمم البنية التحتية القابلة للتوسع والأنظمة الموزعة التي تُشغّل منصة ESAP للذكاء الاصطناعي.", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop" },
        ],
        narrativeDesignation: "المسمى الوظيفي",
        teamCategoryLabel: "عضو الفريق الأساسي",
        teamLeadershipLabel: "القيادة",
        teamInnovationLabel: "الابتكار",
        historyTitle: "رحلة إساب للذكاء الاصطناعي",
        historyBadge: "إرثنا",
        historySubtitle: "من سير العمل اليدوي المعقد إلى استقلالية الذكاء الاصطناعي على مستوى المؤسسات.",
        historyHook: "رقمنة ما لا يمكن رقمنته — دراسة حالة حقيقية.",
        historyPhases: [
            {
                _key: "hp-1",
                year: "2020",
                phaseLabel: "المرحلة الأولى",
                title: "البناء",
                description: "في أواخر عام 2020، كانت شركة استشارية معروفة في قطاع البناء — معظمها مشاريع حكومية — تدير كل شيء عبر Excel والأوراق المادية: إدارة المشاريع، والموارد البشرية، والمالية، وإدارة الموردين. جربوا Dynamics 365 وOdoo، لكن لا شيء ناسب منطقهم التجاري المعقد. فلجأوا إلى حل هجين حتى عام 2020، حين أصبح خسارة المال وسوء التتبع والجهد اليدوي واضحاً: كان لا بد من فعل شيء. دخلت المشهد. شهر لإظهار سير عمل واحد. كدت أستقيل. ثم قال موظف كبير: هنا يمكنك بناء شيء من الصفر، شيء كبير. بقيت. أصبحت موظفاً داخل وحدة تعاني، أتعلم تدفق الأوراق والموافقات بالملاحظة — لا متطلبات، لا وثائق. شهر كامل، على مدار الساعة، وبنيت نموذجاً أولياً. تصافحنا. قضيت الثمانية أشهر التالية في التعمق: البيانات في Excel في كل مكان، أكثر من 60,000 سجل، تنسيقات يحددها المالك، سير عمل يجب أن يتطابق تماماً. قررت أنهم سيحبونه ويستخدمونه دون شكاوى — لا تدريب، واجهة مستخدم واضحة، مهام معلقة بسيطة. بنينا 6-7 وحدات رئيسية. خلال أسبوعين نقل المالك كل شيء إلى بيئة الإنتاج.",
                highlight: "80% من الأوراق اختفت. لا تتبع يدوي. أخيراً، ارتياح.",
            },
            {
                _key: "hp-2",
                year: "2021",
                phaseLabel: "المرحلة الثانية",
                title: "الهجرة والأتمتة",
                description: "كانت الهجرة قاسية. بيانات Excel كانت فوضوية: مراجع مفقودة، تجميع خاطئ، بنية مكسورة. بنينا خطاً تدفقياً — ما يمكن مزامنته وما لا يمكن؛ إعادة هيكلة ما هو ممكن؛ تخزين الباقي كمصادر إضافية. تعلمنا لماذا تخشى الشركات الرقمنة: ملايين السجلات الفوضوية ليست سهلة. أصبحت الأتمتة ميزة ضخمة. بنينا أتمتة لم تكن معروفة آنذاك: الحضور (الخطابات، التذاكر، الاعتراضات، خصومات الرواتب)، المصروفات (الموظفون يعرفون دائماً أين وكم أنفقوا). ساعدت أتمتة كثيرة أخرى على التوسع دون قوى عاملة إضافية. بعد الهجرة والأتمتة، قرر المالك فتح شركة حلول برمجية. تقريباً كل شركة تعاني مع أنظمة ERP قديمة أو تخشى الرقمنة بسبب التعقيد والوقت والتكلفة ونتائج الكوارث. ميزتنا الحقيقية: فهم المشكلات الجوهرية والمستخدم النهائي.",
                highlight: "",
            },
            {
                _key: "hp-3",
                year: "2022",
                phaseLabel: "المرحلة الثالثة",
                title: "الذكاء الاصطناعي وإعادة التعريف",
                description: "بدأ الذكاء الاصطناعي يبرز بقوة حوالي عام 2022. بدأ الحديث عن الوكلاء. رأينا الإمكانات التي تتجاوز الأتمتة وبدأنا في بناء منتجات ذكاء اصطناعي من الجيل التالي للمؤسسات. الهدف: حلول ذكاء اصطناعي للمؤسسات مبنية على فهم عميق للمستخدم النهائي، وتغذية راجعة مستمرة من الأقسام، وقواعد صارمة لرضا المستخدم النهائي. الشركات الكبيرة تقوم بالأتمتة الوكيلية وذكاء العمليات، لكن معظمها لا يهتم بالمستخدمين النهائيين. هنا يأتي دور إساب للذكاء الاصطناعي. الهدف الرئيسي لإساب: الوكلاء الذكيون — وكلاء مكان العمل شبيهون بالذكاء الاصطناعي العام. ليس نماذج اللغة الكبيرة وحدها؛ المعمارية والتنسيق هما المفتاح. متوافق مع رؤية 2030: من المملكة العربية السعودية إلى العالم.",
                highlight: "",
            },
        ],
        visionTitle: "رؤيتنا",
        visionBody: "منظومة مؤسسية متكاملة تُشغَّل بواسطة وكلاء ذكيين. لكل موظف وكيل ذكاء اصطناعي يساعده. لا يحتاج الموظفون إلى تعلم أنظمة ERP أو فهم سير العمل أو تذكر طريقة تشغيل الأشياء. يقدمون البيانات المطلوبة ويراجعون قبل التقديم. كل شيء آخر — النماذج، التنقل، التتبع، الموافقات، سير العمل، التنفيذ — يتولاه الوكيل. الوكيل هو المنفذ. نحن نبني الإطار الذي يجعل هذا ممكناً: معمارية مؤسسية كاملة، وكلاء ينسقون أي منطق أعمال ديناميكياً، إجراءات CRUD وERP كاملة، والقدرة على التكيف مع شركات وسير عمل وصناعات مختلفة. هذه مجرد البداية.",
    });

    // ── PRODUCTS ──
    const productsAr: Array<{ _id: string; name: string; [key: string]: unknown }> = [
        {
            _id: "product-erp-ar",
            orderRank: 1,
            name: "نظام ERP",
            slug: { _type: "slug", current: "erp" },
            description: "نظام تخطيط موارد المؤسسات المفعّل بالصوت للشركات الصغيرة والمتوسطة. أدر عمليات أعمالك بالكامل من خلال الأوامر الصوتية الطبيعية.",
            menuDescription: "نظام ERP مفعّل بالصوت مع أتمتة بالذكاء الاصطناعي.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "نظام ERP الصوتي قيد العمل",
            demoSubtitle: "شاهد كيف تحول الأوامر الصوتية العمليات التجارية.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "المعمارية — نظام ERP. تصور تفصيلي لمكونات محرك ERP المفعّل بالصوت.",
            architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
            ctaTitle: "مستعد لتجربة نظام ERP؟",
            ctaSubtitle: "أدر عملك بالكامل من خلال الأوامر الصوتية.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "الكشف عن الاختناقات التشغيلية وعدم كفاءة العمليات اليدوية التي تعيق الشركات الصغيرة والمتوسطة عن التوسع بكفاءة.",
            cinematicNarrative: {
                introLine: "كل يوم، تصطدم الفرق بنفس العقبات.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "اختناق الإدخال اليدوي للبيانات", description: "تضيع الفرق ساعات على النماذج وجداول البيانات بدلاً من إدارة الأعمال.", solTitle: "واجهة الصوت أولاً", solDesc: "تحكم في جميع وظائف ERP من خلال أوامر صوتية طبيعية، مما يجعل إدارة الأعمال متاحة وفعالة للجميع.", solImpact: "توفير +75% من الوقت" },
                { _key: "cp-2", title: "الأنظمة المعزولة", description: "المخزون والمبيعات والمالية لا تتواصل—الأخطاء والتأخيرات تتضاعف.", solTitle: "أتمتة مدعومة بالذكاء الاصطناعي", solDesc: "تتعامل الأتمتة الذكية مع المهام الروتينية وإدخال البيانات وإعداد التقارير، مما يحرر فريقك للتركيز على القرارات الاستراتيجية.", solImpact: "صفر توقف" },
                { _key: "cp-3", title: "التكاليف العامة للتدريب المعقدة", description: "العقول القيّمة تُستنزف في تعلم واجهات مستخدم قديمة بدلاً من دفع النمو.", solTitle: "تصميم محسّن للمؤسسات الصغيرة والمتوسطة", solDesc: "مبني خصيصاً للمؤسسات الصغيرة والمتوسطة بمعمارية قابلة للتوسع تنمو مع احتياجات عملك.", solImpact: "3 أضعاف الإنتاجية" },
            ],
            journeyTitle: "نظام ERP الذكي",
            journeySubtitle: "إدارة مؤسسية بالصوت أولاً مع معالجة متوازية.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "إدارة المدخلات", nodes: ["إدخال صوتي", "فهم النوايا", "ERP يدوي", "API خارجي"] },
                { _key: "jl-2", title: "المحرك الأساسي (المصفوفة)", nodes: ["مخطط المهام", "منطق الأعمال", "التنفيذ", "الامتثال"] },
                { _key: "jl-3", title: "التوزيع العالمي", nodes: ["قاعدة البيانات", "المزامنة السحابية", "مركز القيادة"] },
            ],
            icon: "/products/erp.svg",
            heroSubtitle: ["نظام ERP مفعّل بالصوت للشركات الحديثة. أوامر صوتية للأعمال بالذكاء الاصطناعي."],
            heroCenterIcon: "/products/voiceerp.webp",
            heroCenterIconAlt: "أيقونة نظام ERP الصوتي",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "الذكاء التشغيلي",
            heroLiveUrl: undefined,
            missionTitle: "عمليات المؤسسة الصوتية",
            missionSubtitle: "أدر عمليات أعمالك بالكامل من خلال الأوامر الصوتية الطبيعية مع ضمان الأمان.",
            missionCards: [
                { _key: "mc-1", title: "واجهة صوتية أولاً", description: "تحكم في جميع وظائف ERP من خلال الأوامر الصوتية الطبيعية، مما يجعل إدارة الأعمال سهلة وفعالة للجميع." },
                { _key: "mc-2", title: "أتمتة بالذكاء الاصطناعي", description: "الأتمتة الذكية تتعامل مع المهام الروتينية وإدخال البيانات والتقارير، مما يحرر فريقك للتركيز على القرارات الاستراتيجية." },
                { _key: "mc-3", title: "تصميم محسّن للشركات الصغيرة والمتوسطة", description: "مبني خصيصاً للشركات الصغيرة والمتوسطة ببنية قابلة للتوسع تنمو مع احتياجات عملك." },
            ],
            automationTitle: "الأتمتة الذكية",
            automationSubtitle: "تبسيط العمليات من المخزون إلى المالية.",
            automationFeatures: [
                { _key: "af-1", title: "جسر الأنظمة القديمة التكيفي", description: "يلتف بسلاسة حول الأنظمة الحالية لتمكين تحسينات الذكاء الاصطناعي الذكية دون تعطيل عملياتك الحالية." },
                { _key: "af-2", title: "مجموعة الأوامر الصوتية", description: "تحكم صوتي كامل في المخزون والمبيعات والمحاسبة وإدارة الموارد البشرية بمعالجة اللغة الطبيعية." },
                { _key: "af-3", title: "تحليلات في الوقت الفعلي", description: "احصل على رؤى فورية حول أداء أعمالك مع التحليلات المدعومة بالذكاء الاصطناعي والتقارير التنبؤية." },
                { _key: "af-4", title: "أتمتة سير العمل الذكية", description: "أتمتة العمليات التجارية المعقدة بسير عمل ذكي يتكيف مع أنماطك التشغيلية." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "نظام ERP الصوتي قيد العمل",
            performanceMetrics: [
                { _key: "pm-1", value: "75%", label: "توفير الوقت" },
                { _key: "pm-2", value: "90%", label: "رضا المستخدمين" },
                { _key: "pm-3", value: "3x", label: "زيادة الإنتاجية" },
            ],
            aceternityTitle: "ميزات ERP الأساسية",
            aceternitySubtitle: "قدرات قوية للأعمال الحديثة.",
            aceternityFeatures: [
                { _key: "ae-1", title: "تتبع العمليات التجارية", description: "تتبع وإدارة عمليات أعمالك بسهولة باستخدام واجهة ERP البديهية.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
                { _key: "ae-2", title: "التقاط الرؤى بالذكاء الاصطناعي", description: "التقط رؤى الأعمال بسهولة باستخدام تقنية الذكاء الاصطناعي المتقدمة والتحليلات.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
                { _key: "ae-3", title: "شاهد ERP قيد العمل", description: "شاهد كيف يحول نظام ERP المفعّل بالصوت العمليات التجارية.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
                { _key: "ae-4", title: "النشر العالمي", description: "انشر نظام ERP عبر مواقع متعددة ببنيتنا السحابية ووصولنا العالمي.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-ai-framework-ar",
            orderRank: 2,
            name: "إطار عمل الذكاء الاصطناعي",
            slug: { _type: "slug", current: "ai-framework" },
            description: "إطار عمل شامل لوكلاء الذكاء الاصطناعي والأتمتة مصمم لبناء ونشر وتوسيع حلول المؤسسات الذكية بسرعة غير مسبوقة.",
            menuDescription: "بناء ونشر وكلاء الذكاء الاصطناعي على نطاق المؤسسات.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "إطار العمل قيد التشغيل",
            demoSubtitle: "شاهد نشر وكلاء الذكاء الاصطناعي السريع على نطاق المؤسسات.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "المعمارية — إطار عمل الذكاء الاصطناعي. تصور تفصيلي لمكونات محرك تنسيق الوكلاء.",
            architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
            ctaTitle: "مستعد لتجربة إطار عمل الذكاء الاصطناعي؟",
            ctaSubtitle: "بناء ونشر وكلاء الذكاء الاصطناعي على نطاق المؤسسات.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "مواجهة دورات التطوير البطيئة وحواجز التكامل التي تمنع المؤسسات من نشر وكلاء الذكاء الاصطناعي على نطاق واسع.",
            cinematicNarrative: {
                introLine: "بناء وكلاء الذكاء الاصطناعي لا ينبغي أن يستغرق أشهراً.",
                problemsIntroLine: "ثلاثة عقبات تبطئك.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "دورات التطوير البطيئة", description: "أشهر لبناء ونشر وكيل ذكاء اصطناعي واحد. السوق يتحرك أسرع.", solTitle: "معمارية معيارية", solDesc: "مكونات مرنة وقابلة للتركيب تتكيف مع احتياجاتك وحالات استخدامك المحددة، مما يتيح التطوير السريع والتخصيص.", solImpact: "تطوير أسرع 10 مرات" },
                { _key: "cp-2", title: "كوابيس التكامل", description: "الأنظمة والواجهات البرمجية الحالية لا تتصل—كود ربط مخصص في كل مكان.", solTitle: "تكامل سهل", solDesc: "اتصل بسلاسة بالأنظمة والواجهات البرمجية وخدمات الطرف الثالث الحالية من خلال واجهات وموصلات موحدة.", solImpact: "تشغيل 99.9%" },
                { _key: "cp-3", title: "قلق التوسع", description: "الوكلاء يعملون في بيئة التطوير؛ يفشلون عند وصول حركة المرور إلى الإنتاج.", solTitle: "تصميم قابل للتوسع", solDesc: "مبني للتعامل مع أعباء العمل على مستوى المؤسسة بأداء عالٍ وموثوقية وقدرات توسع تلقائية.", solImpact: "رضا المطورين 90%" },
            ],
            journeyTitle: "نظام إطار عمل الذكاء الاصطناعي",
            journeySubtitle: "شبكة لا مركزية تشغل الذكاء على مستوى المؤسسات.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "طبقة تطبيقات الذكاء الاصطناعي", nodes: ["روبوت الدردشة Web3", "تنبيهات العملات المشفرة", "وكلاء الذكاء الاصطناعي"] },
                { _key: "jl-2", title: "طبقة رمز CGPT$", nodes: ["الحوكمة", "فائدة CGPT$", "التخزين"] },
                { _key: "jl-3", title: "بلوك تشين إطار الذكاء الاصطناعي", nodes: ["المدققون", "النواة الأساسية", "سوق البيانات", "SDK", "سوق GPU"] },
            ],
            icon: "/products/ai-framework.svg",
            heroSubtitle: ["بناء وكلاء ذكاء اصطناعي قوية. حلول مؤسسية قابلة للتوسع."],
            heroCenterIcon: "/products/ai-framework.svg",
            heroCenterIconAlt: "أيقونة إطار عمل الذكاء الاصطناعي",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "تنسيق الوكلاء",
            heroLiveUrl: undefined,
            missionTitle: "شبكة الذكاء اللامركزي",
            missionSubtitle: "بناء ونشر وكلاء الذكاء الاصطناعي بسرعة على نطاق المؤسسات بموثوقية معيارية.",
            missionCards: [
                { _key: "mc-1", title: "بنية معيارية", description: "مكونات مرنة وقابلة للتركيب تتكيف مع احتياجاتك المحددة، مما يتيح التطوير السريع والتخصيص." },
                { _key: "mc-2", title: "تكامل سهل", description: "اتصل بسلاسة مع الأنظمة الحالية وواجهات البرمجة والخدمات الخارجية من خلال واجهات وموصلات موحدة." },
                { _key: "mc-3", title: "تصميم قابل للتوسع", description: "مبني للتعامل مع أعباء العمل على نطاق المؤسسات بأداء عالٍ وموثوقية وقدرات توسع تلقائية." },
            ],
            automationTitle: "قدرات الأتمتة",
            automationSubtitle: "سير عمل متطور مع أدوات بديهية.",
            automationFeatures: [
                { _key: "af-1", title: "تنسيق الوكلاء", description: "تنسيق عدة وكلاء ذكاء اصطناعي للعمل معاً على المهام المعقدة مع توزيع المهام الذكي والتعاون." },
                { _key: "af-2", title: "منشئ سير العمل", description: "أدوات مرئية لتصميم ونشر سير عمل الأتمتة بدون برمجة، بسهولة السحب والإفلات." },
                { _key: "af-3", title: "بنية مدفوعة بالأحداث", description: "التفاعل مع أحداث النظام وتشغيل الاستجابات الآلية في الوقت الفعلي." },
                { _key: "af-4", title: "المراقبة والتحليلات", description: "تتبع الأداء وتصحيح المشكلات وتحسين سير عمل الأتمتة بأدوات مراقبة شاملة." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "إطار عمل الذكاء الاصطناعي قيد العمل",
            performanceMetrics: [
                { _key: "pm-1", value: "90%", label: "رضا المطورين" },
                { _key: "pm-2", value: "10x", label: "تطوير أسرع" },
                { _key: "pm-3", value: "99.9%", label: "وقت التشغيل" },
            ],
            aceternityTitle: "قدرات الإطار",
            aceternitySubtitle: "ميزات لبناء أنظمة ذكية.",
            aceternityFeatures: [
                { _key: "ae-1", title: "بناء وكلاء الذكاء الاصطناعي", description: "إنشاء وكلاء ذكاء اصطناعي متطورة بإطار عملنا البديهي ومكتبة الأدوات الشاملة.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "أتمتة سير العمل", description: "تصميم ونشر سير عمل أتمتة معقدة بأدوات مرئية وبساطة السحب والإفلات.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "شاهد عرض الإطار", description: "شاهد كيف يمكّن إطار عمل الذكاء الاصطناعي من التطوير والنشر السريع لحلول المؤسسات.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "نطاق المؤسسات", description: "نشر وتوسيع حلول الذكاء الاصطناعي عبر البنية التحتية للمؤسسات بأداء عالٍ وموثوقية.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-zakra-ar",
            orderRank: 3,
            name: "ذاكرة",
            slug: { _type: "slug", current: "zakra" },
            description: "وكيل المعرفة الذكي الذي يقدم إجابات فورية ومدركة للسياق من قاعدة معارفك بالكامل. أطلق قوة بياناتك المؤسسية.",
            menuDescription: "وكيل معرفة ذكي للإجابات الفورية.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "المعرفة قيد العمل",
            demoSubtitle: "شاهد تدفق الإجابات الفورية من قاعدة معارفك.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "المعمارية — ذاكرة. تصور تفصيلي لمكونات محرك تركيب المعرفة.",
            architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
            ctaTitle: "مستعد لتجربة ذاكرة؟",
            ctaSubtitle: "أطلق إجابات فورية ومدركة للسياق من قاعدة معارفك.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "كشف صوامع المعرفة وفجوات الاسترجاع التي تمنع المؤسسات من الاستفادة من بياناتها الخاصة بفعالية.",
            cinematicNarrative: {
                introLine: "المعرفة متناثرة. الإجابات يصعب إيجادها.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "المعلومات متناثرة في كل مكان", description: "الوثائق وإكسل والويكي—لا مكان واحد للحصول على إجابة موثوقة.", solTitle: "بحث ذكي", solDesc: "استعلامات اللغة الطبيعية التي تفهم السياق والنية، وتقدم إجابات دقيقة من قاعدة معرفتك.", solImpact: "استرجاع أسرع بـ 80%" },
                { _key: "cp-2", title: "الوسم والفهرسة اليدوية", description: "المحتوى ينمو أسرع مما يستطيع فريقك تنظيمه.", solTitle: "تكامل متعدد المصادر", solDesc: "اتصل وابحث عبر المستندات وقواعد البيانات والمراجع ومستودعات المعرفة في واجهة موحدة.", solImpact: "دقة إجابة 95%" },
                { _key: "cp-3", title: "نتائج بحث عامة", description: "تطابقات الكلمات الرئيسية تفوت السياق ودقة المجال.", solTitle: "ردود واعية بالسياق", solDesc: "احصل على إجابات تفهم مجالك المحدد ومصطلحات الصناعة والسياق التنظيمي.", solImpact: "توفير 60% من الوقت" },
            ],
            journeyTitle: "معرفة زكرة",
            journeySubtitle: "ذكاء البيانات الموحد من خلال مركز الرسم البياني المركزي.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "شبكة الاستقبال", nodes: ["الوثائق", "قواعد البيانات", "الويكي السحابي", "مركز الاستقبال"] },
                { _key: "jl-2", title: "نواة المعرفة (المركز)", nodes: ["المركز الرسومي", "مزامنة الكيانات", "الفهرس الدلالي", "التحكم في الوصول", "التخزين المؤقت"] },
                { _key: "jl-3", title: "تسليم الذكاء", nodes: ["استعلام المستخدم", "الذكاء السياقي", "إجابة ذكية"] },
            ],
            icon: "/products/zakra.svg",
            heroSubtitle: ["إدارة المعرفة الذكية. رؤى قابلة للتنفيذ من بياناتك."],
            heroCenterIcon: "/products/zakra.svg",
            heroCenterIconAlt: "أيقونة وكيل المعرفة ذاكرة",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "تركيب المعرفة",
            heroLiveUrl: "https://zakra.esap.ai",
            missionTitle: "ذكاء المعرفة الموحد",
            missionSubtitle: "إجابات فورية ومدركة للسياق من قاعدة معارفك بالكامل. اجعل المعلومات متاحة.",
            missionCards: [
                { _key: "mc-1", title: "بحث ذكي", description: "استعلامات باللغة الطبيعية تفهم السياق والنية، وتقدم إجابات دقيقة من قاعدة معارفك." },
                { _key: "mc-2", title: "تكامل متعدد المصادر", description: "اتصل وابحث عبر المستندات وقواعد البيانات والويكي ومستودعات المعرفة في واجهة موحدة." },
                { _key: "mc-3", title: "استجابات مدركة للسياق", description: "احصل على إجابات تفهم مجالك المحدد ومصطلحات الصناعة والسياق المؤسسي." },
            ],
            automationTitle: "قدرات المعرفة",
            automationSubtitle: "إدارة معرفة سهلة وذكية.",
            automationFeatures: [
                { _key: "af-1", title: "البحث الدلالي", description: "ابحث عن المعلومات باستخدام المعنى، وليس فقط الكلمات المفتاحية. يفهم المرادفات والمفاهيم ذات الصلة والسياق." },
                { _key: "af-2", title: "رسم المعرفة", description: "تصور الروابط بين المفاهيم والمستندات والأشخاص لاكتشاف العلاقات الخفية في بياناتك." },
                { _key: "af-3", title: "التلخيص الآلي", description: "إنشاء ملخصات موجزة للمستندات الطويلة والاجتماعات والتقارير لتوفير الوقت وتحسين الفهم." },
                { _key: "af-4", title: "تحديثات في الوقت الفعلي", description: "ابق محدثاً مع الفهرسة التلقائية للمحتوى الجديد والإخطارات حول تغييرات المعلومات ذات الصلة." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "عرض وكيل المعرفة ذاكرة",
            performanceMetrics: [
                { _key: "pm-1", value: "80%", label: "استرجاع معلومات أسرع" },
                { _key: "pm-2", value: "95%", label: "دقة الإجابات" },
                { _key: "pm-3", value: "60%", label: "توفير الوقت" },
            ],
            aceternityTitle: "ميزات ذاكرة",
            aceternitySubtitle: "حلول إدارة معرفة ذكية.",
            aceternityFeatures: [
                { _key: "ae-1", title: "بحث معرفي ذكي", description: "ابحث عبر قاعدة معارفك بالكامل باستعلامات اللغة الطبيعية والفهم الدلالي.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "تصور رسم المعرفة", description: "تصور الروابط بين المفاهيم والمستندات والأشخاص في قاعدة معارفك.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "شاهد ذاكرة قيد العمل", description: "شاهد كيف يحول ذاكرة استرجاع المعلومات وإدارة المعرفة لمؤسستك.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "تكامل متعدد المصادر", description: "اتصل وابحث عبر المستندات وقواعد البيانات والويكي ومستودعات المعرفة بسلاسة.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-pagesense-ar",
            orderRank: 4,
            name: "PageSense",
            slug: { _type: "slug", current: "pagesense" },
            description: "ارفع مستنداتك العربية والإنجليزية مرة واحدة. اطرح أسئلة. احصل على إجابات مستشهدة فوراً.",
            menuDescription: "ذكاء المستندات للأرشيفات العربية والإنجليزية.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "PageSense قيد العمل",
            demoSubtitle: "شاهد البحث الفوري في المستندات العربية على نطاق المؤسسة.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "PageSense — ذكاء المستندات. تصور تفصيلي لخط استخراج البيانات واسترجاعها.",
            architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
            ctaTitle: "مستعد لتجربة PageSense؟",
            ctaSubtitle: "ارفع مستنداتك العربية واحصل على إجابات مستشهدة على بنيتك التحتية الخاصة.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "كشف ثغرات استرجاع المستندات التي تُعيق المؤسسات العربية عند البحث في الأرشيفات الضخمة غير المهيكلة.",
            cinematicNarrative: {
                introLine: "آلاف المستندات. لا طريقة للبحث فيها.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "لا إجابات من الأرشيف", description: "تتراكم المستندات لكن الأسئلة تستلزم البحث اليدوي صفحة بصفحة.", solTitle: "اسأل مستنداتك", solDesc: "اكتب أي سؤال بالعربية أو الإنجليزية واحصل على إجابة مباشرة مع رقم الصفحة بالضبط في ثوانٍ.", solImpact: "5 دقائق للإجابة" },
                { _key: "cp-2", title: "التعرف الضوئي يفوّت الأحرف العربية", description: "الخط اليدوي والأختام والأحرف المتشابهة تكسر أدوات الاستخراج التقليدية.", solTitle: "لا مستند يُترك خلفاً", solDesc: "يتعامل مع الخط اليدوي والأختام والجداول والأحرف المتشابهة — كل كلمة تُستخرج بدقة في كل مرة.", solImpact: "100% تحكم بالبيانات" },
                { _key: "cp-3", title: "نتائج بحث متقلبة", description: "صياغة الاستعلام بشكل مختلف تُعيد نتائج مختلفة تماماً أو لا شيء.", solTitle: "بيانات نظيفة من كل ملف", solDesc: "كل مستند يصبح بيانات منظمة وقابلة للقراءة والملف الصحيح يظهر دائماً بغض النظر عن طريقة صياغة البحث.", solImpact: "لغتان أصليتان" },
            ],
            journeyTitle: "نظام PageSense المتكامل",
            journeySubtitle: "طبقة ذكاء مستقلة لأرشيف مستنداتك.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "طبقة استقبال المستندات", nodes: ["رفع PDF", "المسوحات والصور", "الملاحظات المكتوبة بخط اليد"] },
                { _key: "jl-2", title: "نواة الذكاء", nodes: ["القراءة البصرية", "البحث الهجين", "الهيكلة التلقائية"] },
                { _key: "jl-3", title: "طبقة المخرجات والوصول", nodes: ["إجابات مستشهدة", "عارض المستندات", "مخرجات منظمة"] },
            ],
            icon: "/products/jawib.svg",
            heroSubtitle: ["ارفع مستنداتك العربية والإنجليزية مرة واحدة. اطرح أسئلة. احصل على إجابات مستشهدة فوراً."],
            heroCenterIcon: "/products/jawib.svg",
            heroCenterIconAlt: "أيقونة ذكاء المستندات PageSense",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "ذكاء المستندات",
            heroLiveUrl: "https://pagesense.esap.ai",
            missionTitle: "اسأل مستنداتك",
            missionSubtitle: "ارفع مستنداتك العربية والإنجليزية مرة واحدة. اطرح أسئلة. احصل على إجابات مستشهدة فوراً.",
            missionCards: [
                { _key: "mc-1", title: "اسأل مستنداتك", description: "اكتب أي سؤال بالعربية أو الإنجليزية واحصل على إجابة مباشرة مع رقم الصفحة بالضبط في ثوانٍ." },
                { _key: "mc-2", title: "لا مستند يُترك خلفاً", description: "يتعامل مع الخط اليدوي والأختام والجداول والأحرف المتشابهة — كل كلمة تُستخرج بدقة في كل مرة." },
                { _key: "mc-3", title: "بيانات نظيفة من كل ملف", description: "كل مستند يصبح بيانات منظمة وقابلة للقراءة والملف الصحيح يظهر دائماً بغض النظر عن طريقة صياغة البحث." },
            ],
            automationTitle: "ذكاء المستندات",
            automationSubtitle: "استخراج واسترجاع مصممان لأرشيفات المؤسسات العربية.",
            automationFeatures: [
                { _key: "af-1", title: "إجابات مستشهدة فورية", description: "اسأل بالعربية أو الإنجليزية واحصل على إجابات تحدد الصفحة والمستند بدقة — دون حاجة للبحث اليدوي." },
                { _key: "af-2", title: "قراءة بصرية للمستندات", description: "يستخرج النص من الخط اليدوي والأختام والجداول والأحرف المتشابهة بدقة على مستوى المؤسسات." },
                { _key: "af-3", title: "بحث هجين", description: "البحث الدلالي والبحث بالكلمات الرئيسية معاً لضمان ظهور المستند الصحيح بغض النظر عن صياغة الاستعلام." },
                { _key: "af-4", title: "مخرجات منظمة", description: "كل مستند مُعالَج يتحول إلى بيانات نظيفة ومنظمة وقابلة للاستعلام — جاهزة لسير العمل اللاحق." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "عرض ذكاء المستندات PageSense",
            performanceMetrics: [
                { _key: "pm-1", value: "5 دقائق", label: "من الرفع إلى الإجابة" },
                { _key: "pm-2", value: "100%", label: "تحكم بالبيانات داخل المؤسسة" },
                { _key: "pm-3", value: "2×", label: "عربي وإنجليزي أصليان" },
            ],
            aceternityTitle: "ميزات PageSense",
            aceternitySubtitle: "طبقة الذكاء لأرشيف مستنداتك.",
            aceternityFeatures: [
                { _key: "ae-1", title: "بحث فوري في المستندات", description: "اطرح أي سؤال بالعربية أو الإنجليزية واحصل على إجابة مستشهدة مع رقم الصفحة في ثوانٍ.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
                { _key: "ae-2", title: "تعرف ضوئي شامل", description: "يتعامل مع الخط اليدوي والأختام والجداول والأحرف العربية المتشابهة بدقة على مستوى المؤسسات.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
                { _key: "ae-3", title: "شاهد PageSense قيد العمل", description: "شاهد البحث في المستندات العربية على نطاق المؤسسة يُقدم إجابات مستشهدة في ثوانٍ.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
                { _key: "ae-4", title: "نشر داخل المؤسسة", description: "سيادة كاملة على البيانات — يعمل PageSense على بنيتك التحتية الخاصة دون نقل بيانات خارجي.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-omnilisten-ar",
            orderRank: 5,
            name: "OmniListen",
            slug: { _type: "slug", current: "omnilisten" },
            description: "كل محادثة بالعربية والإنجليزية مُفرَّغة وملخَّصة ومُحوَّلة إلى مهام قبل أن تغادر الغرفة.",
            menuDescription: "الطيار الآلي للمحادثات للفرق العربية والإنجليزية.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "OmniListen قيد العمل",
            demoSubtitle: "شاهد ذكاء المحادثات العربية في الوقت الفعلي على نطاق المؤسسة.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "OmniListen — ذكاء المحادثات. تصور تفصيلي لخط الالتقاط والاستخراج والمخرجات.",
            architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
            ctaTitle: "مستعد لتجربة OmniListen؟",
            ctaSubtitle: "التقط كل محادثة بالعربية والإنجليزية وامشِ حاملاً القرارات والمهام والمواعيد النهائية جاهزة.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "معالجة العبء اليدوي لتدوين الملاحظات والفجوات الثنائية اللغة التي تستنزف الوقت وتُضيّع القرارات الحيوية من كل اجتماع.",
            cinematicNarrative: {
                introLine: "الاجتماعات تنتهي. القرارات تتبخر.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "الملاحظات اليدوية تفوّت كل شيء", description: "القرارات والمهام والمواعيد الرئيسية تختفي بين قاعة الاجتماع وصندوق البريد.", solTitle: "ذكاء قائم على الأدوار", solDesc: "إعدادات ذكاء اصطناعي قابلة للتهيئة لأدوار الموارد البشرية والمبيعات وإدارة المشاريع والتنفيذيين تُظهر تلقائياً الأهم — دون تصفية يدوية.", solImpact: "صفر وقت للملاحظات" },
                { _key: "cp-2", title: "الأدوات التقليدية تفوّت الصوت الواقعي", description: "الالتقاط عبر Zoom فقط يفوّت نقاشات قاعة الاجتماع وزيارات المواقع والمكالمات الهاتفية.", solTitle: "التقاط الصوت الواقعي", solDesc: "سجّل نقاشات قاعة الاجتماع وزيارات مواقع العملاء والمكالمات الهاتفية. ضغط النطاق الديناميكي يُحسّن صوت المايكروفون البعيد قبل بدء التفريغ.", solImpact: "تشغيل 99.9%" },
                { _key: "cp-3", title: "التنقل بين العربية والإنجليزية يكسر التفريغ", description: "الفرق السعودية تتنقل بين العربية والإنجليزية في منتصف الجملة — الأدوات العامة تنهار.", solTitle: "ثنائية اللغة بالافتراض", solDesc: "مصمم للتعامل مع التنقل بين العربية والإنجليزية بالطريقة التي تتحدث بها الفرق السعودية فعلاً. محادثة واحدة تُنتج ملخصين كاملين في آنٍ واحد.", solImpact: "رضا 90%" },
            ],
            journeyTitle: "نظام OmniListen المتكامل",
            journeySubtitle: "طبقة ذكاء مستقلة لأرشيف محادثاتك بالكامل.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "طبقة التقاط الصوت", nodes: ["لوحة التحكم على الويب", "تطبيق أندرويد", "امتداد المتصفح"] },
                { _key: "jl-2", title: "نواة الذكاء", nodes: ["التفريغ", "استخراج الذكاء الاصطناعي", "مزامنة المهام والتواريخ"] },
                { _key: "jl-3", title: "طبقة المخرجات والإجراءات", nodes: ["الملخص الذكي", "لوحة المهام", "أحداث التقويم"] },
            ],
            icon: "/products/fasih.svg",
            heroSubtitle: ["كل محادثة بالعربية والإنجليزية مُفرَّغة وملخَّصة ومُحوَّلة إلى مهام قبل أن تغادر الغرفة."],
            heroCenterIcon: "/products/fasih.svg",
            heroCenterIconAlt: "أيقونة ذكاء المحادثات OmniListen",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "الطيار الآلي للمحادثات",
            heroLiveUrl: "https://omnilisten.esap.ai",
            missionTitle: "ذكاء قائم على الأدوار",
            missionSubtitle: "كل محادثة بالعربية والإنجليزية مُفرَّغة وملخَّصة ومُحوَّلة إلى مهام قبل أن تغادر الغرفة.",
            missionCards: [
                { _key: "mc-1", title: "ذكاء قائم على الأدوار", description: "إعدادات ذكاء اصطناعي قابلة للتهيئة لأدوار الموارد البشرية والمبيعات وإدارة المشاريع والتنفيذيين تُظهر تلقائياً الأهم — دون تصفية يدوية أو تنظيف ما بعد الاجتماع." },
                { _key: "mc-2", title: "التقاط الصوت الواقعي", description: "سجّل نقاشات قاعة الاجتماع وزيارات مواقع العملاء والمكالمات الهاتفية بسلاسة — ليس Zoom فحسب. ضغط النطاق الديناميكي يُحسّن صوت المايكروفون البعيد قبل بدء التفريغ." },
                { _key: "mc-3", title: "ثنائية اللغة بالافتراض", description: "مصمم للتعامل مع التنقل بين العربية والإنجليزية بالطريقة التي تتحدث بها الفرق السعودية فعلاً. سجل محادثة واحدة يُنتج ملخصين كاملين — أحدهما بالعربية والآخر بالإنجليزية — في آنٍ واحد." },
            ],
            automationTitle: "ذكاء المحادثات",
            automationSubtitle: "التقط القرارات واستخرجها وسلّمها من كل محادثة.",
            automationFeatures: [
                { _key: "af-1", title: "محرك التفريغ", description: "دقة 95-98% عبر المحادثات العربية والإنجليزية ومتداخلة اللغتين مع ضغط النطاق الديناميكي للصوت الواقعي." },
                { _key: "af-2", title: "استخراج الذكاء الاصطناعي", description: "يُظهر تلقائياً القرارات وبنود العمل والتواريخ والمسؤولين من محتوى المحادثة — مُهيَّأ حسب الأدوار لسياقات الموارد البشرية والمبيعات وإدارة المشاريع والتنفيذيين." },
                { _key: "af-3", title: "مزامنة المهام والتقويم", description: "المهام والمواعيد المُكتشَفة تتدفق مباشرة إلى لوحات العمل وأحداث التقويم دون نسخ ولصق يدوي." },
                { _key: "af-4", title: "الملخص الذكي", description: "كل اجتماع يُنتج ملخصاً ثنائي اللغة بالعربية والإنجليزية في آنٍ واحد — جاهز قبل مغادرة القاعة." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "عرض ذكاء المحادثات OmniListen",
            performanceMetrics: [
                { _key: "pm-1", value: "صفر", label: "دقيقة نشطة في تدوين الملاحظات" },
                { _key: "pm-2", value: "95-98%", label: "دقة التفريغ" },
                { _key: "pm-3", value: "2×", label: "عربي وإنجليزي في آنٍ واحد" },
            ],
            aceternityTitle: "ميزات OmniListen",
            aceternitySubtitle: "ذكاء المحادثات للفرق ثنائية اللغة.",
            aceternityFeatures: [
                { _key: "ae-1", title: "صفر تدوين للملاحظات", description: "كل محادثة تُفرَّغ وتُلخَّص وتُحوَّل إلى مهام تلقائياً — إعدادات الموارد البشرية والمبيعات وإدارة المشاريع والتنفيذيين جاهزة.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
                { _key: "ae-2", title: "التقاط بتشغيل 99.9%", description: "يسجّل قاعة الاجتماع والمواقع والمكالمات الهاتفية — ليس Zoom فحسب. ضغط النطاق الديناميكي يتعامل مع الصوت الواقعي.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
                { _key: "ae-3", title: "شاهد OmniListen قيد العمل", description: "شاهد ذكاء المحادثات العربية في الوقت الفعلي يُقدم المهام والملخصات على نطاق المؤسسة.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
                { _key: "ae-4", title: "مخرجات ثنائية اللغة", description: "محادثة واحدة. ملخصان كاملان — عربي وإنجليزي — يُنتَجان في آنٍ واحد مع قوائم المهام الكاملة.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
    ];

    console.log("📦 Creating Products (ar)...");
    for (const product of productsAr) {
        await client.createOrReplace({
            ...product,
            _type: "productDocument",
            language: "ar",
        });
        console.log(`   ✓ ${product.name}`);
    }

    // ── NAVIGATION ──
    console.log("🧭 Creating Navigation (ar)...");
    await client.createOrReplace({
        _id: "navigation-ar",
        _type: "navigation",
        language: "ar",
        navLinks: [
            { _key: "nav-1", label: "الرئيسية", href: "/" },
            { _key: "nav-2", label: "عن الشركة", href: "/about" },
            { _key: "nav-3", label: "المنتجات", href: "/products" },
            { _key: "nav-4", label: "الخدمات", href: "/services" },
            { _key: "nav-5", label: "دراسات الحالة", href: "/case-study" },
            { _key: "nav-6", label: "اتصل بنا", href: "/contact" },
        ],
        footerLinks: [
            { _key: "fl-1", label: "سياسة الخصوصية", href: "/privacy" },
            { _key: "fl-2", label: "شروط الخدمة", href: "/terms" },
        ],
        ctaTitle: "تواصل معنا",
        ctaSubtitle: "هل لديك سؤال أو ترغب في الشراكة معنا؟ تواصل معنا",
        ctaLabel: "ابدأ الآن",
        ctaHref: "/contact",
        copyrightText: "© 2025 ESAP AI. جميع الحقوق محفوظة.",
        newsletterTitle: "ابق على اطلاع",
        newsletterSubtitle: "احصل على أحدث رؤى وتحديثات الذكاء الاصطناعي في بريدك الوارد.",
    });

    // ── SERVICE PAGE ──
    console.log("📄 Creating Service Page (ar)...");
    await client.createOrReplace({
        _id: "servicePage-ar",
        _type: "servicePage",
        language: "ar",
        heroTitle: "خدمات الذكاء الاصطناعي",
        heroSubtitle: "حلول ذكاء اصطناعي شاملة مصممة لاحتياجات مؤسستك.",
        heroTagline: "حلول المؤسسات",
        problemTitle: "التحدي",
        problemSubtitle: "تواجه المؤسسات تعقيداً متزايداً في تطبيق الذكاء الاصطناعي على نطاق واسع.",
        problemItems: [],
        featuresTitle: "ما نقدمه",
        featuresSubtitle: "خدمات ذكاء اصطناعي شاملة مصممة لاحتياجات المؤسسات.",
        features: [],
        processTitle: "عمليتنا",
        processSubtitle: "منهجية مثبتة لتقديم حلول الذكاء الاصطناعي.",
        processSteps: [],
        portalVideoTitle: "شاهده قيد العمل",
        portalVideoDescription: "شاهد كيف تحول خدمات الذكاء الاصطناعي لدينا عمليات المؤسسات.",
        ctaTitle: "مستعد للبدء؟",
        ctaSubtitle: "لنبني شيئاً استثنائياً معاً.",
    });

    // ── CONTACT PAGE ──
    console.log("📄 Creating Contact Page (ar)...");
    await client.createOrReplace({
        _id: "contactPage-ar",
        _type: "contactPage",
        language: "ar",
        title: "تواصل معنا",
        subtitle: "مستعد لتحويل مؤسستك بالذكاء الاصطناعي؟ لنبدأ محادثة.",
        email: "contact@esapai.com",
        phone: "",
        address: "",
    });

    console.log("\n✅ Arabic seed complete! All Arabic content has been created in Sanity.\n");
}

seedArabic().catch((err) => {
    console.error("❌ Arabic seed failed:", err);
    process.exit(1);
});
