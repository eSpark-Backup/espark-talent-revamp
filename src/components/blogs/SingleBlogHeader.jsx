import React from 'react';
import { Container, Grid, Typography, Box, Link as Link } from '@mui/material';
import Image from 'next/image';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { borderRadius } from '@mui/system';

const SingleBlogHeader = ({ data }) => {
  return (
    <Grid container spacing={3} justifyContent="center" pt={'3%'}>
      <Grid item lg={6} md={12}>
        <Box pb={'10%'}>
          <Typography variant="h1" fontSize={'40px'}>
            {data?.mainHeading}
          </Typography>
          <Typography variant="body1">{data?.mainParagraph}</Typography>
        </Box>
        <Box className="post-author-meta">
          <Box style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt={data?.postedBy?.alt}
                src={data?.postedBy?.image}
                sx={{ width: 65, height: 65 }}
              />
            </Stack>

            <Box className="title">
              <Typography variant="body1">
                By
                <Link href="#" underline="hover">
                  {data?.postedBy?.name}
                </Link>
              </Typography>
              <Typography variant="body2">{data?.postedBy?.date}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} md={12}>
        <Box className="image" px={'5%'}>
          <Image
            src={data?.bigImageLink}
            alt={data?.altTag}
            width={860}
            height={570}
            sx={{ borderRadius: '20px' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SingleBlogHeader;
