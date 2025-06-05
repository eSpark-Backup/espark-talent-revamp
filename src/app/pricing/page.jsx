import React from 'react';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import PricingPage from '@/components/pricing/PricingPage';
import { PRICING_DATA } from '@/constants/pricing/pricing';
import { getMetadata } from '@/components/global/seo';

const pathname = '/pricing';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <PricingPage data={PRICING_DATA} />
    </>
  );
};

export default Page;
