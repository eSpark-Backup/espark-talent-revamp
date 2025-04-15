import NotFoundPage from '@/components/global/NotFound';
import { getMetadata } from '@/components/global/seo';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';

const filteredData = GLOBAL_SEO[0];

/**
 * Metadata for this page.
 *
 * This export retrieves metadata using the `getMetadata` function
 * with the provided `filteredData` as input.
 *
 * @constant {Object} metadata - The metadata object for the page.
 */
export const metadata = getMetadata(filteredData);

export default function NotFound() {
  return (
    <>
      <NotFoundPage data={NOT_FOUND_DATA} />
    </>
  );
}
