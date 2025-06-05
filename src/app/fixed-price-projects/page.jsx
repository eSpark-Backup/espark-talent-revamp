import FixedPriceProjects from '@/components/new-home/FixedPriceProjects';
import React from 'react';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';

const pathname = '/fixed-price-projects';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);
const page = () => {
  return <FixedPriceProjects />;
};

export default page;
