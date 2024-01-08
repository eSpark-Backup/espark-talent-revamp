import React from 'react';
import { Grid, Typography, Box, Avatar, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const SingleBlogHeader = ({ data }) => {
  return (
    <Box sx={{ mt: { md: '90px', xs: '35px' } }}>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 1 }}>
          <Box pb={{ xs: '5%', md: '10%' }} sx={{}}>
            <Typography
              variant="h1"
              color={'#001C63'}
              fontSize={{ xs: '28px', md: '40px' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {data?.mainHeading}
            </Typography>
            <Typography
              variant="body1"
              color={'#000'}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              {data?.mainParagraph}
            </Typography>
          </Box>
          <Box
            className="post-author-meta"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt={data?.postedBy?.alt}
                  src={data?.postedBy?.image}
                  sx={{ width: { xs: 45, md: 65 }, height: { xs: 45, md: 65 } }}
                />
              </Stack>
              <Box className="title">
                <Box display="flex" gap="2px">
                  <Link href="#" underline="hover">
                    <Typography variant="body1" color={'black'}>
                      By{' '}
                      <Typography
                        variant="body1"
                        color="#001C63"
                        fontWeight={600}
                      >
                        {data?.postedBy?.name}
                      </Typography>
                    </Typography>
                  </Link>
                </Box>
                <Typography variant="body1" color={'black'}>
                  {data?.postedBy?.date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 2 }}>
          <Box className="image" pl={{ xs: '0', md: '5%' }}>
            <Image
              src={data?.bigImageLink}
              alt={data?.altTag}
              width={860}
              height={570}
              style={{ borderRadius: '10px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleBlogHeader;
