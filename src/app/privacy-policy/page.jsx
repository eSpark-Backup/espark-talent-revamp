import Hero from '@/components/homepage/Hero';
import TermsConditions from '@/components/terms-conditions/TermsConditions';
import { getMetadata } from '@/components/global/seo';

import { PRIVACY_POLICY_DATA } from '@/constants/privacy-policy';
import { PRIVACY_POLICY_HERO_DATA } from '@/constants/global/hero-sections';

import { getFilteredData } from '@/utils/cors';

const pathname = '/privacy-policy';
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
      <Hero data={PRIVACY_POLICY_HERO_DATA} color="default" />
      <TermsConditions data={PRIVACY_POLICY_DATA} />
    </>
  );
};

export default Page;
