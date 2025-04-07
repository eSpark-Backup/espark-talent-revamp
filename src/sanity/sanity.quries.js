import client from './sanity.config';

/**
 * Fetches job data from the Sanity CMS.
 *
 * This function queries the Sanity CMS for all documents of type "job" and retrieves
 * various fields including job details, SEO metadata, and more. The query also includes
 * a revalidation time of 1800 seconds (30 minutes) for caching purposes.
 *
 * @async
 * @function getJob
 * @returns {Promise<Object[]>} A promise that resolves to an array of job objects. Each object contains:
 * - `_id` {string}: The unique identifier of the job.
 * - `description` {string}: The job description.
 * - `experience` {string}: The required experience for the job.
 * - `jobTiming` {string}: The job timing (e.g., full-time, part-time).
 * - `jobType` {string}: The type of job (e.g., remote, on-site).
 * - `lastDateToApply` {string}: The last date to apply for the job.
 * - `location` {string}: The job location.
 * - `slug` {string}: The slug for the job, used for URLs.
 * - `title` {string}: The title of the job.
 * - `metaTitle` {string}: The meta title for SEO purposes.
 * - `metaDescription` {string}: The meta description for SEO purposes.
 * - `url` {string}: The URL for the job's SEO metadata.
 * - `metaImage` {string}: The URL of the meta image for SEO purposes.
 * - `index` {boolean}: Whether the page should be indexed by search engines.
 * - `follow` {boolean}: Whether search engines should follow links on the page.
 */
export async function getJob() {
  return client.fetch(
    `*[_type == "job"] {
      _id,
      description,
      experience,
      jobTiming,
      jobType,
      lastDateToApply,
      location,
      "slug": slug.current,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
    }`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches a list of blog entries from the Sanity CMS.
 *
 * The function queries the Sanity CMS for all documents of type "blog" and retrieves
 * various fields including author, banner image, feature image, SEO metadata, and more.
 *
 * @async
 * @function getBlog
 * @returns {Promise<Object[]>} A promise that resolves to an array of blog objects.
 * Each blog object contains the following properties:
 * - `_id` {string}: The unique identifier of the blog.
 * - `author` {string}: The reference ID of the author.
 * - `bannerImage` {string}: The URL of the banner image.
 * - `bannerTitle` {string}: The title displayed on the banner.
 * - `body` {string}: The main content of the blog.
 * - `featureImage` {string}: The URL of the feature image.
 * - `publishedAt` {string}: The publication date of the blog.
 * - `slug` {string}: The slug for the blog URL.
 * - `subtitle` {string}: The subtitle of the blog.
 * - `tags` {string[]}: An array of tags associated with the blog.
 * - `title` {string}: The title of the blog.
 * - `metaTitle` {string}: The meta title for SEO purposes.
 * - `metaDescription` {string}: The meta description for SEO purposes.
 * - `url` {string}: The SEO URL.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Indicates whether the blog should be indexed by search engines.
 * - `follow` {boolean}: Indicates whether search engines should follow links on the blog.
 *
 * The function also includes a revalidation time of 1800 seconds (30 minutes) for caching purposes.
 */
export async function getBlog() {
  return client.fetch(
    ` *[_type == "blog"]
    {
      _id,
      "author":author._ref,
      "bannerImage":bannerImage.asset->url,
      bannerTitle,
      body,
      "featureImage":featureImage.asset->url,
      publishedAt,
      "slug": slug.current,
      subtitle,
      tags,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
    }`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches a single blog post from the Sanity CMS based on the provided slug.
 *
 * @async
 * @function getSingleBlog
 * @param {string} slug - The slug of the blog post to fetch.
 * @returns {Promise<Object>} A promise that resolves to the blog post object containing:
 * - `_id` {string}: The unique identifier of the blog post.
 * - `author` {string}: The reference ID of the author.
 * - `imageAlt` {string}: The alternative text for the image.
 * - `bannerImage` {string}: The URL of the banner image.
 * - `bannerTitle` {string}: The title displayed on the banner.
 * - `body` {Array|Object}: The content of the blog post.
 * - `featureImage` {string}: The URL of the feature image.
 * - `publishedAt` {string}: The publication date of the blog post.
 * - `slug` {string}: The slug of the blog post.
 * - `subtitle` {string}: The subtitle of the blog post.
 * - `tags` {Array<string>}: The tags associated with the blog post.
 * - `title` {string}: The title of the blog post.
 * - `metaTitle` {string}: The meta title for SEO.
 * - `metaDescription` {string}: The meta description for SEO.
 * - `url` {string}: The SEO URL.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Whether the page should be indexed by search engines.
 * - `follow` {boolean}: Whether search engines should follow links on the page.
 *
 * @throws {Error} If the fetch operation fails.
 */
export async function getSingleBlog(slug) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]
    {
      _id,
      "author": author._ref,
      imageAlt,
      "bannerImage": bannerImage.asset->url,
      bannerTitle,
      body,
      "featureImage": featureImage.asset->url,
      publishedAt,
      "slug": slug.current,
      subtitle,
      tags,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches wiki data from the Sanity CMS.
 *
 * This function queries the Sanity CMS for all documents of type "wiki" and retrieves
 * various fields including ID, title, slug, category, content, images, salary, descriptions,
 * SEO metadata, and indexing preferences.
 *
 * @async
 * @function getWiki
 * @returns {Promise<Object[]>} A promise that resolves to an array of wiki objects, each containing:
 * - `_id` {string}: The unique identifier of the document.
 * - `id` {string}: The ID of the wiki.
 * - `title` {string}: The title of the wiki.
 * - `slug` {string}: The slug (URL-friendly identifier) of the wiki.
 * - `wikiCategory` {string}: The category of the wiki.
 * - `content` {string}: The main content of the wiki.
 * - `heroImage` {string}: The URL of the hero image.
 * - `iconImage` {string}: The URL of the icon image.
 * - `salary` {number}: The salary information associated with the wiki.
 * - `shortDescription` {string}: A brief description of the wiki.
 * - `metaTitle` {string}: The meta title for SEO purposes.
 * - `metaDescription` {string}: The meta description for SEO purposes.
 * - `url` {string}: The SEO URL.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Whether the page should be indexed by search engines.
 * - `follow` {boolean}: Whether search engines should follow links on the page.
 *
 * The function also includes a revalidation time of 1800 seconds (30 minutes) for caching purposes.
 */
export async function getWiki() {
  return client.fetch(
    ` *[_type == "wiki"]
    {
      _id,
      id,
      title,
      "slug": slug.current,
      wikiCategory,
      content,
      "heroImage":heroImage.asset->url,
      "iconImage":iconImage.asset->url,
      salary,
      shortDescription,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
    } `,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches a single wiki document from the Sanity CMS based on the provided slug.
 *
 * @async
 * @function getSingleWiki
 * @param {string} slug - The slug of the wiki document to fetch.
 * @returns {Promise<Object>} A promise that resolves to the wiki document object containing:
 * - `_id` {string}: The unique ID of the document.
 * - `id` {string}: The ID of the document.
 * - `title` {string}: The title of the wiki.
 * - `slug` {string}: The slug of the wiki.
 * - `wikiCategory` {string}: The category of the wiki.
 * - `content` {string}: The content of the wiki.
 * - `heroImage` {string}: The URL of the hero image.
 * - `iconImage` {string}: The URL of the icon image.
 * - `salary` {number}: The salary information.
 * - `shortDescription` {string}: A short description of the wiki.
 * - `metaTitle` {string}: The meta title for SEO.
 * - `metaDescription` {string}: The meta description for SEO.
 * - `url` {string}: The SEO URL.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Whether the page should be indexed by search engines.
 * - `follow` {boolean}: Whether search engines should follow links on the page.
 *
 * @example
 * const wiki = await getSingleWiki('example-slug');
 * console.log(wiki.title); // Outputs the title of the wiki
 */
export async function getSingleWiki(slug) {
  return client.fetch(
    `*[_type == "wiki" && slug.current == $slug][0]
    {
      _id,
      id,
      title,
      "slug": slug.current,
      wikiCategory,
      content,
      "heroImage": heroImage.asset->url,
      "iconImage": iconImage.asset->url,
      salary,
      shortDescription,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches SEO data for pages from the Sanity CMS.
 *
 * This function queries the Sanity CMS for documents of type "seo" and retrieves
 * the following fields:
 * - `path`: The path of the page.
 * - `metaTitle`: The meta title of the page.
 * - `metaDescription`: The meta description of the page.
 * - `url`: The URL of the page.
 * - `metaImage`: The URL of the meta image associated with the page.
 * - `index`: Indicates whether the page should be indexed by search engines.
 * - `follow`: Indicates whether search engines should follow links on the page.
 *
 * The result is cached and revalidated every 1800 seconds (30 minutes).
 *
 * @async
 * @function getPageSeo
 * @returns {Promise<Object[]>} A promise that resolves to an array of SEO data objects.
 */
export async function getPageSeo() {
  return client.fetch(
    ` *[_type == "seo"]
  {
    path,
    metaTitle,
    metaDescription,
    url,
    "metaImage":metaImage.asset->url,
    "index":seo.index,
    "follow":seo.follow,
  }`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches a list of authors from the Sanity CMS.
 *
 * This function queries the Sanity CMS for all documents of type "author" and retrieves
 * specific fields including the author's ID, slug, about information, avatar URL, first name,
 * last name, and role. The query results are cached and revalidated every 1800 seconds (30 minutes).
 *
 * @async
 * @function getAuthor
 * @returns {Promise<Object[]>} A promise that resolves to an array of author objects.
 * Each object contains the following properties:
 * - `_id` {string}: The unique identifier of the author.
 * - `slug` {string}: The slug of the author.
 * - `about` {string}: A description or bio of the author.
 * - `avatar` {string}: The URL of the author's avatar image.
 * - `firstName` {string}: The first name of the author.
 * - `lastName` {string}: The last name of the author.
 * - `role` {string}: The role or title of the author.
 */
export async function getAuthor() {
  return client.fetch(
    ` *[_type == "author"]
    {
      _id ,
      "slug": slug.current,
      about,
      "avatar":avatar.asset->url,
      firstName,
      lastName,
      role
    } `,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches data for "hire" documents from the Sanity CMS.
 *
 * The function queries the Sanity database for all documents of type "hire" and retrieves
 * various fields, including SEO metadata, rating details, and other related information.
 * The query also includes a revalidation time of 1800 seconds (30 minutes) for caching purposes.
 *
 * @async
 * @function getHire
 * @returns {Promise<Object[]>} A promise that resolves to an array of "hire" objects, each containing:
 * - `_id` {string}: The unique identifier of the document.
 * - `slug` {string}: The slug of the document.
 * - `metaTitle` {string}: The meta title for SEO.
 * - `metaDescription` {string}: The meta description for SEO.
 * - `url` {string}: The URL for SEO.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Whether the page should be indexed by search engines.
 * - `follow` {boolean}: Whether search engines should follow links on the page.
 * - `ratingName` {string}: The name of the rating.
 * - `ratingImage` {string}: The URL of the rating image.
 * - `worstRating` {number}: The worst possible rating value.
 * - `bestRating` {number}: The best possible rating value.
 * - `ratingValue` {number}: The actual rating value.
 * - `ratingCount` {number}: The total number of ratings.
 */
export async function getHire() {
  return client.fetch(
    `*[_type == "hire"]
    {
      _id,
      "slug": slug.current,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
      "ratingName":rating.name,
      "ratingImage":rating.image.asset->url,
      "worstRating":rating.worstRating,
      "bestRating":rating.bestRating,
      "ratingValue":rating.ratingValue,
      "ratingCount":rating.ratingCount,
    }`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}

/**
 * Fetches a single hire document from the Sanity CMS based on the provided slug.
 *
 * @async
 * @function getSingleHire
 * @param {string} slug - The slug of the hire document to fetch.
 * @returns {Promise<Object>} A promise that resolves to the hire document object containing:
 * - `_id` {string}: The unique identifier of the hire document.
 * - `slug` {string}: The slug of the hire document.
 * - `metaTitle` {string}: The meta title for SEO.
 * - `metaDescription` {string}: The meta description for SEO.
 * - `url` {string}: The URL for SEO.
 * - `metaImage` {string}: The URL of the meta image for SEO.
 * - `index` {boolean}: Indicates whether the page should be indexed by search engines.
 * - `follow` {boolean}: Indicates whether search engines should follow links on the page.
 * - `ratingName` {string}: The name of the rating.
 * - `ratingImage` {string}: The URL of the rating image.
 * - `worstRating` {number}: The worst possible rating value.
 * - `bestRating` {number}: The best possible rating value.
 * - `ratingValue` {number}: The average rating value.
 * - `ratingCount` {number}: The total number of ratings.
 *
 * @throws {Error} If the fetch operation fails.
 */
export async function getSingleHire(slug) {
  return client.fetch(
    `*[_type == "hire" && slug.current == $slug][0]
    {
      _id,
      "slug": slug.current,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
      "ratingName":rating.name,
      "ratingImage":rating.image.asset->url,
      "worstRating":rating.worstRating,
      "bestRating":rating.bestRating,
      "ratingValue":rating.ratingValue,
      "ratingCount":rating.ratingCount,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}
