import React from 'react';
import HomeTop from '@/components/homepage/HomeTop';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

const Page = () => {
  return (
    <>
      <ScrollToTop />
      <HomeTop />
    </>
  );
};

export default Page;
