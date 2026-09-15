import { defineType, defineField } from 'sanity';

export const scheduleItem = defineType({
  name: 'scheduleItem',
  title: 'Training Schedule Session / موعد الحصة التدريبية',
  type: 'object',
  fields: [
    defineField({
      name: 'dayAr',
      title: 'Day (Arabic) / اليوم بالعربية',
      type: 'string',
      options: {
        list: [
          { title: 'الأحد / Sunday', value: 'الأحد' },
          { title: 'الاثنين / Monday', value: 'الاثنين' },
          { title: 'الثلاثاء / Tuesday', value: 'الثلاثاء' },
          { title: 'الأربعاء / Wednesday', value: 'الأربعاء' },
          { title: 'الخميس / Thursday', value: 'الخميس' },
          { title: 'الجمعة / Friday', value: 'الجمعة' },
          { title: 'السبت / Saturday', value: 'السبت' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dayEn',
      title: 'Day (English) / اليوم بالإنجليزية',
      type: 'string',
      options: {
        list: [
          { title: 'Sunday', value: 'Sunday' },
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTimeAr',
      title: 'Start Time (Arabic) / وقت البدء بالعربية',
      type: 'string',
      placeholder: '04:00 م',
    }),
    defineField({
      name: 'startTimeEn',
      title: 'Start Time (English) / وقت البدء بالإنجليزية',
      type: 'string',
      placeholder: '04:00 PM',
    }),
    defineField({
      name: 'endTimeAr',
      title: 'End Time (Arabic) / وقت الانتهاء بالعربية',
      type: 'string',
      placeholder: '05:30 م',
    }),
    defineField({
      name: 'endTimeEn',
      title: 'End Time (English) / وقت الانتهاء بالإنجليزية',
      type: 'string',
      placeholder: '05:30 PM',
    }),
    defineField({
      name: 'ageGroupAr',
      title: 'Age Group (Arabic) / الفئة العمرية بالعربية',
      type: 'string',
      placeholder: '4 - 8 سنوات',
    }),
    defineField({
      name: 'ageGroupEn',
      title: 'Age Group (English) / الفئة العمرية بالإنجليزية',
      type: 'string',
      placeholder: '4 - 8 Years',
    }),
    defineField({
      name: 'levelAr',
      title: 'Level (Arabic) / المستوى بالعربية',
      type: 'string',
      placeholder: 'مبتدئ / متوسط / متقدم / نخبة',
    }),
    defineField({
      name: 'levelEn',
      title: 'Level (English) / المستوى بالإنجليزية',
      type: 'string',
      placeholder: 'Beginner / Intermediate / Advanced / Elite',
    }),
    defineField({
      name: 'coachAr',
      title: 'Coach (Arabic) / المدرب بالعربية',
      type: 'string',
      placeholder: 'كابتن أحمد',
    }),
    defineField({
      name: 'coachEn',
      title: 'Coach (English) / المدرب بالإنجليزية',
      type: 'string',
      placeholder: 'Coach Ahmed',
    }),
    defineField({
      name: 'locationAr',
      title: 'Venue / الصالة أو الملعب بالعربية',
      type: 'string',
      placeholder: 'ملعب A / صالة السباحة',
    }),
    defineField({
      name: 'locationEn',
      title: 'Venue / الصالة أو الملعب بالإنجليزية',
      type: 'string',
      placeholder: 'Pitch A / Indoor Pool',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / متاح ومفعّل',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      dayAr: 'dayAr',
      dayEn: 'dayEn',
      start: 'startTimeAr',
      end: 'endTimeAr',
      level: 'levelAr',
      coach: 'coachAr',
      age: 'ageGroupAr',
      isActive: 'isActive',
    },
    prepare({ dayAr, dayEn, start, end, level, coach, age, isActive }) {
      const timing = start && end ? `${start} - ${end}` : (start || '');
      return {
        title: `${dayAr || dayEn || 'Session'} ${timing ? `(${timing})` : ''} ${isActive === false ? '⛔ [معطل]' : '✅'}`,
        subtitle: [age, level, coach ? `المدرب: ${coach}` : null].filter(Boolean).join(' • '),
      };
    },
  },
});
