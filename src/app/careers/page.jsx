import CareersPage from '@/components/careers/CareersPage';
import { getMetadata } from '@/components/global/seo';

import { getFilteredData } from '@/utils/cors';

const pathname = '/careers';
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
      <CareersPage />
    </>
  );
};

export default Page;
