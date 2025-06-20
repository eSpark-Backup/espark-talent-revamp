import client from './sanity.config';

const getJob = async () => {
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
};

const getBlog = async () => {
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
};

const getSingleBlog = async (slug) => {
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
      "metaTitle": seo.metaTitle,
      "metaDescription": seo.metaDescription,
      "url": seo.url,
      "metaImage": seo.metaImage.asset->url,
      "index": seo.index,
      "follow": seo.follow,
      "jsonLd": seo.jsonLd,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
};

const getWiki = async () => {
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
      avgSalary,
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
};

const getSingleWiki = async (slug) => {
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
      avgSalary,
      shortDescription,
      title,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "url":seo.url,
      "metaImage":seo.metaImage.asset->url,
      "index":seo.index,
      "follow":seo.follow,
      "jsonLd": seo.jsonLd,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
};

const getPageSeo = async () => {
  return client.fetch(
    ` *[_type == "seo"]
  {
    path,
    metaTitle,
    metaDescription,
    url,
    jsonLd,
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
};
const getAuthor = async () => {
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
};

const getHire = async () => {
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
};

const getSingleHire = async (slug) => {
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
      "jsonLd": seo.jsonLd,
    }`,
    { slug },
    {
      next: {
        revalidate: 1800,
      },
    }
  );
};

export {
  getHire,
  getSingleHire,
  getJob,
  getBlog,
  getAuthor,
  getPageSeo,
  getSingleWiki,
  getSingleBlog,
  getWiki,
};
