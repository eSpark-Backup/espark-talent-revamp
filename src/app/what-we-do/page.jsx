import WhatWeDo from '@/components/whatwedopage/WhatWeDo';
import React from 'react';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/what-we-do';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <StructuredData data={filteredData.jsonLd} />
      <WhatWeDo />
    </>
  );
};

export default Page;
