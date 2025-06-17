import React from 'react';
import HireDedicatedDevelopers from '@/components/new-home/HireDedicatedDevelopers';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/hire-dedicated-developers';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const page = () => {
  return (
    <>
      <StructuredData data={filteredData.jsonLd} />
      <HireDedicatedDevelopers />
    </>
  );
};

export default page;
