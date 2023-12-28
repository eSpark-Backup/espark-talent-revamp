'use client'
import React from 'react';
import HeroSection from '@/components/homepage/HeroSection';
import WikiSingle from '@/components/wiki/WikiSingle';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { Login } from '@mui/icons-material';
import { WIKIS_DATA } from '@/constants/wiki';

const Page = () => {
 const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const data = WIKIS_DATA[id];
  console.log(data,'data');

  return (
    <>
      <HeroSection data={WIKI_HERO_DATA} />
      {data ? <WikiSingle data={data} /> : <p>Wiki page not found</p>}
    </>
  );
};

export default Page;
