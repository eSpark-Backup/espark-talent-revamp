import React from 'react';
import BookADemo from '@/components/book-a-demo/BookADemo';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/book-a-demo';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <BookADemo />
    </>
  );
};

export default Page;
