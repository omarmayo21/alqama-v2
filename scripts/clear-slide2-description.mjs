import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function clearSlide2Description() {
  console.log('Clearing description from Slide 2 in Sanity...');

  await client
    .patch('heroSlide-2')
    .unset(['description'])
    .commit();

  console.log('✅ Successfully cleared description from heroSlide-2 in Sanity!');
}

clearSlide2Description().catch(console.error);
