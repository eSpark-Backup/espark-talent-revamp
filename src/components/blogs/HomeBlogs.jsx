'use client';
import { Box, Container } from '@mui/material';
import React from 'react';
import ParagraphTitle from '../homepage/ParagraphTitle';
import HBlogs from './HBlogs';
import ESparkButton from '../global/eSparkButton';
import HBlogs from './HBlogs';

const HomeBlogs = () => {
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
          <HBlogs />
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
};

export default HomeBlogs;
