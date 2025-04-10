'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import HomeTop from '@/components/homepage/HomeTop';
import HomeBottom from '@/components/homepage/HomeBottom';

const HomeBlogs = dynamic(() => import('@/components/blogs/HomeBlogs'), {
  ssr: true,
});
const Page = () => {
  useEffect(() => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <HomeTop />
      <HomeBlogs />
      <HomeBottom />
    </>
  );
};

export default Page;
