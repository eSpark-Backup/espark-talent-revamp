'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_LINKS_DATA } from '@/constants/blogs';
import { PortableText } from '@portabletext/react';

const BlogDetailsContent = ({ data }) => {
  return (
    <>
      <Grid
        container
        sx={{
          py: '5%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} md={9}>
          <Box
            className={`blog-content`}
            sx={{
              backgroundColor: '#fff',
              p: { xs: '20px', md: '30px' },
              borderRadius: '10px',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              textAlign: 'justify',
            }}
          >
            <PortableText value={data?.body} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Grid
            container
            sx={{
              px: { xs: '0%', md: '10%' },
              pt: { xs: '5%', sm: '5%', md: '0%' },
            }}
          >
            {SOCIAL_LINKS_DATA?.map((item, index) => (
              <Grid item xs={2} sm={1} md={12} sx={{ p: '10px' }} key={index}>
                <Box>
                  <Link
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item?.src}
                      width={40}
                      height={40}
                      alt="social-icons"
                    />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogDetailsContent;
