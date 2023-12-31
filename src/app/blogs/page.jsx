import React from 'react';
import BlogCards from '@/components/homepage/BlogCards';
import HeroSection from '@/components/homepage/heroSection';

import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';

const page = () => {
  return (
    <>
      <HeroSection data={BLOGS_HERO_DATA} />
      <BlogCards />

    </>
  );
};

export default page;
