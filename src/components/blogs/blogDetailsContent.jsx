'use client';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { PortableText } from '@portabletext/react';
import {
  gridStyle,
  bodyTextStyle,
  linksGridStyle,
  linkStyle,
} from '@/components/blogs/blogDetailsContentStyles';

import { SOCIAL_LINKS_DATA } from '@/constants/blogs/blogs';

const BlogDetailsContent = ({ data }) => {
  return (
    <>
      <Grid container sx={gridStyle}>
        <Grid item xs={12} md={9}>
          <Box className={`blog-content`} sx={bodyTextStyle}>
            {data ? (
              <PortableText value={data?.body} />
            ) : (
              <>
                <Skeleton
                  height={20}
                  width="80%"
                  style={{ marginBottom: '10px' }}
                />
                <Skeleton count={5} height={20} width="100%" />
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Grid container sx={linksGridStyle}>
            {SOCIAL_LINKS_DATA?.map((item, index) => (
              <Grid item xs={2} sm={1} md={12} sx={linkStyle} key={index}>
                <Box>
                  {item ? (
                    <Link
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        quality="85"
                        priority={true}
                        src={item?.src}
                        width={40}
                        height={40}
                        alt="social-icons"
                      />
                    </Link>
                  ) : (
                    <Skeleton circle={true} height={40} width={40} />
                  )}
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
