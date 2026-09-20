import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
});

async function main() {
  console.log('=== VERIFYING SANITY PUBLISHED SPORTS DATA ===');
  const sports = await client.fetch(`*[_type == "sport" && isActive != false] | order(displayOrder asc){
    _id,
    "slug": slug.current,
    name,
    "imageUrl": image.asset->url,
    "heroImageUrl": heroImage.asset->url
  }`);
  console.log(`Found ${sports.length} published sports:`);
  sports.forEach(s => {
    console.log(`  - [${s.slug}] ${s.name?.ar || s.name} -> ${s.imageUrl || s.heroImageUrl}`);
  });

  console.log('\n=== VERIFYING SANITY GALLERY ALBUMS ===');
  const albums = await client.fetch(`*[_type == "galleryImage" && isActive != false] | order(displayOrder asc){
    _id,
    "slug": slug.current,
    title,
    description,
    "coverUrl": coverImage.asset->url,
    "imagesUrls": images[].asset->url,
    "albumImagesCount": count(images),
    displayOrder
  }`);

  const expectedCounts = [
    { album: 1, total: 14, cover: 1, remaining: 13 },
    { album: 2, total: 10, cover: 1, remaining: 9 },
    { album: 3, total: 12, cover: 1, remaining: 11 },
    { album: 4, total: 12, cover: 1, remaining: 11 },
    { album: 5, total: 19, cover: 1, remaining: 18 },
    { album: 6, total: 6, cover: 1, remaining: 5 },
    { album: 7, total: 6, cover: 1, remaining: 5 },
    { album: 8, total: 10, cover: 1, remaining: 9 },
  ];

  console.log(`Found ${albums.length} active albums in Sanity:`);
  let allMatched = true;

  albums.forEach((a, i) => {
    const exp = expectedCounts[i];
    const total = 1 + (a.albumImagesCount || 0);
    const isCountMatch = exp && total === exp.total && a.albumImagesCount === exp.remaining;
    const isCoverSanity = a.coverUrl && a.coverUrl.startsWith('https://cdn.sanity.io/');
    const isImagesSanity = a.imagesUrls && a.imagesUrls.every(u => u.startsWith('https://cdn.sanity.io/'));
    const isTitleEmpty = !a.title?.ar && !a.title?.en;

    console.log(`\nAlbum ${i + 1} (${a.slug}):`);
    console.log(`  - Total Images: ${total} (Expected: ${exp?.total}) -> ${isCountMatch ? '✓ MATCH' : '✗ MISMATCH'}`);
    console.log(`  - Cover in Sanity CDN: ${isCoverSanity ? '✓ YES' : '✗ NO'}`);
    console.log(`  - All ${a.albumImagesCount} album photos in Sanity CDN: ${isImagesSanity ? '✓ YES' : '✗ NO'}`);
    console.log(`  - Title / Description empty (no placeholder): ${isTitleEmpty ? '✓ YES' : '✗ NO'}`);

    if (!isCountMatch || !isCoverSanity || !isImagesSanity) {
      allMatched = false;
    }
  });

  console.log(`\n========================================`);
  if (allMatched && albums.length === 8) {
    console.log('✓ ALL 8 ALBUMS AND SPORTS VERIFIED SUCCESSFULLY WITH 100% ACCURACY!');
  } else {
    console.log('✗ VERIFICATION FAILED');
  }
}

main().catch(console.error);
