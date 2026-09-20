import { createClient } from '@sanity/client';

// Client EXACTLY as initialized in src/lib/sanity/client.ts (WITHOUT TOKEN, like in the browser)
const browserClient = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
  perspective: 'published',
});

const GALLERY_QUERY = `
  *[_type == "galleryImage" && isActive != false] | order(displayOrder asc, _createdAt desc){
    ...,
    "slug": coalesce(slug.current, slug, _id),
    "coverImageUrl": coalesce(coverImage.asset->url, image.asset->url),
    "imageUrl": coalesce(coverImage.asset->url, image.asset->url),
    "imagesUrls": images[].asset->url
  }
`;

async function test() {
  console.log('Testing query from unauthenticated browser client...');
  try {
    const result = await browserClient.fetch(GALLERY_QUERY);
    console.log(`Query returned ${result?.length} results:`);
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Query threw error:', err);
  }
}

test();
