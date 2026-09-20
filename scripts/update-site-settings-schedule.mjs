import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function updateSchedule() {
  console.log('⏰ Updating Daily Schedule in Sanity CMS...');

  await client
    .patch('siteSettings-main')
    .set({
      dailyScheduleTitle: {
        _type: 'localizedString',
        ar: 'المواعيد اليومية',
        en: 'Daily Schedule',
      },
      dailyScheduleDays: {
        _type: 'localizedString',
        ar: 'من السبت إلى الخميس',
        en: 'Saturday to Thursday',
      },
      dailyScheduleHours: {
        _type: 'localizedString',
        ar: '٥:٠٠ م',
        en: '5:00 PM',
      },
    })
    .commit();

  console.log('✅ Successfully saved Daily Schedule in Sanity siteSettings-main!');
}

updateSchedule().catch(console.error);
