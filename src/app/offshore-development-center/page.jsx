import React from 'react';
import OffshoreDevelopmentCenter from '@/components/new-home/OffshoreDevelopmentCenter';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';

const pathname = '/offshore-development-center';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);
const page = () => {
  return <OffshoreDevelopmentCenter />;
};

export default page;
