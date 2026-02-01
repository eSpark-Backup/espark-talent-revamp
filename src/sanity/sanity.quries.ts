import client from './sanity.config';

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
      "metaKeywords":seo.metaKeywords,
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
      "metaKeywords":seo.metaKeywords,
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
      "metaTitle": seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "metaKeywords":seo.metaKeywords,
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
}

export async function getWiki() {
  return client.fetch(
    ` *[_type == "wiki"]
    {
      _id,
      id,
      title,
      heading,
      heroImageAlt,
      heroImagePath,
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
      "metaKeywords":seo.metaKeywords,
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

export async function getSingleWiki(slug) {
  return client.fetch(
    `*[_type == "wiki" && slug.current == $slug][0]
    {
      _id,
      id,
      title,
      heading,
      heroImageAlt,
      heroImagePath,
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
      "metaKeywords":seo.metaKeywords,
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
}

export async function getPageSeo() {
  return client.fetch(
    ` *[_type == "seo"]
  {
    path,
    metaTitle,
    metaDescription,
    metaKeywords,
    url,
    jsonLd,
    "metaImage":metaImage.asset->url,
    index,
    follow,
  }`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
}
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

export async function getHire() {
  return client.fetch(
    `*[_type == "hire"]
    {
      _id,
      "slug": slug.current,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "metaKeywords":seo.metaKeywords,
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

export async function getSingleHire(slug) {
  return client.fetch(
    `*[_type == "hire" && slug.current == $slug][0]
    {
      _id,
      "slug": slug.current,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "metaKeywords":seo.metaKeywords,
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
}
export async function getSingleCountry(slug) {
  return client.fetch(
    `*[_type == "country" && slug.current == $slug][0]
    {
      _id,
      "slug": slug.current,
      'metaTitle':seo.metaTitle,
      "metaDescription":seo.metaDescription,
      "metaKeywords":seo.metaKeywords,
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
}
