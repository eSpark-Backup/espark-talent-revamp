import client from './sanity.config';
export async function getJob() {
  return client.fetch(
    ` *[_type == "job"]
    {
      _id,
      applyLink,
       description,
       experience,
       "jobCategory":jobCategory._ref,
       jobTiming,
       jobType,
       lastDateToApply,
       location,
       "slug":slug.current,
       title
      } `,
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
export async function getJobCategories() {
  return client.fetch(
    ` *[_type == "jobCategory"]
    {
      _id,
      title,
      "slug":slug.current,
     } `,
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
export async function getBlog() {
  return client.fetch(
    ` *[_type == "blog"]
{_id,
  "author":author._ref,
"bannerImage":bannerImage.asset->url,
bannerTitle,
body,
"featureImage":featureImage.asset->url,
publishedAt,
 "slug": slug.current,
subtitle,
tags,
title,}
`,
    {
      next: {
        revalidate: 600,
      },
    }
  );
}

export async function getSingleBlog(slug) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]
    {_id,
  "author":author._ref,
"bannerImage":bannerImage.asset->url,
bannerTitle,
body,
"featureImage":featureImage.asset->url,
publishedAt,
 "slug": slug.current,
subtitle,
tags,
title,}`,
    { slug },
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
export async function getBlogCategories() {
  return client.fetch(
    ` *[_type == "jobCategory"] 
 {_id,
 id,
 "slug": slug.current,
 title } `,
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
export async function getWiki() {
  return client.fetch(
    ` *[_type == "wiki"] 
 {_id,
  id,
 title,
 "slug": slug.current,
 "wikiCategory": wikiCategory._ref,
 content,
 "heroImage":heroImage.asset->url,
 "iconImage":iconImage.asset->url,
 salary,
 shortDescription,
 title
} `,
    {
      next: {
        revalidate: 600,
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
 "wikiCategory": wikiCategory._ref,
 content,
 "heroImage":heroImage.asset->url,
 "iconImage":iconImage.asset->url,
 salary,
 shortDescription,
 title
    }
    `,
    { slug }
  );
}
export async function getWikiCategories() {
  return client.fetch(
    ` *[_type == "wikiCategory"]
 {_id,
 id,
 "slug": slug.current,
 title } `
  );
}

export async function getPageSeo() {
  return client.fetch(` *[_type == "pageSEO"] `);
}

export async function getAuthor() {
  return client.fetch(` *[_type == "author"]{
    _id ,
    "slug": slug.current,
    about,
"avatar":avatar.asset->url,
firstName,
lastName, 
role
  } `);
}
