import {
  getBlogsMetadata,
  getHireMetadata,
  getWikisMetadata,
} from '@/components/global/seo';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import {
  getBlog,
  getHire,
  getPageSeo,
  getSingleBlog,
  getSingleHire,
  getSingleWiki,
  getWiki,
} from '@/sanity/sanity.quries';

/**
 * Retrieves the SEO (Search Engine Optimization) configuration for a page.
 *
 * @constant {Promise<Object>} seo - A promise that resolves to the SEO configuration object for the page.
 * @throws {Error} If the `getPageSeo` function fails to retrieve the SEO data.
 */
export const seo = await getPageSeo();

/**
 * Fetches and exports the blogs data.
 *
 * @constant {Promise<any>} blogs - The blogs data fetched from the `getBlog` function.
 * @throws {Error} If the `getBlog` function fails to fetch the data.
 */
export const blogs = await getBlog();

/**
 * Retrieves the hire data asynchronously.
 *
 * @constant {Promise<any>} hires - A promise that resolves to the hire data.
 * @throws {Error} Throws an error if the `getHire` function fails.
 */
export const hires = await getHire();

/**
 * Retrieves wiki data by calling the `getWiki` function.
 *
 * @constant {Promise<any>} wikis - A promise that resolves to the wiki data.
 * @throws {Error} If the `getWiki` function fails to fetch the data.
 */
export const wikis = await getWiki();

/**
 * Combines multiple arrays into a single array of URLs.
 *
 * @constant
 * @type {string[]}
 * @description Merges the arrays `seo`, `wikis`, `hires`, and `blogs` into a single array of URLs.
 */
export const urls = [...seo, ...wikis, ...hires, ...blogs];

/**
 * Fetches metadata for a specific hire based on the provided slug.
 *
 * @param {string} slug - The unique identifier for the hire.
 * @returns {Promise<Object>} A promise that resolves to the metadata of the hire.
 * If the hire is not found, it falls back to the first entry in the GLOBAL_SEO array.
 */
export async function fetchHireMetadata(slug) {
  const hire = await getSingleHire(slug);
  const filteredData = hire || GLOBAL_SEO[0];
  return getHireMetadata(filteredData);
}

/**
 * Fetches metadata for a specific wiki based on the provided slug.
 *
 * This function retrieves a single wiki using the provided slug. If no wiki is found,
 * it falls back to a default global SEO configuration. The metadata for the retrieved
 * or fallback wiki is then processed and returned.
 *
 * @param {string} slug - The unique identifier for the wiki to fetch.
 * @returns {Promise<Object>} A promise that resolves to the metadata of the wiki.
 */
export async function fetchWikiMetadata(slug) {
  const wiki = await getSingleWiki(slug);
  const filteredData = wiki || GLOBAL_SEO[0];
  return getWikisMetadata(filteredData);
}

/**
 * Fetches metadata for a blog based on the provided slug.
 *
 * This function retrieves a single blog using the provided slug and falls back
 * to a global SEO configuration if the blog is not found. It then processes
 * the data to extract metadata.
 *
 * @param {string} slug - The unique identifier for the blog.
 * @returns {Promise<Object>} A promise that resolves to the blog metadata.
 */
export async function fetchBlogMetadata(slug) {
  const wiki = await getSingleBlog(slug);
  const filteredData = wiki || GLOBAL_SEO[0];
  return getBlogsMetadata(filteredData);
}

/**
 * Retrieves filtered SEO data based on the provided path.
 *
 * @param {string} path - The path to filter the SEO data by.
 * @returns {Object} The filtered SEO data object if a match is found,
 *                   otherwise the first object from the GLOBAL_SEO array.
 */
export const getFilteredData = (path) => {
  return seo?.find((item) => item?.path === path) || GLOBAL_SEO[0];
};

/**
 * Runs a middleware function and returns a Promise that resolves or rejects
 * based on the middleware's execution result.
 *
 * @param {import('http').IncomingMessage} req - The HTTP request object.
 * @param {import('http').ServerResponse} res - The HTTP response object.
 * @param {Function} fn - The middleware function to execute. It should accept
 *                        `req`, `res`, and a callback function as arguments.
 * @returns {Promise<*>} A Promise that resolves with the result of the middleware
 *                       or rejects with an error if the middleware fails.
 */
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param {string} text - The input string to be transformed.
 * @returns {string} The transformed string with the first letter of each word capitalized.
 */
export function capitalizeFirstLetter(text) {
  return text?.replace(/\b\w/g, (match) => match?.toUpperCase());
}

/**
 * Checks if an object is filled with non-empty values.
 *
 * This function recursively checks if the provided object contains at least one
 * non-empty value?. A value is considered non-empty if:
 * - It is a non-empty string (after trimming whitespace).
 * - It is a non-empty array.
 * - It is an instance of `File`.
 * - It is a nested object that itself contains at least one non-empty value.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} Returns `true` if the object contains at least one non-empty value, otherwise `false`.
 */
export function isObjectFilled(obj) {
  if (obj === null || typeof obj !== 'object' || obj === undefined) {
    return false;
  }

  for (const key in obj) {
    if (Object?.prototype?.hasOwnProperty?.call(obj, key)) {
      const value = obj[key];

      if (typeof value === 'string' && value?.trim() !== '') {
        return true;
      } else if (Array?.isArray(value) && value?.length > 0) {
        return true;
      } else if (value instanceof File) {
        return true;
      } else if (
        value !== null &&
        value !== undefined &&
        typeof value === 'object'
      ) {
        if (isObjectFilled(value)) {
          return true;
        }
      }
    }
  }
  return false;
}
