'use client';

import Script from 'next/script';

const CreativeWorkSeriesScript = (data) => {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'CreativeWorkSeries',
    name: data?.name,
    image: data?.image,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data?.ratingValue,
      bestRating: data?.bestRating,
      worstRating: data?.worstRating,
      ratingCount: data?.ratingCount,
    },
  };

  return (
    <Script
      id="CreativeWorkSeries"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default CreativeWorkSeriesScript;
