import React from 'react';
import HomeTop from '@/components/homepage/HomeTop';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';

const Page = () => {
  return (
    <>
      <Link href="/about">
        <span style={{ color: 'blue', textDecoration: 'underline' }}>
          Go to About
        </span>
      </Link>

      <ScrollToTop />
      <HomeTop />
    </>
  );
};

export default Page;
