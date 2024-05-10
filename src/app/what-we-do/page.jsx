import WhatWeDo from '@/components/whatwedopage/WhatWeDo';
import React from 'react';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';

const pathname = '/what-we-do';
const seo = await getPageSeo();
const filteredData =
  seo.find((item) => item.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com${filteredData?.path}`,
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
        alt: filteredData?.title,
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

const Page = () => {
  return (
    <>
      <WhatWeDo />
    </>
  );
};

export default Page;
