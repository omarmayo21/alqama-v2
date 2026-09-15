/// <reference types="vite/client" />
import { createClient } from '@sanity/client';

export const SANITY_PROJECT_ID = (import.meta.env.VITE_SANITY_PROJECT_ID as string) || 's4sblwvk';
export const SANITY_DATASET = (import.meta.env.VITE_SANITY_DATASET as string) || 'production';
export const SANITY_API_VERSION = '2024-03-01';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: false, // Set to false to ensure immediate real-time updates from published Sanity documents
  perspective: 'published', // Exclusively read published documents
});
