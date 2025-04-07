/**
 * Generates the robots.txt configuration for the application.
 *
 * @returns {Object} An object containing the rules for web crawlers and the sitemap URL.
 * @property {Object} rules - The rules for web crawlers.
 * @property {string} rules.userAgent - The user agent to which the rules apply (default is '*').
 * @property {string} sitemap - The URL of the sitemap for the application.
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://www.esparktalent.com/sitemap.xml',
  };
}
