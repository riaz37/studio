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
        heroSubtitle:
            "حوّل أعمالك من خلال الأتمتة الذكية والأنظمة المفعّلة بالصوت ووكلاء الذكاء الاصطناعي التي تعزز الإنتاجية والابتكار",
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
                image: "/bentogird/agenticai.svg",
            },
            {
                _key: "svc-strategy",
                id: "strategy",
                title: "استراتيجية المؤسسات",
                description:
                    "خرائط طريق ذكاء اصطناعي مخصصة مصممة لتتوافق مع أهداف عملك وتدفع التحول الرقمي طويل المدى.",
                image: "/bentogird/enterprise.svg",
            },
            {
                _key: "svc-faas",
                id: "faas",
                title: "بنية FaaS التحتية",
                description:
                    "بنية تحتية مُدارة لإطار عمل وكلاء الذكاء الاصطناعي كخدمة، تضمن القابلية للتوسع والأداء الأمثل.",
                image: "/bentogird/faas.svg",
            },
            {
                _key: "svc-tailored",
                id: "tailored",
                title: "حلول مخصصة",
                description:
                    "أنظمة ذكاء اصطناعي مصممة خصيصاً لحل تحدياتك التشغيلية الفريدة واحتياجات صناعتك.",
                image: "/bentogird/aisolution.svg",
            },
            {
                _key: "svc-industry",
                id: "industry",
                title: "التميز الصناعي",
                description:
                    "الاستفادة من الخبرة المتخصصة في المجال لنشر حلول ذكاء اصطناعي تتجاوز معايير الصناعة للأمان والموثوقية.",
                image: "/bentogird/industry.svg",
            },
            {
                _key: "svc-lab",
                id: "lab",
                title: "مختبر الابتكار",
                description:
                    "البحث المستمر والنمذجة السريعة لتقنيات الذكاء الاصطناعي المتطورة للحفاظ على تقدم مؤسستك.",
                image: "/bentogird/ailab.svg",
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
                image: "/landing/m1.svg",
            },
            {
                _key: "mis-2",
                title: "تسريع الابتكار",
                description:
                    "نشر الوكلاء المستقلين للقضاء على الاحتكاك وتسريع نمو الأعمال.",
                image: "/landing/m2.svg",
            },
            {
                _key: "mis-3",
                title: "أنظمة بيئية موحدة",
                description:
                    "ربط الأنظمة القديمة بالذكاء الاصطناعي المستقبلي لتطور مؤسسي سلس.",
                image: "/landing/m3.svg",
            },
        ],

        technologyTitle: "التميز التقني",
        technologySubtitle:
            "بنية تحتية متطورة تدعم الجيل القادم من الذكاء الاصطناعي للمؤسسات.",
        technologyBadge: "التقنية الأساسية",
        technologyCards: [],

        partners: [
            { _key: "p-1", logo: "/partners/EMp.svg", alt: "شريك ١" },
            { _key: "p-2", logo: "/partners/EMp-1.svg", alt: "شريك ٢" },
            { _key: "p-3", logo: "/partners/EMp-2-1.svg", alt: "شريك ٣" },
            { _key: "p-4", logo: "/partners/EMp-3.svg", alt: "شريك ٤" },
            { _key: "p-5", logo: "/partners/EMp-4.svg", alt: "شريك ٥" },
            { _key: "p-6", logo: "/partners/EMp-5.svg", alt: "شريك ٦" },
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
            { _key: "tm-1", name: "أليكس مورغان", role: "الرئيس التنفيذي والمؤسس", bio: "قائد صاحب رؤية بخبرة تزيد عن 15 عاماً في الذكاء الاصطناعي والتخطيط الاستراتيجي.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-2", name: "سارة تشن", role: "المدير التقني", bio: "خبيرة في التعلم الآلي والشبكات العصبية. تقود الرؤية التقنية وفرق الهندسة.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-3", name: "ماركوس جونسون", role: "رئيس المنتجات", bio: "استراتيجي منتجات يركز على التصميم المتمحور حول المستخدم والحلول القابلة للتوسع.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-4", name: "إيميلي رودريغيز", role: "كبيرة المصممين", bio: "مصممة حائزة على جوائز تبتكر واجهات بديهية وجميلة.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-5", name: "ديفيد كيم", role: "مهندس ذكاء اصطناعي أول", bio: "متخصص في معالجة اللغات الطبيعية والنماذج اللغوية الكبيرة.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-6", name: "ليزا وانغ", role: "مديرة التسويق", bio: "مسوّقة مبدعة متخصصة في الحملات الفيروسية وبناء العلامات التجارية.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-7", name: "جيمس ويلسون", role: "مهندس DevOps", bio: "خبير بنية تحتية يضمن النشر السلس والتوافر العالي لأنظمة الذكاء الاصطناعي.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-8", name: "روبرت تشن", role: "مطور واجهات أمامية", bio: "شغوف بإنشاء واجهات مستخدم متجاوبة وقابلة للوصول وعالية الأداء.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-9", name: "صوفيا مارتينيز", role: "باحثة في أخلاقيات الذكاء الاصطناعي", bio: "ملتزمة بضمان العدالة والشفافية والمساءلة في خوارزميات الذكاء الاصطناعي.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
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
    const productsAr = [
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
            architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
            heroCenterIcon: "/products/voiceerp.svg",
            heroCenterIconAlt: "أيقونة نظام ERP الصوتي",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "الذكاء التشغيلي",
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
            architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
            architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
            _id: "product-jawib-ar",
            orderRank: 4,
            name: "جويب",
            slug: { _type: "slug", current: "jawib" },
            description: "وكيل خدمة عملاء ذكي يوفر دعماً مخصصاً على مدار الساعة. حوّل تجربة عملائك بتفاعلات سلسة وشبيهة بالبشر.",
            menuDescription: "وكيل خدمة عملاء بالذكاء الاصطناعي على مدار الساعة.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "الدعم قيد العمل",
            demoSubtitle: "شاهد خدمة العملاء بالذكاء الاصطناعي على مدار الساعة تتعامل مع الطلبات الحقيقية.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "المعمارية — جويب. تصور تفصيلي لمكونات محرك أتمتة خدمة العملاء.",
            architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
            ctaTitle: "مستعد لتجربة جويب؟",
            ctaSubtitle: "حوّل خدمة عملائك بدعم الذكاء الاصطناعي على مدار الساعة.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "معالجة الحمل الزائد لحجم الدعم وعدم اتساق جودة الخدمة التي تقوض ثقة العملاء وتستنزف فرق الدعم.",
            cinematicNarrative: {
                introLine: "حجم الدعم لا يتوقف أبداً. الفرق تنهك.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "الحمل الزائد لحجم الدعم", description: "التذاكر تتراكم. العملاء ينتظرون. الفرق تنهك.", solTitle: "توفر 24/7", solDesc: "قدم دعماً فورياً للعملاء في أي وقت وأي مكان، مع ردود ذكية لا تنام أبداً.", solImpact: "حل أول اتصال 90%" },
                { _key: "cp-2", title: "إجابات غير متسقة", description: "وكلاء مختلفون، نصوص مختلفة—العملاء يتلقون رسائل متضاربة.", solTitle: "دعم متعدد القنوات", solDesc: "تفاعل مع العملاء عبر الدردشة والبريد الإلكتروني والهاتف ووسائل التواصل الاجتماعي بتجارب متسقة وشخصية.", solImpact: "وقت استجابة ثانيتان" },
                { _key: "cp-3", title: "احتكاك التسليم", description: "عندما لا تستطيع الروبوتات المساعدة، يضيع السياق ويكرر العملاء أنفسهم.", solTitle: "تسليم للإنسان", solDesc: "تصعيد المشكلات المعقدة بسلاسة إلى الوكلاء البشريين عند الحاجة، مع السياق الكامل وتاريخ المحادثة.", solImpact: "رضا 4.8/5" },
            ],
            journeyTitle: "دعم جاوب",
            journeySubtitle: "شجرة فرز وحل تلقائية.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "الدخول متعدد القنوات", nodes: ["صندوق الوارد الموحد"] },
                { _key: "jl-2", title: "الفرز والتوجيه", nodes: ["الموجه الذكي", "حل الذكاء الاصطناعي", "تصعيد بشري"] },
                { _key: "jl-3", title: "حلقة التغذية الراجعة", nodes: ["مسح النوايا", "تحديث النموذج", "مزامنة المعرفة"] },
            ],
            icon: "/products/jawib.svg",
            heroSubtitle: ["دعم ذكي على مدار الساعة. تجارب عملاء استثنائية."],
            heroCenterIcon: "/products/jawib.svg",
            heroCenterIconAlt: "أيقونة وكيل خدمة العملاء جويب",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "أتمتة الخدمة",
            missionTitle: "حل الدعم الآلي",
            missionSubtitle: "وكيل خدمة عملاء ذكي يوفر دعماً مخصصاً على مدار الساعة. تحسين الرضا وتوسيع العمليات.",
            missionCards: [
                { _key: "mc-1", title: "توفر على مدار الساعة", description: "قدم دعماً فورياً للعملاء في أي وقت وأي مكان، باستجابات ذكية لا تتوقف." },
                { _key: "mc-2", title: "دعم متعدد القنوات", description: "تفاعل مع العملاء عبر الدردشة والبريد الإلكتروني والهاتف ووسائل التواصل الاجتماعي بتجارب متسقة ومخصصة." },
                { _key: "mc-3", title: "التحويل للبشر", description: "تصعيد سلس للمشكلات المعقدة للوكلاء البشريين عند الحاجة، مع السياق الكامل وتاريخ المحادثة." },
            ],
            automationTitle: "ميزات الخدمة",
            automationSubtitle: "تحويل تفاعلات العملاء.",
            automationFeatures: [
                { _key: "af-1", title: "فهم اللغة الطبيعية", description: "فهم نية العميل ومشاعره وسياقه لتقديم استجابات دقيقة ومفيدة في محادثة طبيعية." },
                { _key: "af-2", title: "إدارة التذاكر", description: "إنشاء وتحديد أولويات وتتبع تذاكر الدعم تلقائياً مع الحفاظ على سجلات المحادثة المفصلة." },
                { _key: "af-3", title: "تكامل قاعدة المعرفة", description: "الوصول إلى وثائق منتجاتك والأسئلة الشائعة وقاعدة المعرفة لتقديم معلومات دقيقة ومحدثة." },
                { _key: "af-4", title: "التحليلات والرؤى", description: "تتبع رضا العملاء وتحديد المشكلات الشائعة والحصول على رؤى لتحسين خدمتك باستمرار." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "عرض وكيل خدمة العملاء جويب",
            performanceMetrics: [
                { _key: "pm-1", value: "90%", label: "حل الاتصال الأول" },
                { _key: "pm-2", value: "ثانيتان", label: "متوسط وقت الاستجابة" },
                { _key: "pm-3", value: "4.8/5", label: "رضا العملاء" },
            ],
            aceternityTitle: "ميزات جويب",
            aceternitySubtitle: "حلول لخدمة استثنائية.",
            aceternityFeatures: [
                { _key: "ae-1", title: "دعم عملاء على مدار الساعة", description: "قدم دعم عملاء ذكي وفوري على مدار الساعة مع فهم اللغة الطبيعية.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "تفاعل متعدد القنوات", description: "تفاعل مع العملاء عبر الدردشة والبريد والهاتف ووسائل التواصل بتجارب متسقة.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "شاهد عرض جويب", description: "شاهد كيف يحول جويب خدمة العملاء بالأتمتة المدعومة بالذكاء الاصطناعي.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "شبكة دعم عالمية", description: "وسّع عمليات خدمة العملاء عالمياً بدعم متعدد اللغات ونشر إقليمي.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-fasih-ar",
            orderRank: 5,
            name: "فصيح",
            slug: { _type: "slug", current: "fasih" },
            description: "النموذج اللغوي العربي الأصلي الذي يسد الفجوة بفهم عميق للهجات والفروق الثقافية الدقيقة للمعالجة الدقيقة والمدركة إقليمياً.",
            menuDescription: "نموذج لغوي عربي أصلي مع دعم اللهجات.",
            exploreButton: "استكشف الحل",
            outcomesTitle: "النتائج",
            outcomesBadge: "الإثبات",
            demoTitle: "الذكاء العربي قيد العمل",
            demoSubtitle: "جرّب فهم اللغة العربية الأصيل عبر اللهجات.",
            demoBadge: "عرض توضيحي",
            architectureTitle: "عرض المعمارية",
            architectureBadge: "الفهرس المرئي",
            architectureSubtitle: "المعمارية — فصيح. تصور تفصيلي لمكونات النموذج اللغوي العربي الأصلي.",
            architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
            ctaTitle: "مستعد لتجربة فصيح؟",
            ctaSubtitle: "جرّب فهم اللغة العربية الأصيل.",
            ctaButtonText: "ابدأ الآن",
            challengesBadge: "نقاط الألم",
            challengesTitlePart1: "تحديات ",
            challengesTitlePart2: "السوق الحالية",
            challengesSubtitle: "كشف عمى اللهجات والفجوات الثقافية في النماذج اللغوية العامة التي تخذل المستخدمين والأسواق الناطقة بالعربية.",
            cinematicNarrative: {
                introLine: "اللغة العربية تستحق أكثر من مجرد فكرة لاحقة.",
                problemsIntroLine: "ثلاثة حواجز تقف في الطريق.",
                epiphanyPreLine: "ثم يتغير كل شيء.",
                solutionIntroLine: "إليك كيف نحلها.",
                recapLine: "لقد رأيت المشاكل وحلنا. الآن شاهده في العمل.",
            },
            cinematicProblems: [
                { _key: "cp-1", title: "اللغة العربية ضائعة في الترجمة", description: "النماذج العامة تعامل العربية كفكرة لاحقة—اللهجات والدقة تُسطَّح.", solTitle: "فهم عربي أصيل", solDesc: "فهم عميق للعربية الفصحى الحديثة واللهجات الإقليمية والفروق الثقافية لتواصل دقيق.", solImpact: "دقة نصية 98%" },
                { _key: "cp-2", title: "السياق الثقافي مفقود", description: "مخرجات صحيحة تقنياً لكنها عمياء للمنطقة والثقافة.", solTitle: "السياق الثقافي", solDesc: "مُدرَّب على المحتوى العربي بوعي ثقافي، مما يضمن ردوداً مناسبة وذات صلة بالسياق.", solImpact: "15 لهجة" },
                { _key: "cp-3", title: "لهجة واحدة تناسب الجميع", description: "دعم الفصحى فقط يترك المستخدمين والمحتوى الإقليميين خارجاً في البرد.", solTitle: "دعم متعدد اللهجات", solDesc: "التعرف على مختلف اللهجات العربية ومعالجتها مع الحفاظ على دقة عالية عبر مختلف المناطق.", solImpact: "+50 مليار رمز" },
            ],
            journeyTitle: "نموذج اللغة العربية فصيح",
            journeySubtitle: "خط معالجة تسلسلي.",
            journeyBadge: "المعمارية",
            journeyStages: ["المرحلة الأولى", "المرحلة الثانية", "المرحلة الثالثة"],
            journeyLayers: [
                { _key: "jl-1", title: "المعالجة المسبقة للمدخلات", nodes: ["إدخال النص", "المُجزِّئ", "تحديد اللهجة"] },
                { _key: "jl-2", title: "النواة العصبية", nodes: ["نموذج اللغة العربية"] },
                { _key: "jl-3", title: "خط الإنشاء", nodes: ["الإنشاء", "مراجعة الامتثال", "المخرج النهائي"] },
            ],
            icon: "/products/fasih.svg",
            heroSubtitle: ["ذكاء اصطناعي عربي أصلي. مبني لفهم العربية."],
            heroCenterIcon: "/products/fasih.svg",
            heroCenterIconAlt: "أيقونة النموذج اللغوي العربي فصيح",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "الفروق الثقافية",
            missionTitle: "فهم عربي دقيق",
            missionSubtitle: "سد الفجوة بفهم عميق للهجات والفروق الثقافية الدقيقة للمعالجة الدقيقة والمدركة إقليمياً.",
            missionCards: [
                { _key: "mc-1", title: "فهم عربي أصلي", description: "فهم عميق للعربية الفصحى الحديثة واللهجات الإقليمية والفروق الثقافية للتواصل الدقيق." },
                { _key: "mc-2", title: "السياق الثقافي", description: "مدرّب على محتوى عربي بوعي ثقافي، مما يضمن استجابات مناسبة وذات صلة بالسياق." },
                { _key: "mc-3", title: "دعم متعدد اللهجات", description: "التعرف على ومعالجة اللهجات العربية المختلفة مع الحفاظ على دقة عالية عبر المناطق المختلفة." },
            ],
            automationTitle: "القدرات العربية",
            automationSubtitle: "معالجة وتوليد للغة العربية.",
            automationFeatures: [
                { _key: "af-1", title: "توليد النصوص", description: "توليد نصوص عربية عالية الجودة لإنشاء المحتوى والترجمات والاستجابات الآلية بطلاقة طبيعية." },
                { _key: "af-2", title: "فهم اللغة", description: "فهم دلالي عميق للنص العربي، بما في ذلك القواعد المعقدة والتعبيرات الاصطلاحية والتعبيرات الإقليمية." },
                { _key: "af-3", title: "خدمات الترجمة", description: "ترجمة دقيقة ثنائية الاتجاه بين العربية واللغات الأخرى مع الحفاظ على السياق." },
                { _key: "af-4", title: "الصوت والكلام", description: "دعم التعرف على الكلام العربي وتحويل النص إلى كلام بنطق وتنغيم طبيعي." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "نظرة عامة على النموذج اللغوي العربي فصيح",
            performanceMetrics: [
                { _key: "pm-1", value: "98%", label: "دقة النص العربي" },
                { _key: "pm-2", value: "15", label: "لهجة مدعومة" },
                { _key: "pm-3", value: "+50 مليار", label: "رمز عربي مدرّب" },
            ],
            aceternityTitle: "ميزات فصيح",
            aceternitySubtitle: "نموذج لغوي عربي أصلي رائد.",
            aceternityFeatures: [
                { _key: "ae-1", title: "معالجة عربية أصلية", description: "فهم عميق للعربية الفصحى الحديثة واللهجات الإقليمية والفروق الثقافية للتواصل الدقيق.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "دعم متعدد اللهجات", description: "التعرف على ومعالجة اللهجات العربية المختلفة بدقة عالية عبر المناطق المختلفة.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "شاهد نظرة عامة على فصيح", description: "شاهد كيف يقدم فصيح معالجة لغة عربية دقيقة ومدركة ثقافياً لتطبيقاتك.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "دعم عربي عالمي", description: "نشر قدرات اللغة العربية عبر التطبيقات العالمية بدعم اللهجات الإقليمية.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
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
