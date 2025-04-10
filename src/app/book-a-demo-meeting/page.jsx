import DemoMeetingPage from '@/components/book-a-demo-meeting/DemoMeetingPage';
import { getMetadata } from '@/components/global/seo';

import { DEMO_MEETING_DATA } from '@/constants/book-demo-meeting/book-demo-meeting';

import { getFilteredData } from '@/utils/cors';

const pathname = '/book-a-demo-meeting';
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
      <DemoMeetingPage data={DEMO_MEETING_DATA} />
    </>
  );
};

export default Page;
