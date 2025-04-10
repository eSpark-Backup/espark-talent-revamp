import imageUrlBuilder from '@sanity/image-url';

/**
 * Creates an image URL builder instance for the Sanity CMS.
 *
 * @constant
 * @type {object}
 * @property {string} projectId - The unique identifier for the Sanity project.
 * @property {string} dataset - The dataset to use within the Sanity project.
 * @property {string} apiVersion - The version of the Sanity API to use.
 * @property {boolean} useCdn - Whether to use the Sanity CDN for faster response times.
 */
export const builder = imageUrlBuilder({
  projectId: '93d1bm1e',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

/**
 * Generates a URL for the given image source using the builder.
 *
 * @param {Object} source - The image source object to generate the URL for.
 * @returns {string} The generated image URL.
 */
export function urlFor(source) {
  return builder?.image(source);
}
