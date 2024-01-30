'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import SingleBlogHeader from '@/components/blogs/SingleBlogHeader';
import BlogDetailsContent from '@/components/blogs/blogDetailsContent';
import { BLOGS_DATA } from '@/constants/blogs';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  // Assuming the last segment can be either an ID or a Slug
  const isId = !isNaN(lastSegment);
  const identifier = isId ? 'id' : 'slug';
  const value = isId ? parseInt(lastSegment, 10) : lastSegment;
  console.log(identifier);
  // Fetch data based on the identifier (id or slug)
  const data = isId
    ? BLOGS_DATA[value - 1]
    : BLOGS_DATA.find((blog) => blog.slug === value);

  return (
    <>
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
      </Box>
    </>
  );
};

export default Page;
