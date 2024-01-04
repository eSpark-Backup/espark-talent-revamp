import React from 'react';

import BlogCards from '@/components/homepage/BlogCards';
import HeroSection from '@/components/homepage/HeroSection';

import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { BLOGS_DATA } from '@/constants/blogs';

const page = () => {
  return (
    <>
      <HeroSection data={BLOGS_HERO_DATA} />
      <BlogCards data={BLOGS_DATA} />
    </>
  );
};

export default page;
