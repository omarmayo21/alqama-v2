import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
});

async function main() {
  const offers = await client.fetch('*[_type == "offer"] | order(displayOrder asc)');
  console.log('Total offers:', offers.length);
  offers.forEach((o, i) => {
    console.log(`[${i + 1}] ID: ${o._id}, Title: ${JSON.stringify(o.title)}, Price: ${o.price}, displayOrder: ${o.displayOrder}`);
  });
}

main().catch(console.error);
