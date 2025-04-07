import React from 'react';
import PricingPage from '@/components/pricing/PricingPage';

import { PRICING_DATA } from '@/constants/pricing';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/pricing';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <PricingPage data={PRICING_DATA} />
    </>
  );
};

export default Page;
