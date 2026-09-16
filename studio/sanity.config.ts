import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { deskStructure } from './deskStructure';

export default defineConfig({
  name: 'alqima-sports-academy',
  title: 'ALQIMA Sports Academy / أكاديمية القمة الرياضية',

  projectId: 's4sblwvk',
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({
      defaultApiVersion: '2024-03-01',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
