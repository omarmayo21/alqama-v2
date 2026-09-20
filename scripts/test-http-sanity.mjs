const query = encodeURIComponent(`*[_type == "galleryImage" && isActive != false] | order(displayOrder asc, _createdAt desc){
  ...,
  "slug": coalesce(slug.current, slug, _id),
  "coverImageUrl": coalesce(coverImage.asset->url, image.asset->url),
  "imageUrl": coalesce(coverImage.asset->url, image.asset->url),
  "imagesUrls": images[].asset->url
}`);

const url = `https://s4sblwvk.api.sanity.io/v2024-03-01/data/query/production?query=${query}&perspective=published`;

async function main() {
  console.log('Sending direct HTTP fetch to Sanity API endpoint:');
  console.log(url);
  const response = await fetch(url);
  console.log(`HTTP Status: ${response.status} ${response.statusText}`);
  const json = await response.json();
  console.log(`Result items count: ${json.result?.length}`);
  if (json.result) {
    json.result.forEach((item, idx) => {
      console.log(`[Item ${idx + 1}] ID: ${item._id}, Slug: ${item.slug}, DisplayOrder: ${item.displayOrder}`);
      console.log(`  Cover URL: ${item.coverImageUrl}`);
      console.log(`  Images count: ${item.imagesUrls?.length} (Total with cover: ${1 + (item.imagesUrls?.length || 0)})`);
    });
  }
}

main().catch(console.error);
