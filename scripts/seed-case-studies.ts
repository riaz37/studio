/**
 * Case Study Seed Script — Creates 3 case studies in English and Arabic.
 *
 * Usage:
 *   cd studio
 *   npx tsx scripts/seed-case-studies.ts
 *
 * Prerequisites:
 *   - studio/.env must have SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_API_TOKEN
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, "../.env") });

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-02-25",
});
// ── Placeholder image URLs (Unsplash) ──
const IMAGES = {
  // Hero images (2 per case study)
  hero: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc518d?w=1200",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
  ],
  // Timeline images (3 per timeline entry)
  timeline: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  ],
  // Thumbnails
  thumbnails: [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200",
  ],
};

/**
 * Upload an image from URL to Sanity and return an image reference object.
 */
async function uploadImage(
  imageUrl: string,
  alt: string
): Promise<{
  _type: "image";
  _key: string;
  alt: string;
  asset: { _type: "reference"; _ref: string };
}> {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${imageUrl}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename: `case-study-${Date.now()}.jpg`,
    contentType: "image/jpeg",
  });

  return {
    _type: "image",
    _key: crypto.randomUUID().slice(0, 12),
    alt,
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

// ── Case study data ──

interface CaseStudyData {
  id: string;
  slug: string;
  en: {
    title: string;
    subtitle: string;
    tags: string[];
    featured: boolean;
    timeline: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  };
  ar: {
    title: string;
    subtitle: string;
    tags: string[];
    featured: boolean;
    timeline: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  };
}

const caseStudies: CaseStudyData[] = [
  {
    id: "voice-revolution",
    slug: "voice-revolution",
    en: {
      title: "Voice Revolution in Enterprise ERP",
      subtitle:
        "How a leading manufacturing company transformed their operations by implementing ESAP AI's voice-activated ERP system, reducing data entry time by 70% and improving accuracy across all departments.",
      tags: ["ERP", "Voice AI", "Manufacturing", "Automation"],
      featured: true,
      timeline: [
        {
          date: "2024-01-15",
          title: "Discovery & Assessment",
          description:
            "Our team conducted a comprehensive audit of the client's existing ERP infrastructure, identifying critical bottlenecks in data entry workflows across 12 departments. We mapped over 200 manual processes that could be voice-automated, establishing clear ROI projections for each phase of implementation.",
        },
        {
          date: "2024-03-20",
          title: "Voice Integration & Training",
          description:
            "Deployed the voice-activated module across three pilot departments. Trained 150+ employees on natural language commands for inventory management, order processing, and reporting. The system learned company-specific terminology and adapted to regional accents within the first two weeks.",
        },
        {
          date: "2024-06-10",
          title: "Full Deployment & Results",
          description:
            "Rolled out voice-activated ERP across all departments. Data entry time dropped by 70%, error rates fell by 45%, and employee satisfaction scores rose by 60%. The system now processes over 10,000 voice commands daily with 98.5% accuracy.",
        },
      ],
    },
    ar: {
      title: "ثورة الصوت في أنظمة ERP المؤسسية",
      subtitle:
        "كيف حولت شركة تصنيع رائدة عملياتها من خلال تطبيق نظام ERP المُفعّل بالصوت من ESAP AI، مما أدى إلى تقليل وقت إدخال البيانات بنسبة 70% وتحسين الدقة في جميع الأقسام.",
      tags: ["نظام ERP", "الذكاء الصوتي", "التصنيع", "الأتمتة"],
      featured: true,
      timeline: [
        {
          date: "2024-01-15",
          title: "الاكتشاف والتقييم",
          description:
            "أجرى فريقنا تدقيقاً شاملاً للبنية التحتية لنظام ERP الحالي للعميل، وحدد الاختناقات الحرجة في سير عمل إدخال البيانات عبر 12 قسماً. قمنا بتخطيط أكثر من 200 عملية يدوية يمكن أتمتتها صوتياً، مع وضع توقعات واضحة للعائد على الاستثمار لكل مرحلة من مراحل التنفيذ.",
        },
        {
          date: "2024-03-20",
          title: "التكامل الصوتي والتدريب",
          description:
            "نشرنا وحدة التفعيل الصوتي عبر ثلاثة أقسام تجريبية. درّبنا أكثر من 150 موظفاً على أوامر اللغة الطبيعية لإدارة المخزون ومعالجة الطلبات وإعداد التقارير. تعلّم النظام المصطلحات الخاصة بالشركة وتكيّف مع اللهجات الإقليمية خلال الأسبوعين الأولين.",
        },
        {
          date: "2024-06-10",
          title: "النشر الكامل والنتائج",
          description:
            "طرحنا نظام ERP المُفعّل بالصوت عبر جميع الأقسام. انخفض وقت إدخال البيانات بنسبة 70%، وانخفضت معدلات الأخطاء بنسبة 45%، وارتفعت درجات رضا الموظفين بنسبة 60%. يعالج النظام الآن أكثر من 10,000 أمر صوتي يومياً بدقة 98.5%.",
        },
      ],
    },
  },
  {
    id: "intelligent-customer-service",
    slug: "intelligent-customer-service",
    en: {
      title: "Intelligent Customer Service Transformation",
      subtitle:
        "A major telecom provider deployed Jawib, our AI customer service agent, achieving 85% first-contact resolution and reducing average response time from 8 minutes to under 30 seconds.",
      tags: ["Jawib", "Customer Service", "Telecom", "NLP"],
      featured: false,
      timeline: [
        {
          date: "2024-02-01",
          title: "Challenge Analysis",
          description:
            "The telecom provider was handling 50,000+ daily customer inquiries with a team of 200 agents. Average wait times exceeded 15 minutes during peak hours, and customer satisfaction had dropped to 62%. We analyzed six months of support tickets to identify patterns and build the knowledge base for Jawib.",
        },
        {
          date: "2024-04-15",
          title: "Jawib Deployment & Learning",
          description:
            "Deployed Jawib across web chat and WhatsApp channels. The agent was trained on 100,000+ historical conversations and integrated with the billing, network status, and account management systems. During the first month, Jawib handled 30% of all inquiries autonomously while learning from human agent escalations.",
        },
        {
          date: "2024-07-01",
          title: "Scaling & Optimization",
          description:
            "Jawib now handles 75% of all customer inquiries without human intervention. First-contact resolution reached 85%, average response time dropped to 28 seconds, and customer satisfaction scores climbed to 91%. The human support team was reallocated to complex cases, improving their job satisfaction by 40%.",
        },
      ],
    },
    ar: {
      title: "تحول خدمة العملاء الذكية",
      subtitle:
        "نشر مزود اتصالات كبير جاوب، وكيل خدمة العملاء بالذكاء الاصطناعي، محققاً حل 85% من الاستفسارات من أول اتصال وتقليل متوسط وقت الاستجابة من 8 دقائق إلى أقل من 30 ثانية.",
      tags: ["جاوب", "خدمة العملاء", "الاتصالات", "معالجة اللغة الطبيعية"],
      featured: false,
      timeline: [
        {
          date: "2024-02-01",
          title: "تحليل التحديات",
          description:
            "كان مزود الاتصالات يتعامل مع أكثر من 50,000 استفسار يومي من العملاء بفريق مكون من 200 وكيل. تجاوزت أوقات الانتظار 15 دقيقة خلال ساعات الذروة، وانخفض رضا العملاء إلى 62%. حللنا ستة أشهر من تذاكر الدعم لتحديد الأنماط وبناء قاعدة المعرفة لجاوب.",
        },
        {
          date: "2024-04-15",
          title: "نشر جاوب والتعلم",
          description:
            "نشرنا جاوب عبر قنوات الدردشة والواتساب. تم تدريب الوكيل على أكثر من 100,000 محادثة تاريخية ودمجه مع أنظمة الفوترة وحالة الشبكة وإدارة الحسابات. خلال الشهر الأول، تعامل جاوب مع 30% من جميع الاستفسارات بشكل مستقل مع التعلم من تصعيدات الوكلاء البشريين.",
        },
        {
          date: "2024-07-01",
          title: "التوسع والتحسين",
          description:
            "يتعامل جاوب الآن مع 75% من جميع استفسارات العملاء دون تدخل بشري. وصل حل الاتصال الأول إلى 85%، وانخفض متوسط وقت الاستجابة إلى 28 ثانية، وارتفعت درجات رضا العملاء إلى 91%. تم إعادة تخصيص فريق الدعم البشري للحالات المعقدة، مما حسّن رضاهم الوظيفي بنسبة 40%.",
        },
      ],
    },
  },
  {
    id: "knowledge-management-revolution",
    slug: "knowledge-management-revolution",
    en: {
      title: "Knowledge Management Revolution",
      subtitle:
        "A global consulting firm deployed Zakra to unify their fragmented knowledge base spanning 15 years of reports, achieving 90% faster information retrieval and transforming how consultants access institutional knowledge.",
      tags: ["Zakra", "Knowledge Management", "Consulting", "AI Search"],
      featured: true,
      timeline: [
        {
          date: "2024-03-01",
          title: "Knowledge Audit & Architecture",
          description:
            "Mapped the consulting firm's knowledge landscape: 50,000+ reports, 200,000+ client documents, and decades of institutional expertise scattered across SharePoint, email archives, and local drives. Designed Zakra's ingestion pipeline to handle multi-format documents with context-preserving chunking.",
        },
        {
          date: "2024-05-15",
          title: "Zakra Integration & Indexing",
          description:
            "Ingested and indexed the entire knowledge base over 6 weeks. Zakra was integrated with the firm's existing tools — Slack, Microsoft Teams, and their custom CRM. Consultants could now query the system in natural language and receive precise answers with source citations in under 3 seconds.",
        },
        {
          date: "2024-08-01",
          title: "Enterprise-Wide Adoption",
          description:
            "Zakra achieved 95% adoption across all offices in 12 countries. Information retrieval time dropped by 90%, proposal preparation time decreased by 55%, and knowledge reuse across teams increased by 300%. The firm estimates annual savings of $2.4M in consultant hours previously spent searching for information.",
        },
      ],
    },
    ar: {
      title: "ثورة إدارة المعرفة",
      subtitle:
        "نشرت شركة استشارات عالمية زكرة لتوحيد قاعدة معرفتها المتفرقة التي تمتد لـ 15 عاماً من التقارير، محققة استرجاع معلومات أسرع بنسبة 90% وتحويل طريقة وصول الاستشاريين إلى المعرفة المؤسسية.",
      tags: ["زكرة", "إدارة المعرفة", "الاستشارات", "بحث الذكاء الاصطناعي"],
      featured: true,
      timeline: [
        {
          date: "2024-03-01",
          title: "تدقيق المعرفة والهندسة",
          description:
            "رسمنا خريطة المشهد المعرفي لشركة الاستشارات: أكثر من 50,000 تقرير، وأكثر من 200,000 وثيقة عملاء، وعقود من الخبرة المؤسسية المنتشرة عبر SharePoint وأرشيفات البريد الإلكتروني والأقراص المحلية. صممنا خط أنابيب استيعاب زكرة للتعامل مع المستندات متعددة الصيغ مع تقسيم يحافظ على السياق.",
        },
        {
          date: "2024-05-15",
          title: "تكامل زكرة والفهرسة",
          description:
            "استوعبنا وفهرسنا قاعدة المعرفة بالكامل على مدى 6 أسابيع. تم دمج زكرة مع أدوات الشركة الحالية — Slack وMicrosoft Teams ونظام CRM المخصص. أصبح بإمكان الاستشاريين الآن الاستعلام من النظام بلغة طبيعية والحصول على إجابات دقيقة مع اقتباسات المصدر في أقل من 3 ثوانٍ.",
        },
        {
          date: "2024-08-01",
          title: "الاعتماد على مستوى المؤسسة",
          description:
            "حققت زكرة اعتماداً بنسبة 95% عبر جميع المكاتب في 12 دولة. انخفض وقت استرجاع المعلومات بنسبة 90%، وانخفض وقت إعداد العروض بنسبة 55%، وزادت إعادة استخدام المعرفة بين الفرق بنسبة 300%. تقدر الشركة التوفير السنوي بـ 2.4 مليون دولار من ساعات الاستشاريين التي كانت تُنفق سابقاً في البحث عن المعلومات.",
        },
      ],
    },
  },
  {
    id: "financial-analytics-ai",
    slug: "financial-analytics-ai",
    en: {
      title: "AI-Driven Financial Analytics for Fintech",
      subtitle: "Unlocking real-time financial insights and predictive trends for a rapidly scaling fintech startup using ESAP AI's advanced data processing engine.",
      tags: ["Fintech", "Financial AI", "Data Analytics", "Predictive Modeling"],
      featured: false,
      timeline: [
        {
          date: "2024-04-01",
          title: "Architecture Design",
          description: "Designed a real-time data ingestion pipeline capable of processing millions of transactions per second with sub-millisecond latency. Integrated multi-layered security protocols to ensure data integrity and compliance.",
        },
        {
          date: "2024-06-15",
          title: "Model Training & Deployment",
          description: "Trained specialized LLMs on historical financial data to identify subtle market patterns. Deployed the analytics dashboard providing consultants with instant, actionable insights.",
        },
      ],
    },
    ar: {
      title: "تحليلات مالية مدفوعة بالذكاء الاصطناعي للتكنولوجيا المالية",
      subtitle: "إطلاق العنان للرؤى المالية في الوقت الفعلي والاتجاهات التنبؤية لشركة ناشئة سريعة النمو في مجال التكنولوجيا المالية باستخدام محرك معالجة البيانات المتقدم من ESAP AI.",
      tags: ["التكنولوجيا المالية", "الذكاء الاصطناعي المالي", "تحليلات البيانات", "النمذجة التنبؤية"],
      featured: false,
      timeline: [
        {
          date: "2024-04-01",
          title: "تصميم البنية التحتية",
          description: "تصميم خط أنابيب لاستيعاب البيانات في الوقت الفعلي قادر على معالجة ملايين المعاملات في الثانية بوقت استجابة أقل من ميلي ثانية. دمج بروتوكولات أمان متعددة الطبقات لضمان سلامة البيانات والامتثال.",
        },
        {
          date: "2024-06-15",
          title: "تدريب النموذج ونشره",
          description: "تدريب نماذج لغوية متخصصة على البيانات المالية التاريخية لتحديد أنماط السوق الدقيقة. نشر لوحة تحكم التحليلات التي تزود الاستشاريين برؤى فورية وقابلة للتنفيذ.",
        },
      ],
    },
  },
  {
    id: "smart-supply-chain",
    slug: "smart-supply-chain",
    en: {
      title: "Smart Supply Chain Optimization",
      subtitle: "Reducing logistics costs by 25% for a global retail giant through AI-powered predictive demand forecasting and automated warehouse management.",
      tags: ["Retail", "Supply Chain", "Logistics", "Optimization"],
      featured: false,
      timeline: [
        {
          date: "2024-02-10",
          title: "Process Mapping",
          description: "Analyzed fragmented supply chain data across 50 global locations. Identified inefficiencies in stock replenishment and transport routing using our AI diagnostic tools.",
        },
        {
          date: "2024-05-20",
          title: "Optimization Engine Launch",
          description: "Launched the AI optimization engine which autonomously manages inventory levels and suggests optimal shipping routes based on real-time weather and traffic data.",
        },
      ],
    },
    ar: {
      title: "تحسين سلاسل الإمداد الذكية",
      subtitle: "تقليل تكاليف الخدمات اللوجستية بنسبة 25% لشركة تجزئة عالمية عملاقة من خلال التنبؤ بالطلب المدعوم بالذكاء الاصطناعي وإدارة المستودعات المؤتمتة.",
      tags: ["التجزئة", "سلسلة الإمداد", "الخدمات اللوجستية", "التحسين"],
      featured: false,
      timeline: [
        {
          date: "2024-02-10",
          title: "تخطيط العمليات",
          description: "تحليل بيانات سلسلة التوريد المتفرقة عبر 50 موقعاً عالمياً. تحديد أوجه القصور في تعويض المخزون وتوجيه النقل باستخدام أدواتنا التشخيصية بالذكاء الاصطناعي.",
        },
        {
          date: "2024-05-20",
          title: "إطلاق محرك التحسين",
          description: "إطلاق محرك تحسين الذكاء الاصطناعي الذي يدير مستويات المخزون بشكل مستقل ويقترح طرق الشحن المثالية بناءً على بيانات الطقس وحركة المرور في الوقت الفعلي.",
        },
      ],
    },
  },
  {
    id: "healthcare-ai-assistant",
    slug: "healthcare-ai-assistant",
    en: {
      title: "Conversational Healthcare Assistant",
      subtitle: "Streamlining patient triage and scheduling for a major hospital network, reducing administrative burden by 40% and improving patient access to care.",
      tags: ["Healthcare", "Patient Care", "Scheduling", "Conversational AI"],
      featured: false,
      timeline: [
        {
          date: "2024-03-15",
          title: "Regulatory Compliance Audit",
          description: "Ensured full compliance with healthcare data privacy regulations (HIPAA/GDPR). Designed a secure, encrypted interface for patient interaction with the AI assistant.",
        },
        {
          date: "2024-07-01",
          title: "Assistant Deployment",
          description: "Deployed the AI assistant across the hospital's portal and mobile app. The system now handles 60% of routine inquiries and scheduling requests autonomously.",
        },
      ],
    },
    ar: {
      title: "مساعد رعاية صحية محادثاتي",
      subtitle: "تبسيط فرز المرضى وجدولة المواعيد لشبكة مستشفيات كبرى، مما يقلل العبء الإداري بنسبة 40% ويحسن وصول المرضى إلى الرعاية.",
      tags: ["الرعاية الصحية", "رعاية المرضى", "الجدولة", "الذكاء الاصطناعي المحادثاتي"],
      featured: false,
      timeline: [
        {
          date: "2024-03-15",
          title: "تدقيق الامتثال التنظيمي",
          description: "ضمان الامتثال الكامل للوائح خصوصية البيانات الصحية (HIPAA/GDPR). تصميم واجهة آمنة ومشفرة لتفاعل المرضى مع مساعد الذكاء الاصطناعي.",
        },
        {
          date: "2024-07-01",
          title: "نشر المساعد",
          description: "نشر مساعد الذكاط الاصطناعي عبر بوابة المستشفى وتطبيقه على الهاتف المحمول. يتعامل النظام الآن مع 60% من الاستفسارات الروتينية وطلبات الجدولة بشكل مستقل.",
        },
      ],
    },
  },
  {
    id: "ai-content-gen-marketing",
    slug: "ai-content-gen-marketing",
    en: {
      title: "AI-Powered Content Generation",
      subtitle: "Empowering a global marketing agency to produce high-quality, culturally nuanced content in both Arabic and English at 10x speed using our generative AI tools.",
      tags: ["Marketing", "Content Strategy", "Generative AI", "Localization"],
      featured: false,
      timeline: [
        {
          date: "2024-01-20",
          title: "Creative Workflow Integration",
          description: "Integrated our generative AI engine into the agency's creative suite, allowing for seamless transition from brief to multiple content variations in seconds.",
        },
        {
          date: "2024-04-10",
          title: "Multilingual Excellence",
          description: "Fine-tuned the model for localized Arabic dialects, ensuring marketing copy resonates with diverse audiences while maintaining brand consistency across regions.",
        },
      ],
    },
    ar: {
      title: "توليد المحتوى المدعوم بالذكاء الاصطناعي",
      subtitle: "تمكين وكالة تسويق عالمية من إنتاج محتوى عالي الجودة ومراعي للثقافات باللغتين العربية والإنجليزية بسرعة أكبر بـ 10 أضعاف باستخدام أدواتنا للذكاء الاصطناعي التوليدي.",
      tags: ["التسويق", "استراتيجية المحتوى", "الذكاء الاصطناعي التوليدي", "التوطين"],
      featured: false,
      timeline: [
        {
          date: "2024-01-20",
          title: "تكامل سير العمل الإبداعي",
          description: "دمج محرك الذكاء الاصطناعي التوليدي الخاص بنا في المجموعة الإبداعية للوكالة، مما يسمح بالانتقال السلس من الموجز إلى أشكال متعددة للمحتوى في ثوانٍ.",
        },
        {
          date: "2024-04-10",
          title: "التميز متعدد اللغات",
          description: "ضبط النموذج للهجات العربية المحلية، مما يضمن صدى النسخ التسويقية لدى الجماهير المتنوعة مع الحفاظ على اتساق العلامة التجارية عبر المناطق.",
        },
      ],
    },
  },
  {
    id: "predictive-maintenance-industrial",
    slug: "predictive-maintenance-industrial",
    en: {
      title: "Predictive Maintenance for Industrial IoT",
      subtitle: "Preventing costly equipment downtime for a heavy industry manufacturer by deploying IoT sensors integrated with AI predictive maintenance models.",
      tags: ["Industrial IoT", "Predictive Maintenance", "Manufacturing", "Reliability"],
      featured: true,
      timeline: [
        {
          date: "2024-05-01",
          title: "Sensor Network Deployment",
          description: "Installed thousands of IoT sensors across critical machinery. Established a robust data transmission network to our cloud-based AI analytics platform.",
        },
        {
          date: "2024-08-15",
          title: "System Stabilization",
          description: "The AI models began accurately predicting failure windows with 90% confidence, allowing for scheduled maintenance and avoiding emergency shutdowns.",
        },
      ],
    },
    ar: {
      title: "الصيانة التنبؤية لإنترنت الأشياء الصناعي",
      subtitle: "منع تعطل المعدات المكلف لمصنع صناعات ثقيلة من خلال نشر مستشعرات إنترنت الأشياء المتكاملة مع نماذج الصيانة التنبؤية بالذكاء الاصطناعي.",
      tags: ["إنترنت الأشياء الصناعي", "الصيانة التنبؤية", "التصنيع", "الموثوقية"],
      featured: true,
      timeline: [
        {
          date: "2024-05-01",
          title: "نشر شبكة المستشعرات",
          description: "تركيب آلاف مستشعرات إنترنت الأشياء عبر الآلات الحيوية. إنشاء شبكة قوية لنقل البيانات إلى منصة تحليلات الذكاء الاصطناعي القائمة على السحابة.",
        },
        {
          date: "2024-08-15",
          title: "استقرار النظام",
          description: "بدأت نماذج الذكاء الاصطناعي في التنبؤ بدقة بفترات الفشل بثقة 90%، مما سمح بالصيانة المجدولة وتجنب عمليات الإغلاق الطارئة.",
        },
      ],
    },
  },
];

async function seedCaseStudies() {
  console.log("Seeding 3 case studies (EN + AR)...\n");

  // Upload all images first
  console.log("Uploading images to Sanity...");
  const uploadedHeroImages: Awaited<ReturnType<typeof uploadImage>>[] = [];
  for (let i = 0; i < IMAGES.hero.length; i++) {
    console.log(`  Hero image ${i + 1}/${IMAGES.hero.length}...`);
    uploadedHeroImages.push(await uploadImage(IMAGES.hero[i], `Case study hero image ${i + 1}`));
  }

  const uploadedTimelineImages: Awaited<ReturnType<typeof uploadImage>>[] = [];
  for (let i = 0; i < IMAGES.timeline.length; i++) {
    console.log(`  Timeline image ${i + 1}/${IMAGES.timeline.length}...`);
    uploadedTimelineImages.push(await uploadImage(IMAGES.timeline[i], `Timeline image ${i + 1}`));
  }

  const uploadedThumbnails: Awaited<ReturnType<typeof uploadImage>>[] = [];
  for (let i = 0; i < IMAGES.thumbnails.length; i++) {
    console.log(`  Thumbnail ${i + 1}/${IMAGES.thumbnails.length}...`);
    uploadedThumbnails.push(await uploadImage(IMAGES.thumbnails[i], `Case study thumbnail ${i + 1}`));
  }

  console.log(`Uploaded ${uploadedHeroImages.length + uploadedTimelineImages.length + uploadedThumbnails.length} images.\n`);

  for (let csIndex = 0; csIndex < caseStudies.length; csIndex++) {
    const cs = caseStudies[csIndex];

    // Pick hero images for this case study (2 per case study)
    // Use modulo to cycle through available hero images if there are more case studies than image pairs
    const heroImgs = [
      uploadedHeroImages[(csIndex * 2) % uploadedHeroImages.length],
      uploadedHeroImages[(csIndex * 2 + 1) % uploadedHeroImages.length],
    ];

    // Pick thumbnail for this case study
    // Use modulo to cycle through available thumbnails
    const thumbnail = uploadedThumbnails[csIndex % uploadedThumbnails.length];

    // Build timeline entries with images (3 images per entry)
    function buildTimeline(
      entries: Array<{ date: string; title: string; description: string }>
    ) {
      return entries.map((entry, entryIndex) => ({
        _key: `tl-${csIndex}-${entryIndex}`,
        date: entry.date,
        title: entry.title,
        description: entry.description,
        images: [
          uploadedTimelineImages[(csIndex * 3 + entryIndex) % uploadedTimelineImages.length],
          uploadedTimelineImages[(csIndex * 3 + entryIndex + 1) % uploadedTimelineImages.length],
          uploadedTimelineImages[(csIndex * 3 + entryIndex + 2) % uploadedTimelineImages.length],
        ],
      }));
    }

    // ── English version ──
    console.log(`Creating: ${cs.en.title} (en)...`);
    await client.createOrReplace({
      _id: `caseStudy-${cs.id}-en`,
      _type: "caseStudy",
      language: "en",
      title: cs.en.title,
      slug: { _type: "slug", current: cs.slug },
      subtitle: cs.en.subtitle,
      tags: cs.en.tags,
      thumbnail,
      heroImages: heroImgs,
      timeline: buildTimeline(cs.en.timeline),
      publishedAt: new Date().toISOString(),
      featured: cs.en.featured,
    });

    // ── Arabic version ──
    console.log(`Creating: ${cs.ar.title} (ar)...`);
    await client.createOrReplace({
      _id: `caseStudy-${cs.id}-ar`,
      _type: "caseStudy",
      language: "ar",
      title: cs.ar.title,
      slug: { _type: "slug", current: cs.slug },
      subtitle: cs.ar.subtitle,
      tags: cs.ar.tags,
      thumbnail,
      heroImages: heroImgs,
      timeline: buildTimeline(cs.ar.timeline),
      publishedAt: new Date().toISOString(),
      featured: cs.ar.featured,
    });

    console.log("");
  }

  console.log("Done! Created 6 documents (3 EN + 3 AR).");
  console.log("\nSlugs:");
  for (const cs of caseStudies) {
    console.log(`  /en/case-study/${cs.slug}`);
    console.log(`  /ar/case-study/${cs.slug}`);
  }
}

seedCaseStudies().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
