import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
});

async function verify() {
  const docs = await client.fetch(`*[_type != "system.group" && !(_type match "sanity.*")]{ _id, _type }`);
  console.log(`\n📊 Live Published Documents in s4sblwvk/production: ${docs.length}`);

  const countsByType = {};
  for (const doc of docs) {
    countsByType[doc._type] = (countsByType[doc._type] || 0) + 1;
  }

  console.table(countsByType);
}

verify().catch(console.error);
