import { NextResponse } from 'next/server';
import { getBlog } from '@/sanity/sanity.quries';

const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get('tag');

  const siteUrl = 'https://www.esparktalent.com';
  const feedUrl = `${siteUrl}/api/rss${tag ? `?tag=${encodeURIComponent(tag)}` : ''}`;
  const feedTitle = `Espark Talent Blog${tag ? ` - ${tag}` : ''}`;
  const feedDescription = 'Latest articles from Espark Talent';

  const allBlogs = await getBlog();
  const filteredBlogs = allBlogs.filter((blog) =>
    tag ? blog.tags?.includes(tag) : true
  );

  const rssItems = filteredBlogs
    .map((blog) => {
      const {
        title,
        metaTitle,
        metaDescription,
        slug,
        url,
        publishedAt,
        bannerImage,
        tags,
      } = blog;

      const postUrl = url || `${siteUrl}/blogs/${slug}`;
      const imageTag = bannerImage
        ? `<enclosure url="${bannerImage}" type="image/jpeg" length="0" />`
        : '';

      const categories =
        tags
          ?.map((tag) => `<category><![CDATA[${tag}]]></category>`)
          .join('') || '';

      return `
        <item>
          <title><![CDATA[${metaTitle || title}]]></title>
          <link>${postUrl}</link>
          <guid isPermaLink="true">${postUrl}</guid>
          <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
          <description><![CDATA[${metaDescription || ''}]]></description>
          ${imageTag}
          ${categories}
        </item>
      `;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${feedTitle}</title>
        <link>${siteUrl}</link>
        <description>${feedDescription}</description>
        <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
        ${rssItems}
      </channel>
    </rss>
  `;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=600, stale-while-revalidate',
    },
  });
};

export { GET };
