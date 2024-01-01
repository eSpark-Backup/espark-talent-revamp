'use client';
import React from 'react';
import HeroSection from '@/components/homepage/HeroSection';
import { usePathname } from 'next/navigation';
import { BLOGS_DATA } from '@/constants/blogs';
import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const data = BLOGS_DATA[id - 1];
  console.log(data, 'data');

  return (
    <>
      <HeroSection data={BLOGS_HERO_DATA} innerData={data} />
      {/* <WikiSingle data={data} /> */}
    </>
  );
};

export default Page;
