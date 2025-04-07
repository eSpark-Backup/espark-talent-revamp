import React from 'react';
import WhatWeDo from '@/components/whatwedopage/WhatWeDo';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/what-we-do';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <WhatWeDo />
    </>
  );
};

export default Page;
