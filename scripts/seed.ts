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

const legacyServiceDocumentIds = [
    "service-agentic-ai-integration",
    "service-faas-infrastructure",
    "service-tailored-solutions",
    "service-agentic-ai-integration-ar",
    "service-faas-infrastructure-ar",
    "service-tailored-solutions-ar",
];

const services = [
    {
        name: "Integration & Automation",
        slug: "integration-and-automation",
        description: "Complete AI integration and strategic automation for modern operations, from discovery and roadmap design to deployment and ongoing support.",
        menuDescription: "End-to-end integration and automation services",
        heroTitle: "Integration & Automation",
        heroSubtitle: ["From strategy to deployment. Integration and automation that drives ROI."],
        heroTagline: "Operational Transformation",
        featuresTitle: "What We Deliver",
        featuresSubtitle: "A practical path from disconnected operations to measurable automation outcomes.",
        features: [
            { title: "Strategic Planning", description: "Assess your systems and workflows to identify the highest-value integration and automation opportunities.", icon: "Compass" },
            { title: "Workflow Automation", description: "Replace repetitive manual work with resilient automations that reduce cost and cycle time.", icon: "Zap" },
            { title: "Custom AI Agents", description: "Deploy intelligent agents tailored to your business rules, approvals, and operational constraints.", icon: "Cpu" },
            { title: "System Integration", description: "Connect AI workflows to your ERP, CRM, knowledge sources, and internal tools through secure interfaces.", icon: "Layers" },
            { title: "Adoption Enablement", description: "Support rollout, training, and change management so new systems stick in production.", icon: "Users" }
        ],
        problemTitle: "Why Teams Stall",
        problemSubtitle: "Disconnected systems and fragile manual work make automation initiatives slow, expensive, and hard to scale.",
        problemItems: [
            { title: "Manual Workflows Everywhere", description: "Teams spend too much time routing approvals, copying data, and maintaining spreadsheets." },
            { title: "Disconnected Systems", description: "Business-critical tools do not share context, creating delays, duplicate work, and blind spots." },
            { title: "Slow Implementation Velocity", description: "Automation projects drag on because architecture, ownership, and rollout are unclear." },
            { title: "Adoption Friction", description: "Even useful systems fail when teams are not trained, enabled, or brought along during change." }
        ],
        processTitle: "Our Delivery Process",
        processSubtitle: "A structured engagement that moves from assessment to rollout without guesswork.",
        processSteps: [
            { stepId: "01", title: "Discovery", description: "Audit current workflows, systems, and pain points to define a clear automation scope." },
            { stepId: "02", title: "Roadmap", description: "Prioritize high-impact use cases, target integrations, and delivery milestones." },
            { stepId: "03", title: "Implementation", description: "Build automations, agent flows, and integrations around your real operating environment." },
            { stepId: "04", title: "System Connection", description: "Connect the solution to source systems, data stores, and approval chains with operational safeguards." },
            { stepId: "05", title: "Rollout", description: "Launch incrementally, validate outcomes, and tune workflows with production feedback." },
            { stepId: "06", title: "Ongoing Support", description: "Monitor performance, expand coverage, and keep automations aligned with business change." }
        ],
        ctaTitle: "Ready to Automate What Matters?",
        ctaSubtitle: "Let us design an integration and automation roadmap tailored to your operation.",
        ctaButtonText: "Start Planning",
        ctaButtonLink: "/contact"
    },
    {
        name: "AI Agents Framework-as-a-Service (FaaS)",
        slug: "faas",
        description: "Managed infrastructure for AI Agent Framework-as-a-Service, ensuring scalability and peak performance.",
        menuDescription: "Scalable infrastructure for AI agents",
        heroTitle: "AI Agents Framework",
        heroSubtitle: ["Powering the future of agentic services."],
        heroTagline: "FaaS Platform",
        featuresTitle: "High-Performance FaaS",
        featuresSubtitle: "Enterprise-grade hosting and orchestration for your agentic fleets.",
        features: [
            { title: "Elastic Scaling", description: "Automatically adjust resources based on agent workload demands.", icon: "Maximize" },
            { title: "Ultra-Low Latency", description: "Global edge deployment for real-time agent responses.", icon: "Zap" },
            { title: "Managed Orchestration", description: "Comprehensive management of agent interactions and state.", icon: "Server" },
            { title: "Observability Hub", description: "Deep visibility into agent performance and resource usage.", icon: "Activity" },
            { title: "Cost Optimization", description: "Efficient compute allocation to reduce infrastructure overhead.", icon: "DollarSign" }
        ],
        problemTitle: "Infrastructure Overload",
        problemSubtitle: "Self-hosting complex agentic frameworks leads to operational friction.",
        problemItems: [
            { title: "Inconsistent Scaling", description: "Agents crashing during peak loads or wasting idle resources." },
            { title: "Maintenance Burden", description: "DevOps teams overwhelmed by patching and updating AI environments." },
            { title: "High Operational Costs", description: "Expensive infrastructure spending without clear ROI visibility." },
            { title: "Performance Degradation", description: "Latency and reliability issues impacting agent response times." }
        ],
        processTitle: "Scaling Your Fleet",
        processSubtitle: "Robust infrastructure from assessment to ongoing support.",
        processSteps: [
            { stepId: "01", title: "Assessment", description: "Evaluating your current infrastructure, workload patterns, and scaling requirements." },
            { stepId: "02", title: "Provisioning", description: "Setting up dedicated compute, memory, and GPU environments for your agents." },
            { stepId: "03", title: "Integration", description: "Connecting your agent frameworks to our FaaS API with secure authentication." },
            { stepId: "04", title: "Migration", description: "Seamlessly moving existing workloads to the new infrastructure with zero downtime." },
            { stepId: "05", title: "Optimization", description: "Fine-tuning resource allocation, auto-scaling rules, and cost efficiency." },
            { stepId: "06", title: "Monitoring", description: "24/7 observability, alerting, and proactive performance management." }
        ],
        ctaTitle: "Ready to Scale Your Agent Fleet?",
        ctaSubtitle: "Get enterprise-grade infrastructure for your agentic AI systems.",
        ctaButtonText: "Scale Now",
        ctaButtonLink: "/contact"
    },
    {
        name: "Innovation & Research Lab",
        slug: "innovation-lab",
        description: "Cutting-edge AI research and development programs that prototype, validate, and operationalize new capabilities for the enterprise.",
        menuDescription: "Applied AI R&D and rapid prototyping",
        heroTitle: "Innovation & Research Lab",
        heroSubtitle: ["Cutting-edge AI R&D. Pushing boundaries of AI."],
        heroTagline: "Applied Research",
        featuresTitle: "Advanced R&D",
        featuresSubtitle: "Explore, prototype, and operationalize the next wave of AI capability.",
        features: [
            { title: "Research & Development", description: "Investigate new AI techniques, architectures, and operating models tailored to your domain.", icon: "FlaskConical" },
            { title: "Prototype Development", description: "Turn emerging ideas into fast, testable prototypes with measurable learning goals.", icon: "Bot" },
            { title: "Technology Partnerships", description: "Evaluate tools, providers, and ecosystem partners that can accelerate delivery.", icon: "Handshake" },
            { title: "Early Access Programs", description: "Pilot new capabilities before broad rollout to reduce uncertainty and increase confidence.", icon: "Rocket" },
            { title: "Continuous Validation", description: "Measure outcomes, iterate rapidly, and transition validated ideas into production initiatives.", icon: "RefreshCw" }
        ],
        problemTitle: "Why Innovation Slows Down",
        problemSubtitle: "Great AI ideas often stall between exploration and execution because teams lack time, structure, and safe experimentation paths.",
        problemItems: [
            { title: "Innovation Backlog", description: "Promising ideas keep getting deferred because delivery teams are focused on current operations." },
            { title: "Prototype Risk", description: "Teams need a safe way to test new AI capabilities before committing full production budgets." },
            { title: "Weak Validation", description: "Experiments often lack clear success criteria, making good ideas hard to defend and fund." },
            { title: "No Transition Path", description: "Even successful prototypes can die without a plan to operationalize them." }
        ],
        processTitle: "How the Lab Operates",
        processSubtitle: "A repeatable model for exploring new AI ideas and moving validated ones into delivery.",
        processSteps: [
            { stepId: "01", title: "Opportunity Framing", description: "Define the research question, target user, data inputs, and success criteria." },
            { stepId: "02", title: "Experiment Design", description: "Choose the right models, tools, and evaluation method for the proposed concept." },
            { stepId: "03", title: "Rapid Prototyping", description: "Build a focused proof of concept that surfaces technical and business signal quickly." },
            { stepId: "04", title: "Validation", description: "Test with real stakeholders, measure outcomes, and identify production constraints." },
            { stepId: "05", title: "Production Handoff", description: "Package validated learnings into a roadmap the delivery team can execute." },
            { stepId: "06", title: "Iteration", description: "Continue refining, expanding, or retiring experiments based on evidence." }
        ],
        ctaTitle: "Ready to Explore the Next AI Advantage?",
        ctaSubtitle: "Work with our research lab to validate bold AI ideas before committing full production investment.",
        ctaButtonText: "Start a Research Sprint",
        ctaButtonLink: "/contact"
    },
];

const arabicServices = [
    {
        name: "التكامل والأتمتة",
        slug: "integration-and-automation",
        description: "تكامل ذكي وأتمتة استراتيجية شاملة، من تحليل الوضع الحالي ووضع خارطة الطريق إلى التنفيذ والدعم المستمر.",
        menuDescription: "خدمات متكاملة للتكامل والأتمتة",
        heroTitle: "التكامل والأتمتة",
        heroSubtitle: ["من الاستراتيجية إلى التنفيذ. تكامل وأتمتة يحققان عائدًا واضحًا."],
        heroTagline: "تحول تشغيلي",
        featuresTitle: "ما الذي نقدمه",
        featuresSubtitle: "مسار عملي ينقل عملياتك من التشتت اليدوي إلى أتمتة قابلة للقياس.",
        features: [
            { title: "التخطيط الاستراتيجي", description: "تحليل الأنظمة الحالية وسير العمل لتحديد فرص الأتمتة والتكامل الأعلى أثرًا.", icon: "Compass" },
            { title: "أتمتة سير العمل", description: "تحويل الأعمال اليدوية المتكررة إلى تدفقات تشغيل موثوقة تقلل الوقت والتكلفة.", icon: "Zap" },
            { title: "وكلاء ذكاء اصطناعي مخصصون", description: "بناء وكلاء يتوافقون مع قواعد العمل والموافقات والقيود التشغيلية الفعلية.", icon: "Cpu" },
            { title: "تكامل الأنظمة", description: "ربط الحلول بأنظمة ERP وCRM ومصادر المعرفة والأدوات الداخلية عبر تكاملات آمنة.", icon: "Layers" },
            { title: "تمكين التبني", description: "دعم الإطلاق والتدريب وإدارة التغيير لضمان نجاح الحل في بيئة العمل.", icon: "Users" }
        ],
        problemTitle: "لماذا تتعطل الفرق",
        problemSubtitle: "الأنظمة المنفصلة والعمل اليدوي الهش يجعلان مبادرات الأتمتة بطيئة ومكلفة وصعبة التوسع.",
        problemItems: [
            { title: "سير عمل يدوي في كل مكان", description: "تضيع الفرق وقتًا كبيرًا في نقل البيانات ومتابعة الموافقات يدويًا." },
            { title: "أنظمة غير مترابطة", description: "الأدوات الأساسية لا تتبادل السياق، مما يخلق تأخيرًا وتكرارًا ومناطق عمياء." },
            { title: "بطء التنفيذ", description: "تتعثر مشاريع الأتمتة بسبب غياب الوضوح في المعمارية والمسؤوليات وخطة الإطلاق." },
            { title: "صعوبة التبني", description: "حتى الحلول الجيدة قد تفشل إذا لم يتم تمكين الفرق وتدريبها أثناء التغيير." }
        ],
        processTitle: "منهجية التنفيذ",
        processSubtitle: "نموذج عمل منظم ينتقل من التقييم إلى الإطلاق دون تخمين.",
        processSteps: [
            { stepId: "01", title: "الاكتشاف", description: "تقييم سير العمل والأنظمة الحالية وتحديد نطاق الأتمتة الأعلى أثرًا." },
            { stepId: "02", title: "خارطة الطريق", description: "ترتيب حالات الاستخدام وأولويات التكامل ومراحل التنفيذ بشكل واضح." },
            { stepId: "03", title: "التنفيذ", description: "بناء الأتمتة والتدفقات الذكية والتكاملات بما يتوافق مع بيئة التشغيل الفعلية." },
            { stepId: "04", title: "ربط الأنظمة", description: "توصيل الحل بمصادر البيانات والأنظمة وسلاسل الموافقات مع ضوابط تشغيلية مناسبة." },
            { stepId: "05", title: "الإطلاق", description: "إطلاق تدريجي مع قياس النتائج وتحسين التدفقات بناءً على التغذية الراجعة." },
            { stepId: "06", title: "الدعم المستمر", description: "مراقبة الأداء وتوسيع النطاق والحفاظ على توافق الأتمتة مع تغيّرات العمل." }
        ],
        ctaTitle: "هل أنت مستعد لأتمتة ما يهم فعلًا؟",
        ctaSubtitle: "دعنا نصمم لك خارطة طريق للتكامل والأتمتة تناسب عمليتك التشغيلية.",
        ctaButtonText: "ابدأ التخطيط",
        ctaButtonLink: "/contact"
    },
    {
        name: "إطار عمل الوكلاء كخدمة (FaaS)",
        slug: "faas",
        description: "بنية تحتية مدارة لإطار عمل وكلاء الذكاء الاصطناعي كخدمة، مما يضمن القابلية للتوسع والأداء الذروة.",
        menuDescription: "بنية تحتية قابلة للتوسع لوكلاء الذكاء الاصطناعي",
        heroTitle: "إطار عمل الوكلاء كخدمة (FaaS)",
        heroSubtitle: ["تمكين مستقبل الخدمات الوكيلية."],
        heroTagline: "التميز في البنية التحتية",
        featuresTitle: "FaaS عالي الأداء",
        featuresSubtitle: "استضافة وأوركسترا على مستوى المؤسسات لأساطيل وكلائك.",
        features: [
            { title: "توسع مرن", description: "ضبط الموارد تلقائيًا بناءً على متطلبات ضغط عمل الوكيل.", icon: "Maximize" },
            { title: "زمن وصول منخفض للغاية", description: "نشر عالمي للحصول على استجابات فورية من الوكلاء.", icon: "Zap" },
            { title: "أوركسترا مدارة", description: "إدارة شاملة لتفاعلات وحالات الوكلاء.", icon: "Server" },
            { title: "مركز المراقبة", description: "رؤية عميقة لأداء الوكلاء واستخدام الموارد.", icon: "Activity" },
            { title: "تحسين التكلفة", description: "تخصيص فعال للموارد لتقليل نفقات البنية التحتية.", icon: "DollarSign" }
        ],
        problemTitle: "عبء البنية التحتية",
        problemSubtitle: "الاستضافة الذاتية لأطر عمل الوكلاء المعقدة تؤدي إلى احتكاك تشغيلي.",
        problemItems: [
            { title: "توسع غير متسق", description: "تعطل الوكلاء أثناء ذروة الأحمال أو هدر الموارد الخاملة." },
            { title: "عبء الصيانة", description: "فرق DevOps غارقة في التحديثات وتصحيح بيئات الذكاء الاصطناعي." },
            { title: "تكاليف تشغيلية عالية", description: "إنفاق البنية التحتية المكلف بدون رؤية واضحة للعائد على الاستثمار." },
            { title: "تدهور الأداء", description: "مشاكل الكمون والموثوقية التي تؤثر على أوقات استجابة الوكلاء." }
        ],
        processTitle: "توسيع أسطولك",
        processSubtitle: "بنية تحتية قوية من التقييم إلى الدعم المستمر.",
        processSteps: [
            { stepId: "01", title: "التقييم", description: "تقييم بنيتك التحتية الحالية وأنماط العمل ومتطلبات التوسع." },
            { stepId: "02", title: "توفير الموارد", description: "إعداد بيئات الحوسبة والذاكرة ووحدات معالجة الرسومات المخصصة لوكلائك." },
            { stepId: "03", title: "التكامل", description: "ربط أطر عمل وكلائك بواجهة برمجة تطبيقات FaaS مع مصادقة آمنة." },
            { stepId: "04", title: "الترحيل", description: "نقل سلس للأحمال الحالية إلى البنية التحتية الجديدة بدون توقف." },
            { stepId: "05", title: "التحسين", description: "ضبط تخصيص الموارد وقواعد التوسع التلقائي وكفاءة التكلفة." },
            { stepId: "06", title: "المراقبة", description: "مراقبة على مدار الساعة وتنبيهات وإدارة أداء استباقية." }
        ],
        ctaTitle: "هل أنت مستعد لتوسيع أسطول وكلائك؟",
        ctaSubtitle: "احصل على بنية تحتية على مستوى المؤسسات لأنظمة الذكاء الاصطناعي الوكيلية.",
        ctaButtonText: "وسّع الآن",
        ctaButtonLink: "/contact"
    },
    {
        name: "مختبر الابتكار والبحث",
        slug: "innovation-lab",
        description: "برامج بحث وتطوير متقدمة في الذكاء الاصطناعي لاختبار الأفكار الجديدة وتحويلها إلى مبادرات قابلة للتنفيذ داخل المؤسسة.",
        menuDescription: "بحث وتطوير تطبيقي ونماذج أولية سريعة",
        heroTitle: "مختبر الابتكار والبحث",
        heroSubtitle: ["بحث وتطوير متقدم في الذكاء الاصطناعي. دفع حدود الإمكان."],
        heroTagline: "بحث تطبيقي",
        featuresTitle: "بحث وتطوير متقدم",
        featuresSubtitle: "استكشف وقدّم نماذج أولية وفعّل الجيل التالي من قدرات الذكاء الاصطناعي.",
        features: [
            { title: "البحث والتطوير", description: "استكشاف تقنيات ومعماريات ونماذج تشغيل جديدة في الذكاء الاصطناعي وفقًا لاحتياجك.", icon: "FlaskConical" },
            { title: "تطوير النماذج الأولية", description: "تحويل الأفكار الواعدة إلى نماذج أولية سريعة قابلة للاختبار والقياس.", icon: "Bot" },
            { title: "شراكات تقنية", description: "تقييم الأدوات والموردين والشركاء الذين يمكنهم تسريع التجربة والتنفيذ.", icon: "Handshake" },
            { title: "برامج الوصول المبكر", description: "تجربة القدرات الجديدة قبل التوسع الكامل لتقليل المخاطر وزيادة الثقة.", icon: "Rocket" },
            { title: "تحقق مستمر", description: "قياس النتائج والتكرار السريع وتحويل الأفكار المثبتة إلى مبادرات إنتاجية.", icon: "RefreshCw" }
        ],
        problemTitle: "لماذا يتباطأ الابتكار",
        problemSubtitle: "تتوقف كثير من أفكار الذكاء الاصطناعي الواعدة بين الاستكشاف والتنفيذ بسبب غياب الوقت والبنية ومسار التجربة الآمن.",
        problemItems: [
            { title: "تراكم أفكار الابتكار", description: "تبقى الأفكار الواعدة مؤجلة لأن فرق التنفيذ منشغلة بالأولويات التشغيلية الحالية." },
            { title: "مخاطر النماذج الأولية", description: "تحتاج الفرق إلى طريقة آمنة لاختبار القدرات الجديدة قبل تخصيص ميزانيات إنتاج كاملة." },
            { title: "ضعف التحقق", description: "تفشل التجارب في كثير من الأحيان بسبب غياب معايير نجاح واضحة وقياسات مقنعة." },
            { title: "غياب مسار الانتقال", description: "حتى النماذج الناجحة قد تتوقف إذا لم توجد خطة واضحة لتحويلها إلى تنفيذ فعلي." }
        ],
        processTitle: "كيف يعمل المختبر",
        processSubtitle: "منهجية متكررة لاستكشاف أفكار الذكاء الاصطناعي وتحويل المثبت منها إلى خطط تنفيذ.",
        processSteps: [
            { stepId: "01", title: "تحديد الفرصة", description: "صياغة سؤال البحث والمستخدم المستهدف والبيانات المطلوبة ومعايير النجاح." },
            { stepId: "02", title: "تصميم التجربة", description: "اختيار النماذج والأدوات وآلية التقييم الأنسب للفكرة المقترحة." },
            { stepId: "03", title: "بناء نموذج أولي سريع", description: "تنفيذ إثبات مفهوم مركز يكشف الإشارة التقنية والتجارية بسرعة." },
            { stepId: "04", title: "التحقق", description: "اختبار النموذج مع أصحاب المصلحة وقياس النتائج وتحديد قيود الإنتاج." },
            { stepId: "05", title: "تسليم للتنفيذ", description: "تحويل ما ثبت نجاحه إلى خارطة طريق واضحة يمكن لفريق التنفيذ العمل عليها." },
            { stepId: "06", title: "التكرار", description: "تحسين أو توسيع أو إيقاف التجارب بناءً على الأدلة والنتائج." }
        ],
        ctaTitle: "هل أنت مستعد لاستكشاف الميزة التالية في الذكاء الاصطناعي؟",
        ctaSubtitle: "اعمل مع مختبرنا للتحقق من الأفكار الجريئة قبل الالتزام باستثمار إنتاجي كامل.",
        ctaButtonText: "ابدأ دورة بحث",
        ctaButtonLink: "/contact"
    }
];

async function deleteLegacyServiceDocuments() {
    for (const id of legacyServiceDocumentIds) {
        try {
            await client.delete(id);
            console.log(`   ✓ Removed legacy service document ${id}`);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            if (!message.toLowerCase().includes("not found")) {
                throw error;
            }
        }
    }
}

const productsEn: Array<{ _id: string; name: string; [key: string]: unknown }> = [
    {
        _id: "product-erp",
        orderRank: 4,
        name: "ERP",
        slug: { _type: "slug", current: "erp" },
        description: "Voice-activated ERP system for SMEs. Manage your entire business operation through natural voice commands with AI-powered automation.",
        menuDescription: "Voice-activated ERP for SMEs with AI-powered automation.",
        icon: "/products/erp.svg",
        heroSubtitle: ["Voice-Activated ERP for Modern Business. AI-powered business commands."],
        heroCenterIcon: "/products/voiceerp.webp",
        heroCenterIconAlt: "Voice ERP System Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Operational Intelligence",
        heroLiveUrl: undefined,
        exploreButton: "Explore Solution",
        missionTitle: "Voice-First Enterprise Operations",
        missionSubtitle: "Manage your entire business operations through natural voice commands while ensuring security and compliance.",
        missionCards: [
            { _key: "mc-1", title: "Voice-First Interface", description: "Control all ERP functions through natural voice commands, making business management accessible and efficient for everyone." },
            { _key: "mc-2", title: "AI-Powered Automation", description: "Intelligent automation handles routine tasks, data entry, and reporting, freeing your team to focus on strategic decisions." },
            { _key: "mc-3", title: "SME-Optimized Design", description: "Built specifically for small and medium enterprises with scalable architecture that grows with your business needs." },
        ],
        automationTitle: "Smart Automation",
        automationSubtitle: "Streamlining operations from inventory to finance.",
        automationFeatures: [
            { _key: "af-1", title: "Adaptive Legacy Bridge", description: "Seamlessly wraps around your existing systems to enable smart AI improvements without disrupting your current operations." },
            { _key: "af-2", title: "Voice Command Suite", description: "Full voice control of inventory, sales, accounting, and HR management with natural language processing." },
            { _key: "af-3", title: "Real-Time Analytics", description: "Get instant insights into your business performance with AI-powered analytics and predictive reporting." },
            { _key: "af-4", title: "Smart Workflow Automation", description: "Automate complex business processes with intelligent workflows that adapt to your operational patterns." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "Voice ERP System in Action",
        performanceMetrics: [
            { _key: "pm-1", value: "75%", label: "Time Savings" },
            { _key: "pm-2", value: "90%", label: "User Satisfaction" },
            { _key: "pm-3", value: "3x", label: "Productivity Increase" },
        ],
        aceternityTitle: "Core ERP Features",
        aceternitySubtitle: "Powerful capabilities for modern businesses.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Business Operations Tracking", description: "Track and manage your business operations with ease using the intuitive ERP interface.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
            { _key: "ae-2", title: "AI Insights Capture", description: "Capture business insights effortlessly using advanced AI technology and analytics.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
            { _key: "ae-3", title: "See ERP in Action", description: "See how the voice-activated ERP system transforms business operations.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
            { _key: "ae-4", title: "Global Deployment", description: "Deploy ERP across multiple locations with our cloud-based architecture and global reach.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "Voice ERP in Action",
        demoSubtitle: "Watch how voice commands transform business operations.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "Architecture — ERP. Detailed visualization of the voice-activated ERP engine components.",
        architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
        ctaTitle: "Ready to Try ERP?",
        ctaSubtitle: "Manage your entire business through voice commands.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Uncovering operational bottlenecks and manual process inefficiencies that hold SMEs back from scaling efficiently.",
        cinematicNarrative: {
            introLine: "Every day, teams hit the same walls.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Manual Data Entry Bottleneck", description: "Teams waste hours on forms and spreadsheets instead of running the business.", solTitle: "Voice-First Interface", solDesc: "Control all ERP functions through natural voice commands, making business management accessible and efficient for everyone.", solImpact: "+75% Time Savings" },
            { _key: "cp-2", title: "Siloed Systems", description: "Inventory, sales, and finance don't talk—errors and delays multiply.", solTitle: "AI-Powered Automation", solDesc: "Intelligent automation handles routine tasks, data entry, and reporting, freeing your team to focus on strategic decisions.", solImpact: "Zero Downtime" },
            { _key: "cp-3", title: "Complex Training Overhead", description: "Valuable minds spent on learning legacy UIs instead of driving growth.", solTitle: "SME-Optimized Design", solDesc: "Built specifically for small and medium enterprises with scalable architecture that grows with your business needs.", solImpact: "3x Productivity" },
        ],
        journeyTitle: "Intelligent ERP",
        journeySubtitle: "Voice-first enterprise management with parallel processing.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Input Management", nodes: ["Voice Input", "Intent NLU", "ERP Manual", "External API"] },
            { _key: "jl-2", title: "Core Engine (Matrix)", nodes: ["Task Planner", "Business Logic", "Execution", "Compliance"] },
            { _key: "jl-3", title: "Global Distribution", nodes: ["Database", "Cloud Sync", "Command Center"] },
        ],
    },
    {
        _id: "product-ai-framework",
        orderRank: 5,
        name: "AI Framework",
        slug: { _type: "slug", current: "ai-framework" },
        description: "A comprehensive AI Agent & Automation Framework designed to build, deploy, and scale intelligent enterprise solutions at unprecedented speed.",
        menuDescription: "Build and deploy AI agents at enterprise scale.",
        icon: "/products/ai-framework.svg",
        heroSubtitle: ["Build powerful AI agents. Scalable enterprise solutions."],
        heroCenterIcon: "/products/ai-framework.svg",
        heroCenterIconAlt: "AI Framework Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Agent Orchestration",
        heroLiveUrl: undefined,
        exploreButton: "Explore Solution",
        missionTitle: "Decentralized Intelligence Network",
        missionSubtitle: "Build and deploy AI agents rapidly at enterprise scale with industry-standard reliability.",
        missionCards: [
            { _key: "mc-1", title: "Modular Architecture", description: "Flexible, composable components that adapt to your specific needs, enabling rapid development and customization." },
            { _key: "mc-2", title: "Seamless Integration", description: "Connect seamlessly with existing systems, APIs, and third-party services through standardized interfaces and connectors." },
            { _key: "mc-3", title: "Scalable Design", description: "Built to handle enterprise-scale workloads with high performance, reliability, and automatic scaling capabilities." },
        ],
        automationTitle: "Automation Capabilities",
        automationSubtitle: "Advanced workflows with intuitive tooling.",
        automationFeatures: [
            { _key: "af-1", title: "Agent Orchestration", description: "Coordinate multiple AI agents to work together on complex tasks with intelligent task distribution and collaboration." },
            { _key: "af-2", title: "Workflow Builder", description: "Visual tools to design and deploy automation workflows without coding, with drag-and-drop simplicity." },
            { _key: "af-3", title: "Event-Driven Architecture", description: "React to system events and trigger automated responses in real-time." },
            { _key: "af-4", title: "Monitoring & Analytics", description: "Track performance, debug issues, and optimize your automation workflows with comprehensive monitoring tools." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "AI Framework in Action",
        performanceMetrics: [
            { _key: "pm-1", value: "90%", label: "Developer Satisfaction" },
            { _key: "pm-2", value: "10x", label: "Faster Development" },
            { _key: "pm-3", value: "99.9%", label: "Uptime" },
        ],
        aceternityTitle: "Framework Capabilities",
        aceternitySubtitle: "Features for building intelligent systems.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Build AI Agents", description: "Create sophisticated AI agents with our intuitive framework and comprehensive tooling library.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
            { _key: "ae-2", title: "Workflow Automation", description: "Design and deploy complex automation workflows with visual tools and drag-and-drop simplicity.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
            { _key: "ae-3", title: "See Framework Demo", description: "See how the AI Framework enables rapid development and deployment of enterprise AI solutions.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
            { _key: "ae-4", title: "Enterprise Scale", description: "Deploy and scale AI solutions across enterprise infrastructure with high performance and reliability.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "Framework in Action",
        demoSubtitle: "See rapid AI agent deployment at enterprise scale.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "Architecture — AI Framework. Detailed visualization of the agent orchestration engine components.",
        architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
        ctaTitle: "Ready to Try AI Framework?",
        ctaSubtitle: "Build and deploy AI agents at enterprise scale.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Confronting the slow development cycles and integration barriers that prevent enterprises from deploying AI agents at scale.",
        cinematicNarrative: {
            introLine: "Building AI agents shouldn't take months.",
            problemsIntroLine: "Three obstacles slow you down.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Slow Development Cycles", description: "Months to build and deploy a single AI agent. Market moves faster.", solTitle: "Modular Architecture", solDesc: "Flexible, composable components that adapt to your specific needs and use cases, enabling rapid development and customization.", solImpact: "10x Faster Dev" },
            { _key: "cp-2", title: "Integration Nightmares", description: "Existing systems and APIs don't plug in—custom glue code everywhere.", solTitle: "Easy Integration", solDesc: "Seamlessly connect with existing systems, APIs, and third-party services through standardized interfaces and connectors.", solImpact: "99.9% Uptime" },
            { _key: "cp-3", title: "Scale Anxiety", description: "Agents work in dev; fall over when traffic hits production.", solTitle: "Scalable Design", solDesc: "Built to handle enterprise-scale workloads with high performance, reliability, and automatic scaling capabilities.", solImpact: "90% Dev Satisfaction" },
        ],
        journeyTitle: "AI Framework Ecosystem",
        journeySubtitle: "A decentralized network powering enterprise-grade intelligence.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "AI Application Layer", nodes: ["Web3 Chatbot", "Crypto Alerts", "AI Agents"] },
            { _key: "jl-2", title: "$CGPT Token Layer", nodes: ["Governance", "$CGPT Utility", "Staking"] },
            { _key: "jl-3", title: "AI Framework Blockchain", nodes: ["Validators", "Framework Core", "Data Market", "SDK", "GPU Market"] },
        ],
    },
    {
        _id: "product-zakra",
        orderRank: 1,
        name: "Zakra",
        slug: { _type: "slug", current: "zakra" },
        description: "Smart Knowledge Agent that delivers instant, context-aware answers from your entire knowledge base. Unlock the power of your enterprise data.",
        menuDescription: "Smart knowledge agent for instant answers.",
        icon: "/products/zakra.svg",
        heroSubtitle: ["Smart Knowledge Management. Actionable insights from your data."],
        heroCenterIcon: "/products/zakra.svg",
        heroCenterIconAlt: "Zakra Knowledge Agent Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Knowledge Synthesis",
        heroLiveUrl: "https://zakra.esap.ai",
        exploreButton: "Explore Solution",
        missionTitle: "Unified Knowledge Intelligence",
        missionSubtitle: "Instant, context-aware answers from your entire knowledge base. Make information accessible.",
        missionCards: [
            { _key: "mc-1", title: "Intelligent Search", description: "Natural language queries that understand context and intent, delivering precise answers from your knowledge base." },
            { _key: "mc-2", title: "Multi-Source Integration", description: "Connect and search across documents, databases, wikis, and knowledge repositories in one unified interface." },
            { _key: "mc-3", title: "Context-Aware Responses", description: "Get answers that understand your specific domain, industry terminology, and organizational context." },
        ],
        automationTitle: "Knowledge Capabilities",
        automationSubtitle: "Intelligent and effortless knowledge management.",
        automationFeatures: [
            { _key: "af-1", title: "Semantic Search", description: "Search for information using meaning, not just keywords. Understands synonyms, related concepts, and context." },
            { _key: "af-2", title: "Knowledge Graphing", description: "Visualize connections between concepts, documents, and people to discover hidden relationships in your data." },
            { _key: "af-3", title: "Automatic Summarization", description: "Generate concise summaries of lengthy documents, meetings, and reports to save time and improve comprehension." },
            { _key: "af-4", title: "Real-Time Updates", description: "Stay current with automatic indexing of new content and notifications about changes to relevant information." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "Zakra Knowledge Agent Demo",
        performanceMetrics: [
            { _key: "pm-1", value: "80%", label: "Faster Information Retrieval" },
            { _key: "pm-2", value: "95%", label: "Answer Accuracy" },
            { _key: "pm-3", value: "60%", label: "Time Saved" },
        ],
        aceternityTitle: "Zakra Features",
        aceternitySubtitle: "Intelligent knowledge management solutions.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Smart Knowledge Search", description: "Search across your entire knowledge base with natural language queries and semantic understanding.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
            { _key: "ae-2", title: "Knowledge Graph Visualization", description: "Visualize connections between concepts, documents, and people in your knowledge base.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
            { _key: "ae-3", title: "See Zakra in Action", description: "See how Zakra transforms information retrieval and knowledge management for your organization.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
            { _key: "ae-4", title: "Multi-Source Integration", description: "Connect and search across documents, databases, wikis, and knowledge repositories seamlessly.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "Knowledge in Action",
        demoSubtitle: "Watch instant answers flow from your knowledge base.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "Architecture — Zakra. Detailed visualization of the knowledge synthesis engine components.",
        architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
        ctaTitle: "Ready to Try Zakra?",
        ctaSubtitle: "Unlock instant, context-aware answers from your knowledge base.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Exposing the knowledge silos and retrieval gaps that keep enterprises from leveraging their own data effectively.",
        cinematicNarrative: {
            introLine: "Knowledge is scattered. Answers are hard to find.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Information Scattered Everywhere", description: "Docs, Excel, wikis—no single place to get a reliable answer.", solTitle: "Intelligent Search", solDesc: "Natural language queries that understand context and intent, delivering precise answers from your knowledge base.", solImpact: "80% Faster Retrieval" },
            { _key: "cp-2", title: "Manual Tagging and Indexing", description: "Content grows faster than your team can organize it.", solTitle: "Multi-Source Integration", solDesc: "Connect and search across documents, databases, wikis, and knowledge repositories in one unified interface.", solImpact: "95% Answer Accuracy" },
            { _key: "cp-3", title: "Generic Search Results", description: "Keyword matches that miss context and domain nuance.", solTitle: "Context-Aware Responses", solDesc: "Get answers that understand your specific domain, industry terminology, and organizational context.", solImpact: "60% Time Saved" },
        ],
        journeyTitle: "Zakra Knowledge",
        journeySubtitle: "Unified data intelligence through centralized graph hub.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Intake Network", nodes: ["Documents", "Databases", "Cloud Wiki", "Intake Hub"] },
            { _key: "jl-2", title: "Knowledge Core (Hub)", nodes: ["Graph Central", "Entity Sync", "Semantic Index", "Access Control", "Cache"] },
            { _key: "jl-3", title: "Intelligence Delivery", nodes: ["User Query", "Context AI", "Smart Answer"] },
        ],
    },
    {
        _id: "product-pagesense",
        orderRank: 2,
        name: "PageSense",
        slug: { _type: "slug", current: "pagesense" },
        description: "Upload Arabic and English documents once. Ask questions. Get cited answers instantly.",
        menuDescription: "Document intelligence for Arabic and English archives.",
        icon: "/products/jawib.svg",
        heroSubtitle: ["Upload Arabic and English documents once. Ask questions. Get cited answers instantly."],
        heroCenterIcon: "/products/jawib.svg",
        heroCenterIconAlt: "PageSense Document Intelligence Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Document Intelligence",
        heroLiveUrl: "https://pagesense.esap.ai",
        exploreButton: "Explore Solution",
        missionTitle: "Ask Your Documents",
        missionSubtitle: "Upload Arabic and English documents once. Ask questions. Get cited answers instantly.",
        missionCards: [
            { _key: "mc-1", title: "Ask Your Documents", description: "Type any question in Arabic or English and get a direct answer with the exact page it came from in seconds." },
            { _key: "mc-2", title: "No Document Left Behind", description: "Handles handwriting, stamps, tables, and characters that look nearly identical — every word captured correctly, every time." },
            { _key: "mc-3", title: "Clean Data From Every File", description: "Every document becomes organized, readable data and the right file always surfaces no matter how you phrase the search." },
        ],
        automationTitle: "Document Intelligence",
        automationSubtitle: "Extraction and retrieval built for Arabic enterprise archives.",
        automationFeatures: [
            { _key: "af-1", title: "Instant Cited Answers", description: "Ask in Arabic or English and receive answers pinpointing the exact page and document — no manual searching required." },
            { _key: "af-2", title: "Visual Document Reading", description: "Extracts text from handwriting, stamps, tables, and near-identical characters with enterprise-grade accuracy." },
            { _key: "af-3", title: "Hybrid Search", description: "Semantic and keyword search combined so the right document surfaces regardless of how the query is phrased." },
            { _key: "af-4", title: "Structured Output", description: "Every processed document becomes clean, organized, queryable data — ready for downstream workflows." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "PageSense Document Intelligence Demo",
        performanceMetrics: [
            { _key: "pm-1", value: "5 min", label: "From Upload to Answer" },
            { _key: "pm-2", value: "100%", label: "On-Premise Data Control" },
            { _key: "pm-3", value: "2×", label: "Arabic + English Native" },
        ],
        aceternityTitle: "PageSense Features",
        aceternitySubtitle: "Intelligence layer for your document archive.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Instant Document Search", description: "Ask any question in Arabic or English and get a cited answer with page reference in seconds.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
            { _key: "ae-2", title: "Full-Spectrum OCR", description: "Handles handwriting, stamps, tables, and near-identical Arabic characters with enterprise accuracy.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
            { _key: "ae-3", title: "See PageSense in Action", description: "Watch enterprise-scale Arabic document search deliver cited answers in seconds.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
            { _key: "ae-4", title: "On-Premise Deployment", description: "Full data sovereignty — PageSense runs on your own infrastructure with no external data transfer.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "PageSense in Action",
        demoSubtitle: "See instant Arabic document search at enterprise scale.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "PageSense — Document Intelligence. Detailed visualization of the extraction and retrieval pipeline.",
        architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
        ctaTitle: "Ready to Try PageSense?",
        ctaSubtitle: "Upload your Arabic documents and get cited answers on your own infrastructure.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Exposing the document retrieval gaps that slow Arabic enterprises when searching across large unstructured archives.",
        cinematicNarrative: {
            introLine: "Thousands of documents. No way to search them.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "No Answers From Archives", description: "Documents pile up but questions still require manual page-by-page searches.", solTitle: "Ask Your Documents", solDesc: "Type any question in Arabic or English and get a direct answer with the exact page it came from in seconds.", solImpact: "5 min to Answer" },
            { _key: "cp-2", title: "OCR Misses Arabic Characters", description: "Handwriting, stamps, and look-alike characters break standard extraction tools.", solTitle: "No Document Left Behind", solDesc: "Handles handwriting, stamps, tables, and characters that look nearly identical — every word captured correctly, every time.", solImpact: "100% On-Premise" },
            { _key: "cp-3", title: "Inconsistent Search Results", description: "Phrasing a query differently returns completely different — or no — results.", solTitle: "Clean Data From Every File", solDesc: "Every document becomes organized, readable data and the right file always surfaces no matter how you phrase the search.", solImpact: "2× Languages" },
        ],
        journeyTitle: "PageSense Ecosystem",
        journeySubtitle: "A self-contained intelligence layer for your document archive.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Document Input Layer", nodes: ["PDF Upload", "Scans & Images", "Handwritten Notes"] },
            { _key: "jl-2", title: "Intelligence Core", nodes: ["Visual Reading", "Hybrid Search", "Auto Structure"] },
            { _key: "jl-3", title: "Output & Access Layer", nodes: ["Cited Answers", "Document Viewer", "Structured Output"] },
        ],
    },
    {
        _id: "product-omnilisten",
        orderRank: 3,
        name: "OmniListen",
        slug: { _type: "slug", current: "omnilisten" },
        description: "Every Arabic and English conversation transcribed, summarized, and actioned before you leave the room.",
        menuDescription: "Conversational autopilot for Arabic and English teams.",
        icon: "/products/fasih.svg",
        heroSubtitle: ["Every Arabic and English conversation transcribed, summarized, and actioned before you leave the room."],
        heroCenterIcon: "/products/fasih.svg",
        heroCenterIconAlt: "OmniListen Conversational Intelligence Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Conversational Autopilot",
        heroLiveUrl: "https://omnilisten.esap.ai",
        exploreButton: "Explore Solution",
        missionTitle: "Role-Based Intelligence",
        missionSubtitle: "Every Arabic and English conversation transcribed, summarized, and actioned before you leave the room.",
        missionCards: [
            { _key: "mc-1", title: "Role-Based Intelligence", description: "Configurable AI presets for HR, Sales, Project Management, and Executive roles automatically surface what matters most — no manual filtering, no post-meeting cleanup." },
            { _key: "mc-2", title: "Real-World Audio Capture", description: "Seamlessly record boardroom discussions, client site visits, and phone calls — not just Zoom calls. Dynamic Range Compression sharpens distant microphone audio before transcription begins." },
            { _key: "mc-3", title: "Bilingual by Default", description: "Built to handle Arabic-English code-switching the way Saudi teams actually speak. One conversation record generates two complete summaries — one in Arabic, one in English simultaneously." },
        ],
        automationTitle: "Conversation Intelligence",
        automationSubtitle: "Capture, extract, and deliver decisions from every conversation.",
        automationFeatures: [
            { _key: "af-1", title: "Transcription Engine", description: "95–98% accuracy across Arabic, English, and code-switched conversations with Dynamic Range Compression for real-world audio." },
            { _key: "af-2", title: "AI Extraction", description: "Automatically surfaces decisions, action items, dates, and owners from conversation content — role-configured for HR, Sales, PM, and Executive contexts." },
            { _key: "af-3", title: "Task & Calendar Sync", description: "Detected tasks and deadlines flow directly into dashboards and calendar events without manual copy-paste." },
            { _key: "af-4", title: "Smart Summary", description: "Every meeting produces a bilingual summary in Arabic and English simultaneously — done before the room clears." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "OmniListen Conversational Intelligence Demo",
        performanceMetrics: [
            { _key: "pm-1", value: "Zero", label: "Active Minutes Spent on Notes" },
            { _key: "pm-2", value: "95–98%", label: "Transcription Accuracy" },
            { _key: "pm-3", value: "2×", label: "Arabic + English Simultaneously" },
        ],
        aceternityTitle: "OmniListen Features",
        aceternitySubtitle: "Conversational intelligence for bilingual teams.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Zero Note-Taking", description: "Every conversation auto-transcribed, summarized, and actioned — HR, Sales, PM, and Executive presets out of the box.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
            { _key: "ae-2", title: "99.9% Uptime Capture", description: "Records boardroom, site visits, and phone calls — not just Zoom. Dynamic Range Compression handles real-world audio.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
            { _key: "ae-3", title: "See OmniListen in Action", description: "Watch real-time Arabic conversation intelligence deliver tasks and summaries at enterprise scale.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
            { _key: "ae-4", title: "Bilingual Output", description: "One conversation. Two complete summaries — Arabic and English — generated simultaneously with full task lists.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "OmniListen in Action",
        demoSubtitle: "See real-time Arabic conversation intelligence at enterprise scale.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "OmniListen — Conversational Intelligence. Detailed visualization of the capture, extraction, and output pipeline.",
        architectureReelImages: ["/product-images/Slide-22.png", "/product-images/Slide-23.png", "/product-images/Slide-24.png"],
        ctaTitle: "Ready to Try OmniListen?",
        ctaSubtitle: "Capture every Arabic and English conversation and walk away with decisions, tasks, and deadlines already done.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Addressing the manual note-taking overhead and bilingual gaps that drain time and lose critical decisions from every meeting.",
        cinematicNarrative: {
            introLine: "Meetings end. Decisions vanish.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Manual Notes Miss Everything", description: "Key decisions, tasks, and dates disappear between the meeting room and the inbox.", solTitle: "Role-Based Intelligence", solDesc: "Configurable AI presets for HR, Sales, PM, and Executive roles automatically surface what matters most — no manual filtering, no post-meeting cleanup.", solImpact: "Zero Note Time" },
            { _key: "cp-2", title: "Standard Tools Miss Real-World Audio", description: "Zoom-only capture misses boardroom discussions, site visits, and phone calls.", solTitle: "Real-World Audio Capture", solDesc: "Seamlessly record boardroom discussions, client site visits, and phone calls. Dynamic Range Compression sharpens distant microphone audio before transcription begins.", solImpact: "99.9% Uptime" },
            { _key: "cp-3", title: "Arabic-English Code-Switching Breaks Transcription", description: "Saudi teams switch between Arabic and English mid-sentence — generic tools break.", solTitle: "Bilingual by Default", solDesc: "Built to handle Arabic-English code-switching the way Saudi teams actually speak. One conversation generates two complete summaries simultaneously.", solImpact: "90% Satisfaction" },
        ],
        journeyTitle: "OmniListen Ecosystem",
        journeySubtitle: "A self-contained intelligence layer for your entire conversation archive.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Audio Capture Layer", nodes: ["Web Dashboard", "Android App", "Browser Extension"] },
            { _key: "jl-2", title: "Intelligence Core", nodes: ["Transcription", "AI Extraction", "Task & Date Sync"] },
            { _key: "jl-3", title: "Output & Action Layer", nodes: ["Smart Summary", "Task Dashboard", "Calendar Events"] },
        ],
    },
];

async function seed() {
    console.log("🚀 Starting Sanity seed...");

    try {
        // 0. Seed Home Page (en)
        console.log("📄 Creating Home Page (en)...");
        await client.createOrReplace({
            _id: "homePage-en",
            _type: "homePage",
            language: "en",
            heroTitle: "AI-Powered Solutions / For Modern Enterprises",
            heroSubtitle: "Intelligent automation and AI agents that drive enterprise productivity.",
            heroBadgePill: "Exclusive",
            heroBadgeDescription: "Tomorrow's Edge, Built Today",
            servicesTitle: "Focus on Growth",
            servicesSubtitle: "Explore our comprehensive suite of AI solutions designed to transform your enterprise.",
            servicesBadge: "Our Solutions",
            services: [
                { _key: "svc-agentic-2", id: "agentic-2", title: "Agentic AI Integration", description: "Seamlessly integrate autonomous agents into your workflow to automate complex decision-making processes.", image: "/bento-grid/ailab.svg" },
                { _key: "svc-faas", id: "faas", title: "FaaS Infrastructure", description: "Managed infrastructure for AI Agent Framework-as-a-Service, ensuring scalability and peak performance.", image: "/bento-grid/faas.svg" },
                { _key: "svc-tailored", id: "tailored", title: "Tailored Solutions", description: "Bespoke AI systems built from the ground up to solve your unique operational challenges and industry needs.", image: "/bento-grid/ailab.svg" },
                { _key: "svc-strategy", id: "strategy", title: "Enterprise Strategy", description: "Custom AI roadmaps designed to align with your business goals and drive long-term digital transformation.", image: "/bento-grid/enterprise.svg" },
            ],
            achievementsTitle: "Our Impact",
            achievementsSubtitle: "Key metrics that define our success.",
            achievementsBadge: "Our Achievement",
            achievements: [
                { _key: "ach-1", number: "99.9%", label: "System Reliability", isHighlighted: false },
                { _key: "ach-2", number: "50K+", label: "Active AI Agents", isHighlighted: true },
                { _key: "ach-3", number: "75%", label: "Efficiency Gain", isHighlighted: false },
            ],
            missionTitle: "Empowering Enterprise Intelligence",
            missionSubtitle: "Experience the dual power of autonomous execution and deep analytical insight, engineered for the future of enterprise.",
            missionBadge: "Our Mission",
            missionCards: [
                { _key: "mc-1", title: "Autonomous Execution", description: "Deploy intelligent workers that handle complex workflows 24/7 without supervision.", image: "/landing/m1.webp" },
                { _key: "mc-2", title: "Analytical Insight", description: "Transform raw data into actionable foresight with our advanced neural models.", image: "/landing/m2.webp" },
                { _key: "mc-3", title: "Unified Ecosystems", description: "Connecting legacy systems with future AI for seamless organizational evolution.", image: "/landing/m3.webp" },
            ],
            technologyTitle: "Our Technology Excellence",
            technologySubtitle: "Experience the dual power of autonomous execution and deep analytical insight, engineered for the future of enterprise.",
            technologyBadge: "Core Tech",
            technologyCards: [
                { _key: "tc-1", title: "Autonomous Agents", description: "Deploy intelligent workers that handle complex workflows 24/7 without supervision." },
                { _key: "tc-2", title: "Neural Processing", description: "Transform raw data into actionable foresight with our advanced neural models." },
            ],
            partners: [
                { _key: "p-1", logo: "/partners/emp.svg", alt: "Partner 1" },
                { _key: "p-2", logo: "/partners/emp-1.svg", alt: "Partner 2" },
                { _key: "p-3", logo: "/partners/emp-2.svg", alt: "Partner 3" },
                { _key: "p-4", logo: "/partners/emp-3.svg", alt: "Partner 4" },
                { _key: "p-5", logo: "/partners/emp-4.svg", alt: "Partner 5" },
                { _key: "p-6", logo: "/partners/emp-5.svg", alt: "Partner 6" },
            ],
            ctaTitle: "Ready to Transform Your Business?",
            ctaSubtitle: "Join hundreds of enterprises leveraging AI-powered automation to drive growth, efficiency, and innovation.",
            ctaButtonText: "Start Building Now",
            ctaButtonHref: "/contact",
            textRevealContent: "Forging the intelligence layer of tomorrow. Unlocking limitless potential.",
        });

        // 1. Seed About Page (en)
        console.log("📄 Creating About Page (en)...");
        await client.createOrReplace({
            _id: "aboutPage-en",
            _type: "aboutPage",
            language: "en",
            heroTitle: "Our Legacy",
            heroSubtitle: "Building the foundation for enterprise intelligence. From humble beginnings to global infrastructure — this is our story.",
            heroBadge: "Legacy & Vision",
            heroTitlePart1: "Our ",
            heroTitlePart2: "Legacy",
            teamMembers: [
                { _key: "tm-1", name: "Baker Abukhater", role: "Founder", bio: "The visionary and dynamic Founder of ESAP AI, driving the mission to build futuristic AI-powered technologies that redefine how institutions, governments, and individuals work.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-2", name: "Ayed Alanazi", role: "People Relations Manager", bio: "People Relations Manager at ESAP AI, fostering a culture of collaboration, inclusion, and excellence across the multinational and multi-lingual team.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-3", name: "Syed Imam", role: "Co-Founder & Team Lead", bio: "Enterprise AI Development Pioneer and Co-Founder of ESAP AI, leading engineering teams to deliver scalable agentic AI solutions for enterprises worldwide.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-4", name: "M. Usman Nazir", role: "Co-Founder & Director of Artificial Intelligence", bio: "Director of Artificial Intelligence & Data Solutions at ESAP AI, architecting the intelligence layer that powers ESAP's suite of AI products and frameworks.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-5", name: "Abdullah Abukhater", role: "Creative Innovation Director", bio: "Creative Innovation Director at ESAP AI, blending design thinking with emerging technology to shape experiences that are as beautiful as they are intelligent.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-6", name: "Omar Abukhater", role: "Strategy Director", bio: "Strategy Director at ESAP AI, charting the go-to-market and growth roadmap that positions ESAP as the leading force in enterprise AI transformation.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-7", name: "Salem Almtaery", role: "Human Resources Manager", bio: "Human Resources Manager at ESAP AI, dedicated to building and supporting the talented team that drives ESAP's innovation and growth.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-8", name: "Alaa Said", role: "Chief Finance Officer", bio: "Chief Finance Officer at ESAP AI, overseeing financial strategy and operations to ensure sustainable growth and investment in cutting-edge AI research.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-9", name: "Hamed Hasan", role: "Senior Software Engineer Lead", bio: "Senior Software Engineer Team Lead at ESAP AI, guiding development of robust, high-performance systems that underpin ESAP's AI product portfolio.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-10", name: "Mohamed Mostafa", role: "Lead Software Engineer & Delivery Manager", bio: "Lead Software Engineer & Delivery Manager at ESAP AI, ensuring projects ship on time, at quality, by bridging technical execution with stakeholder alignment.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-11", name: "Osama Hassanein", role: "Head of Backend & System Architecture", bio: "Head of Backend Engineering & System Architecture at ESAP AI, designing the scalable infrastructure and distributed systems that power ESAP's agentic AI platform.", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=800&auto=format&fit=crop" },
            ],
            narrativeDesignation: "Designation",
            teamCategoryLabel: "CORE TEAM MEMBER",
            teamLeadershipLabel: "LEADERSHIP",
            teamInnovationLabel: "INNOVATION",
            historyTitle: "The Journey of ESAP AI",
            historyBadge: "Our Legacy",
            historySubtitle: "From complex manual workflows to enterprise-grade AI autonomy.",
            historyHook: "Digitalizing what can't be digitalized — a real case study.",
            historyPhases: [
                {
                    _key: "hp-1",
                    year: "2020",
                    phaseLabel: "Phase 1",
                    title: "The build",
                    description: "Around late 2020, a well-known consulting company in construction — mostly government projects — was running everything on Excel and physical papers: project management, HR, finance, supplier management. They had tried Dynamics 365, Odoo; none fit their complicated business logic. So they went hybrid until 2020, when money loss, poor tracking, and manual effort made it clear: something had to be done. I entered the scene. One month to show one workflow. I almost quit. Then a senior employee said: here you can build something from scratch, something big. I stayed. I became an employee inside a struggling module, learning paper flow and approvals by observation — no requirements, no docs. One month, 24/7, and I built a prototype. We shook hands. I spent the next 8 months going deep: data in Excel everywhere, 60k+ records, owner-defined formats, workflow that had to match exactly. I decided they would love it and use it without complaining — no training, obvious UI, simple pending tasks. We built 6–7 key modules. Within two weeks the owner migrated everything to production.",
                    highlight: "80% paperwork gone. No manual tracking. Finally, relief.",
                },
                {
                    _key: "hp-2",
                    year: "2021",
                    phaseLabel: "Phase 2",
                    title: "Migration & automation",
                    description: "Migration was brutal. Excel data was messy: missing references, wrong grouping, broken structure. We built a pipeline — what can be synced, what can't; restructure what's possible; store the rest as extra sources. We learned why companies fear digitalizing: millions of messy records are not easy. Automation became a huge advantage. We built automations that were unheard of back then: attendance (letters, tickets, objections, payroll deductions), expense (employees always knew where and how much they spent). Many more automations helped scale without extra manpower. After migration and automation, the owner decided to open a software solution company. Almost every company suffers with outdated ERPs or fears digitalizing due to complexity, time, cost, and disaster outcomes. Our real advantage: understanding core issues and the end-user.",
                    highlight: "",
                },
                {
                    _key: "hp-3",
                    year: "2022",
                    phaseLabel: "Phase 3",
                    title: "AI & redefining",
                    description: "AI started emerging strongly around 2022. Agents started being discussed. We saw the potential beyond automation and started building next-gen AI products for enterprises. Goal: enterprise AI solutions based on deep end-user understanding, constant feedback from departments, and strict end-user satisfaction rules. Big companies do agentic automation and process intelligence, but most don't care about end-users. That's where ESAP AI comes in. ESAP's main goal: intelligent agents — AGI-like workplace agents. Not LLMs alone; architecture and orchestration are the key. Aligned with Vision 2030: from Saudi Arabia to the world.",
                    highlight: "",
                },
            ],
            visionTitle: "Our vision",
            visionBody: "A complete enterprise ecosystem operated by intelligent agents. Every employee has an AI agent that assists them. Employees do not need to learn ERP systems, understand workflows, or remember how things are operated. They provide the required data and review before submission. Everything else — forms, navigation, tracking, approvals, workflows, execution — is handled by the agent. The agent is the executor. We're building the framework that makes this possible: complete enterprise architecture, agents that orchestrate any business logic dynamically, full CRUD and ERP actions, and the ability to adapt to different companies, workflows, and industries. This is just the beginning.",
        });

        // 1. Seed English Products (with new fields)
        console.log("📦 Creating Products (en)...");
        for (const product of productsEn) {
            await client.createOrReplace({
                ...product,
                _type: "productDocument",
                language: "en",
            });
            console.log(`   ✓ ${product.name}`);
        }

        // 2. Remove legacy service documents before reseeding canonical slugs
        console.log("🧹 Removing legacy service documents...");
        await deleteLegacyServiceDocuments();

        // 3. Seed English Services
        for (const service of services) {
            console.log(`  Creating service: ${service.name} (en)...`);
            await client.createOrReplace({
                _id: `service-${service.slug}`,
                _type: "serviceDocument",
                language: "en",
                name: service.name,
                slug: { _type: "slug", current: service.slug },
                description: service.description,
                menuDescription: service.menuDescription,
                heroTitle: service.heroTitle,
                heroSubtitle: service.heroSubtitle,
                heroTagline: service.heroTagline,
                featuresTitle: service.featuresTitle,
                featuresSubtitle: service.featuresSubtitle,
                featuresBadge: "What we deliver",
                featuresCentralNode: "Core Service",
                features: service.features,
                problemTitle: service.problemTitle,
                problemSubtitle: service.problemSubtitle,
                problemBadge: "The Challenge",
                problemItems: service.problemItems,
                processTitle: service.processTitle,
                processSubtitle: service.processSubtitle,
                processBadge: "Process",
                processSteps: service.processSteps,
                portalVideoTitle: "Video Portal",
                portalVideoDescription: "Watch how our solution transforms your workflow",
                beforeAfterLabel: "Before & after",
                beforeAfterTitle: "See the difference",
                ctaTitle: service.ctaTitle,
                ctaSubtitle: service.ctaSubtitle,
                ctaButtonText: service.ctaButtonText,
                ctaButtonLink: service.ctaButtonLink
            });
        }

        // 4. Seed Arabic Services
        for (const service of arabicServices) {
            console.log(`  Creating service: ${service.name} (ar)...`);
            await client.createOrReplace({
                _id: `service-${service.slug}-ar`,
                _type: "serviceDocument",
                language: "ar",
                name: service.name,
                slug: { _type: "slug", current: service.slug },
                description: service.description,
                menuDescription: service.menuDescription,
                heroTitle: service.heroTitle,
                heroSubtitle: service.heroSubtitle,
                heroTagline: service.heroTagline,
                featuresTitle: service.featuresTitle,
                featuresSubtitle: service.featuresSubtitle,
                featuresBadge: "ما نقدمه",
                featuresCentralNode: "الخدمة الأساسية",
                features: service.features,
                problemTitle: service.problemTitle,
                problemSubtitle: service.problemSubtitle,
                problemBadge: "التحدي",
                problemItems: service.problemItems,
                processTitle: service.processTitle,
                processSubtitle: service.processSubtitle,
                processBadge: "العملية",
                processSteps: service.processSteps,
                portalVideoTitle: "بوابة الفيديو",
                portalVideoDescription: "شاهد كيف يحول حلنا سير عملك",
                beforeAfterLabel: "قبل وبعد",
                beforeAfterTitle: "شاهد الفرق",
                ctaTitle: service.ctaTitle,
                ctaSubtitle: service.ctaSubtitle,
                ctaButtonText: service.ctaButtonText,
                ctaButtonLink: service.ctaButtonLink
            });
        }

        console.log("✅ Seed complete!");
    } catch (error) {
        console.error("❌ Seed failed:", error);
        process.exit(1);
    }
}

seed();
