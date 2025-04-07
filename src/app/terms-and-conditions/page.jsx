import React from 'react';
import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';

import { TERMS_CONDITIONS_HERO_DATA } from '@/constants/global/hero-sections';
import { TERMS_CONDITIONS_DATA } from '@/constants/terms-conditions';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/terms-and-conditions';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <Hero data={TERMS_CONDITIONS_HERO_DATA} color="default" />
      <TermsConditions data={TERMS_CONDITIONS_DATA} />
    </>
  );
};

export default Page;
