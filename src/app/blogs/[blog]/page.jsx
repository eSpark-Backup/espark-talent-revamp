'use client';
import React from 'react';

import { Container, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import BlogDetailsContent from '@/components/blogs/blogDetailsContent';
import SingleBlogHeader from '@/components/blogs/SingleBlogHeader';
import NotFound from '@/app/not-found';

import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { getBlog } from '@/sanity/sanity.quries';

const Page = async ({ params }) => {
  const slug = params?.blog;
  const blog = await getSingleWiki(slug);

  // if (blog?.length === 0) {
  //   return <NotFound data={BLOGS_NOT_FOUND_DATA} />;
  // }
  console.log(blog);
  return (<>{blog.title}
    <Box  
      sx={{
        background:
          'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(191,249,253,1) 0%, rgba(255,255,255,1) 100%)',
      }}
    >
      <Container>
        {/* <SingleBlogHeader data={data[0]} />
        <BlogDetailsContent data={data[0]} /> */}
      </Container>
    </Box></>
  );
}
