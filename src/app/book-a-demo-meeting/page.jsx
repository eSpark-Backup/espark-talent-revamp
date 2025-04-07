import React from 'react';
import DemoMeetingPage from '@/components/book-a-demo-meeting/DemoMeetingPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';
import { DEMO_MEETING_DATA } from '@/constants/book-demo-meeting/book-demo-meeting';

const pathname = '/book-a-demo-meeting';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <DemoMeetingPage data={DEMO_MEETING_DATA} />
    </>
  );
};

export default Page;
