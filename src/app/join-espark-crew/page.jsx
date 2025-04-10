import JoinEsparkCrewPage from '@/components/Join-espark-crew/JoinEsparkCrewPage';
import { getMetadata } from '@/components/global/seo';

import { getFilteredData } from '@/utils/cors';

const pathname = '/join-espark-crew';
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
      <JoinEsparkCrewPage />
    </>
  );
};

export default Page;
