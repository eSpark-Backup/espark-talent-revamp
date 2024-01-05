'use client';
import React from 'react';

import { usePathname } from 'next/navigation';

import WikiSingle from '@/components/wiki/WikiSingle';
import Hero from '@/components/homepage/Hero';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { WIKIS_DATA } from '@/constants/wiki';

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
