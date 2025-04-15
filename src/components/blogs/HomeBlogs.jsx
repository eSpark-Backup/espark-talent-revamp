'use client';

import { Box, Container } from '@mui/material';
import ESparkButton from '@/components/global/eSparkButton';
import ParagraphTitle from '@/components/homepage/ParagraphTitle';
import SSRBlogs from '@/components/blogs/SSRBlogs';
import { homeBlogsBoxStyle } from '@/components/blogs/HomeBlogsStyles';

const HomeBlogs = () => {
  return (
    <>
      <Container>
        <Box sx={homeBlogsBoxStyle}>
          <ParagraphTitle
            title={'eSpark Talent Knowledge Junction'}
            paragraph={`Dive into our blogs and gain insights about every modern trend!`}
          />
          <SSRBlogs />
          <ESparkButton
            title={`View all blogs`}
            link={`/blogs`}
            color={'secondary'}
            size={'170px'}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomeBlogs;
