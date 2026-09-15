import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
});

async function main() {
  try {
    const docs = await client.fetch('*[_type != "system.group"]');
    console.log('Total documents:', docs.length);
    console.log('Document types:', [...new Set(docs.map((d: any) => d._type))]);
  } catch (err: any) {
    console.error('Fetch error:', err.message);
  }
}

main();
