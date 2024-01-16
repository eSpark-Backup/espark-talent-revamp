'use client';
import React from 'react';

import { Container, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import BlogDetailsContent from '@/components/blogs/blogDetailsContent';
import SingleBlogHeader from '@/components/blogs/SingleBlogHeader';
import NotFound from '@/app/not-found';

import { BLOGS_DATA } from '@/constants/blogs';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { getBlog } from '@/sanity/sanity.quries';

export default async function Page() {
  const blogs = await getBlog();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  let data;
  if (!isNaN(lastSegment)) {
    const id = parseInt(lastSegment, 10);
    data = blogs?.filter((item) => item?._id === id);
  } else {
    data = blogs?.filter((item) => item?.slug.current === lastSegment);
  }
  console.log(blogs);

  if (data?.length === 0) {
    return <NotFound data={BLOGS_NOT_FOUND_DATA} />;
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
