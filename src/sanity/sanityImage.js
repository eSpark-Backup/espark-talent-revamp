import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

const urlFor = (source) => {
  return builder.image(source);
};

export { urlFor, builder };
