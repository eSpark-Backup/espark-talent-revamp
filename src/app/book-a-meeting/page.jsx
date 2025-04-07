import React from 'react';
import MeetingPage from '@/components/book-a-meeting/MeetingPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/book-a-meeting';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <MeetingPage />
    </>
  );
};

export default Page;
