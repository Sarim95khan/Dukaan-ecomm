import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion: 'v2023-06-03',
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
