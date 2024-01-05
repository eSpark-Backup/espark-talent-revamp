import React from 'react';

import BlogCards from '@/components/homepage/BlogCards';

import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { BLOGS_DATA } from '@/constants/blogs';
import Hero from '@/components/homepage/Hero';

const page = () => {
  return (
    <>
      <Hero data={BLOGS_HERO_DATA} />
      <BlogCards data={BLOGS_DATA} />
    </>
  );
};

export default page;
