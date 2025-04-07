import React from 'react';
import CareersPage from '@/components/careers/CareersPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/careers';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <CareersPage />
    </>
  );
};

export default Page;
