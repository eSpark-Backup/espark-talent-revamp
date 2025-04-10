import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';
import { getMetadata } from '@/components/global/seo';

import { TERMS_CONDITIONS_HERO_DATA } from '@/constants/global/hero-sections';
import { TERMS_CONDITIONS_DATA } from '@/constants/terms-conditions';

import { getFilteredData } from '@/utils/cors';

const pathname = '/terms-and-conditions';
const filteredData = getFilteredData(pathname);
/**
 * Metadata for this page.
 *
 * This export retrieves metadata using the `getMetadata` function
 * with the provided `filteredData` as input.
 *
 * @constant {Object} metadata - The metadata object for the page.
 */
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
