'use client';
import React from 'react';
import { Grid, Typography, Box, Avatar, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
// import moment from 'moment';

const SingleBlogHeader = ({ data }) => {
  return (
    <>
      <Box sx={{ mt: { md: '90px', xs: '35px' } }}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 1 }}>
            <Box pb={{ xs: '5%', md: '10%' }} sx={{}}>
              <Typography
                color={'#001C63'}
                fontSize={{ xs: '25px', sm: '25px', md: '30px', lg: '40px' }}
                fontWeight={600}
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                {data?.mainHeading}
              </Typography>
              <Typography
                variant="body1"
                color={' #6F76A8'}
                fontSize={{ xs: '12px', sm: '13px', md: '14px', lg: '17px' }}
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                {data?.mainParagraph}
              </Typography>
            </Box>
            <Box
              className="post-author-meta"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Box
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt={data?.title}
                    src={data?.postedBy?.image}
                    sx={{
                      width: { xs: 45, md: 65 },
                      height: { xs: 45, md: 65 },
                    }}
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
                          {`${data?.postedBy?.name}`}
                        </Typography>
                      </Typography>
                    </Link>
                  </Box>
                  <Typography variant="body1" color={'black'}>
                    {data?.postedBy?.date}
                    {/* {moment(data?.publishedAt)?.format('MMMM DD, YYYY')} */}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 2 }}>
            <Box className="image" pl={{ xs: '0', md: '5%' }}>
              <Image
                quality="85"
                priority={true}
                src={data?.bigImageLink}
                alt={`${data?.alt} -eSpark Talent`}
                width={860}
                height={570}
                style={{ borderRadius: '10px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SingleBlogHeader;
