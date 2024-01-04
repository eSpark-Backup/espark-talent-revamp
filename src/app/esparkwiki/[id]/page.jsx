'use client';
import React from 'react';

import HeroSection from '@/components/homepage/heroSection';
import WikiSingle from '@/components/wiki/WikiSingle';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { usePathname } from 'next/navigation';
import { WIKIS_DATA } from '@/constants/wiki';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const data = WIKIS_DATA[id - 1];
  console.log(data, 'data');

  return (
    <>
      <HeroSection data={WIKI_HERO_DATA} innerData={data} />
      <WikiSingle data={data} />
    </>
  );
};

export default Page;
