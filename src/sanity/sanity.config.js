import { createClient } from '@sanity/client';

const config = {
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  // token: NEED FOR write access i-e MIGRATION 
};

export const client = createClient(config);
