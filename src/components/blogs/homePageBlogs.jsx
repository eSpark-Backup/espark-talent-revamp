import React from 'react';
import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';
import TitleParagraph from '../global/titleParagraph';
import BlogCards from '../homepage/BlogCards';
import { BLOGS_DATA } from '@/constants/blogs';

const HomePageBlogs = () => {
  return (
    <Container>
      <Box
        sx={{
          py: '3%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TitleParagraph
          title={'eSpark Talent Knowledge Junction'}
          paragraph={`Dive into our blogs and gain insights about every modern trend!`}
        />
        <BlogCards data={BLOGS_DATA.slice(0, 3)} />
        <Link href={`/blogs`}>
          <Button variant="contained" color="secondary">
            {`View all blogs`}
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default HomePageBlogs;
