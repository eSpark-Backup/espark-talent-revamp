import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '@/components/global/NotFound';
import Hire from '@/components/hire-developer/Hire';
import Script from 'next/script';

import { GLOBAL_SEO } from '@/constants/seo-data';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';
import { HIRE_DEVELOPERS } from '@/constants/hire-developer/hire-developer';
import { getSingleHire } from '@/sanity/sanity.quries';
import { fetchHireMetadata } from '@/utils/cors';

export async function generateMetadata({ params }) {
  const slug = params?.hire;
  return fetchHireMetadata(slug);
}

export default async function Page({ params }) {
  const path = params.hire;
  const hire = await getSingleHire(path);
  const filteredData = hire || GLOBAL_SEO[0];

  const slug = params?.hire;
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
