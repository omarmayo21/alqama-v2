export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    sports: string;
    offers: string;
    blog: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  sportsSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    agePrefix: string;
    levelLabel: string;
    trainingPrograms: string;
    detailsBtn: string;
  };
  paymentSection: {
    badge: string;
    title: string;
    subtitle: string;
    tabbyTitle: string;
    tabbyDesc: string;
    tamaraTitle: string;
    tamaraDesc: string;
    learnMore: string;
  };
  offersSection: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    viewAllOffers: string;
    popularBadge: string;
    perksTitle: string;
  };
  reviewsSection: {
    badge: string;
    title: string;
    subtitle: string;
    showMore: string;
    showLess: string;
  };
  ctaBanner: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    sportsTitle: string;
    contactTitle: string;
    locationText: string;
    hoursText: string;
    allRightsReserved: string;
    privacy: string;
    terms: string;
  };
  aboutPage: {
    badge: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    valuesList: {
      title: string;
      desc: string;
    }[];
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    facilitiesTitle: string;
    facilitiesSubtitle: string;
  };
  sportsPage: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    featuresIncluded: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  sportDetailPage: {
    backToSports: string;
    ageLabel: string;
    programsLabel: string;
    curriculumTitle: string;
    curriculumSubtitle: string;
    levelsTitle: string;
    levelsSubtitle: string;
    readyTitle: string;
    readySubtitle: string;
    whatsappInquiry: string;
  };
  offersPage: {
    badge: string;
    title: string;
    subtitle: string;
    customInquiryTitle: string;
    customInquiryDesc: string;
    whatsappCta: string;
    familyBenefitsTitle: string;
    installmentsNote: string;
  };
  blogPage: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    readTimePrefix: string;
    shareArticle: string;
    relatedArticles: string;
    backToBlog: string;
  };
  faqPage: {
    badge: string;
    title: string;
    subtitle: string;
    stillQuestionsTitle: string;
    stillQuestionsDesc: string;
    askOnWhatsapp: string;
  };
  common: {
    whatsappTooltip: string;
    languageToggle: string;
    languageName: string;
    viewDetails: string;
    contactUs: string;
    learnMore: string;
    pageNotFound: string;
    pageNotFoundDesc: string;
    backHome: string;
  };
}

export const translations: Record<'ar' | 'en', TranslationSchema> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      sports: 'الرياضات',
      offers: 'العروض',
      blog: 'المدونة',
      contact: 'تواصل معنا',
    },
    hero: {
      badge: 'أكاديمية القمة الرياضية للأطفال والناشئين • جدة',
      titleLine1: 'أحدث أكاديمية رياضية',
      titleHighlight: 'في جدة',
      subtitle: 'طريق طفلك نحو القمة.. بيئة رياضية احترافية وآمنة لبناء شخصية ولياقة ومستقبل أبطال الغد تحت إشراف نخبة من المدربين المعتمدين.',
      ctaPrimary: 'تواصل مع فريقنا',
      ctaSecondary: 'استكشف الرياضات',
      stat1Value: '٧+',
      stat1Label: 'رياضات متخصصة للأبناء',
      stat2Value: '١٠٠٪',
      stat2Label: 'مدربون معتمدون ومرخصون',
      stat3Value: '٤.٩★',
      stat3Label: 'تقييم أولياء الأمور في جوجل',
      stat4Value: '١٠٠٠+',
      stat4Label: 'بطل وبطلة تخرجوا منا',
    },
    features: {
      badge: 'لماذا يختارنا أولياء الأمور؟',
      title: 'بيئة تدريبية استثنائية ترعى أطفالكم',
      subtitle: 'نجمع بين الاحترافية الفنية والتربوية وراحة الأسرة لنمنح أطفالكم التجربة الرياضية الأفضل في جدة.',
      items: [
        {
          title: 'مدربون معتمدون ومتخصصون',
          desc: 'كادر تدريبي وتربوي مرخص يمتلك خبرة واسعة في تدريب وتوجيه الفئات السنية المختلفة.',
        },
        {
          title: 'حضور ومتابعة أولياء الأمور',
          desc: 'قاعات جلوس مريحة تتيح لكم حضور التمارين ومتابعة شغف وتطور أطفالكم خطوة بخطوة.',
        },
        {
          title: 'خصومات خاصة للأخوة',
          desc: 'باقات وتسهيلات عائلية تشجع جميع أفراد الأسرة على الانضمام وممارسة رياضاتهم المفضلة.',
        },
        {
          title: 'تقسيط ميسر عبر تابي وتمارا',
          desc: 'خيارات دفع مرنة وميسرة بدون أي أعباء فورية عبر مزودي خدمات التقسيط المعتمدين.',
        },
      ],
    },
    sportsSection: {
      badge: 'رياضات متنوعة للأطفال',
      title: 'برامج تدريبية متخصصة لكل مستوى',
      subtitle: 'اختر الرياضة الأنسب لميول طفلك وقدراته البدنية وشاهده يتألق خطوة بخطوة في بيئة محفزة.',
      viewAll: 'عرض جميع الرياضات',
      agePrefix: 'الفئة العمرية:',
      levelLabel: 'المستويات:',
      trainingPrograms: 'برامج تدريبية لكافة المستويات',
      detailsBtn: 'تفاصيل الرياضة',
    },
    paymentSection: {
      badge: 'مرونة في الدفع والتقسيط',
      title: 'سجل أطفالك بسهولة وقسّط مع تابي وتمارا',
      subtitle: 'نوفر لكم خيارات دفع ميسرة ومرنة لتسهيل انضمام أطفالكم إلى برامج الأكاديمية دون أي عوائق.',
      tabbyTitle: 'تقسيط مرن عبر تابي (Tabby)',
      tabbyDesc: 'قسّم رسوم تدريب أطفالك على دفعات شهرية ميسرة وفق سياسات تابي المعتمدة وبكل راحة.',
      tamaraTitle: 'تقسيط سهل عبر تمارا (Tamara)',
      tamaraDesc: 'استمتع بخطة دفع مرنة وميسرة لجميع باقات الأكاديمية مع خيارات الدفع عبر تمارا.',
      learnMore: 'استفسر عن خطط التقسيط',
    },
    offersSection: {
      badge: 'عروض وباقات مخصصة',
      title: 'باقات تدريبية تلبي تطلعات كل أسرة',
      subtitle: 'صممنا باقاتنا لتمنح طفلك أقصى فائدة رياضية مع خيارات دفع مريحة وتسهيلات عائلية استثنائية.',
      ctaButton: 'تواصل لمعرفة العروض',
      viewAllOffers: 'مشاهدة كافة العروض',
      popularBadge: 'الخيار الأكثر طلباً',
      perksTitle: 'مزايا إضافية تشملها كافة باقاتنا',
    },
    reviewsSection: {
      badge: 'آراء وتقييمات أولياء الأمور',
      title: 'ماذا يقول أولياء الأمور عنا',
      subtitle: 'تجارب حقيقية شاركها أولياء الأمور وعائلات أبطالنا تعكس ثقتهم في الأكاديمية.',
      showMore: 'عرض جميع التقييمات (٨ تقييمات)',
      showLess: 'عرض أقل',
    },
    ctaBanner: {
      badge: 'ابدأ اليوم',
      title: 'هل أنت جاهز لبدء رحلة طفلك الرياضية نحو القمة؟',
      subtitle: 'تواصل مع مستشارينا الرياضيين عبر الواتساب لاختيار الرياضة الأنسب لطفلك وتحديد موعد جلسته التدريبية الأولى.',
      button: 'تحدث مع فريقنا عبر واتساب',
    },
    footer: {
      description: 'أكاديمية القمة الرياضية في جدة.. أحدث بيئة رياضية متكاملة لرعاية وبناء وتطوير مهارات الأطفال والناشئين في ٧ رياضات متخصصة.',
      quickLinksTitle: 'روابط سريعة',
      sportsTitle: 'رياضاتنا',
      contactTitle: 'تواصل معنا',
      locationText: 'جدة، المملكة العربية السعودية',
      hoursText: 'السبت - الخميس: ٢:٠٠ م - ١٠:٠٠ م',
      allRightsReserved: 'جميع الحقوق محفوظة لأكاديمية القمة الرياضية',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
    aboutPage: {
      badge: 'عن أكاديمية القمة',
      title: 'نصنع أبطال الغد في بيئة ملهمة وآمنة',
      subtitle: 'تأسست أكاديمية القمة الرياضية لتكون الوجهة الرياضية والتربوية الرائدة للأطفال والناشئين في جدة، حيث نجمع بين التدريب الاحترافي وبناء الشخصية المتوازنة.',
      missionTitle: 'رسالتنا',
      missionDesc: 'تمكين أطفالنا وبناء قدراتهم الحركية والذهنية في بيئة رياضية محفزة وآمنة تعزز قيم الانضباط والعمل الجماعي والثقة بالنفس.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون الأكاديمية الرياضية الأكثر تميزاً وتطوراً في المملكة لتخريج جيل رياضي واعد يمثل الوطن في المحافل المحلية والدولية.',
      valuesTitle: 'قيمنا الأساسية',
      valuesSubtitle: 'المبادئ التي توجه عملنا اليومي وتنعكس على أداء وسلوك كل طفل ومدرب في أكاديميتنا.',
      valuesList: [
        { title: 'السلامة والأمان', desc: 'صحة وأمان أطفالكم هي خط الأساس الذي لا نساوم عليه في جميع منشآتنا.' },
        { title: 'الاحترافية الفنية', desc: 'مناهج تدريبية حديثة ومدربون معتمدون بأعلى الكفاءات والشهادات.' },
        { title: 'التربية وبناء الشخصية', desc: 'الرياضة أداة لصقل الأخلاق والانضباط والروح القيادية لدى الطفل.' },
        { title: 'الشراكة مع الأسرة', desc: 'تواصل مستمر مع أولياء الأمور وشفافية كاملة في متابعة التطور.' },
      ],
      whyChooseTitle: 'ما يميز أكاديمية القمة',
      whyChooseSubtitle: 'معايير جودة عالية تضمن لطفلك أفضل تجربة رياضية وتربوية ممكنة.',
      facilitiesTitle: 'مرافق رياضية حديثة ومجهزة',
      facilitiesSubtitle: 'منشآت رياضية مغلقة ومكيفة ومجهزة بأحدث أدوات التدريب والأمان.',
    },
    sportsPage: {
      badge: 'الرياضات المتاحة',
      title: 'اكتشف شغف طفلك الرياضي',
      subtitle: 'نقدم ٧ برامج تدريبية متخصصة للأطفال والناشئين بإشراف مدربين محترفين ومعتمدين.',
      filterAll: 'جميع الرياضات',
      featuresIncluded: 'ما يتضمنه البرنامج التدريبي:',
      ctaTitle: 'هل تحتاج لمساعدة في اختيار الرياضة المناسبة؟',
      ctaSubtitle: 'مستشارونا متاحون للإجابة على استفساراتكم ومساعدتكم في اختيار البرنامج الأفضل لطفلكم.',
      ctaButton: 'استشر فريقنا عبر واتساب',
    },
    sportDetailPage: {
      backToSports: 'العودة لجميع الرياضات',
      ageLabel: 'الفئة العمرية',
      programsLabel: 'البرامج',
      curriculumTitle: 'ما يتعلمه طفلك في هذا البرنامج',
      curriculumSubtitle: 'منهج تدريبي متكامل يجمع بين التطوير الفني والبدني والشخصي.',
      levelsTitle: 'المسارات والمستويات التدريبية',
      levelsSubtitle: 'برامج متدرجة تناسب مستوى كل طفل من المبتدئ وحتى البطولات.',
      readyTitle: 'جاهز لبدء تدريب طفلك في هذه الرياضة؟',
      readySubtitle: 'تواصل معنا مباشرة عبر الواتساب لتحديد مواعيد التدريب والاستفسار عن العروض المتاحة.',
      whatsappInquiry: 'استفسر عن هذه الرياضة عبر واتساب',
    },
    offersPage: {
      badge: 'العروض والباقات',
      title: 'باقات تدريبية مرنة لأطفالكم',
      subtitle: 'اختر الباقة المناسبة لطفلك واستفد من عروضنا العائلية وتسهيلات التقسيط مع تابي وتمارا.',
      customInquiryTitle: 'هل تبحث عن باقة مخصصة لعائلتك؟',
      customInquiryDesc: 'يسعدنا دائماً تقديم عروض وباقات خاصة بالعائلات والأخوة لتناسب احتياجاتكم.',
      whatsappCta: 'استفسر عن العروض عبر واتساب',
      familyBenefitsTitle: 'مزايا وتسهيلات حصرية للعائلات',
      installmentsNote: 'جميع الباقات متاحة بخيارات تقسيط ميسرة عبر تابي وتمارا.',
    },
    blogPage: {
      badge: 'مدونة الأكاديمية',
      title: 'مقالات وإرشادات رياضية لأولياء الأمور',
      subtitle: 'دليلك الشامل لصحة وتغذية وتطوير شخصية طفلك الرياضية بمشورة خبرائنا ومدربينا.',
      readMore: 'قراءة المقال',
      readTimePrefix: 'وقت القراءة:',
      shareArticle: 'مشاركة المقال',
      relatedArticles: 'مقالات ذات صلة',
      backToBlog: 'العودة إلى المدونة',
    },
    faqPage: {
      badge: 'الأسئلة الشائعة',
      title: 'إجابات على استفسارات أولياء الأمور',
      subtitle: 'كل ما تحتاج لمعرفته حول التسجيل، البرامج، المرافق، وخيارات التقسيط المتاحة.',
      stillQuestionsTitle: 'هل لديك سؤال آخر؟',
      stillQuestionsDesc: 'فريق خدمة العملاء جاهز للرد على جميع استفساراتكم على مدار اليوم.',
      askOnWhatsapp: 'اسألنا مباشرة عبر واتساب',
    },
    common: {
      whatsappTooltip: 'تواصل عبر واتساب',
      languageToggle: 'English',
      languageName: 'العربية',
      viewDetails: 'عرض التفاصيل',
      contactUs: 'تواصل معنا',
      learnMore: 'اعرف المزيد',
      pageNotFound: 'الصفحة غير موجودة',
      pageNotFoundDesc: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      backHome: 'العودة للرئيسية',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      sports: 'Sports',
      offers: 'Offers',
      blog: 'Blog',
      contact: 'Contact Us',
    },
    hero: {
      badge: 'ALQIMA Sports Academy for Children & Youth • Jeddah',
      titleLine1: 'The Most Advanced Sports Academy',
      titleHighlight: 'in Jeddah',
      subtitle: 'The path to the top starts here. A safe, inspiring, and professional sports environment nurturing your child’s fitness, character, and future under certified expert coaches.',
      ctaPrimary: 'Talk to Our Team',
      ctaSecondary: 'Explore Sports',
      stat1Value: '7+',
      stat1Label: 'Specialized Youth Sports',
      stat2Value: '100%',
      stat2Label: 'Certified & Licensed Coaches',
      stat3Value: '4.9★',
      stat3Label: 'Parent Google Maps Rating',
      stat4Value: '1,000+',
      stat4Label: 'Young Champions Trained',
    },
    features: {
      badge: 'Why Parents Choose Us',
      title: 'An Exceptional Environment for Your Children',
      subtitle: 'Combining professional athletic development, character building, and family comfort to give your child Jeddah’s finest sports experience.',
      items: [
        {
          title: 'Specialized & Certified Coaches',
          desc: 'Licensed professional coaches with deep expertise in guiding and mentoring youth age groups safely.',
        },
        {
          title: 'Parents Can Attend Training Sessions',
          desc: 'Comfortable spectator areas allowing you to watch sessions and follow your child’s growth step by step.',
        },
        {
          title: 'Special Sibling Discounts',
          desc: 'Exclusive family packages that encourage all siblings to participate and enjoy their favorite sports.',
        },
        {
          title: 'Installment Options via Tabby & Tamara',
          desc: 'Flexible payment and installment solutions available through trusted providers with zero immediate pressure.',
        },
      ],
    },
    sportsSection: {
      badge: 'Diverse Youth Sports',
      title: 'Training Programs for Every Level',
      subtitle: 'Select the ideal sport matching your child’s passion and physical capabilities, and watch them flourish in an encouraging environment.',
      viewAll: 'View All Sports',
      agePrefix: 'Age Range:',
      levelLabel: 'Levels:',
      trainingPrograms: 'Training Programs for Every Level',
      detailsBtn: 'Sport Details',
    },
    paymentSection: {
      badge: 'Payment & Installments',
      title: 'Enroll Your Child with Ease & Pay in Installments',
      subtitle: 'We provide convenient, flexible installment options to make world-class sports training accessible for every family.',
      tabbyTitle: 'Flexible Installments via Tabby',
      tabbyDesc: 'Split your training fees into simple monthly installments through Tabby according to provider guidelines.',
      tamaraTitle: 'Easy Payments via Tamara',
      tamaraDesc: 'Enjoy convenient installment plans for all academy programs with flexible payment options through Tamara.',
      learnMore: 'Ask About Installments',
    },
    offersSection: {
      badge: 'Tailored Packages',
      title: 'Offers Designed for Every Family',
      subtitle: 'Our packages are crafted to maximize your child’s athletic growth with flexible payment options and special family privileges.',
      ctaButton: 'Ask About Our Offers',
      viewAllOffers: 'View All Offers',
      popularBadge: 'Most Popular Choice',
      perksTitle: 'Standard Benefits Included with All Offers',
    },
    reviewsSection: {
      badge: 'Testimonials',
      title: 'What Our Parents Say',
      subtitle: 'Authentic reviews and ratings from our champions’ families on Google Maps, reflecting their trust in our academy.',
      showMore: 'Show All Reviews (8 Reviews)',
      showLess: 'Show Fewer Reviews',
    },
    ctaBanner: {
      badge: 'Start Today',
      title: "Ready to Start Your Child's Journey to the Top?",
      subtitle: "Contact our sports advisors on WhatsApp to choose the ideal program for your child and schedule their first training session.",
      button: 'Talk to Our Team on WhatsApp',
    },
    footer: {
      description: 'ALQIMA Sports Academy in Jeddah — the premier sports academy dedicated to nurturing and developing children and youth across 7 specialized sports.',
      quickLinksTitle: 'Quick Links',
      sportsTitle: 'Our Sports',
      contactTitle: 'Contact Us',
      locationText: 'Jeddah, Kingdom of Saudi Arabia',
      hoursText: 'Saturday - Thursday: 2:00 PM - 10:00 PM',
      allRightsReserved: 'All Rights Reserved © ALQIMA Sports Academy',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
    aboutPage: {
      badge: 'About ALQIMA',
      title: 'Shaping Tomorrow’s Champions in an Inspiring Environment',
      subtitle: 'ALQIMA Sports Academy was established as Jeddah’s premier sports and educational destination for children, combining elite coaching with strong character development.',
      missionTitle: 'Our Mission',
      missionDesc: 'Empowering children by building physical agility and mental focus in a safe, motivating environment that champions discipline, teamwork, and confidence.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the most advanced and respected youth sports academy in Saudi Arabia, preparing a promising generation to represent the Kingdom locally and globally.',
      valuesTitle: 'Our Core Values',
      valuesSubtitle: 'The foundational pillars that guide our daily coaching and reflect in every child and coach at our academy.',
      valuesList: [
        { title: 'Safety & Security', desc: 'Your child’s health and well-being are our highest non-negotiable priority across all facilities.' },
        { title: 'Technical Excellence', desc: 'Cutting-edge training curriculums delivered by certified, highly experienced coaching staff.' },
        { title: 'Character Building', desc: 'Using sport as a catalyst to instill discipline, integrity, leadership, and emotional resilience.' },
        { title: 'Family Partnership', desc: 'Open communication and transparent progress reporting, welcoming parents as key partners in growth.' },
      ],
      whyChooseTitle: 'What Sets ALQIMA Apart',
      whyChooseSubtitle: 'Uncompromising standards of quality ensuring your child receives the highest standard of athletic and personal development.',
      facilitiesTitle: 'Modern, Fully Equipped Facilities',
      facilitiesSubtitle: 'Indoor, air-conditioned sports venues built to Olympic and international youth safety specifications.',
    },
    sportsPage: {
      badge: 'Available Sports',
      title: 'Discover Your Child’s Passion',
      subtitle: 'We offer 7 specialized training programs for children and youth, supervised by certified professional coaches.',
      filterAll: 'All Sports',
      featuresIncluded: 'Program Highlights & Training Scope:',
      ctaTitle: 'Need Assistance Choosing the Right Sport?',
      ctaSubtitle: 'Our sports advisors are ready to answer your questions and help you select the ideal program for your child.',
      ctaButton: 'Consult Our Team on WhatsApp',
    },
    sportDetailPage: {
      backToSports: 'Back to All Sports',
      ageLabel: 'Age Group',
      programsLabel: 'Programs',
      curriculumTitle: 'What Your Child Will Learn',
      curriculumSubtitle: 'A structured curriculum combining technical mastery, athletic conditioning, and character development.',
      levelsTitle: 'Training Progression & Levels',
      levelsSubtitle: 'Progressive pathways tailored to each child’s development, from beginners to competitive tournament athletes.',
      readyTitle: 'Ready to Enroll Your Child in This Sport?',
      readySubtitle: 'Reach out to us directly on WhatsApp to confirm training schedules and learn more about available offers.',
      whatsappInquiry: 'Inquire About This Sport on WhatsApp',
    },
    offersPage: {
      badge: 'Offers & Packages',
      title: 'Flexible Training Offers for Your Children',
      subtitle: 'Select the ideal package for your child and take advantage of our family discounts and installment options via Tabby & Tamara.',
      customInquiryTitle: 'Looking for a Custom Family Package?',
      customInquiryDesc: 'We are delighted to provide customized offers and packages for families with multiple children.',
      whatsappCta: 'Ask About Our Offers on WhatsApp',
      familyBenefitsTitle: 'Exclusive Family Benefits & Privileges',
      installmentsNote: 'All offers are eligible for flexible installment payment options through Tabby and Tamara.',
    },
    blogPage: {
      badge: 'Academy Blog',
      title: 'Sports Articles & Guidance for Parents',
      subtitle: 'Your comprehensive resource for youth fitness, sports nutrition, and child athletic development from our expert coaches.',
      readMore: 'Read Article',
      readTimePrefix: 'Read time:',
      shareArticle: 'Share Article',
      relatedArticles: 'Related Articles',
      backToBlog: 'Back to Blog',
    },
    faqPage: {
      badge: 'Frequently Asked Questions',
      title: 'Answers for Parents & Guardians',
      subtitle: 'Everything you need to know about joining, training programs, facilities, and installment options.',
      stillQuestionsTitle: 'Still Have Questions?',
      stillQuestionsDesc: 'Our friendly customer care team is available to assist you throughout the day.',
      askOnWhatsapp: 'Ask Us Directly on WhatsApp',
    },
    common: {
      whatsappTooltip: 'Chat on WhatsApp',
      languageToggle: 'العربية',
      languageName: 'English',
      viewDetails: 'View Details',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      pageNotFound: 'Page Not Found',
      pageNotFoundDesc: 'Sorry, the page you are looking for does not exist or has been moved.',
      backHome: 'Back to Home',
    },
  },
};
