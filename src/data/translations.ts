export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    sports: string;
    offers: string;
    gallery: string;
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
    scheduleBadge: string;
    scheduleTitle: string;
    scheduleDays: string;
    scheduleHours: string;
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
  galleryPage: {
    badge: string;
    title: string;
    subtitle: string;
    allCategory: string;
    tournamentsCategory: string;
    eventsCategory: string;
    trainingCategory: string;
    otherCategory: string;
    emptyTitle: string;
    emptySubtitle: string;
    closeLightbox: string;
    nextImage: string;
    prevImage: string;
    imageCounter: string;
    backToGallery: string;
    openAlbum: string;
    photosLabel: string;
    photoLabel: string;
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
      gallery: 'المعرض',
      blog: 'المدونة',
      contact: 'تواصل معنا',
    },
    hero: {
      badge: 'اكاديمية القمة الرياضية للأطفال بجدة',
      titleLine1: 'الأكاديمية الاكثر تطورا',
      titleHighlight: 'في جدة',
      subtitle: 'نمهّد طريق أبنائكم نحو القمة.. صرح رياضي متكامل يهدف إلى اكتشاف المواهب وبناء الأبطال عبر برامج تدريبية احترافية تدعم تطورهم الجسدي والنفسي',
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
          title: 'تقسيط عبر تابي وتمارا',
          desc: 'خيارات سداد ذكية ومريحة بدون فوائد، مصممة خصيصاً لراحة بالك.',
        },
      ],
    },
    sportsSection: {
      badge: 'رياضات متنوعة للأطفال',
      title: 'برامج رياضية متنوعة تقود طفلك نحو القمة',
      subtitle: 'بيئة رياضية آمنة ومتخصصة تمنح أبناءكم فرصة استكشاف شغفهم وتطوير قدراتهم البدنية والذهنية بثقة.',
      viewAll: 'عرض جميع الرياضات',
      agePrefix: 'الفئة العمرية:',
      levelLabel: 'المستويات:',
      trainingPrograms: 'برامج تدريبية متخصصة',
      detailsBtn: 'تفاصيل البرنامج',
    },
    paymentSection: {
      badge: 'قسطها مع القمة',
      title: 'تقسيط عبر تابي وتمارا',
      subtitle: 'خيارات سداد ذكية ومريحة بدون فوائد، مصممة خصيصاً لراحة بالك.',
      tabbyTitle: 'قسط عبر تابي',
      tabbyDesc: 'قسط مع تابي (Tabby). (قسّم فاتورتك على دفعات شهرية مريحة)',
      tamaraTitle: 'قسط عبر تمارا',
      tamaraDesc: 'تقسيط تمارا (Tamara). (خطط دفع مرنة تلبي احتياجاتك وتتناسب مع ميزانيتك بسهولة.)',
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
      description: 'أكاديمية القمة الرياضية في جدة.. أحدث بيئة رياضية متكاملة لرعاية وبناء وتطوير مهارات الأطفال في ٧ رياضات متخصصة.',
      quickLinksTitle: 'روابط سريعة',
      sportsTitle: 'رياضاتنا',
      contactTitle: 'تواصل معنا',
      locationText: 'حي الزهراء - داخل مدارس دار الحنان - جدة',
      hoursText: 'السبت - الخميس: ٥:٠٠ م - ٨:٠٠ م',
      allRightsReserved: 'جميع الحقوق محفوظة لأكاديمية القمة الرياضية',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
    aboutPage: {
      badge: 'عن أكاديمية القمة',
      title: 'نصنع أبطال الغد في بيئة ملهمة وآمنة',
      subtitle: 'تأسست أكاديمية القمة الرياضية لتكون الوجهة الرياضية والتربوية الرائدة للأطفال في جدة، حيث نجمع بين التدريب الاحترافي وبناء الشخصية المتوازنة.',
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
      subtitle: 'نقدم ٧ برامج تدريبية متخصصة للأطفال بإشراف مدربين محترفين ومعتمدين.',
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
      badge: 'عروض اليوم الوطني 96',
      title: 'عروض اليوم الوطني 96',
      subtitle: 'احتفلوا باليوم الوطني 96 مع باقات رياضية استثنائية لأبنائكم في أكاديمية القمة بجدة',
      customInquiryTitle: 'هل تبحث عن باقة مخصصة لعائلتك؟',
      customInquiryDesc: 'يسعدنا دائماً تقديم عروض وباقات خاصة بالعائلات والأخوة لتناسب احتياجاتكم.',
      whatsappCta: 'احجز العرض عبر واتساب',
      familyBenefitsTitle: 'مزايا وتسهيلات حصرية للعائلات',
      installmentsNote: 'جميع الباقات متاحة بخيارات تقسيط ميسرة عبر تابي وتمارا.',
      scheduleBadge: 'أوقات التدريب اليومية',
      scheduleTitle: 'المواعيد اليومية',
      scheduleDays: 'من السبت إلى الخميس',
      scheduleHours: 'من 5 إلى 8م',
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
    galleryPage: {
      badge: 'معرض صور الأكاديمية',
      title: 'لحظات لا تُنسى من مسيرة أبطالنا',
      subtitle: 'استكشف صور البطولات، الفعاليات، والأنشطة التدريبية اليومية لأطفال أكاديمية القمة الرياضية.',
      allCategory: 'الكل',
      tournamentsCategory: 'بطولات ومسابقات',
      eventsCategory: 'فعاليات واحتفالات',
      trainingCategory: 'حصص وتدريبات',
      otherCategory: 'أخرى',
      emptyTitle: 'لا توجد صور في هذا القسم حالياً',
      emptySubtitle: 'سيتم إضافة صور جديدة قريباً من فعالياتنا وبطولاتنا القادمة.',
      closeLightbox: 'إغلاق',
      nextImage: 'الصورة التالية',
      prevImage: 'الصورة السابقة',
      imageCounter: 'من',
      backToGallery: 'العودة إلى المعرض',
      openAlbum: 'عرض الألبوم',
      photosLabel: 'صور',
      photoLabel: 'صورة',
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
      gallery: 'Gallery',
      blog: 'Blog',
      contact: 'Contact Us',
    },
    hero: {
      badge: 'ALQIMA Sports Academy for Children in Jeddah',
      titleLine1: 'The Most Advanced Sports Academy',
      titleHighlight: 'in Jeddah',
      subtitle: 'Paving your children’s path to the top.. A comprehensive sports academy dedicated to discovering talent and building champions through professional training programs supporting their physical and mental development.',
      ctaPrimary: 'Talk to Our Team',
      ctaSecondary: 'Explore Sports',
      stat1Value: '7+',
      stat1Label: 'Specialized Children Sports',
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
          title: 'Installments via Tabby & Tamara',
          desc: 'Smart and convenient payment options with no interest, specially designed for your peace of mind.',
        },
      ],
    },
    sportsSection: {
      badge: 'Diverse Children Sports',
      title: 'Diverse Sports Programs Leading Your Child to the Top',
      subtitle: 'A safe, specialized athletic environment giving your children the opportunity to explore their passion and build physical and mental capabilities with confidence.',
      viewAll: 'View All Sports',
      agePrefix: 'Age Range:',
      levelLabel: 'Levels:',
      trainingPrograms: 'Specialized Training Programs',
      detailsBtn: 'Program Details',
    },
    paymentSection: {
      badge: 'Installments with ALQIMA',
      title: 'Installments via Tabby & Tamara',
      subtitle: 'Smart and convenient payment options with no interest, specially designed for your peace of mind.',
      tabbyTitle: 'Pay with Tabby',
      tabbyDesc: 'Split your payment into easy monthly installments with Tabby',
      tamaraTitle: 'Pay with Tamara',
      tamaraDesc: 'Flexible payment plans tailored to your needs and budget with Tamara',
      learnMore: 'Inquire About Installments',
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
      description: 'ALQIMA Sports Academy in Jeddah — the premier sports academy dedicated to nurturing and developing children across 7 specialized sports.',
      quickLinksTitle: 'Quick Links',
      sportsTitle: 'Our Sports',
      contactTitle: 'Contact Us',
      locationText: 'Al Zahra District – Inside Dar Al-Hanan Schools – Jeddah',
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
      visionDesc: 'To be the most advanced and respected children sports academy in Saudi Arabia, preparing a promising generation to represent the Kingdom locally and globally.',
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
      facilitiesSubtitle: 'Indoor, air-conditioned sports venues built to Olympic and international children safety specifications.',
    },
    sportsPage: {
      badge: 'Available Sports',
      title: 'Discover Your Child’s Passion',
      subtitle: 'We offer 7 specialized training programs for children, supervised by certified professional coaches.',
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
      badge: 'Saudi National Day 96 Offers',
      title: 'Saudi National Day 96 Offers',
      subtitle: 'Celebrate Saudi National Day 96 with exclusive sports packages for your champions at ALQIMA Academy in Jeddah',
      customInquiryTitle: 'Looking for a Custom Family Package?',
      customInquiryDesc: 'We are delighted to provide customized offers and packages for families with multiple children.',
      whatsappCta: 'Claim Offer via WhatsApp',
      familyBenefitsTitle: 'Exclusive Family Benefits & Privileges',
      installmentsNote: 'All offers are eligible for flexible installment payment options through Tabby and Tamara.',
      scheduleBadge: 'Daily Training Times',
      scheduleTitle: 'Daily Schedule',
      scheduleDays: 'Saturday to Thursday',
      scheduleHours: '5:00 PM – 8:00 PM',
    },
    blogPage: {
      badge: 'ALQIMA Blog',
      title: 'Sports Articles & Guidance for Parents',
      subtitle: 'Your comprehensive guide to child health, nutrition, and athletic character development with expert advice from our coaches.',
      readMore: 'Read Article',
      readTimePrefix: 'Read time:',
      shareArticle: 'Share Article',
      relatedArticles: 'Related Articles',
      backToBlog: 'Back to Blog',
    },
    galleryPage: {
      badge: 'Academy Photo Gallery',
      title: 'Unforgettable Moments of Our Young Champions',
      subtitle: 'Explore photos from championships, tournaments, academy events, and daily training sessions at ALQIMA Sports Academy.',
      allCategory: 'All',
      tournamentsCategory: 'Tournaments',
      eventsCategory: 'Events',
      trainingCategory: 'Training',
      otherCategory: 'Other',
      emptyTitle: 'No photos in this section yet',
      emptySubtitle: 'New photos will be uploaded soon from our upcoming events and championships.',
      closeLightbox: 'Close',
      nextImage: 'Next Image',
      prevImage: 'Previous Image',
      imageCounter: 'of',
      backToGallery: 'Back to Gallery',
      openAlbum: 'Open Album',
      photosLabel: 'Photos',
      photoLabel: 'Photo',
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
