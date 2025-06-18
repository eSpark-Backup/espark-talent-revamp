import React from 'react';
import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';
import { TERMS_CONDITIONS_HERO_DATA } from '@/constants/global/hero-sections';
import { TERMS_CONDITIONS_DATA } from '@/constants/terms-conditions/terms-conditions';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/terms-and-conditions';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <StructuredData data={filteredData?.jsonLd} />
      <Hero data={TERMS_CONDITIONS_HERO_DATA} color="default" />
      <TermsConditions data={TERMS_CONDITIONS_DATA} />
    </>
  );
};

export default Page;
