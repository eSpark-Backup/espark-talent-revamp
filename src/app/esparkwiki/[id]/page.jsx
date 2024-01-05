'use client';
import React from 'react';

import WikiSingle from '@/components/wiki/WikiSingle';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { usePathname } from 'next/navigation';
import { WIKIS_DATA } from '@/constants/wiki';
import Hero from '@/components/homepage/Hero';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const data = WIKIS_DATA[id - 1];

  return (
    <>
      <Hero data={WIKI_HERO_DATA} innerData={data} />
      <WikiSingle data={data} />
    </>
  );
};

export default Page;
