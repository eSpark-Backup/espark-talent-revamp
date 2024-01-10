'use client';
import React from 'react';

import { Container, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import BlogDetailsContent from '@/components/blogs/blogDetailsContent';
import SingleBlogHeader from '@/components/blogs/SingleBlogHeader';

import { BLOGS_DATA } from '@/constants/blogs';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import NotFound from '@/app/not-found';

 const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  let data;
  if (!isNaN(lastSegment)) {
    const id = parseInt(lastSegment, 10);
    data = BLOGS_DATA?.filter((item) => item?.id === id);
  } else {
    data = BLOGS_DATA?.filter((item) => item?.slug === lastSegment);
   }
   
 if (data.length === 0) {
    return <NotFound data={BLOGS_NOT_FOUND_DATA}  />;
  }
  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(191,249,253,1) 0%, rgba(255,255,255,1) 100%)',
      }}
    >
      <Container>
        <SingleBlogHeader data={data[0]} />
        <BlogDetailsContent data={data[0]} />
      </Container>
    </Box>
  );
};

export default Page;  
