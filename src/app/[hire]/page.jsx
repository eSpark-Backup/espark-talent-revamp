import React from 'react';
import PropTypes from 'prop-types';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';
import NotFoundPage from '@/components/global/NotFound';
import { HIRE_DEVELOPERS } from '@/constants/hire-developer/hire-developer';
import { getSingleHire } from '@/sanity/sanity.quries';
import Hire from '@/components/hire-developer/Hire';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const slug = params.hire;
  const hire = await getSingleHire(slug);
  const filteredData = hire || GLOBAL_SEO[0];
  const metadata = {
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
  };

  return metadata;
}

export default async function Page({ params }) {
  const path = params.hire;
  const hire = await getSingleHire(path);
  const filteredData = hire || GLOBAL_SEO[0];

  const slug = params.hire;
  const data = HIRE_DEVELOPERS?.find((item) => item?.path === slug);

  if (!params || !params?.hire) {
    return (
      <div>
        <NotFoundPage data={NOT_FOUND_DATA} />
      </div>
    );
  }
  try {
    if (!data) {
      return <NotFoundPage data={NOT_FOUND_DATA} />;
    }
    return (
      <>
        <Script
          id="CreativeWorkSeries"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'CreativeWorkSeries',
              name: filteredData?.ratingName,
              image: filteredData?.ratingImage,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: filteredData?.ratingValue,
                bestRating: filteredData?.bestRating,
                worstRating: filteredData?.worstRating,
                ratingCount: filteredData?.ratingCount,
              },
            }),
          }}
        />
        <Hire data={data} slug={slug} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <NotFoundPage data={NOT_FOUND_DATA} />
      </div>
    );
  }
}

Page.propTypes = {
  params: PropTypes.object.isRequired,
};
