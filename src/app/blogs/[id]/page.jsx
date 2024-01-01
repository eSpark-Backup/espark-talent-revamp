'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import BlogDetailsContent from '@/components/blogs/blogDetailsContent';
import SingleBlogHeader from '@/components/blogs/SingleBlogHeader';

import { BLOGS_DATA } from '@/constants/blogs';
const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const data = BLOGS_DATA[id - 1];
  console.log(data, 'data');

  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(191,249,253,1) 0%, rgba(255,255,255,1) 100%)',
      }}
    >
      <Container>
        <SingleBlogHeader data={data} />
        <BlogDetailsContent data={data} />
      </Container>
      {/* <HeroSection data={BLOGS_HERO_DATA} innerData={data} /> */}
      {/* <WikiSingle data={data} /> */}
    </Box>
  );
};

export default Page;
