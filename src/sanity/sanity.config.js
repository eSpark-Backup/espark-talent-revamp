const sanityClient = require('@sanity/client');

const config = {
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  // token: NEED FOR write access i-e MIGRATION
};

const client = sanityClient.createClient(config);

module.exports = client;
