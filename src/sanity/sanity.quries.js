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
      metaTitle,
      metaDescription,
      url,
      "metaImage":metaImage.asset->url
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
      metaTitle,
      metaDescription,
      url,
      "metaImage":metaImage.asset->url
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
      metaTitle,
      metaDescription,
      url,
      "metaImage":metaImage.asset->url
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
      "slug": slug.current,
      wikiCategory,
      content,
      "heroImage":heroImage.asset->url,
      "iconImage":iconImage.asset->url,
      salary,
      shortDescription,
      title,
      metaTitle,
      metaDescription,
      url,
      "metaImage":metaImage.asset->url
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
      "slug": slug.current,
      wikiCategory,
      content,
      "heroImage": heroImage.asset->url,
      "iconImage": iconImage.asset->url,
      salary,
      shortDescription,
      title,
      metaTitle,
      metaDescription,
      url,
      "metaImage":metaImage.asset->url
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
    url,
    "metaImage":metaImage.asset->url
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
