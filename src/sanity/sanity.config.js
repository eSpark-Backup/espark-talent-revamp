const sanityClient = require('@sanity/client');

/**
 * Configuration object for the Sanity client.
 *
 * @property {string} projectId - The unique identifier for the Sanity project.
 * @property {string} dataset - The dataset to use within the Sanity project.
 * @property {string} apiVersion - The version of the Sanity API to use.
 * @property {boolean} useCdn - Determines whether to use the Sanity CDN for faster response times.
 */
const config = {
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  // token: NEED FOR write access i-e MIGRATION
};

const client = sanityClient?.createClient(config);

module.exports = client;
