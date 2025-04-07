import React from 'react';
import BlogsPage from '@/components/blogs/BlogsPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/blogs';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <BlogsPage />
    </>
  );
};

export default Page;
