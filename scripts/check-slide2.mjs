import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
});

async function main() {
  const slides = await client.fetch('*[_type == "heroSlide"] | order(displayOrder asc)');
  console.log('Total heroSlides:', slides.length);
  slides.forEach((s, idx) => {
    console.log(`\n[Slide ${idx + 1}] ID: ${s._id}`);
    console.log('Title:', s.title);
    console.log('Description:', s.description);
    console.log('Primary CTA:', s.primaryCtaText);
    console.log('Secondary CTA:', s.secondaryCtaText);
    console.log('Reassurance:', s.reassuranceText);
  });
}

main().catch(console.error);
