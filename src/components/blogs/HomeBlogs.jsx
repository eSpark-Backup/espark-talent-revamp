'use client';
import React from 'react';
import { Box, Container } from '@mui/material';

import ParagraphTitle from '../homepage/ParagraphTitle';
import ESparkButton from '../global/eSparkButton';
import BlogCards from '../homepage/BlogCards';
import { getBlog } from '@/sanity/sanity.quries';

export default async function HomeBlogs() {
  const blog = await getBlog();
  return (
    <>
      <Container>
        <Box
          sx={{
            py: '3%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ParagraphTitle
            title={'eSpark Talent Knowledge Junction'}
            paragraph={`Dive into our blogs and gain insights about every modern trend!`}
          />
          <BlogCards data={blog?.slice(0, 3)} smCol={2} />
          <ESparkButton
            title={`View all blogs`}
            link={`/blogs`}
            color={'primary'}
            size={'170px'}
          />
        </Box>
      </Container>
    </>
  );
}
