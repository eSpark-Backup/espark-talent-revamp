'use client';

import { Box, Container } from '@mui/material';
import ESparkButton from '../global/eSparkButton';
import ParagraphTitle from '../homepage/ParagraphTitle';
import SSRBlogs from './SSRBlogs';

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
