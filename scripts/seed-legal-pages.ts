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

// Helper to create a portable text block (paragraph)
function block(text: string): object {
    return {
        _type: "block",
        _key: crypto.randomUUID().slice(0, 8),
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 8), text, marks: [] }],
    };
}

// Helper for h3 heading block
function h3(text: string): object {
    return {
        _type: "block",
        _key: crypto.randomUUID().slice(0, 8),
        style: "h3",
        markDefs: [],
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 8), text, marks: [] }],
    };
}

// Helper for bullet list items
function bulletList(items: string[]): object[] {
    return items.map((text) => ({
        _type: "block",
        _key: crypto.randomUUID().slice(0, 8),
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 8), text, marks: [] }],
    }));
}

// Helper to create a section
function section(heading: string, content: object[]): object {
    return {
        _type: "legalSection",
        _key: crypto.randomUUID().slice(0, 8),
        heading,
        content,
    };
}

// ── English Privacy Policy ──
const privacyEN = {
    _id: "legal-privacy-en",
    _type: "legalPage",
    language: "en",
    pageType: "privacy",
    title: "Privacy Policy",
    lastUpdated: "December 2025",
    metaDescription: "ESAP AI Privacy Policy - Learn how we collect, use, and protect your personal information.",
    contactEmail: "contact@esap.ai",
    contactAddress: "ESAP AI, 7404, King Abdul Aziz Road 4340, Riyadh 12282, Kingdom of Saudi Arabia",
    sections: [
        section("1. Introduction", [
            block('ESAP AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI platform, including our voice-activated ERP systems, enterprise security solutions, and related services (collectively, the "Services").'),
            block("By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services."),
        ]),
        section("2. Information We Collect", [
            block("We collect several types of information from and about users of our Services:"),
            h3("2.1 Personal Information"),
            ...bulletList([
                "Name, email address, phone number, and other contact information",
                "Company name, job title, and business information",
                "Account credentials and authentication information",
                "Billing and payment information",
                "Profile information and preferences",
            ]),
            h3("2.2 Usage Data"),
            ...bulletList([
                "Log data including IP addresses, browser type, device information, and access times",
                "Usage patterns, feature interactions, and service performance metrics",
                "Voice commands and interactions with our voice-activated systems",
                "Error logs and diagnostic information",
            ]),
            h3("2.3 Business Data"),
            ...bulletList([
                "Data you input into our ERP systems and AI platforms",
                "Business processes, workflows, and operational data",
                "Documents, files, and content uploaded to our Services",
                "Integration data from third-party services",
            ]),
            h3("2.4 AI Training Data"),
            block("To improve our AI models and services, we may use anonymized and aggregated data from your usage of our Services. This data is processed in a way that cannot identify you personally and is used solely to enhance the accuracy and performance of our AI systems."),
        ]),
        section("3. How We Use Your Information", [
            block("We use the information we collect for the following purposes:"),
            ...bulletList([
                "To provide, maintain, and improve our Services",
                "To process transactions and manage your account",
                "To communicate with you about your account, our Services, and updates",
                "To train and improve our AI models and algorithms",
                "To personalize your experience and provide relevant content",
                "To detect, prevent, and address technical issues and security threats",
                "To comply with legal obligations and enforce our terms",
                "To conduct research and analytics to improve our Services",
            ]),
        ]),
        section("4. Data Sharing and Disclosure", [
            block("We do not sell your personal information. We may share your information in the following circumstances:"),
            ...bulletList([
                "With service providers and vendors who assist us in operating our Services (under strict confidentiality agreements)",
                "When required by law, court order, or governmental authority",
                "To protect our rights, property, or safety, or that of our users",
                "In connection with a merger, acquisition, or sale of assets (with notice to users)",
                "With your explicit consent or at your direction",
            ]),
            block("We may share aggregated, anonymized data that cannot identify you for research, analytics, or business purposes."),
        ]),
        section("5. Data Security", [
            block("We implement industry-standard security measures to protect your information, including:"),
            ...bulletList([
                "Encryption of data in transit and at rest",
                "Access controls and authentication mechanisms",
                "Regular security assessments and vulnerability testing",
                "Employee training on data protection and privacy",
                "Compliance with security standards and best practices",
            ]),
            block("However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."),
        ]),
        section("6. Your Rights and Choices", [
            block("Depending on your location, you may have the following rights regarding your personal information:"),
            ...bulletList([
                "Access: Request access to your personal information",
                "Correction: Request correction of inaccurate or incomplete data",
                "Deletion: Request deletion of your personal information",
                "Portability: Request transfer of your data to another service",
                "Objection: Object to certain processing activities",
                "Restriction: Request restriction of processing",
                "Withdraw Consent: Withdraw consent where processing is based on consent",
            ]),
            block("To exercise these rights, please contact us at contact@esap.ai. We will respond to your request within a reasonable timeframe and in accordance with applicable law."),
        ]),
        section("7. Cookies and Tracking Technologies", [
            block("We use cookies, web beacons, and similar tracking technologies to collect information about your interactions with our Services. These technologies help us:"),
            ...bulletList([
                "Remember your preferences and settings",
                "Analyze usage patterns and improve our Services",
                "Provide personalized content and features",
                "Ensure security and prevent fraud",
            ]),
            block("You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Services."),
        ]),
        section("8. International Data Transfers", [
            block("Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate safeguards to ensure your information receives adequate protection, including:"),
            ...bulletList([
                "Standard contractual clauses approved by data protection authorities",
                "Adequacy decisions by relevant authorities",
                "Other appropriate legal mechanisms",
            ]),
        ]),
        section("9. Data Retention", [
            block("We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it."),
        ]),
        section("10. Children's Privacy", [
            block("Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information."),
        ]),
        section("11. Third-Party Links and Services", [
            block("Our Services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information."),
        ]),
        section("12. Changes to This Privacy Policy", [
            block('We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the updated Privacy Policy.'),
        ]),
        section("13. Contact Us", [
            block("If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us."),
        ]),
    ],
};

// ── Arabic Privacy Policy ──
const privacyAR = {
    _id: "legal-privacy-ar",
    _type: "legalPage",
    language: "ar",
    pageType: "privacy",
    title: "سياسة الخصوصية",
    lastUpdated: "ديسمبر ٢٠٢٥",
    metaDescription: "سياسة الخصوصية لإساب للذكاء الاصطناعي - تعرف على كيفية جمع واستخدام وحماية معلوماتك الشخصية.",
    contactEmail: "contact@esap.ai",
    contactAddress: "إساب للذكاء الاصطناعي، ٧٤٠٤، طريق الملك عبدالعزيز ٤٣٤٠، الرياض ١٢٢٨٢، المملكة العربية السعودية",
    sections: [
        section("١. المقدمة", [
            block('تلتزم إساب للذكاء الاصطناعي ("نحن" أو "لنا" أو "خاصتنا") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والإفصاح عن معلوماتك وحمايتها عند استخدامك لمنصة الذكاء الاصطناعي الخاصة بنا، بما في ذلك أنظمة تخطيط موارد المؤسسات المُفعّلة بالصوت، وحلول أمن المؤسسات، والخدمات ذات الصلة (يُشار إليها مجتمعة بـ "الخدمات").'),
            block("من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على جمع واستخدام المعلومات وفقًا لسياسة الخصوصية هذه. إذا كنت لا توافق على سياساتنا وممارساتنا، يرجى عدم استخدام خدماتنا."),
        ]),
        section("٢. المعلومات التي نجمعها", [
            block("نجمع عدة أنواع من المعلومات من مستخدمي خدماتنا وعنهم:"),
            h3("٢.١ المعلومات الشخصية"),
            ...bulletList([
                "الاسم وعنوان البريد الإلكتروني ورقم الهاتف ومعلومات الاتصال الأخرى",
                "اسم الشركة والمسمى الوظيفي ومعلومات العمل",
                "بيانات اعتماد الحساب ومعلومات المصادقة",
                "معلومات الفواتير والدفع",
                "معلومات الملف الشخصي والتفضيلات",
            ]),
            h3("٢.٢ بيانات الاستخدام"),
            ...bulletList([
                "بيانات السجل بما في ذلك عناوين IP ونوع المتصفح ومعلومات الجهاز وأوقات الوصول",
                "أنماط الاستخدام وتفاعلات الميزات ومقاييس أداء الخدمة",
                "الأوامر الصوتية والتفاعلات مع أنظمتنا المُفعّلة بالصوت",
                "سجلات الأخطاء ومعلومات التشخيص",
            ]),
            h3("٢.٣ بيانات الأعمال"),
            ...bulletList([
                "البيانات التي تدخلها في أنظمة تخطيط موارد المؤسسات ومنصات الذكاء الاصطناعي",
                "عمليات الأعمال وسير العمل والبيانات التشغيلية",
                "المستندات والملفات والمحتوى المرفوع إلى خدماتنا",
                "بيانات التكامل من خدمات الطرف الثالث",
            ]),
            h3("٢.٤ بيانات تدريب الذكاء الاصطناعي"),
            block("لتحسين نماذج وخدمات الذكاء الاصطناعي لدينا، قد نستخدم بيانات مجهولة الهوية ومجمعة من استخدامك لخدماتنا. تتم معالجة هذه البيانات بطريقة لا يمكن أن تحدد هويتك شخصيًا وتُستخدم فقط لتعزيز دقة وأداء أنظمة الذكاء الاصطناعي لدينا."),
        ]),
        section("٣. كيف نستخدم معلوماتك", [
            block("نستخدم المعلومات التي نجمعها للأغراض التالية:"),
            ...bulletList([
                "لتوفير خدماتنا وصيانتها وتحسينها",
                "لمعالجة المعاملات وإدارة حسابك",
                "للتواصل معك بشأن حسابك وخدماتنا والتحديثات",
                "لتدريب وتحسين نماذج وخوارزميات الذكاء الاصطناعي لدينا",
                "لتخصيص تجربتك وتقديم محتوى ذي صلة",
                "لاكتشاف المشكلات التقنية والتهديدات الأمنية ومنعها ومعالجتها",
                "للامتثال للالتزامات القانونية وتنفيذ شروطنا",
                "لإجراء البحوث والتحليلات لتحسين خدماتنا",
            ]),
        ]),
        section("٤. مشاركة البيانات والإفصاح", [
            block("نحن لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك في الظروف التالية:"),
            ...bulletList([
                "مع مزودي الخدمات والموردين الذين يساعدوننا في تشغيل خدماتنا (بموجب اتفاقيات سرية صارمة)",
                "عندما يقتضي القانون أو أمر المحكمة أو السلطة الحكومية",
                "لحماية حقوقنا أو ممتلكاتنا أو سلامتنا أو سلامة مستخدمينا",
                "فيما يتعلق بعملية اندماج أو استحواذ أو بيع أصول (مع إخطار المستخدمين)",
                "بموافقتك الصريحة أو بتوجيهك",
            ]),
            block("قد نشارك بيانات مجمعة ومجهولة الهوية لا يمكنها تحديد هويتك لأغراض البحث والتحليل والأعمال."),
        ]),
        section("٥. أمن البيانات", [
            block("نطبق إجراءات أمنية متوافقة مع معايير الصناعة لحماية معلوماتك، بما في ذلك:"),
            ...bulletList([
                "تشفير البيانات أثناء النقل وفي حالة السكون",
                "ضوابط الوصول وآليات المصادقة",
                "تقييمات أمنية منتظمة واختبار الثغرات",
                "تدريب الموظفين على حماية البيانات والخصوصية",
                "الامتثال لمعايير الأمان وأفضل الممارسات",
            ]),
            block("ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة ١٠٠٪. بينما نسعى جاهدين لحماية معلوماتك، لا يمكننا ضمان الأمان المطلق."),
        ]),
        section("٦. حقوقك وخياراتك", [
            block("اعتمادًا على موقعك، قد يكون لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:"),
            ...bulletList([
                "الوصول: طلب الوصول إلى معلوماتك الشخصية",
                "التصحيح: طلب تصحيح البيانات غير الدقيقة أو غير المكتملة",
                "الحذف: طلب حذف معلوماتك الشخصية",
                "النقل: طلب نقل بياناتك إلى خدمة أخرى",
                "الاعتراض: الاعتراض على أنشطة معالجة معينة",
                "التقييد: طلب تقييد المعالجة",
                "سحب الموافقة: سحب الموافقة حيث تستند المعالجة إلى الموافقة",
            ]),
            block("لممارسة هذه الحقوق، يرجى التواصل معنا على contact@esap.ai. سنرد على طلبك في إطار زمني معقول ووفقًا للقانون المعمول به."),
        ]),
        section("٧. ملفات تعريف الارتباط وتقنيات التتبع", [
            block("نستخدم ملفات تعريف الارتباط وإشارات الويب وتقنيات التتبع المماثلة لجمع معلومات حول تفاعلاتك مع خدماتنا. تساعدنا هذه التقنيات في:"),
            ...bulletList([
                "تذكر تفضيلاتك وإعداداتك",
                "تحليل أنماط الاستخدام وتحسين خدماتنا",
                "توفير محتوى وميزات مخصصة",
                "ضمان الأمان ومنع الاحتيال",
            ]),
            block("يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح. ومع ذلك، قد يؤدي تعطيل ملفات تعريف الارتباط إلى تقييد قدرتك على استخدام ميزات معينة في خدماتنا."),
        ]),
        section("٨. نقل البيانات الدولي", [
            block("قد يتم نقل معلوماتك ومعالجتها في بلدان أخرى غير بلد إقامتك. قد يكون لهذه البلدان قوانين حماية بيانات تختلف عن تلك الموجودة في بلدك. نتخذ الضمانات المناسبة لضمان حصول معلوماتك على حماية كافية، بما في ذلك:"),
            ...bulletList([
                "البنود التعاقدية القياسية المعتمدة من سلطات حماية البيانات",
                "قرارات الملاءمة من السلطات المختصة",
                "آليات قانونية مناسبة أخرى",
            ]),
        ]),
        section("٩. الاحتفاظ بالبيانات", [
            block("نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، ما لم تكن فترة احتفاظ أطول مطلوبة أو مسموحًا بها بموجب القانون. عندما لا نعود بحاجة إلى معلوماتك، سنحذفها بأمان أو نجعلها مجهولة الهوية."),
        ]),
        section("١٠. خصوصية الأطفال", [
            block("خدماتنا غير مخصصة للأفراد الذين تقل أعمارهم عن ١٨ عامًا. نحن لا نجمع عن علم معلومات شخصية من الأطفال. إذا كنت تعتقد أننا جمعنا معلومات من طفل، يرجى الاتصال بنا فورًا، وسنتخذ خطوات لحذف هذه المعلومات."),
        ]),
        section("١١. روابط وخدمات الطرف الثالث", [
            block("قد تحتوي خدماتنا على روابط لمواقع ويب تابعة لأطراف ثالثة أو تتكامل مع خدمات أطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية لهذه الأطراف الثالثة. نشجعك على مراجعة سياسات الخصوصية الخاصة بهم قبل تقديم أي معلومات."),
        ]),
        section("١٢. التغييرات على سياسة الخصوصية هذه", [
            block('قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنُعلمك بأي تغييرات جوهرية عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث". يُعد استمرارك في استخدام خدماتنا بعد هذه التغييرات قبولًا لسياسة الخصوصية المحدثة.'),
        ]),
        section("١٣. اتصل بنا", [
            block("إذا كانت لديك أسئلة أو مخاوف أو طلبات بشأن سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى التواصل معنا."),
        ]),
    ],
};

// ── English Terms & Conditions ──
const termsEN = {
    _id: "legal-terms-en",
    _type: "legalPage",
    language: "en",
    pageType: "terms",
    title: "Terms & Conditions",
    lastUpdated: "December 2025",
    metaDescription: "ESAP AI Terms & Conditions - Read our terms of service for using our AI platform and services.",
    contactEmail: "legal@esap.ai",
    contactAddress: "ESAP AI, 7404, King Abdul Aziz Road 4340, Riyadh 12282, Kingdom of Saudi Arabia",
    sections: [
        section("1. Acceptance of Terms", [
            block('Welcome to ESAP AI. These Terms & Conditions ("Terms") govern your access to and use of ESAP AI\'s services, including our AI platform, voice-activated ERP systems, enterprise security solutions, and related services (collectively, the "Services").'),
            block("By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services. These Terms constitute a legally binding agreement between you and ESAP AI."),
        ]),
        section("2. Description of Services", [
            block("ESAP AI provides an artificial intelligence platform designed to protect and enhance enterprise operations. Our Services include:"),
            ...bulletList([
                "AI-powered security solutions for enterprise protection",
                "Voice-activated Enterprise Resource Planning (ERP) systems",
                "AI automation and workflow management tools",
                "Integration services and API access",
                "Consulting and support services",
                "Other AI-related products and services as described on our website",
            ]),
            block("We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice."),
        ]),
        section("3. User Accounts and Registration", [
            block("To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:"),
            ...bulletList([
                "Provide accurate, current, and complete information",
                "Maintain and promptly update your account information",
                "Maintain the security of your account credentials",
                "Accept responsibility for all activities under your account",
                "Notify us immediately of any unauthorized access or use",
            ]),
            block("You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to protect your account information."),
        ]),
        section("4. Acceptable Use Policy", [
            block("You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:"),
            ...bulletList([
                "Violate any applicable laws, regulations, or third-party rights",
                "Use the Services to transmit malicious code, viruses, or harmful data",
                "Attempt to gain unauthorized access to our systems or other users' accounts",
                "Interfere with or disrupt the integrity or performance of our Services",
                "Use the Services to process or store illegal content or data",
                "Reverse engineer, decompile, or disassemble any part of our Services",
                "Use automated systems to access our Services without authorization",
                "Impersonate any person or entity or misrepresent your affiliation",
                "Collect or harvest information about other users without consent",
                "Use the Services for any competitive intelligence or benchmarking purposes",
            ]),
            block("Violation of this Acceptable Use Policy may result in immediate termination of your access to our Services and may subject you to legal liability."),
        ]),
        section("5. Intellectual Property Rights", [
            block("The Services, including all content, features, functionality, software, algorithms, and technology, are owned by ESAP AI and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws."),
            block("Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business purposes. This license does not include the right to:"),
            ...bulletList([
                "Resell, sublicense, or distribute the Services",
                "Modify, adapt, or create derivative works",
                "Remove or alter any proprietary notices",
                "Use our trademarks, logos, or branding without permission",
            ]),
            block("You retain ownership of any data, content, or materials you provide to us. By using our Services, you grant us a license to use, process, and store your data as necessary to provide and improve our Services, subject to our Privacy Policy."),
        ]),
        section("6. Payment Terms", [
            block("Certain features of our Services may require payment. When you purchase a paid subscription or service:"),
            ...bulletList([
                "You agree to pay all fees as described at the time of purchase",
                "Fees are billed in advance on a recurring basis (monthly or annually)",
                "All fees are non-refundable except as required by law or as explicitly stated",
                "We reserve the right to change our pricing with 30 days' notice",
                "You are responsible for any taxes applicable to your purchase",
                "Failure to pay may result in suspension or termination of your account",
            ]),
            block("Refunds, if applicable, will be processed according to our refund policy, which may vary by service type."),
        ]),
        section("7. Service Availability and Modifications", [
            block("We strive to maintain high availability of our Services but do not guarantee uninterrupted or error-free operation. We may:"),
            ...bulletList([
                "Perform scheduled maintenance with reasonable notice",
                "Make changes to our Services at any time",
                "Suspend or terminate Services for violations of these Terms",
                "Modify or discontinue features with or without notice",
            ]),
            block("We are not liable for any downtime, interruptions, or service modifications."),
        ]),
        section("8. AI-Generated Content and Outputs", [
            block("Our Services use artificial intelligence and machine learning technologies. You acknowledge that:"),
            ...bulletList([
                "AI-generated outputs may contain errors or inaccuracies",
                "You should verify and review all AI-generated content before use",
                "We do not guarantee the accuracy, completeness, or reliability of AI outputs",
                "You are responsible for your use of AI-generated content",
                "AI models may be updated or changed, affecting output quality",
            ]),
            block("You should not rely solely on AI-generated content for critical business decisions without appropriate human oversight and verification."),
        ]),
        section("9. Data and Privacy", [
            block("Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy."),
            block("You are responsible for ensuring that any data you provide to us complies with applicable laws and does not infringe on third-party rights. You represent that you have the right to provide any data you submit to our Services."),
        ]),
        section("10. Limitation of Liability", [
            block("TO THE MAXIMUM EXTENT PERMITTED BY LAW, ESAP AI AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE OUR SERVICES."),
            block("OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER."),
            block("Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you."),
        ]),
        section("11. Indemnification", [
            block("You agree to indemnify, defend, and hold harmless ESAP AI, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or relating to:"),
            ...bulletList([
                "Your use of our Services",
                "Your violation of these Terms",
                "Your violation of any third-party rights",
                "Any data or content you provide to us",
            ]),
        ]),
        section("12. Termination", [
            block("We may terminate or suspend your access to our Services immediately, without prior notice, for any reason, including if you breach these Terms."),
            block("You may terminate your account at any time by contacting us or using account management features. Upon termination:"),
            ...bulletList([
                "Your right to use the Services will immediately cease",
                "We may delete your account and data, subject to our data retention policies",
                "Provisions that by their nature should survive termination will remain in effect",
            ]),
        ]),
        section("13. Dispute Resolution", [
            block("If you have any dispute with us, you agree to first contact us at legal@esap.ai to attempt to resolve the dispute informally."),
            block("If we cannot resolve the dispute informally, you agree that any disputes arising out of or relating to these Terms or our Services will be resolved through binding arbitration in accordance with the rules of the Saudi Center for Commercial Arbitration (SCCA), except that you may bring claims in small claims court if your claims qualify."),
            block("You waive any right to participate in a class-action lawsuit or class-wide arbitration against us."),
        ]),
        section("14. Governing Law", [
            block("These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Riyadh, Kingdom of Saudi Arabia."),
        ]),
        section("15. Changes to Terms", [
            block('We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the updated Terms.'),
            block("If you do not agree to the modified Terms, you must stop using our Services."),
        ]),
        section("16. Miscellaneous", [
            block("Entire Agreement: These Terms, together with our Privacy Policy, constitute the entire agreement between you and ESAP AI regarding our Services."),
            block("Severability: If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect."),
            block("Waiver: Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision."),
            block("Assignment: You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction."),
        ]),
        section("17. Contact Information", [
            block("If you have questions about these Terms, please contact us."),
        ]),
    ],
};

// ── Arabic Terms & Conditions ──
const termsAR = {
    _id: "legal-terms-ar",
    _type: "legalPage",
    language: "ar",
    pageType: "terms",
    title: "الشروط والأحكام",
    lastUpdated: "ديسمبر ٢٠٢٥",
    metaDescription: "الشروط والأحكام لإساب للذكاء الاصطناعي - اقرأ شروط الخدمة لاستخدام منصة وخدمات الذكاء الاصطناعي.",
    contactEmail: "legal@esap.ai",
    contactAddress: "إساب للذكاء الاصطناعي، ٧٤٠٤، طريق الملك عبدالعزيز ٤٣٤٠، الرياض ١٢٢٨٢، المملكة العربية السعودية",
    sections: [
        section("١. قبول الشروط", [
            block('مرحبًا بكم في إساب للذكاء الاصطناعي. تحكم هذه الشروط والأحكام ("الشروط") وصولك إلى خدمات إساب للذكاء الاصطناعي واستخدامها، بما في ذلك منصة الذكاء الاصطناعي وأنظمة تخطيط موارد المؤسسات المُفعّلة بالصوت وحلول أمن المؤسسات والخدمات ذات الصلة (يُشار إليها مجتمعة بـ "الخدمات").'),
            block("من خلال الوصول إلى خدماتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، فلا يجوز لك الوصول إلى خدماتنا أو استخدامها. تشكل هذه الشروط اتفاقية ملزمة قانونًا بينك وبين إساب للذكاء الاصطناعي."),
        ]),
        section("٢. وصف الخدمات", [
            block("توفر إساب للذكاء الاصطناعي منصة ذكاء اصطناعي مصممة لحماية وتعزيز عمليات المؤسسات. تشمل خدماتنا:"),
            ...bulletList([
                "حلول أمنية مدعومة بالذكاء الاصطناعي لحماية المؤسسات",
                "أنظمة تخطيط موارد المؤسسات المُفعّلة بالصوت",
                "أدوات أتمتة الذكاء الاصطناعي وإدارة سير العمل",
                "خدمات التكامل والوصول إلى واجهة برمجة التطبيقات",
                "خدمات الاستشارات والدعم",
                "منتجات وخدمات أخرى متعلقة بالذكاء الاصطناعي كما هو موضح على موقعنا الإلكتروني",
            ]),
            block("نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي جانب من خدماتنا في أي وقت، مع أو بدون إشعار."),
        ]),
        section("٣. حسابات المستخدمين والتسجيل", [
            block("للوصول إلى ميزات معينة في خدماتنا، قد يُطلب منك إنشاء حساب. عند إنشاء حساب، فإنك توافق على:"),
            ...bulletList([
                "تقديم معلومات دقيقة وحالية وكاملة",
                "الحفاظ على معلومات حسابك وتحديثها على الفور",
                "الحفاظ على أمان بيانات اعتماد حسابك",
                "تحمل المسؤولية عن جميع الأنشطة التي تتم تحت حسابك",
                "إخطارنا فورًا بأي وصول أو استخدام غير مصرح به",
            ]),
            block("أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك. لسنا مسؤولين عن أي خسارة أو ضرر ناتج عن فشلك في حماية معلومات حسابك."),
        ]),
        section("٤. سياسة الاستخدام المقبول", [
            block("أنت توافق على استخدام خدماتنا فقط لأغراض قانونية ووفقًا لهذه الشروط. أنت توافق على عدم:"),
            ...bulletList([
                "انتهاك أي قوانين أو لوائح أو حقوق طرف ثالث سارية",
                "استخدام الخدمات لنقل رموز ضارة أو فيروسات أو بيانات مؤذية",
                "محاولة الوصول غير المصرح به إلى أنظمتنا أو حسابات المستخدمين الآخرين",
                "التدخل في سلامة أو أداء خدماتنا أو تعطيلها",
                "استخدام الخدمات لمعالجة أو تخزين محتوى أو بيانات غير قانونية",
                "الهندسة العكسية أو فك الترجمة أو تفكيك أي جزء من خدماتنا",
                "استخدام أنظمة آلية للوصول إلى خدماتنا دون إذن",
                "انتحال شخصية أي شخص أو كيان أو تحريف انتمائك",
                "جمع أو حصاد معلومات عن مستخدمين آخرين دون موافقة",
                "استخدام الخدمات لأي أغراض استخبارات تنافسية أو قياس أداء",
            ]),
            block("قد يؤدي انتهاك سياسة الاستخدام المقبول هذه إلى إنهاء فوري لوصولك إلى خدماتنا وقد يعرضك للمسؤولية القانونية."),
        ]),
        section("٥. حقوق الملكية الفكرية", [
            block("الخدمات، بما في ذلك جميع المحتوى والميزات والوظائف والبرامج والخوارزميات والتقنية، مملوكة لإساب للذكاء الاصطناعي ومحمية بقوانين حقوق النشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية وقوانين الملكية الفكرية الأخرى."),
            block("مع مراعاة امتثالك لهذه الشروط، نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى خدماتنا واستخدامها لأغراض عملك الداخلية. لا يتضمن هذا الترخيص الحق في:"),
            ...bulletList([
                "إعادة بيع الخدمات أو ترخيصها من الباطن أو توزيعها",
                "تعديل أو تكييف أو إنشاء أعمال مشتقة",
                "إزالة أو تغيير أي إشعارات ملكية",
                "استخدام علاماتنا التجارية أو شعاراتنا أو هويتنا دون إذن",
            ]),
            block("أنت تحتفظ بملكية أي بيانات أو محتوى أو مواد تقدمها لنا. باستخدامك لخدماتنا، فإنك تمنحنا ترخيصًا لاستخدام بياناتك ومعالجتها وتخزينها حسب الضرورة لتوفير خدماتنا وتحسينها، وفقًا لسياسة الخصوصية الخاصة بنا."),
        ]),
        section("٦. شروط الدفع", [
            block("قد تتطلب ميزات معينة في خدماتنا الدفع. عند شراء اشتراك أو خدمة مدفوعة:"),
            ...bulletList([
                "أنت توافق على دفع جميع الرسوم كما هو موضح وقت الشراء",
                "يتم فوترة الرسوم مقدمًا على أساس متكرر (شهريًا أو سنويًا)",
                "جميع الرسوم غير قابلة للاسترداد إلا كما يقتضي القانون أو كما هو منصوص عليه صراحةً",
                "نحتفظ بالحق في تغيير أسعارنا بإشعار مسبق بـ ٣٠ يومًا",
                "أنت مسؤول عن أي ضرائب تنطبق على مشترياتك",
                "قد يؤدي عدم الدفع إلى تعليق حسابك أو إنهائه",
            ]),
            block("المبالغ المستردة، إن وُجدت، ستتم معالجتها وفقًا لسياسة الاسترداد الخاصة بنا، والتي قد تختلف حسب نوع الخدمة."),
        ]),
        section("٧. توفر الخدمة والتعديلات", [
            block("نسعى للحفاظ على توفر عالٍ لخدماتنا لكننا لا نضمن التشغيل المتواصل أو الخالي من الأخطاء. قد نقوم بـ:"),
            ...bulletList([
                "إجراء صيانة مجدولة بإشعار معقول",
                "إجراء تغييرات على خدماتنا في أي وقت",
                "تعليق أو إنهاء الخدمات بسبب انتهاكات لهذه الشروط",
                "تعديل أو إيقاف الميزات مع أو بدون إشعار",
            ]),
            block("لسنا مسؤولين عن أي فترات توقف أو انقطاعات أو تعديلات في الخدمة."),
        ]),
        section("٨. المحتوى والمخرجات المُولّدة بالذكاء الاصطناعي", [
            block("تستخدم خدماتنا تقنيات الذكاء الاصطناعي والتعلم الآلي. أنت تقر بأن:"),
            ...bulletList([
                "قد تحتوي المخرجات المُولّدة بالذكاء الاصطناعي على أخطاء أو عدم دقة",
                "يجب عليك التحقق من جميع المحتوى المُولّد بالذكاء الاصطناعي ومراجعته قبل الاستخدام",
                "لا نضمن دقة أو اكتمال أو موثوقية مخرجات الذكاء الاصطناعي",
                "أنت مسؤول عن استخدامك للمحتوى المُولّد بالذكاء الاصطناعي",
                "قد يتم تحديث نماذج الذكاء الاصطناعي أو تغييرها، مما يؤثر على جودة المخرجات",
            ]),
            block("يجب ألا تعتمد فقط على المحتوى المُولّد بالذكاء الاصطناعي في قرارات الأعمال الحرجة دون إشراف بشري مناسب والتحقق."),
        ]),
        section("٩. البيانات والخصوصية", [
            block("يخضع استخدامك لخدماتنا أيضًا لسياسة الخصوصية الخاصة بنا، والتي توضح كيفية جمعنا واستخدامنا لمعلوماتك وحمايتها. باستخدامك لخدماتنا، فإنك توافق على جمع واستخدام معلوماتك كما هو موضح في سياسة الخصوصية الخاصة بنا."),
            block("أنت مسؤول عن التأكد من أن أي بيانات تقدمها لنا تتوافق مع القوانين المعمول بها ولا تنتهك حقوق الطرف الثالث. أنت تمثل أن لديك الحق في تقديم أي بيانات ترسلها إلى خدماتنا."),
        ]),
        section("١٠. تحديد المسؤولية", [
            block("إلى أقصى حد يسمح به القانون، لن تكون إساب للذكاء الاصطناعي والشركات التابعة لها مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر خسارة الأرباح أو البيانات أو الاستخدام أو السمعة أو أي خسائر معنوية أخرى ناتجة عن استخدامك لخدماتنا أو عدم قدرتك على استخدامها."),
            block("لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبات ناشئة عن هذه الشروط أو خدماتنا أو المتعلقة بها المبلغ الذي دفعته لنا في الأشهر الاثني عشر (١٢) السابقة للمطالبة، أو مائة دولار (١٠٠ دولار)، أيهما أكبر."),
            block("لا تسمح بعض الولايات القضائية باستبعاد أو تحديد أضرار معينة، لذلك قد لا تنطبق بعض القيود المذكورة أعلاه عليك."),
        ]),
        section("١١. التعويض", [
            block("أنت توافق على تعويض ودفاع وإبراء ذمة إساب للذكاء الاصطناعي والشركات التابعة لها ومسؤوليها ومديريها وموظفيها ووكلائها من وضد أي مطالبات أو التزامات أو أضرار أو خسائر ومصاريف، بما في ذلك أتعاب المحاماة المعقولة، الناشئة عن أو المتعلقة بـ:"),
            ...bulletList([
                "استخدامك لخدماتنا",
                "انتهاكك لهذه الشروط",
                "انتهاكك لأي حقوق طرف ثالث",
                "أي بيانات أو محتوى تقدمه لنا",
            ]),
        ]),
        section("١٢. الإنهاء", [
            block("يجوز لنا إنهاء أو تعليق وصولك إلى خدماتنا فورًا، دون إشعار مسبق، لأي سبب، بما في ذلك إذا خالفت هذه الشروط."),
            block("يمكنك إنهاء حسابك في أي وقت بالتواصل معنا أو باستخدام ميزات إدارة الحساب. عند الإنهاء:"),
            ...bulletList([
                "سيتوقف حقك في استخدام الخدمات فورًا",
                "قد نحذف حسابك وبياناتك، وفقًا لسياسات الاحتفاظ بالبيانات لدينا",
                "ستظل الأحكام التي بطبيعتها يجب أن تبقى بعد الإنهاء سارية المفعول",
            ]),
        ]),
        section("١٣. حل النزاعات", [
            block("إذا كان لديك أي نزاع معنا، فإنك توافق على الاتصال بنا أولاً على legal@esap.ai لمحاولة حل النزاع بشكل ودي."),
            block("إذا لم نتمكن من حل النزاع بشكل ودي، فإنك توافق على أن أي نزاعات ناشئة عن هذه الشروط أو خدماتنا أو المتعلقة بها ستُحل من خلال التحكيم الملزم وفقًا لقواعد المركز السعودي للتحكيم التجاري، باستثناء أنه يمكنك رفع دعاوى في محكمة الدعاوى الصغيرة إذا كانت مطالباتك مؤهلة."),
            block("أنت تتنازل عن أي حق في المشاركة في دعوى جماعية أو تحكيم جماعي ضدنا."),
        ]),
        section("١٤. القانون الحاكم", [
            block("تخضع هذه الشروط وتُفسر وفقًا لقوانين المملكة العربية السعودية، بصرف النظر عن أحكام تعارض القوانين. أي إجراء قانوني أو دعوى ناشئة بموجب هذه الشروط سيتم رفعها حصريًا في محاكم الرياض، المملكة العربية السعودية."),
        ]),
        section("١٥. التغييرات على الشروط", [
            block('نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنُعلمك بالتغييرات الجوهرية عن طريق نشر الشروط المحدثة على هذه الصفحة وتحديث تاريخ "آخر تحديث". يُعد استمرارك في استخدام خدماتنا بعد هذه التغييرات قبولًا للشروط المحدثة.'),
            block("إذا كنت لا توافق على الشروط المعدلة، يجب عليك التوقف عن استخدام خدماتنا."),
        ]),
        section("١٦. أحكام متنوعة", [
            block("الاتفاقية الكاملة: تشكل هذه الشروط، مع سياسة الخصوصية الخاصة بنا، الاتفاقية الكاملة بينك وبين إساب للذكاء الاصطناعي فيما يتعلق بخدماتنا."),
            block("قابلية الفصل: إذا وُجد أن أي حكم من هذه الشروط غير قابل للتنفيذ، فستظل الأحكام المتبقية سارية المفعول بالكامل."),
            block("التنازل: لن يُعتبر فشلنا في تنفيذ أي حق أو حكم من هذه الشروط تنازلًا عن هذا الحق أو الحكم."),
            block("التنازل عن الحقوق: لا يجوز لك التنازل عن هذه الشروط أو حقوقك بموجبها أو نقلها دون موافقتنا الخطية المسبقة. يجوز لنا التنازل عن هذه الشروط دون قيود."),
        ]),
        section("١٧. معلومات الاتصال", [
            block("إذا كانت لديك أسئلة حول هذه الشروط، يرجى التواصل معنا."),
        ]),
    ],
};

async function seedLegalPages() {
    console.log("Seeding legal pages...\n");

    const documents = [privacyEN, privacyAR, termsEN, termsAR];

    for (const doc of documents) {
        try {
            await client.createOrReplace(doc);
            console.log(`✓ Created: ${doc.title} (${doc.language})`);
        } catch (error) {
            console.error(`✗ Failed: ${doc.title} (${doc.language})`, error);
        }
    }

    console.log("\nDone! Seeded 4 legal page documents.");
}

seedLegalPages();
