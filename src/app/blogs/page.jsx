import React from 'react';

import BlogCards from '@/components/homepage/BlogCards';
import Hero from '@/components/homepage/Hero';

import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { getBlog } from '@/sanity/sanity.quries';

export default async function Page() {
  const blogs = await getBlog();
  return (
    <>
      <Hero data={BLOGS_HERO_DATA} />
      <BlogCards data={blogs} />
    </>
  );
}
