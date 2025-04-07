import { urls } from '@/utils/cors';

/**
 * Generates a sitemap array with metadata for each URL.
 *
 * @function sitemap
 * @returns {Array<Object>} An array of objects representing sitemap entries.
 * Each object contains the following properties:
 * - `url` {string}: The URL of the page.
 * - `lastModified` {string}: The ISO 8601 formatted date string of the last modification.
 * - `changeFrequency` {string}: The frequency at which the page is expected to change (e.g., 'weekly').
 * - `priority` {number}: The priority of the URL, where 1 is the highest priority and 0.8 is the default.
 */
export default function sitemap() {
  const today = new Date();
  const formattedDate = today.toISOString().replace(/\.\d{3}Z$/, '+00:00');

  return urls?.map((item) => ({
    url: item.url,
    lastModified: formattedDate,
    changeFrequency: 'weekly',
    priority: item.url === 'https://www.esparktalent.com/' ? 1 : 0.8,
  }));
}
