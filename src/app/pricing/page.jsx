import PricingPage from '@/components/pricing/PricingPage';
import { getMetadata } from '@/components/global/seo';

import { PRICING_DATA } from '@/constants/pricing/pricing';

import { getFilteredData } from '@/utils/cors';

const pathname = '/pricing';
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
      <PricingPage data={PRICING_DATA} />
    </>
  );
};

export default Page;
