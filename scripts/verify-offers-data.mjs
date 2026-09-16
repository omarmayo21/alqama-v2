import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
});

async function verifyAll() {
  console.log('=== VERIFYING SANITY OFFERS ===');
  const offers = await client.fetch('*[_type == "offer" && isActive != false] | order(displayOrder asc)');
  console.log(`Total active offers in Sanity: ${offers.length}`);

  offers.forEach((o, idx) => {
    console.log(`\n--- OFFER ${idx + 1} (${o._id}) ---`);
    console.log(`Title (AR): ${o.title?.ar} | Title (EN): ${o.title?.en}`);
    console.log(`Price (AR): ${o.price?.ar} | Price (EN): ${o.price?.en}`);
    console.log(`Sessions (AR): ${o.sessionsCount?.ar} | Sessions (EN): ${o.sessionsCount?.en}`);
    console.log(`Sports (AR): ${o.sportsIncluded?.ar} | Sports (EN): ${o.sportsIncluded?.en}`);
    console.log(`Badge (AR): ${o.badge?.ar} | Badge (EN): ${o.badge?.en}`);
    console.log(`Popular: ${o.isPopular}`);
  });
}

verifyAll().catch(console.error);
