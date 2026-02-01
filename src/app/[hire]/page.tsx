import React from 'react';
import PropTypes from 'prop-types';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';
import NotFoundPage from '@/components/global/NotFound';
import { HIRE_DEVELOPERS } from '@/constants/hire-developer/hire-developer';
import { getSingleHire } from '@/sanity/sanity.quries';
import Hire from '@/components/hire-developer/Hire';
import Script from 'next/script';
import { getHireMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { hire: slug } = await params;
  const hire = await getSingleHire(slug);
  const filteredData = hire || GLOBAL_SEO[0];
  return getHireMetadata(filteredData);
}

export default async function Page({ params }) {
  const { hire: slug } = await params;

  if (!slug) {
    return <NotFoundPage data={NOT_FOUND_DATA} />;
  }

  try {
    const hire = await getSingleHire(slug);
    const filteredData = hire || GLOBAL_SEO[0];
    const data = HIRE_DEVELOPERS?.find((item) => item?.path === slug);

    if (!data) {
      return <NotFoundPage data={NOT_FOUND_DATA} />;
    }

    return (
      <>
        <StructuredData data={data.jsonLd} />
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
    return <NotFoundPage data={NOT_FOUND_DATA} />;
  }
}

Page.propTypes = {
  params: PropTypes.shape({
    hire: PropTypes.string,
  }).isRequired,
};
