'use client';
import React from 'react';

import { usePathname } from 'next/navigation';

import WikiSingle from '@/components/wiki/WikiSingle';
import InnerHero from '@/components/homepage/InnerHero';

import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { WIKIS_DATA } from '@/constants/wiki';
import NotFound from '@/app/not-found';
import { WIKIS_NOT_FOUND_DATA } from '@/constants/global/notfound';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
 let data;
  if (!isNaN(lastSegment)) {
    const id = parseInt(lastSegment, 10);
    data = WIKIS_DATA?.filter((item) => item?.id === id);
  } else {
    data = WIKIS_DATA?.filter((item) => item?.slug === lastSegment);
  }
 if (data.length === 0) {
    return <NotFound data={WIKIS_NOT_FOUND_DATA}  />;
  }
  return (
    <>
      <InnerHero data={WIKI_HERO_DATA} innerData={data[0]} />
      <WikiSingle data={data[0]} />
    </>
  );
};

export default Page;
