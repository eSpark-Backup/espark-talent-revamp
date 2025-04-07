import React from 'react';
import HowitsWork from '@/components/how-it-work/HowitsWork';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/how-it-works';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <HowitsWork />;
};

export default Page;
