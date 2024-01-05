'use client';
import React from 'react';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';

import ParagraphTitle from '../homepage/ParagraphTitle';
import BlogCards from '../homepage/BlogCards';

const HomeBlogs = ({ data }) => {
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
          <BlogCards data={data?.slice(0, 3)} />
          <Link href={`/blogs`}>
            <Button variant="contained" color="secondary">
              {`View all blogs`}
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeBlogs;
