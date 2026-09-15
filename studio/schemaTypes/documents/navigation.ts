import { defineType, defineField } from 'sanity';

export const navigation = defineType({
  name: 'navigation',
  title: 'Header Navigation Menu / القائمة الرئيسية للموقع',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name / اسم التكوين',
      type: 'string',
      initialValue: 'Main Header Navigation',
      readOnly: true,
    }),
    defineField({
      name: 'menuItems',
      title: 'Navigation Menu Items / عناصر القائمة الرئيسية',
      type: 'array',
      of: [{ type: 'navItem' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      items: 'menuItems',
    },
    prepare({ items }) {
      return {
        title: 'Header Navigation Menu',
        subtitle: `${items ? items.length : 0} items configured`,
      };
    },
  },
});
