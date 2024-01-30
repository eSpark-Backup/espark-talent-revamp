import React from 'react';
import BlogCards from '../homepage/BlogCards';
import { BLOGS_DATA } from '@/constants/blogs';

const SSRBlogs = () => {
  return (
    <>
      <BlogCards data={BLOGS_DATA?.slice(0, 3)} smCol={2} />
    </>
  );
};

export default SSRBlogs;
