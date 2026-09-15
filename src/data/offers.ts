import { Offer } from '../types';

export const offers: Offer[] = [
  {
    id: 'single-sport',
    title: 'باقة الرياضة التخصصية',
    badge: 'الخيار الأكثر طلباً',
    tagline: 'تركيز فني وبدني كامل على رياضة واحدة من اختيارك',
    description: 'برنامج تدريبي مخصص يركز على صقل مهارات طفلك في رياضته المفضلة مع مدرب معتمد ومتابعة تقييم دورية لأولياء الأمور.',
    features: [
      'تدريب تخصصي متكامل لرياضة واحدة',
      'إشراف مباشر من مدربين معتمدين ومرخصين',
      'إمكانية حضور أولياء الأمور للتدريبات',
      'تقارير دورية تطلعك على تطور أداء طفلك',
      'إمكانية التقسيط الميسر عبر تابي وتمارا',
      'خصومات خاصة عند تسجيل أكثر من طفل',
    ],
    popular: true,
  },
  {
    id: 'multi-sport',
    title: 'باقة الرياضات المتعددة',
    badge: 'تطوير شامل وتنوع',
    tagline: 'ممارسة رياضتين أو أكثر لبناء لياقة حركية متكاملة',
    description: 'باقة مثالية للأطفال الراغبين في استكشاف وتطوير مهاراتهم في أكثر من تخصص رياضي تحت مظلة تدريبية واحدة.',
    features: [
      'الجمع بين رياضتين أو أكثر (مثل السباحة والكرة أو الدفاع عن النفس)',
      'توزيع مرن للحصص الأسبوعية بما يناسب جدول الأسرة',
      'تطوير التوافق العضلي العصبي واللياقة البدنية الشاملة',
      'حضور التدريبات والمتابعة المستمرة مع الأجهزة الفنية',
      'إمكانية التقسيط مع تابي وتمارا بكل سهولة',
      'أولوية المشاركة في الأنشطة والفعاليات الداخلية',
    ],
    popular: false,
  },
  {
    id: 'championship-elite',
    title: 'باقة الأبطال والتطوير المتقدم',
    badge: 'المسار التنافسي والبطولات',
    tagline: 'إعداد بدني وتكتيكي مكثف للمنافسات والبطولات',
    description: 'برنامج مخصص للمواهب الواعدة لإعدادهم وصقل قدراتهم التنافسية لخوض الدوريات والبطولات الرسمية بإشراف فني متخصص.',
    features: [
      'برامج إعداد بدني وتكتيكي مكثف للفئات السنية',
      'إشراف وتوجيه فني فردي من كبار المدربين',
      'تحليلات فنية وتغذوية مستمرة بالتعاون مع ولي الأمر',
      'إعداد تنافسي لخوض البطولات والمباريات الرسمية',
      'متاح بنظام التقسيط المرن عبر تابي وتمارا',
      'خصم عائلي خاص عند اشتراك الأخوة',
    ],
    popular: false,
  },
];

export const offersEn: Offer[] = [
  {
    id: 'single-sport',
    title: 'Specialized Single-Sport Offer',
    badge: 'Most Popular Choice',
    tagline: 'Full technical and athletic focus on your child’s chosen sport',
    description: 'A dedicated training program designed to hone your child’s skills in their favorite sport with certified coaches and regular parent progress reports.',
    features: [
      'Comprehensive specialized training in one sport',
      'Direct coaching from certified and licensed staff',
      'Parents are welcome to attend training sessions',
      'Regular evaluation reports on your child’s progress',
      'Flexible installment options available via Tabby & Tamara',
      'Special family discounts when enrolling multiple siblings',
    ],
    popular: true,
  },
  {
    id: 'multi-sport',
    title: 'Multi-Sport Development Offer',
    badge: 'Comprehensive Agility',
    tagline: 'Engage in two or more sports to build well-rounded athleticism',
    description: 'An ideal program for children eager to explore and develop skills across multiple disciplines under one cohesive training system.',
    features: [
      'Combine two or more sports (e.g. Swimming, Football, Martial Arts)',
      'Flexible weekly scheduling that fits your family routine',
      'Enhancing neuromuscular coordination and complete fitness',
      'Spectator access and direct communication with coaching staff',
      'Convenient installment options through Tabby and Tamara',
      'Priority participation in internal academy exhibitions',
    ],
    popular: false,
  },
  {
    id: 'championship-elite',
    title: 'Champions & Elite Pathway Offer',
    badge: 'Competitive & Tournament Track',
    tagline: 'Intensive tactical and physical preparation for competitive tournaments',
    description: 'Tailored for promising young talents aiming to refine their competitive edge and participate in official leagues and tournaments under expert guidance.',
    features: [
      'High-performance physical and tactical preparation',
      'Individualized technical guidance from senior head coaches',
      'Regular performance and athletic conditioning reviews',
      'Competitive readiness for official meets and matches',
      'Eligible for flexible installment plans via Tabby & Tamara',
      'Special sibling privileges on all family enrollments',
    ],
    popular: false,
  },
];

export const specialOffers = [
  {
    id: 'siblings-discount',
    title: 'عرض وخصم الأخوة والعائلات',
    description: 'حرصاً منا على دعم العائلات، نقدم خصومات وتسهيلات تفضيلية خاصة عند تسجيل الأخوة في مختلف رياضات الأكاديمية.',
    highlight: 'خصم خاص يبدأ من الطفل الثاني',
  },
  {
    id: 'tabby-tamara',
    title: 'خيارات التقسيط الميسر مع تابي وتمارا',
    description: 'يمكنك الآن تقسيط جميع باقات وبرامج الأكاديمية بكل سهولة وسلاسة عبر تابي وتمارا بدون أي أعباء مالية فورية.',
    highlight: 'دفع ميسر ومرن لجميع الباقات',
  },
  {
    id: 'parents-attendance',
    title: 'ميزة حضور أولياء الأمور',
    description: 'نوفر قاعات ومساحات مخصصة ومريحة تتيح للآباء والأمهات حضور الجلسات التدريبية ومتابعة شغف وتطور أطفالهم خطوة بخطوة.',
    highlight: 'بيئة مفتوحة وشفافة للأسرة',
  },
];

export const specialOffersEn = [
  {
    id: 'siblings-discount',
    title: 'Special Sibling & Family Discounts',
    description: 'To support active families, we offer special discount rates and privileges when enrolling two or more siblings across any sport.',
    highlight: 'Special discount starting from the second child',
  },
  {
    id: 'tabby-tamara',
    title: 'Flexible Installments with Tabby & Tamara',
    description: 'Easily pay for any academy offer through flexible installment plans with Tabby and Tamara without upfront stress.',
    highlight: 'Convenient installment options for all offers',
  },
  {
    id: 'parents-attendance',
    title: 'Parent Attendance Privilege',
    description: 'Enjoy comfortable spectator areas to watch your children’s sessions and witness their dedication and progress firsthand.',
    highlight: 'Transparent and family-friendly environment',
  },
];
