import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function verify() {
  const slides = await client.fetch(`
    *[_type == "heroSlide" && isActive != false] | order(displayOrder asc, _createdAt asc){
      _id,
      title,
      displayOrder,
      isActive,
      "imageUrl": image.asset->url
    }
  `);

  console.log('--- VERIFIED HERO SLIDES IN SANITY ---');
  console.log(JSON.stringify(slides, null, 2));
}

verify();
