import React from 'react';
import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';

import { PRIVACY_POLICY_DATA } from '@/constants/privacy-policy';
import { PRIVACY_POLICY_HERO_DATA } from '@/constants/global/hero-sections';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/privacy-policy';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <Hero data={PRIVACY_POLICY_HERO_DATA} color="default" />
      <TermsConditions data={PRIVACY_POLICY_DATA} />
    </>
  );
};

export default Page;
