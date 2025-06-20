'use client';
import React, { useEffect } from 'react';
import HomeTop from '@/components/homepage/HomeTop';

const Page = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <HomeTop />
    </>
  );
};

export default Page;
