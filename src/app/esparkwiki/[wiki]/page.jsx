import React from 'react';
import { getSingleWiki } from '@/sanity/sanity.quries';
import NotFoundPage from '@/components/global/NotFound';
import { WIKIS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { GLOBAL_SEO } from '@/constants/seo-data';

export async function generateMetadata({ params }) {
  const slug = params.wiki;
  const wiki = await getSingleWiki(slug);
  const filteredData = wiki || GLOBAL_SEO[0];
  const metadata = {
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
    robots: `index, follow`,
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
  };

  return metadata;
}

const Page = async ({ params }) => {
  if (!params || !params.wiki) {
    return (
      <div>
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }

  const slug = params.wiki;

  if (typeof slug !== 'string' || slug.trim() === '') {
    return (
      <div>
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }

  try {
    const wiki = await getSingleWiki(slug);

    if (!wiki || typeof wiki !== 'object') {
      return (
        <div>
          <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
        </div>
      );
    }

    const InnerHero = React.lazy(
      () => import('@/components/homepage/InnerHero')
    );
    const WikiSingle = React.lazy(() => import('@/components/wiki/WikiSingle'));

    return (
      <>
        <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
        <WikiSingle data={wiki} />
      </>
    );
  } catch (error) {
    console.error('Error fetching wiki data:', error);
    return (
      <div>
        <NotFoundPage data={WIKIS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

export default Page;
