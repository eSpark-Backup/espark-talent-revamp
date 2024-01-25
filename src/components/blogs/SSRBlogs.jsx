'use client';
import React from 'react';
import { getBlog } from '@/sanity/sanity.quries';
import BlogCards from '../homepage/BlogCards';
import BlogCardsSlider from '../homepage/BlogCardsSlider';

export default async function SSRBlogs() {
  const blog = await getBlog();
  return (
    <>
      <BlogCards data={blog?.slice(0, 3)} smCol={2} />
    </>
  );
}
