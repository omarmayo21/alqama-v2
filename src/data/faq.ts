import { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  // الانضمام
  {
    id: 'f1',
    question: 'كيف يمكنني تسجيل أبنائي في الأكاديمية؟',
    answer: 'يمكنك تسجيل أبنائك بسهولة عبر التواصل معنا مباشرة عبر الواتساب أو الاتصال بفريق خدمة العملاء. سيقوم مستشارنا الرياضي بمساعدتك في اختيار الرياضة المناسبة ومواعيد التدريب الملائمة لجدول عائلتك.',
    category: 'الانضمام',
  },
  {
    id: 'f2',
    question: 'ما هي الوثائق المطلوبة لتسجيل الأطفال؟',
    answer: 'نحتاج إلى صورة من الهوية الوطنية أو الإقامة للطفل وولي الأمر، وأي تقارير طبية مهمة إن وجدت. جميع البيانات تُحفظ بسرية وأمان تام.',
    category: 'الانضمام',
  },
  {
    id: 'f3',
    question: 'هل يمكن تغيير الرياضة للطفل بعد البدء؟',
    answer: 'نعم بكل تأكيد، نتفهم أن الطفل قد يرغب في تجربة رياضات مختلفة لاكتشاف شغفه الحقيقي، لذا نوفر مرونة كاملة في التحويل بين الرياضات المتاحة بالتنسيق مع المدربين.',
    category: 'الانضمام',
  },

  // التدريب
  {
    id: 'f4',
    question: 'ما هي مؤهلات وخبرات المدربين؟',
    answer: 'جميع مدربي الأكاديمية معتمدون من اتحادات رياضية رسمية ويمتلكون خبرة طويلة في التعامل التربوي والرياضي مع الفئات العمرية المختلفة لضمان بيئة تدريب محفزة وآمنة.',
    category: 'التدريب',
  },
  {
    id: 'f5',
    question: 'كم عدد الأطفال في كل مجموعة تدريبية؟',
    answer: 'نحرص على الحفاظ على نسب مدرب إلى لاعبين مثالية لضمان حصول كل طفل على الاهتمام الفردي والتوجيه الدقيق المناسب لمستواه ومهاراته.',
    category: 'التدريب',
  },
  {
    id: 'f6',
    question: 'هل يحصل أولياء الأمور على تقارير دورية عن أداء أبنائهم؟',
    answer: 'نعم، نقدم تقارير دورية وشاملة لأولياء الأمور توضح التطور البدني والمهاري والسلوكي لأبنائهم، بالإضافة إلى جلسات استشارية مفتوحة مع المدربين.',
    category: 'التدريب',
  },

  // العروض وباقات التدريب
  {
    id: 'f7',
    question: 'ما هي العروض وخيارات الدفع المتاحة؟',
    answer: 'نوفر عروضاً وباقات تدريبية مرنة تلبي كافة احتياجات الأسرة، مع إمكانية تقسيط الرسوم بسهولة عبر تابي (Tabby) وتمارا (Tamara) بدون فوائد أو تعقيدات. تواصل معنا للاطلاع على أحدث العروض.',
    category: 'العروض والباقات',
  },
  {
    id: 'f8',
    question: 'هل تقدمون خصومات خاصة للأخوة؟',
    answer: 'نعم، نوفر خصومات عائلية حصرية عند تسجيل الأخوة لدعم العائلات وتشجيع جميع أطفال الأسرة على ممارسة الرياضة في بيئة احترافية موحدة.',
    category: 'العروض والباقات',
  },
  {
    id: 'f9',
    question: 'كيف يمكنني الاستفادة من خيار التقسيط عبر تابي أو تمارا؟',
    answer: 'يمكنك اختيار الدفع بالتقسيط عبر تابي أو تمارا عند إتمام الاشتراك، حيث يمكنك تقسيم الرسوم إلى دفعات شهرية ميسرة وفق سياسات مزودي الخدمة المعتمدة.',
    category: 'العروض والباقات',
  },

  // المرافق
  {
    id: 'f10',
    question: 'ما هي مرافق الأكاديمية المتاحة للأبناء؟',
    answer: 'تضم الأكاديمية ملاعب كرة قدم عشبية حديثة، قاعات كرة سلة مكيفة ومغلقة، مسابح أولمبية وتدريبية متطورة مع نظام تعقيم متقدم، صالات فنون قتالية مجهزة، قاعة جمباز أولمبية، وصالة سكيتنج مجهزة بأحدث أدوات الأمان والسلامة.',
    category: 'المرافق',
  },
  {
    id: 'f11',
    question: 'ما هي تدابير الأمن والسلامة المتبعة في الأكاديمية؟',
    answer: 'سلامة أطفالكم هي أولويتنا المطلقة؛ تتوفر تجهيزات إسعاف أولي وطاقم مدرب، نظام مراقبة متكامل، إشراف مستمر على مدار الساعة، وفحص دوري لجميع المعدات والأرضيات لضمان أقصى درجات الأمان.',
    category: 'المرافق',
  },

  // أخرى
  {
    id: 'f12',
    question: 'هل يُسمح للأهل بحضور الحصص التدريبية ومتابعة أطفالهم؟',
    answer: 'نعم وبكل سرور! نوفر مناطق جلوس مريحة ومكيفة تتيح لأولياء الأمور متابعة تدريبات أبنائهم وتشجيعهم والتواصل المباشر مع الكادر الإداري والفني.',
    category: 'أخرى',
  },
  {
    id: 'f13',
    question: 'هل تنظم الأكاديمية معسكرات رياضية في الإجازات المدرسية؟',
    answer: 'نعم، نقدم معسكرات تدريبية وأنشطة رياضية وترفيهية مكثفة وممتعة خلال الإجازات المدرسية والعطلة الصيفية لصقل مهارات الأطفال واستثمار أوقاتهم بإيجابية.',
    category: 'أخرى',
  },
  {
    id: 'f14',
    question: 'كيف يمكنني التواصل المباشر مع إدارة الأكاديمية؟',
    answer: 'يمكنكم التواصل الفوري معنا عبر زر الواتساب في الموقع أو الاتصال مباشرة بفريقنا، ويسعدنا دائماً استقبالكم في مقر الأكاديمية بجدة.',
    category: 'أخرى',
  },
];

export const faqItemsEn: FAQItem[] = [
  // Enrollment
  {
    id: 'f1',
    question: 'How can I enroll my children in the academy?',
    answer: 'You can easily enroll your children by reaching out to us directly on WhatsApp or calling our customer service team. Our sports advisors will help you select the ideal sport and schedule that best fits your family routine.',
    category: 'Enrollment',
  },
  {
    id: 'f2',
    question: 'What documents are required for youth enrollment?',
    answer: 'We only require a copy of the National ID / Iqama for both the child and guardian, alongside any relevant medical notes. All personal information is handled with strict confidentiality.',
    category: 'Enrollment',
  },
  {
    id: 'f3',
    question: 'Can my child switch sports after starting?',
    answer: 'Absolutely! We understand that children like exploring different sports to discover their genuine passion. We offer full flexibility to transfer between available sports in coordination with the coaching team.',
    category: 'Enrollment',
  },

  // Training
  {
    id: 'f4',
    question: 'What are the qualifications of the coaching staff?',
    answer: 'All our coaches are officially licensed and certified by recognized sports federations, holding extensive experience in youth athletic mentorship and child safety.',
    category: 'Training',
  },
  {
    id: 'f5',
    question: 'What is the coach-to-student ratio in training groups?',
    answer: 'We maintain low coach-to-student ratios in every session to ensure each child receives dedicated personal attention, targeted technical corrections, and continuous encouragement.',
    category: 'Training',
  },
  {
    id: 'f6',
    question: 'Do parents receive regular progress reports?',
    answer: 'Yes! We provide comprehensive periodic reports detailing your child’s physical stamina, technical execution, and behavioral growth, complemented by open discussions with the coaches.',
    category: 'Training',
  },

  // Offers & Packages
  {
    id: 'f7',
    question: 'What offers and payment options are available?',
    answer: 'We provide flexible training packages tailored for families, with convenient installment options available via Tabby and Tamara with zero hassle. Contact us on WhatsApp to learn about current offers.',
    category: 'Offers & Packages',
  },
  {
    id: 'f8',
    question: 'Do you provide special discounts for siblings?',
    answer: 'Yes! We provide exclusive family and sibling discounts to support parents in encouraging all their children to stay active in a premier athletic environment.',
    category: 'Offers & Packages',
  },
  {
    id: 'f9',
    question: 'How can I utilize installment options with Tabby or Tamara?',
    answer: 'You can select installment payments via Tabby or Tamara upon enrollment confirmation, allowing you to split the fees into manageable monthly installments in accordance with provider terms.',
    category: 'Offers & Packages',
  },

  // Facilities
  {
    id: 'f10',
    question: 'What facilities are available for children at the academy?',
    answer: 'Our campus features modern natural/synthetic turf football pitches, indoor air-conditioned basketball courts, advanced Olympic-standard swimming pools with advanced sanitization, specialized martial arts dojos, an Olympic gymnastics hall, and a purpose-built safety-padded skating arena.',
    category: 'Facilities',
  },
  {
    id: 'f11',
    question: 'What safety and security measures are implemented?',
    answer: 'Your child’s safety is our highest priority. We feature on-site certified first-aid personnel, complete CCTV monitoring, 24/7 facility supervision, and routine safety audits on all floors and apparatus.',
    category: 'Facilities',
  },

  // General
  {
    id: 'f12',
    question: 'Are parents allowed to attend sessions and watch their children?',
    answer: 'Yes, absolutely! We provide dedicated, air-conditioned spectator seating areas where parents can watch their children train, cheer them on, and interact with the staff.',
    category: 'General',
  },
  {
    id: 'f13',
    question: 'Does the academy organize sports camps during school holidays?',
    answer: 'Yes! We host exciting athletic and recreational camps during school breaks and summer holidays to nurture children’s talents and keep them active and engaged in a healthy environment.',
    category: 'General',
  },
  {
    id: 'f14',
    question: 'How can I get in touch with the academy administration?',
    answer: 'You can message us instantly via WhatsApp through the website or call our team directly. We are also always delighted to welcome you in person at our Jeddah campus.',
    category: 'General',
  },
];

export const faqCategories = ['الكل', 'الانضمام', 'التدريب', 'العروض والباقات', 'المرافق', 'أخرى'];
export const faqCategoriesEn = ['All', 'Enrollment', 'Training', 'Offers & Packages', 'Facilities', 'General'];
