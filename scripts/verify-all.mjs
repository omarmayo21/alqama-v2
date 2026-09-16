import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function runVerification() {
  console.log('🔍 Running Full Verification Suite...\n');

  const [settings, reviews, gallery, nav] = await Promise.all([
    client.fetch('*[_type == "siteSettings"][0]{academyName, slogan}'),
    client.fetch('*[_type == "testimonial" && isActive != false] | order(displayOrder asc){_id, name, rating, date, text}'),
    client.fetch('*[_type == "galleryImage" && isActive != false] | order(displayOrder asc){_id, title, category, "imageUrl": image.asset->url}'),
    client.fetch('*[_type == "navigation"][0]{items}'),
  ]);

  console.log('1. ACADEMY NAME IN CMS:');
  console.log('   Arabic:', settings?.academyName?.ar);
  console.log('   English:', settings?.academyName?.en);
  console.log('');

  console.log('2. ORIGINAL GOOGLE REVIEWS IN SANITY (' + reviews.length + ' reviews):');
  reviews.forEach((r, i) => {
    console.log(`   [${i + 1}] ${r.name?.ar} (${r.rating} ⭐) - ${r.date?.ar}`);
    console.log(`       Preview: "${r.text?.ar?.replace(/\n/g, ' ')?.slice(0, 60)}..."`);
  });
  console.log('');

  console.log('3. GALLERY ITEMS IN SANITY (' + gallery.length + ' items):');
  gallery.forEach((g, i) => {
    console.log(`   [${i + 1}] [${g.category}] ${g.title?.ar} -> ${g.imageUrl ? '✅ ' + g.imageUrl.slice(0, 55) + '...' : '❌ No Image'}`);
  });
  console.log('');

  console.log('4. NAVIGATION MENU IN SANITY:');
  nav?.items?.forEach((n, i) => {
    console.log(`   ${i + 1}. ${n.label?.ar} (${n.label?.en}) -> ${n.path}`);
  });
}

runVerification().catch(console.error);
