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
        heroTitle: "AI Agents Framework-as-a-Service (FaaS)",
        heroSubtitle: ["Powering the future of agentic services."],
        heroTagline: "Infrastructure Excellence",
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

const productsEn = [
    {
        _id: "product-erp",
        orderRank: 1,
        name: "ERP",
        slug: { _type: "slug", current: "erp" },
        description: "Voice-activated ERP system for SMEs. Manage your entire business operation through natural voice commands with AI-powered automation.",
        menuDescription: "Voice-activated ERP for SMEs with AI-powered automation.",
        icon: "/products/erp.svg",
        heroSubtitle: ["Voice-Activated ERP for Modern Business. AI-powered business commands."],
        heroCenterIcon: "/products/voiceerp.svg",
        heroCenterIconAlt: "Voice ERP System Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Operational Intelligence",
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
        architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
        orderRank: 2,
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
        architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
        orderRank: 3,
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
        architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
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
        _id: "product-jawib",
        orderRank: 4,
        name: "Jawib",
        slug: { _type: "slug", current: "jawib" },
        description: "Intelligent Customer Service Agent providing 24/7 personalized support. Transform your customer experience with seamless, human-like interactions.",
        menuDescription: "24/7 AI customer service agent.",
        icon: "/products/jawib.svg",
        heroSubtitle: ["Intelligent 24/7 support. Exceptional customer experiences."],
        heroCenterIcon: "/products/jawib.svg",
        heroCenterIconAlt: "Jawib Customer Service Agent Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Service Automation",
        exploreButton: "Explore Solution",
        missionTitle: "Automated Support Solution",
        missionSubtitle: "Intelligent Customer Service Agent providing 24/7 personalized support. Improve satisfaction and scale operations.",
        missionCards: [
            { _key: "mc-1", title: "24/7 Availability", description: "Provide instant support to customers anytime, anywhere, with intelligent responses that never sleep." },
            { _key: "mc-2", title: "Multi-Channel Support", description: "Engage customers across chat, email, phone, and social media with consistent, personalized experiences." },
            { _key: "mc-3", title: "Human Handoff", description: "Seamlessly escalate complex issues to human agents when needed, with full context and conversation history." },
        ],
        automationTitle: "Service Features",
        automationSubtitle: "Transforming customer interactions.",
        automationFeatures: [
            { _key: "af-1", title: "Natural Language Understanding", description: "Understand customer intent, sentiment, and context to provide accurate, helpful responses in natural conversation." },
            { _key: "af-2", title: "Ticket Management", description: "Automatically create, prioritize, and track support tickets while maintaining detailed conversation records." },
            { _key: "af-3", title: "Knowledge Base Integration", description: "Access your product documentation, FAQs, and knowledge base to provide accurate, up-to-date information." },
            { _key: "af-4", title: "Analytics & Insights", description: "Track customer satisfaction, identify common issues, and gain insights to continuously improve your service." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "Jawib Customer Service Agent Demo",
        performanceMetrics: [
            { _key: "pm-1", value: "90%", label: "First Contact Resolution" },
            { _key: "pm-2", value: "2s", label: "Average Response Time" },
            { _key: "pm-3", value: "4.8/5", label: "Customer Satisfaction" },
        ],
        aceternityTitle: "Jawib Features",
        aceternitySubtitle: "Solutions for exceptional service.",
        aceternityFeatures: [
            { _key: "ae-1", title: "24/7 Customer Support", description: "Provide intelligent, instant customer support around the clock with natural language understanding.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
            { _key: "ae-2", title: "Multi-Channel Engagement", description: "Engage customers across chat, email, phone, and social media with consistent experiences.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
            { _key: "ae-3", title: "See Jawib Demo", description: "See how Jawib transforms customer service with AI-powered automation.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
            { _key: "ae-4", title: "Global Support Network", description: "Scale customer service operations globally with multi-language support and regional deployment.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "Support in Action",
        demoSubtitle: "See 24/7 AI customer service handle real requests.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "Architecture — Jawib. Detailed visualization of the customer service automation engine components.",
        architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
        ctaTitle: "Ready to Try Jawib?",
        ctaSubtitle: "Transform your customer service with 24/7 AI support.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Addressing the support volume overload and inconsistent service quality that erode customer trust and drain support teams.",
        cinematicNarrative: {
            introLine: "Support volume never stops. Teams burn out.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Support Volume Overload", description: "Tickets pile up. Customers wait. Teams burn out.", solTitle: "24/7 Availability", solDesc: "Provide instant support to customers anytime, anywhere, with intelligent responses that never sleep.", solImpact: "90% First Contact" },
            { _key: "cp-2", title: "Inconsistent Answers", description: "Different agents, different scripts—customers get mixed messages.", solTitle: "Multi-Channel Support", solDesc: "Engage customers across chat, email, phone, and social media with consistent, personalized experiences.", solImpact: "2s Response Time" },
            { _key: "cp-3", title: "Handoff Friction", description: "When bots can't help, context is lost and customers repeat themselves.", solTitle: "Human Handoff", solDesc: "Seamlessly escalate complex issues to human agents when needed, with full context and conversation history.", solImpact: "4.8/5 Satisfaction" },
        ],
        journeyTitle: "Jawib Support",
        journeySubtitle: "Automated triage and resolution tree.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Omnichannel Entry", nodes: ["Unified Inbox"] },
            { _key: "jl-2", title: "Triage & Pathing", nodes: ["Smart Router", "AI Resolution", "Human Escalation"] },
            { _key: "jl-3", title: "Feedback Loop", nodes: ["Intent Scan", "Model Update", "Knowledge Sync"] },
        ],
    },
    {
        _id: "product-fasih",
        orderRank: 5,
        name: "Fasih",
        slug: { _type: "slug", current: "fasih" },
        description: "The native Arabic LLM bridging the gap with deep understanding of dialects and cultural nuances for precise, regionally-aware processing.",
        menuDescription: "Native Arabic LLM with dialect support.",
        icon: "/products/fasih.svg",
        heroSubtitle: ["Native Arabic AI. Built to understand Arabic."],
        heroCenterIcon: "/products/fasih.svg",
        heroCenterIconAlt: "Fasih Arabic LLM Icon",
        heroDemoVideo: "/fasih-demo.mp4",
        heroTagline: "Cultural Nuance",
        exploreButton: "Explore Solution",
        missionTitle: "Precise Arabic Understanding",
        missionSubtitle: "Bridge the gap with deep understanding of dialects and cultural nuances for precise, regionally-aware processing.",
        missionCards: [
            { _key: "mc-1", title: "Native Arabic Understanding", description: "Deep understanding of Modern Standard Arabic, regional dialects, and cultural nuances for accurate communication." },
            { _key: "mc-2", title: "Cultural Context", description: "Trained on Arabic content with cultural awareness, ensuring appropriate and contextually relevant responses." },
            { _key: "mc-3", title: "Multi-Dialect Support", description: "Recognize and process various Arabic dialects while maintaining high accuracy across different regions." },
        ],
        automationTitle: "Arabic Capabilities",
        automationSubtitle: "Arabic language processing and generation.",
        automationFeatures: [
            { _key: "af-1", title: "Text Generation", description: "Generate high-quality Arabic text for content creation, translations, and automated responses with natural fluency." },
            { _key: "af-2", title: "Language Understanding", description: "Deep semantic understanding of Arabic text, including complex grammar, idiomatic expressions, and regional variations." },
            { _key: "af-3", title: "Translation Services", description: "Accurate bidirectional translation between Arabic and other languages while preserving context." },
            { _key: "af-4", title: "Voice & Speech", description: "Arabic speech recognition and text-to-speech support with natural pronunciation and intonation." },
        ],
        youtubeVideoId: "oAuaVWvw0lM",
        youtubeVideoTitle: "Fasih Arabic LLM Overview",
        performanceMetrics: [
            { _key: "pm-1", value: "98%", label: "Arabic Text Accuracy" },
            { _key: "pm-2", value: "15", label: "Dialects Supported" },
            { _key: "pm-3", value: "50B+", label: "Arabic Tokens Trained" },
        ],
        aceternityTitle: "Fasih Features",
        aceternitySubtitle: "A leading native Arabic language model.",
        aceternityFeatures: [
            { _key: "ae-1", title: "Native Arabic Processing", description: "Deep understanding of Modern Standard Arabic, regional dialects, and cultural nuances for accurate communication.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
            { _key: "ae-2", title: "Multi-Dialect Support", description: "Recognize and process various Arabic dialects with high accuracy across different regions.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
            { _key: "ae-3", title: "See Fasih Overview", description: "See how Fasih delivers precise, culturally-aware Arabic language processing for your applications.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
            { _key: "ae-4", title: "Global Arabic Support", description: "Deploy Arabic language capabilities across global applications with regional dialect support.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
        ],
        outcomesTitle: "Outcomes",
        outcomesBadge: "Proof",
        demoTitle: "Arabic Intelligence in Action",
        demoSubtitle: "Experience native Arabic understanding across dialects.",
        demoBadge: "Demo",
        architectureTitle: "Architecture Deck",
        architectureBadge: "Visual Index",
        architectureSubtitle: "Architecture — Fasih. Detailed visualization of the native Arabic language model components.",
        architectureReelImages: ["/productimages/Slide-22.png", "/productimages/Slide-23.png", "/productimages/Slide-24.png"],
        ctaTitle: "Ready to Try Fasih?",
        ctaSubtitle: "Experience native Arabic language understanding.",
        ctaButtonText: "Get Started",
        challengesBadge: "Pain Points",
        challengesTitlePart1: "Current Market ",
        challengesTitlePart2: "Challenges",
        challengesSubtitle: "Revealing the dialect blindness and cultural gaps in generic language models that fail Arabic-speaking users and markets.",
        cinematicNarrative: {
            introLine: "Arabic deserves more than an afterthought.",
            problemsIntroLine: "Three barriers stand in the way.",
            epiphanyPreLine: "Then everything changes.",
            solutionIntroLine: "Here's how we fix it.",
            recapLine: "You've seen the problems and our solution. Now see it in action.",
        },
        cinematicProblems: [
            { _key: "cp-1", title: "Arabic Lost in Translation", description: "Generic models treat Arabic as an afterthought—dialects and nuance get flattened.", solTitle: "Native Arabic Understanding", solDesc: "Deep understanding of Modern Standard Arabic, regional dialects, and cultural nuances for accurate communication.", solImpact: "98% Text Accuracy" },
            { _key: "cp-2", title: "Cultural Context Missing", description: "Outputs that are technically correct but tone-deaf to region and culture.", solTitle: "Cultural Context", solDesc: "Trained on Arabic content with cultural awareness, ensuring appropriate and contextually relevant responses.", solImpact: "15 Dialects" },
            { _key: "cp-3", title: "One-Size-Fits-All Dialects", description: "MSA-only support leaves regional users and content out in the cold.", solTitle: "Multi-Dialect Support", solDesc: "Recognize and process various Arabic dialects while maintaining high accuracy across different regions.", solImpact: "50B+ Tokens" },
        ],
        journeyTitle: "Fasih Arabic LLM",
        journeySubtitle: "Sequential processing pipeline.",
        journeyBadge: "Architecture",
        journeyStages: ["Stage One", "Stage Two", "Stage Three"],
        journeyLayers: [
            { _key: "jl-1", title: "Input Pre-processing", nodes: ["Text Input", "Tokenizer", "Dialect ID"] },
            { _key: "jl-2", title: "Neural Core", nodes: ["Arabic LLM"] },
            { _key: "jl-3", title: "Generation Pipeline", nodes: ["Generation", "Compliance Audit", "Final Output"] },
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
            heroSubtitle: "Transform your business with intelligent automation, voice-activated systems, and AI agents that drive productivity and innovation",
            heroBadgePill: "Exclusive",
            heroBadgeDescription: "Tomorrow's Edge, Built Today",
            servicesTitle: "Focus on Growth",
            servicesSubtitle: "Explore our comprehensive suite of AI solutions designed to transform your enterprise.",
            servicesBadge: "Our Solutions",
            services: [
                { _key: "svc-agentic-1", id: "agentic-1", title: "Agentic AI Integration", description: "PLACEHOLDER", image: "/bentogird/agenticai.svg" },
                { _key: "svc-agentic-2", id: "agentic-2", title: "Agentic AI Integration", description: "Seamlessly integrate autonomous agents into your workflow to automate complex decision-making processes.", image: "/bentogird/agenticai.svg" },
                { _key: "svc-faas", id: "faas", title: "FaaS Infrastructure", description: "Managed infrastructure for AI Agent Framework-as-a-Service, ensuring scalability and peak performance.", image: "/bentogird/faas.svg" },
                { _key: "svc-tailored", id: "tailored", title: "Tailored Solutions", description: "Bespoke AI systems built from the ground up to solve your unique operational challenges and industry needs.", image: "/bentogird/ailab.svg" },
            ],
            achievementsTitle: "Our Impact",
            achievementsSubtitle: "Key metrics that define our success.",
            achievementsBadge: "Our Achievement",
            achievements: [
                { _key: "ach-1", number: "99.9%", label: "System Reliability", isHighlighted: false },
                { _key: "ach-2", number: "50K+", label: "Active AI Agents", isHighlighted: true },
                { _key: "ach-3", number: "75%", label: "Efficiency Gain", isHighlighted: false },
            ],
            missionTitle: "Our Mission",
            missionSubtitle: "Experience the dual power of autonomous execution and deep analytical insight, engineered for the future of enterprise.",
            missionBadge: "Our Mission",
            missionCards: [
                { _key: "mc-1", title: "Autonomous Execution", description: "Deploy intelligent workers that handle complex workflows 24/7 without supervision.", image: "/landing/m1.svg" },
                { _key: "mc-2", title: "Analytical Insight", description: "Transform raw data into actionable foresight with our advanced neural models.", image: "/landing/m2.svg" },
                { _key: "mc-3", title: "Unified Ecosystems", description: "Connecting legacy systems with future AI for seamless organizational evolution.", image: "/landing/m3.svg" },
            ],
            technologyTitle: "Our Technology Excellence",
            technologySubtitle: "Experience the dual power of autonomous execution and deep analytical insight, engineered for the future of enterprise.",
            technologyBadge: "Core Tech",
            technologyCards: [
                { _key: "tc-1", title: "Autonomous Agents", description: "Deploy intelligent workers that handle complex workflows 24/7 without supervision." },
                { _key: "tc-2", title: "Neural Processing", description: "Transform raw data into actionable foresight with our advanced neural models." },
            ],
            partners: [
                { _key: "p-1", logo: "/partners/EMp.svg", alt: "Partner 1" },
                { _key: "p-2", logo: "/partners/EMp-1.svg", alt: "Partner 2" },
                { _key: "p-3", logo: "/partners/EMp-2-1.svg", alt: "Partner 3" },
                { _key: "p-4", logo: "/partners/EMp-3.svg", alt: "Partner 4" },
                { _key: "p-5", logo: "/partners/EMp-4.svg", alt: "Partner 5" },
                { _key: "p-6", logo: "/partners/EMp-5.svg", alt: "Partner 6" },
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
                { _key: "tm-1", name: "Alex Morgan", role: "CEO & Founder", bio: "Visionary leader with over 15 years of experience in AI and strategic planning. Passionate about ethical AI development.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-2", name: "Sarah Chen", role: "CTO", bio: "Expert in machine learning and neural networks. Leads the technical vision and engineering teams at ESAP AI.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-3", name: "Marcus Johnson", role: "Head of Product", bio: "Product strategist focused on user-centric design and scalable solutions. Formerly at major tech giants.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-4", name: "Emily Rodriguez", role: "Lead Designer", bio: "Award-winning designer creating intuitive and beautiful interfaces. Believes in design as a storytelling medium.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-5", name: "David Kim", role: "Senior AI Engineer", bio: "Specializes in NLP and large language models. Contributor to several open-source AI projects.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-6", name: "Lisa Wang", role: "Marketing Director", bio: "Creative marketer with a knack for viral campaigns and brand building in the tech sector.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-7", name: "James Wilson", role: "DevOps Engineer", bio: "Infrastructure expert ensuring smooth deployment and high availability for AI systems.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-8", name: "Robert Chen", role: "Frontend Developer", bio: "Passionate about creating responsive, accessible, and high-performance user interfaces.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
                { _key: "tm-9", name: "Sofia Martinez", role: "AI Ethics Researcher", bio: "Committed to ensuring fairness, transparency, and accountability in AI algorithms.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
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
