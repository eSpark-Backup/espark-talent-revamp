/**
 * Generates metadata for a webpage based on the provided filtered data.
 *
 * @param {Object} filteredData - The data used to populate metadata fields.
 * @param {string} [filteredData.metaTitle] - The title of the webpage.
 * @param {string} [filteredData.metaDescription] - The description of the webpage.
 * @param {string} [filteredData.path] - The relative path of the webpage.
 * @param {boolean} [filteredData.index=true] - Whether the page should be indexed by search engines.
 * @param {boolean} [filteredData.follow=true] - Whether search engines should follow links on the page.
 * @param {string} [filteredData.metaImage] - The URL of the image used for social sharing.
 * @param {string} [filteredData.title] - The title of the image for accessibility purposes.
 *
 * @returns {Object} The metadata object containing SEO and social sharing information.
 * @property {URL} metadataBase - The base URL of the website.
 * @property {string} title - The title of the webpage.
 * @property {string} description - The description of the webpage.
 * @property {string[]} keywords - An array of keywords for the webpage.
 * @property {string} author - The author of the webpage.
 * @property {Object} alternates - Alternate URLs for the webpage.
 * @property {string} alternates.canonical - The canonical URL of the webpage.
 * @property {Object} alternates.languages - Language-specific alternate URLs.
 * @property {Object} robots - Instructions for search engine crawlers.
 * @property {boolean} robots.index - Whether the page should be indexed.
 * @property {boolean} robots.follow - Whether links on the page should be followed.
 * @property {Object} openGraph - Open Graph metadata for social sharing.
 * @property {URL} openGraph.metadataBase - The base URL for Open Graph metadata.
 * @property {string} openGraph.title - The Open Graph title of the webpage.
 * @property {string} openGraph.description - The Open Graph description of the webpage.
 * @property {string} openGraph.type - The type of Open Graph object (e.g., "article").
 * @property {string} openGraph.publishedTime - The publication time of the content.
 * @property {string[]} openGraph.authors - An array of authors for the content.
 * @property {string} openGraph.siteName - The name of the website.
 * @property {string} openGraph.locale - The locale of the content.
 * @property {Object[]} openGraph.images - An array of images for Open Graph sharing.
 * @property {string} openGraph.images[].url - The URL of the image.
 * @property {string} openGraph.images[].alt - The alt text for the image.
 * @property {number} openGraph.images[].width - The width of the image.
 * @property {number} openGraph.images[].height - The height of the image.
 * @property {Object} twitter - Twitter Card metadata for social sharing.
 * @property {string} twitter.card - The type of Twitter Card (e.g., "summary_large_image").
 * @property {URL} twitter.metadataBase - The base URL for Twitter metadata.
 * @property {string} twitter.title - The Twitter Card title of the webpage.
 * @property {string} twitter.description - The Twitter Card description of the webpage.
 * @property {string} twitter.siteId - The Twitter handle of the website.
 * @property {string} twitter.creator - The Twitter handle of the content creator.
 * @property {string[]} twitter.images - An array of image URLs for the Twitter Card.
 */
export const getMetadata = (filteredData) => ({
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: {
    index: filteredData?.index ?? true,
    follow: filteredData?.follow ?? true,
  },
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.metaImage,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.metaImage}`],
  },
});
/**
 * Generates metadata for a webpage based on the provided filtered data.
 *
 * @param {Object} filteredData - The data used to populate metadata fields.
 * @param {string} [filteredData.metaTitle] - The title of the webpage.
 * @param {string} [filteredData.metaDescription] - The description of the webpage.
 * @param {string} [filteredData.path] - The relative path of the webpage.
 * @param {boolean} [filteredData.index=true] - Whether the page should be indexed by search engines.
 * @param {boolean} [filteredData.follow=true] - Whether search engines should follow links on the page.
 * @param {string} [filteredData.metaImage] - The URL of the image used for social sharing.
 * @param {string} [filteredData.title] - The title of the image for accessibility purposes.
 *
 * @returns {Object} The metadata object containing SEO and social sharing information.
 * @property {URL} metadataBase - The base URL of the website.
 * @property {string} title - The title of the webpage.
 * @property {string} description - The description of the webpage.
 * @property {string[]} keywords - An array of keywords for the webpage.
 * @property {string} author - The author of the webpage.
 * @property {Object} alternates - Alternate URLs for the webpage.
 * @property {string} alternates.canonical - The canonical URL of the webpage.
 * @property {Object} alternates.languages - Language-specific alternate URLs.
 * @property {Object} robots - Instructions for search engine crawlers.
 * @property {boolean} robots.index - Whether the page should be indexed.
 * @property {boolean} robots.follow - Whether links on the page should be followed.
 * @property {Object} openGraph - Open Graph metadata for social sharing.
 * @property {URL} openGraph.metadataBase - The base URL for Open Graph metadata.
 * @property {string} openGraph.title - The Open Graph title of the webpage.
 * @property {string} openGraph.description - The Open Graph description of the webpage.
 * @property {string} openGraph.type - The type of Open Graph object (e.g., "article").
 * @property {string} openGraph.publishedTime - The publication time of the content.
 * @property {string[]} openGraph.authors - An array of authors for the content.
 * @property {string} openGraph.siteName - The name of the website.
 * @property {string} openGraph.locale - The locale of the content.
 * @property {Object[]} openGraph.images - An array of images for Open Graph sharing.
 * @property {string} openGraph.images[].url - The URL of the image.
 * @property {string} openGraph.images[].alt - The alt text for the image.
 * @property {number} openGraph.images[].width - The width of the image.
 * @property {number} openGraph.images[].height - The height of the image.
 * @property {Object} twitter - Twitter Card metadata for social sharing.
 * @property {string} twitter.card - The type of Twitter Card (e.g., "summary_large_image").
 * @property {URL} twitter.metadataBase - The base URL for Twitter metadata.
 * @property {string} twitter.title - The Twitter Card title of the webpage.
 * @property {string} twitter.description - The Twitter Card description of the webpage.
 * @property {string} twitter.siteId - The Twitter handle of the website.
 * @property {string} twitter.creator - The Twitter handle of the content creator.
 * @property {string[]} twitter.images - An array of image URLs for the Twitter Card.
 */
export const getHireMetadata = (filteredData) => ({
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com/${filteredData?.slug}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: {
    index: filteredData?.index ?? true,
    follow: filteredData?.follow ?? true,
  },
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.metaImage,
        alt: filteredData?.metaTitle,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.metaImage}`],
  },
});
/**
 * Generates metadata for a webpage based on the provided filtered data.
 *
 * @param {Object} filteredData - The data used to populate metadata fields.
 * @param {string} [filteredData.metaTitle] - The title of the webpage.
 * @param {string} [filteredData.metaDescription] - The description of the webpage.
 * @param {string} [filteredData.path] - The relative path of the webpage.
 * @param {boolean} [filteredData.index=true] - Whether the page should be indexed by search engines.
 * @param {boolean} [filteredData.follow=true] - Whether search engines should follow links on the page.
 * @param {string} [filteredData.metaImage] - The URL of the image used for social sharing.
 * @param {string} [filteredData.title] - The title of the image for accessibility purposes.
 *
 * @returns {Object} The metadata object containing SEO and social sharing information.
 * @property {URL} metadataBase - The base URL of the website.
 * @property {string} title - The title of the webpage.
 * @property {string} description - The description of the webpage.
 * @property {string[]} keywords - An array of keywords for the webpage.
 * @property {string} author - The author of the webpage.
 * @property {Object} alternates - Alternate URLs for the webpage.
 * @property {string} alternates.canonical - The canonical URL of the webpage.
 * @property {Object} alternates.languages - Language-specific alternate URLs.
 * @property {Object} robots - Instructions for search engine crawlers.
 * @property {boolean} robots.index - Whether the page should be indexed.
 * @property {boolean} robots.follow - Whether links on the page should be followed.
 * @property {Object} openGraph - Open Graph metadata for social sharing.
 * @property {URL} openGraph.metadataBase - The base URL for Open Graph metadata.
 * @property {string} openGraph.title - The Open Graph title of the webpage.
 * @property {string} openGraph.description - The Open Graph description of the webpage.
 * @property {string} openGraph.type - The type of Open Graph object (e.g., "article").
 * @property {string} openGraph.publishedTime - The publication time of the content.
 * @property {string[]} openGraph.authors - An array of authors for the content.
 * @property {string} openGraph.siteName - The name of the website.
 * @property {string} openGraph.locale - The locale of the content.
 * @property {Object[]} openGraph.images - An array of images for Open Graph sharing.
 * @property {string} openGraph.images[].url - The URL of the image.
 * @property {string} openGraph.images[].alt - The alt text for the image.
 * @property {number} openGraph.images[].width - The width of the image.
 * @property {number} openGraph.images[].height - The height of the image.
 * @property {Object} twitter - Twitter Card metadata for social sharing.
 * @property {string} twitter.card - The type of Twitter Card (e.g., "summary_large_image").
 * @property {URL} twitter.metadataBase - The base URL for Twitter metadata.
 * @property {string} twitter.title - The Twitter Card title of the webpage.
 * @property {string} twitter.description - The Twitter Card description of the webpage.
 * @property {string} twitter.siteId - The Twitter handle of the website.
 * @property {string} twitter.creator - The Twitter handle of the content creator.
 * @property {string[]} twitter.images - An array of image URLs for the Twitter Card.
 */
export const getBlogsMetadata = (filteredData) => ({
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com/blogs/${filteredData?.slug}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: {
    index: filteredData?.index ?? true,
    follow: filteredData?.follow ?? true,
  },
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.metaImage,
        alt: filteredData?.metaTitle,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.metaImage}`],
  },
});
/**
 * Generates metadata for a webpage based on the provided filtered data.
 *
 * @param {Object} filteredData - The data used to populate metadata fields.
 * @param {string} [filteredData.metaTitle] - The title of the webpage.
 * @param {string} [filteredData.metaDescription] - The description of the webpage.
 * @param {string} [filteredData.path] - The relative path of the webpage.
 * @param {boolean} [filteredData.index=true] - Whether the page should be indexed by search engines.
 * @param {boolean} [filteredData.follow=true] - Whether search engines should follow links on the page.
 * @param {string} [filteredData.metaImage] - The URL of the image used for social sharing.
 * @param {string} [filteredData.title] - The title of the image for accessibility purposes.
 *
 * @returns {Object} The metadata object containing SEO and social sharing information.
 * @property {URL} metadataBase - The base URL of the website.
 * @property {string} title - The title of the webpage.
 * @property {string} description - The description of the webpage.
 * @property {string[]} keywords - An array of keywords for the webpage.
 * @property {string} author - The author of the webpage.
 * @property {Object} alternates - Alternate URLs for the webpage.
 * @property {string} alternates.canonical - The canonical URL of the webpage.
 * @property {Object} alternates.languages - Language-specific alternate URLs.
 * @property {Object} robots - Instructions for search engine crawlers.
 * @property {boolean} robots.index - Whether the page should be indexed.
 * @property {boolean} robots.follow - Whether links on the page should be followed.
 * @property {Object} openGraph - Open Graph metadata for social sharing.
 * @property {URL} openGraph.metadataBase - The base URL for Open Graph metadata.
 * @property {string} openGraph.title - The Open Graph title of the webpage.
 * @property {string} openGraph.description - The Open Graph description of the webpage.
 * @property {string} openGraph.type - The type of Open Graph object (e.g., "article").
 * @property {string} openGraph.publishedTime - The publication time of the content.
 * @property {string[]} openGraph.authors - An array of authors for the content.
 * @property {string} openGraph.siteName - The name of the website.
 * @property {string} openGraph.locale - The locale of the content.
 * @property {Object[]} openGraph.images - An array of images for Open Graph sharing.
 * @property {string} openGraph.images[].url - The URL of the image.
 * @property {string} openGraph.images[].alt - The alt text for the image.
 * @property {number} openGraph.images[].width - The width of the image.
 * @property {number} openGraph.images[].height - The height of the image.
 * @property {Object} twitter - Twitter Card metadata for social sharing.
 * @property {string} twitter.card - The type of Twitter Card (e.g., "summary_large_image").
 * @property {URL} twitter.metadataBase - The base URL for Twitter metadata.
 * @property {string} twitter.title - The Twitter Card title of the webpage.
 * @property {string} twitter.description - The Twitter Card description of the webpage.
 * @property {string} twitter.siteId - The Twitter handle of the website.
 * @property {string} twitter.creator - The Twitter handle of the content creator.
 * @property {string[]} twitter.images - An array of image URLs for the Twitter Card.
 */
export const getWikisMetadata = (filteredData) => ({
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com/wiki/${filteredData?.slug}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: {
    index: filteredData?.index ?? true,
    follow: filteredData?.follow ?? true,
  },
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.metaImage,
        alt: filteredData?.metaTitle,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.metaImage}`],
  },
});
