import { ScheduleItem } from '../types';

export const scheduleItems: ScheduleItem[] = [
  // Football
  { id: 's1', sport: 'كرة القدم', sportId: 'football', level: 'مبتدئ', day: 'الأحد', time: '04:00 م', duration: '90 دقيقة', coach: 'أ. محمد العسيري', location: 'ملعب A', capacity: 20, enrolled: 15 },
  { id: 's2', sport: 'كرة القدم', sportId: 'football', level: 'متوسط', day: 'الاثنين', time: '04:00 م', duration: '90 دقيقة', coach: 'أ. خالد الغامدي', location: 'ملعب B', capacity: 18, enrolled: 16 },
  { id: 's3', sport: 'كرة القدم', sportId: 'football', level: 'متقدم', day: 'الثلاثاء', time: '05:00 م', duration: '90 دقيقة', coach: 'أ. فيصل القحطاني', location: 'ملعب A', capacity: 16, enrolled: 14 },
  { id: 's4', sport: 'كرة القدم', sportId: 'football', level: 'نخبة', day: 'الأربعاء', time: '05:30 م', duration: '120 دقيقة', coach: 'أ. محمد العسيري', location: 'ملعب الرئيسي', capacity: 14, enrolled: 12 },
  { id: 's5', sport: 'كرة القدم', sportId: 'football', level: 'مبتدئ', day: 'الخميس', time: '04:00 م', duration: '90 دقيقة', coach: 'أ. خالد الغامدي', location: 'ملعب B', capacity: 20, enrolled: 10 },

  // Basketball
  { id: 's6', sport: 'كرة السلة', sportId: 'basketball', level: 'مبتدئ', day: 'الأحد', time: '05:00 م', duration: '90 دقيقة', coach: 'أ. أحمد المالكي', location: 'قاعة السلة A', capacity: 16, enrolled: 12 },
  { id: 's7', sport: 'كرة السلة', sportId: 'basketball', level: 'متوسط', day: 'الثلاثاء', time: '04:30 م', duration: '90 دقيقة', coach: 'أ. عبدالله الزهراني', location: 'قاعة السلة B', capacity: 16, enrolled: 15 },
  { id: 's8', sport: 'كرة السلة', sportId: 'basketball', level: 'متقدم', day: 'الخميس', time: '05:00 م', duration: '90 دقيقة', coach: 'أ. أحمد المالكي', location: 'قاعة السلة A', capacity: 14, enrolled: 11 },

  // Swimming
  { id: 's9', sport: 'السباحة', sportId: 'swimming', level: 'مبتدئ', day: 'الأحد', time: '09:00 ص', duration: '60 دقيقة', coach: 'أ. يوسف الحربي', location: 'حوض A', capacity: 10, enrolled: 8 },
  { id: 's10', sport: 'السباحة', sportId: 'swimming', level: 'مبتدئ', day: 'الاثنين', time: '09:00 ص', duration: '60 دقيقة', coach: 'أ. يوسف الحربي', location: 'حوض B', capacity: 10, enrolled: 9 },
  { id: 's11', sport: 'السباحة', sportId: 'swimming', level: 'متوسط', day: 'الثلاثاء', time: '10:00 ص', duration: '75 دقيقة', coach: 'أ. سعد العتيبي', location: 'حوض A', capacity: 10, enrolled: 7 },
  { id: 's12', sport: 'السباحة', sportId: 'swimming', level: 'متقدم', day: 'الأربعاء', time: '08:00 ص', duration: '90 دقيقة', coach: 'أ. سعد العتيبي', location: 'حوض الأولمبي', capacity: 8, enrolled: 6 },
  { id: 's13', sport: 'السباحة', sportId: 'swimming', level: 'تنافسي', day: 'الخميس', time: '07:00 ص', duration: '120 دقيقة', coach: 'أ. يوسف الحربي', location: 'حوض الأولمبي', capacity: 8, enrolled: 7 },

  // Karate
  { id: 's14', sport: 'الكاراتيه', sportId: 'karate', level: 'مبتدئ', day: 'الأحد', time: '04:00 م', duration: '60 دقيقة', coach: 'أ. طارق البلوي', location: 'صالة الفنون', capacity: 20, enrolled: 18 },
  { id: 's15', sport: 'الكاراتيه', sportId: 'karate', level: 'متوسط', day: 'الاثنين', time: '05:00 م', duration: '75 دقيقة', coach: 'أ. طارق البلوي', location: 'صالة الفنون', capacity: 16, enrolled: 14 },
  { id: 's16', sport: 'الكاراتيه', sportId: 'karate', level: 'متقدم', day: 'الأربعاء', time: '04:30 م', duration: '90 دقيقة', coach: 'أ. علي الدوسري', location: 'صالة الفنون', capacity: 14, enrolled: 10 },
  { id: 's17', sport: 'الكاراتيه', sportId: 'karate', level: 'بطولي', day: 'الخميس', time: '05:30 م', duration: '90 دقيقة', coach: 'أ. علي الدوسري', location: 'صالة البطولات', capacity: 10, enrolled: 8 },

  // Kickboxing
  { id: 's18', sport: 'الكيك بوكسينغ', sportId: 'kickboxing', level: 'مبتدئ', day: 'الاثنين', time: '06:00 م', duration: '60 دقيقة', coach: 'أ. ناصر الشهري', location: 'صالة الملاكمة', capacity: 16, enrolled: 12 },
  { id: 's19', sport: 'الكيك بوكسينغ', sportId: 'kickboxing', level: 'متوسط', day: 'الأربعاء', time: '06:00 م', duration: '75 دقيقة', coach: 'أ. ناصر الشهري', location: 'صالة الملاكمة', capacity: 14, enrolled: 11 },
  { id: 's20', sport: 'الكيك بوكسينغ', sportId: 'kickboxing', level: 'متقدم', day: 'الخميس', time: '06:30 م', duration: '90 دقيقة', coach: 'أ. ناصر الشهري', location: 'صالة الملاكمة', capacity: 12, enrolled: 9 },

  // Gymnastics
  { id: 's21', sport: 'الجمباز', sportId: 'gymnastics', level: 'تمهيدي', day: 'الأحد', time: '10:00 ص', duration: '60 دقيقة', coach: 'أ. ريم السهلي', location: 'صالة الجمباز', capacity: 12, enrolled: 10 },
  { id: 's22', sport: 'الجمباز', sportId: 'gymnastics', level: 'مبتدئ', day: 'الثلاثاء', time: '04:00 م', duration: '75 دقيقة', coach: 'أ. ريم السهلي', location: 'صالة الجمباز', capacity: 12, enrolled: 11 },
  { id: 's23', sport: 'الجمباز', sportId: 'gymnastics', level: 'متوسط', day: 'الخميس', time: '04:30 م', duration: '90 دقيقة', coach: 'أ. سارة العمري', location: 'صالة الجمباز', capacity: 10, enrolled: 8 },

  // Roller Skating
  { id: 's24', sport: 'سكيتنج', sportId: 'roller-skating', level: 'مبتدئ', day: 'الجمعة', time: '10:00 ص', duration: '60 دقيقة', coach: 'أ. حمزة الحارثي', location: 'صالة السكيتنج', capacity: 15, enrolled: 13 },
  { id: 's25', sport: 'سكيتنج', sportId: 'roller-skating', level: 'متوسط', day: 'السبت', time: '10:00 ص', duration: '75 دقيقة', coach: 'أ. حمزة الحارثي', location: 'صالة السكيتنج', capacity: 14, enrolled: 10 },
];

export const days = ['الكل', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

export const sportFilters = [
  { id: 'all', label: 'كل الرياضات' },
  { id: 'football', label: 'كرة القدم' },
  { id: 'basketball', label: 'كرة السلة' },
  { id: 'swimming', label: 'السباحة' },
  { id: 'karate', label: 'الكاراتيه' },
  { id: 'kickboxing', label: 'الكيك بوكسينغ' },
  { id: 'gymnastics', label: 'الجمباز' },
  { id: 'roller-skating', label: 'سكيتنج' },
];
