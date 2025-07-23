import { createClient } from 'next-sanity';

export const sanity = createClient({
  projectId: 'yourProjectId', // Replace with your actual
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-07-23',
});
