import React from 'react';
import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';
import { PRIVACY_POLICY_DATA } from '@/constants/privacy-policy';
import { PRIVACY_POLICY_HERO_DATA } from '@/constants/global/hero-sections';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/privacy-policy';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <StructuredData data={filteredData.jsonLd} />
      <Hero data={PRIVACY_POLICY_HERO_DATA} color="default" />
      <TermsConditions data={PRIVACY_POLICY_DATA} />
    </>
  );
};

export default Page;
