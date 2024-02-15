import React from 'react';
import Hero from '@/components/homepage/Hero';
import { TERMS_CONDITIONS_HERO_DATA } from '@/constants/global/hero-sections';
import { TERMS_CONDITIONS_DATA } from '@/constants/terms-conditions';
import TermsConditions from '@/components/terms-conditions/TermsConditions';

const Page = () => {
  return (
    <>
      <Hero data={TERMS_CONDITIONS_HERO_DATA} color="default" />
      <TermsConditions data={TERMS_CONDITIONS_DATA} />
    </>
  );
};

export default Page;
