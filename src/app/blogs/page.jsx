import React from 'react';

import BlogCards from '@/components/homepage/BlogCards';
import Hero from '@/components/homepage/Hero';

import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { BLOGS_DATA } from '@/constants/blogs';

const page = () => {
  return (
    <>
      <Hero data={BLOGS_HERO_DATA} />
      <BlogCards data={BLOGS_DATA} />
    </>
  );
};

export default page;
