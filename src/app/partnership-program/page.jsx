import Hero from '@/components/homepage/Hero';
import Partnership from '@/components/partnership/Partnership';
import { getMetadata } from '@/components/global/seo';

import { PARTNERSHIP_HERO_DATA } from '@/constants/global/hero-sections';
import { PARTNERSHIP } from '@/constants/partnership/partnership';

import { getFilteredData } from '@/utils/cors';

const pathname = '/partnership-program';
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
      <Hero data={PARTNERSHIP_HERO_DATA} />
      <Partnership partnership={PARTNERSHIP} />
    </>
  );
};

export default Page;
