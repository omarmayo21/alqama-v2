import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const defaultSchedule = [
  {
    _key: 'sun',
    _type: 'scheduleItem',
    dayAr: 'الأحد',
    dayEn: 'Sunday',
    startTimeAr: 'تبدأ الحصص الساعة 5:00 م',
    startTimeEn: 'Sessions start at 5:00 PM.',
    displayOrder: 1,
    isActive: true,
  },
  {
    _key: 'mon',
    _type: 'scheduleItem',
    dayAr: 'الاثنين',
    dayEn: 'Monday',
    startTimeAr: 'تبدأ الحصص الساعة 5:00 م',
    startTimeEn: 'Sessions start at 5:00 PM.',
    displayOrder: 2,
    isActive: true,
  },
  {
    _key: 'tue',
    _type: 'scheduleItem',
    dayAr: 'الثلاثاء',
    dayEn: 'Tuesday',
    startTimeAr: 'تبدأ الحصص الساعة 5:00 م',
    startTimeEn: 'Sessions start at 5:00 PM.',
    displayOrder: 3,
    isActive: true,
  },
  {
    _key: 'wed',
    _type: 'scheduleItem',
    dayAr: 'الأربعاء',
    dayEn: 'Wednesday',
    startTimeAr: 'تبدأ الحصص الساعة 5:00 م',
    startTimeEn: 'Sessions start at 5:00 PM.',
    displayOrder: 4,
    isActive: true,
  },
  {
    _key: 'thu',
    _type: 'scheduleItem',
    dayAr: 'الخميس',
    dayEn: 'Thursday',
    startTimeAr: 'تبدأ الحصص الساعة 5:00 م',
    startTimeEn: 'Sessions start at 5:00 PM.',
    displayOrder: 5,
    isActive: true,
  },
];

async function updateAllSportsSchedule() {
  console.log('Fetching sports from Sanity...');
  const sports = await client.fetch('*[_type == "sport"]{ _id, name, slug }');
  console.log(`Found ${sports.length} sports in Sanity.`);

  for (const s of sports) {
    console.log(`Updating schedule for ${s._id}...`);
    await client
      .patch(s._id)
      .set({
        schedule: defaultSchedule,
      })
      .commit();
    console.log(`✅ Updated ${s._id}`);
  }

  console.log('🎉 Successfully updated schedule on all sport documents in Sanity CMS!');
}

updateAllSportsSchedule().catch(console.error);
