'use client';
import React from 'react';

import { usePathname } from 'next/navigation';

import WikiSingle from '@/components/wiki/WikiSingle';
import InnerHero from '@/components/homepage/InnerHero';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { WIKIS_DATA } from '@/constants/wiki';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const path = segments[segments.length - 1];
  const data = WIKIS_DATA.filter((item) => item.slug === path);
  return (
    <>
      <InnerHero data={WIKI_HERO_DATA} innerData={data[0]} />
      <WikiSingle data={data[0]} />
    </>
  );
};

export default Page;
