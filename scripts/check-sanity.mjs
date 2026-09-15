import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false,
});

async function test() {
  const home = await client.fetch(`*[_type == "homepage"][0]`);
  console.log('HOMEPAGE IN SANITY:', JSON.stringify(home, null, 2));
}

test().catch(console.error);
