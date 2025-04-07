import React from 'react';
import Hero from '@/components/homepage/Hero';
import Partnership from '@/components/partnership/Partnership';

import { PARTNERSHIP_HERO_DATA } from '@/constants/global/hero-sections';
import { PARTNERSHIP } from '@/constants/partnership';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/partnership-program';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <Hero data={PARTNERSHIP_HERO_DATA} />
      <Partnership partnership={PARTNERSHIP} />
    </>
  );
};

export default Page;
