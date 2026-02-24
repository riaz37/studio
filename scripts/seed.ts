/**
 * Seed Script — Migrates all hardcoded content into Sanity CMS.
 *
 * Usage:
 *   cd studio
 *   npx tsx scripts/seed.ts
 *
 * Requires the following env vars (from .env):
 *   SANITY_STUDIO_PROJECT_ID
 *   SANITY_STUDIO_DATASET (defaults to "production")
 *   SANITY_API_TOKEN — a write-access token from manage.sanity.io
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

async function seed() {
    console.log("🌱 Starting seed...\n");

    // ── HOME PAGE ──
    console.log("📄 Creating Home Page...");
    await client.createOrReplace({
        _id: "homePage-en",
        _type: "homePage",
        language: "en",
        heroTitle: "AI-Powered Solutions For Modern Enterprises",
        heroSubtitle:
            "Transform your business with intelligent automation, voice-activated systems, and AI agents that drive productivity and innovation",

        servicesTitle: "Focus on Growth",
        servicesSubtitle:
            "Explore our comprehensive suite of AI solutions designed to transform your enterprise.",
        servicesBadge: "Our Solutions",
        services: [
            {
                _key: "svc-agentic",
                id: "agentic",
                title: "Agentic AI Integration",
                description:
                    "Seamlessly integrate autonomous agents into your workflow to automate complex decision-making processes.",
                image: "/bentogird/agenticai.svg",
            },
            {
                _key: "svc-strategy",
                id: "strategy",
                title: "Enterprise Strategy",
                description:
                    "Tailored AI roadmaps designed to align with your business goals and drive long-term digital transformation.",
                image: "/bentogird/enterprise.svg",
            },
            {
                _key: "svc-faas",
                id: "faas",
                title: "FaaS Infrastructure",
                description:
                    "Managed infrastructure for AI Agent Framework-as-a-Service, ensuring scalability and peak performance.",
                image: "/bentogird/faas.svg",
            },
            {
                _key: "svc-tailored",
                id: "tailored",
                title: "Tailored Solutions",
                description:
                    "Bespoke AI systems built from the ground up to solve your unique operational challenges and industry needs.",
                image: "/bentogird/aisolution.svg",
            },
            {
                _key: "svc-industry",
                id: "industry",
                title: "Industry Excellence",
                description:
                    "Leveraging domain-specific expertise to deploy AI solutions that exceed industry standards for security and reliability.",
                image: "/bentogird/industry.svg",
            },
            {
                _key: "svc-lab",
                id: "lab",
                title: "Innovation Lab",
                description:
                    "Continuous research and rapid prototyping of cutting-edge AI technologies to keep your enterprise ahead of the curve.",
                image: "/bentogird/ailab.svg",
            },
        ],

        achievementsTitle: "Our Impact",
        achievementsSubtitle: "Key metrics that define our success.",
        achievements: [
            { _key: "ach-1", number: "99.9%", label: "System Reliability", isHighlighted: false },
            { _key: "ach-2", number: "50k+", label: "Active AI Agents", isHighlighted: true },
            { _key: "ach-3", number: "10x", label: "Efficiency Gain", isHighlighted: false },
        ],

        missionTitle: "Our Core Mission",
        missionSubtitle:
            "Building the foundational intelligence layer to empower organizations beyond traditional limits.",
        missionCards: [
            {
                _key: "mis-1",
                title: "Democratizing Intelligence",
                description:
                    "Making advanced AI intuitive and accessible through voice-first innovation.",
                image: "/landing/m1.svg",
            },
            {
                _key: "mis-2",
                title: "Accelerating Innovation",
                description:
                    "Deploying autonomous agents to eliminate friction and accelerate business growth.",
                image: "/landing/m2.svg",
            },
            {
                _key: "mis-3",
                title: "Unified Ecosystems",
                description:
                    "Connecting legacy systems with future AI for seamless organizational evolution.",
                image: "/landing/m3.svg",
            },
        ],

        technologyTitle: "Technology Excellence",
        technologySubtitle:
            "Cutting-edge infrastructure powering the next generation of enterprise AI.",
        technologyCards: [],

        partners: [
            { _key: "p-1", logo: "/partners/EMp.svg", alt: "Partner 1" },
            { _key: "p-2", logo: "/partners/EMp-1.svg", alt: "Partner 2" },
            { _key: "p-3", logo: "/partners/EMp-2-1.svg", alt: "Partner 3" },
            { _key: "p-4", logo: "/partners/EMp-3.svg", alt: "Partner 4" },
            { _key: "p-5", logo: "/partners/EMp-4.svg", alt: "Partner 5" },
            { _key: "p-6", logo: "/partners/EMp-5.svg", alt: "Partner 6" },
        ],

        ctaTitle: "Ready to Transform Your Enterprise?",
        ctaSubtitle: "Get started with ESAP AI today.",
        ctaButtonText: "Get Started",
        ctaButtonHref: "/contact",

        textRevealContent:
            "Forging the intelligence layer of tomorrow. Unlocking limitless potential.",
    });

    // ── ABOUT PAGE ──
    console.log("📄 Creating About Page...");
    await client.createOrReplace({
        _id: "aboutPage-en",
        _type: "aboutPage",
        language: "en",
        heroTitle: "About ESAP AI",
        heroSubtitle: "Building the future of enterprise intelligence.",
        teamMembers: [
            { _key: "tm-1", name: "Alex Morgan", role: "CEO & Founder", bio: "Visionary leader with over 15 years of experience in AI and strategic planning. Passionate about ethical AI development.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-2", name: "Sarah Chen", role: "CTO", bio: "Expert in machine learning and neural networks. Leads the technical vision and engineering teams at ESAP AI.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-3", name: "Marcus Johnson", role: "Head of Product", bio: "Product strategist focused on user-centric design and scalable solutions. formerly at major tech giants.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-4", name: "Emily Rodriguez", role: "Lead Designer", bio: "Award-winning designer creating intuitive and beautiful interfaces. Believes in design as a storytelling medium.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-5", name: "David Kim", role: "Senior AI Engineer", bio: "Specializes in NLP and large language models. Contributor to several open-source AI projects.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-6", name: "Lisa Wang", role: "Marketing Director", bio: "Creative marketer with a knack for viral campaigns and brand building in the tech sector.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-7", name: "James Wilson", role: "DevOps Engineer", bio: "Infrastructure expert ensuring seamless deployment and high availability of AI systems.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-8", name: "Robert Chen", role: "Frontend Developer", bio: "Passionate about creating responsive, accessible, and performant user interfaces.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { _key: "tm-9", name: "Sofia Martinez", role: "AI Ethics Researcher", bio: "Dedicated to ensuring fairness, transparency, and accountability in AI algorithms.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
        ],
        historyTitle: "Our Journey",
        historyPhases: [],
    });

    // ── PRODUCTS ──
    const productsData = [
        {
            _id: "product-erp-en",
            orderRank: 1,
            name: "ERP",
            slug: { _type: "slug", current: "erp" },
            description: "Voice Activated AI ERP for SMEs. Manage your entire business operation through natural voice commands while ensuring enterprise-grade security and efficiency.",
            menuDescription: "Voice-activated ERP for SMEs with AI-powered automation.",
            icon: "/products/erp.svg",
            heroSubtitle: ["Voice-Activated ERP for Modern SMEs. AI-powered voice commands for business."],
            heroCenterIcon: "/products/voiceerp.svg",
            heroCenterIconAlt: "Voice ERP Icon",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "Operational Intelligence",
            missionTitle: "Enterprise Voice Operations",
            missionSubtitle: "Manage your entire business operation through natural voice commands while ensuring security.",
            missionCards: [
                { _key: "mc-1", title: "Voice-First Interface", description: "Control all ERP functions through natural voice commands, making business management accessible and efficient for everyone." },
                { _key: "mc-2", title: "AI-Powered Automation", description: "Intelligent automation handles routine tasks, data entry, and reporting, freeing your team to focus on strategic decisions." },
                { _key: "mc-3", title: "SME-Optimized Design", description: "Built specifically for small and medium enterprises with scalable architecture that grows with your business needs." },
            ],
            automationTitle: "Intelligent Automation",
            automationSubtitle: "Streamline processes from chemical inventory to finance.",
            automationFeatures: [
                { _key: "af-1", title: "Adaptive Legacy Bridge", description: "Seamlessly wraps around existing systems to enable smart AI enhancements without disruption to your current operations." },
                { _key: "af-2", title: "Voice Command Suite", description: "Complete voice control for inventory, sales, accounting, and HR management with natural language processing." },
                { _key: "af-3", title: "Real-Time Analytics", description: "Get instant insights into your business performance with AI-driven analytics and predictive reporting." },
                { _key: "af-4", title: "Smart Workflow Automation", description: "Automate complex business processes with intelligent workflows that adapt to your operational patterns." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "Voice ERP in Action",
            performanceMetrics: [
                { _key: "pm-1", value: "75%", label: "Time Savings" },
                { _key: "pm-2", value: "90%", label: "User Satisfaction" },
                { _key: "pm-3", value: "3x", label: "Productivity Increase" },
            ],
            aceternityTitle: "Core ERP Features",
            aceternitySubtitle: "Powerful capabilities for modern businesses.",
            aceternityFeatures: [
                { _key: "ae-1", title: "Track Business Operations", description: "Track and manage your business operations with ease using our intuitive ERP interface.", className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800" },
                { _key: "ae-2", title: "Capture Insights with AI", description: "Capture business insights effortlessly using our advanced AI technology and analytics.", className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800" },
                { _key: "ae-3", title: "Watch ERP in Action", description: "See how our Voice-Activated ERP transforms business operations with real-world demonstrations.", className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800" },
                { _key: "ae-4", title: "Global Deployment", description: "Deploy your ERP system across multiple locations with our cloud infrastructure and global reach.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-ai-framework-en",
            orderRank: 2,
            name: "AI Framework",
            slug: { _type: "slug", current: "ai-framework" },
            description: "A comprehensive AI Agent & Automation Framework designed to build, deploy, and scale intelligent enterprise solutions with unprecedented speed.",
            menuDescription: "Build and deploy AI agents at enterprise scale.",
            icon: "/products/ai-framework.svg",
            heroSubtitle: ["Build powerful AI agents. Scalable enterprise solutions."],
            heroCenterIcon: "/products/ai-framework.svg",
            heroCenterIconAlt: "AI Framework Icon",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "Agent Orchestration",
            missionTitle: "Decentralized Intelligence Network",
            missionSubtitle: "Rapidly build and deploy AI agents at enterprise scale with modular reliability.",
            missionCards: [
                { _key: "mc-1", title: "Modular Architecture", description: "Flexible, composable components that adapt to your specific needs and use cases, enabling rapid development and customization." },
                { _key: "mc-2", title: "Easy Integration", description: "Seamlessly connect with existing systems, APIs, and third-party services through standardized interfaces and connectors." },
                { _key: "mc-3", title: "Scalable Design", description: "Built to handle enterprise-scale workloads with high performance, reliability, and automatic scaling capabilities." },
            ],
            automationTitle: "Automation Capabilities",
            automationSubtitle: "Sophisticated workflows with intuitive tooling.",
            automationFeatures: [
                { _key: "af-1", title: "Agent Orchestration", description: "Coordinate multiple AI agents to work together on complex tasks with intelligent task distribution and collaboration." },
                { _key: "af-2", title: "Workflow Builder", description: "Visual tools to design and deploy automation workflows without coding, with drag-and-drop simplicity." },
                { _key: "af-3", title: "Event-Driven Architecture", description: "React to system events and trigger automated responses in real-time with reactive programming patterns." },
                { _key: "af-4", title: "Monitoring & Analytics", description: "Track performance, debug issues, and optimize your automation workflows with comprehensive observability tools." },
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
                { _key: "ae-3", title: "Watch Framework Demo", description: "See how our AI Framework enables rapid development and deployment of enterprise AI solutions.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "Enterprise Scale", description: "Deploy and scale your AI solutions across enterprise infrastructure with high performance and reliability.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-zakra-en",
            orderRank: 3,
            name: "Zakra",
            slug: { _type: "slug", current: "zakra" },
            description: "Smart Knowledge Agent that delivers instant, context-aware answers from your entire knowledge base. Unlock the power of your organizational data.",
            menuDescription: "Smart knowledge agent for instant answers.",
            icon: "/products/zakra.svg",
            heroSubtitle: ["Intelligent Knowledge Management. Actionable insights from your data."],
            heroCenterIcon: "/products/zakra.svg",
            heroCenterIconAlt: "Zakra Knowledge Agent Icon",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "Knowledge Synthesis",
            missionTitle: "Unified Knowledge Intelligence",
            missionSubtitle: "Instant, context-aware answers from your entire knowledge base. Make information accessible.",
            missionCards: [
                { _key: "mc-1", title: "Intelligent Search", description: "Natural language queries that understand context and intent, delivering precise answers from your knowledge base." },
                { _key: "mc-2", title: "Multi-Source Integration", description: "Connect and search across documents, databases, wikis, and knowledge repositories in one unified interface." },
                { _key: "mc-3", title: "Context-Aware Responses", description: "Get answers that understand your specific domain, industry terminology, and organizational context." },
            ],
            automationTitle: "Knowledge Capabilities",
            automationSubtitle: "Effortless and intelligent knowledge management.",
            automationFeatures: [
                { _key: "af-1", title: "Semantic Search", description: "Find information using meaning, not just keywords. Understands synonyms, related concepts, and context." },
                { _key: "af-2", title: "Knowledge Graph", description: "Visualize connections between concepts, documents, and people to discover hidden relationships in your data." },
                { _key: "af-3", title: "Automated Summarization", description: "Generate concise summaries of long documents, meetings, and reports to save time and improve comprehension." },
                { _key: "af-4", title: "Real-Time Updates", description: "Stay current with automatic indexing of new content and notifications about relevant information changes." },
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
                { _key: "ae-1", title: "Intelligent Knowledge Search", description: "Search across your entire knowledge base with natural language queries and semantic understanding.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "Knowledge Graph Visualization", description: "Visualize connections between concepts, documents, and people in your knowledge base.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "Watch Zakra in Action", description: "See how Zakra transforms information retrieval and knowledge management for your organization.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "Multi-Source Integration", description: "Connect and search across documents, databases, wikis, and knowledge repositories seamlessly.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-jawib-en",
            orderRank: 4,
            name: "Jawib",
            slug: { _type: "slug", current: "jawib" },
            description: "Intelligent Customer Service Agent providing 24/7 personalized support. Transform your customer experience with seamless, human-like interactions.",
            menuDescription: "24/7 AI customer service agent.",
            icon: "/products/jawib.svg",
            heroSubtitle: ["24/7 AI Support. Exceptional customer experiences."],
            heroCenterIcon: "/products/jawib.svg",
            heroCenterIconAlt: "Jawib Customer Service Agent Icon",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "Service Automation",
            missionTitle: "Automated Support Resolution",
            missionSubtitle: "Intelligent Customer Service Agent providing 24/7 personalized support. Improve satisfaction and scale operations.",
            missionCards: [
                { _key: "mc-1", title: "24/7 Availability", description: "Provide instant support to customers anytime, anywhere, with intelligent responses that never sleep." },
                { _key: "mc-2", title: "Multi-Channel Support", description: "Engage customers across chat, email, phone, and social media with consistent, personalized experiences." },
                { _key: "mc-3", title: "Human Handoff", description: "Seamlessly escalate complex issues to human agents when needed, with full context and conversation history." },
            ],
            automationTitle: "Service Features",
            automationSubtitle: "Transform customer interactions.",
            automationFeatures: [
                { _key: "af-1", title: "Natural Language Understanding", description: "Understand customer intent, sentiment, and context to provide accurate, helpful responses in natural conversation." },
                { _key: "af-2", title: "Ticket Management", description: "Automatically create, prioritize, and track support tickets while maintaining detailed conversation logs." },
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
                { _key: "ae-1", title: "24/7 Customer Support", description: "Provide instant, intelligent customer support around the clock with natural language understanding.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "Multi-Channel Engagement", description: "Engage customers across chat, email, phone, and social media with consistent experiences.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "Watch Jawib Demo", description: "See how Jawib transforms customer service with AI-powered automation and intelligent responses.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "Global Support Network", description: "Scale your customer service operations globally with multi-language support and regional deployment.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
        {
            _id: "product-fasih-en",
            orderRank: 5,
            name: "Fasih",
            slug: { _type: "slug", current: "fasih" },
            description: "The native Arabic LLM bridging the gap with deep understanding of dialects and cultural nuances for accurate, regionally-aware processing.",
            menuDescription: "Native Arabic LLM with dialect support.",
            icon: "/products/fasih.svg",
            heroSubtitle: ["Native Arabic AI. Built for Arabic understanding."],
            heroCenterIcon: "/products/fasih.svg",
            heroCenterIconAlt: "Fasih Arabic LLM Icon",
            heroDemoVideo: "/fasih-demo.mp4",
            heroTagline: "Cultural Nuance",
            missionTitle: "Nuanced Arabic Understanding",
            missionSubtitle: "Bridging the gap with deep understanding of dialects and cultural nuances for accurate, regionally-aware processing.",
            missionCards: [
                { _key: "mc-1", title: "Native Arabic Understanding", description: "Deep understanding of Modern Standard Arabic, regional dialects, and cultural nuances for accurate communication." },
                { _key: "mc-2", title: "Cultural Context", description: "Trained on Arabic content with cultural awareness, ensuring appropriate and contextually relevant responses." },
                { _key: "mc-3", title: "Multi-Dialect Support", description: "Recognize and process various Arabic dialects while maintaining high accuracy across different regions." },
            ],
            automationTitle: "Arabic Capabilities",
            automationSubtitle: "Processing and generation for Arabic.",
            automationFeatures: [
                { _key: "af-1", title: "Text Generation", description: "Generate high-quality Arabic text for content creation, translations, and automated responses with natural fluency." },
                { _key: "af-2", title: "Language Understanding", description: "Deep semantic understanding of Arabic text, including complex grammar, idioms, and regional expressions." },
                { _key: "af-3", title: "Translation Services", description: "Accurate bidirectional translation between Arabic and other languages with context preservation." },
                { _key: "af-4", title: "Voice & Speech", description: "Support for Arabic speech recognition and text-to-speech with natural pronunciation and intonation." },
            ],
            youtubeVideoId: "oAuaVWvw0lM",
            youtubeVideoTitle: "Fasih Arabic LLM Overview",
            performanceMetrics: [
                { _key: "pm-1", value: "98%", label: "Arabic Text Accuracy" },
                { _key: "pm-2", value: "15", label: "Dialects Supported" },
                { _key: "pm-3", value: "50B+", label: "Arabic Tokens Trained" },
            ],
            aceternityTitle: "Fasih Features",
            aceternitySubtitle: "Leading native Arabic language model.",
            aceternityFeatures: [
                { _key: "ae-1", title: "Native Arabic Processing", description: "Deep understanding of Modern Standard Arabic, regional dialects, and cultural nuances for accurate communication.", className: "col-span-1 lg:col-span-4 border-b lg:border-r border-white-opacity-20" },
                { _key: "ae-2", title: "Multi-Dialect Support", description: "Recognize and process various Arabic dialects with high accuracy across different regions.", className: "border-b col-span-1 lg:col-span-2 border-white-opacity-20" },
                { _key: "ae-3", title: "Watch Fasih Overview", description: "See how Fasih delivers accurate, culturally-aware Arabic language processing for your applications.", className: "col-span-1 lg:col-span-3 lg:border-r border-white-opacity-20" },
                { _key: "ae-4", title: "Global Arabic Support", description: "Deploy Arabic language capabilities across global applications with regional dialect support.", className: "col-span-1 lg:col-span-3 border-b lg:border-none" },
            ],
        },
    ];

    console.log("📦 Creating Products...");
    for (const product of productsData) {
        await client.createOrReplace({
            ...product,
            _type: "productDocument",
            language: "en",
        });
        console.log(`   ✓ ${product.name}`);
    }

    // ── NAVIGATION ──
    console.log("🧭 Creating Navigation...");
    await client.createOrReplace({
        _id: "navigation-en",
        _type: "navigation",
        language: "en",
        navLinks: [
            { _key: "nav-1", label: "Home", href: "/" },
            { _key: "nav-2", label: "About", href: "/about" },
            { _key: "nav-3", label: "Products", href: "/products" },
            { _key: "nav-4", label: "Services", href: "/services" },
            { _key: "nav-5", label: "Case Studies", href: "/case-study" },
            { _key: "nav-6", label: "Contact", href: "/contact" },
        ],
        footerLinks: [
            { _key: "fl-1", label: "Privacy Policy", href: "/privacy" },
            { _key: "fl-2", label: "Terms of Service", href: "/terms" },
        ],
        ctaLabel: "Get Started",
        ctaHref: "/contact",
        copyrightText: "© 2025 ESAP AI. All rights reserved.",
        newsletterTitle: "Stay Updated",
        newsletterSubtitle: "Get the latest AI insights and updates delivered to your inbox.",
    });

    // ── SERVICE PAGE ──
    console.log("📄 Creating Service Page...");
    await client.createOrReplace({
        _id: "servicePage-en",
        _type: "servicePage",
        language: "en",
        heroTitle: "AI Services",
        heroSubtitle: "End-to-end AI solutions tailored for your enterprise needs.",
        heroTagline: "Enterprise Solutions",
        problemTitle: "The Challenge",
        problemSubtitle: "Enterprises face growing complexity in implementing AI at scale.",
        problemItems: [],
        featuresTitle: "What We Offer",
        featuresSubtitle: "Comprehensive AI services designed for enterprise needs.",
        features: [],
        processTitle: "Our Process",
        processSubtitle: "A proven methodology for delivering AI solutions.",
        processSteps: [],
        portalVideoTitle: "See It In Action",
        portalVideoDescription: "Watch how our AI services transform enterprise operations.",
        ctaTitle: "Ready to Get Started?",
        ctaSubtitle: "Let's build something extraordinary together.",
    });

    // ── CONTACT PAGE ──
    console.log("📄 Creating Contact Page...");
    await client.createOrReplace({
        _id: "contactPage-en",
        _type: "contactPage",
        language: "en",
        title: "Get in Touch",
        subtitle: "Ready to transform your enterprise with AI? Let's start a conversation.",
        email: "contact@esapai.com",
        phone: "",
        address: "",
    });

    console.log("\n✅ Seed complete! All content has been migrated to Sanity.\n");
}

seed().catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
});
