'use client';
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  DESCRIPTIONS,
  READ_MORE,
  TITLE,
  VIEW_ALL_BLOGS,
  VIEW_LESS_BLOGS,
  blogData,
} from '@/constants/home-page/blogSections';

const BlogCards = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowAllBlogs = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === 3 ? blogData.length : 3
    );
  };

  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Grid container columnSpacing={7} rowSpacing={4}>
          {blogData?.slice(0, visibleItems)?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="single-blog-post">
                <Link href={`/blogs/${item?.id}`}>
                <Box className="image" sx={{ display: 'flex' }}>
                  <span className="d-block" style={{ marginRight: '30px' }}>
                    <Image
                      src={item?.imageLink}
                      alt={item?.title}
                      width={900}
                      height={100}
                      style={{ borderRadius: '15px' }}
                    />
                  </span>
                  <span className="date">
                    {Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    }).format(new Date('2023-09-27T00:36:00.000Z'))}
                  </span>
                  </Box>
                </Link>
                <Box sx={{ width: '90%', my: 2 }}>
                  <Link href={`/blogs/${item?.id}`}>
                  <Typography
                    sx={{
                      color: '#09114A',
                      fontSize: '23.49px',
                      fontWeight: 600,
                      lineHeight: '26px',
                    }}
                  >
                    {item?.title}
                    </Typography>
                    </Link>
                  <Typography
                    sx={{
                      color: '#6F76A8',
                      fontSize: '14.455px',
                      fontWeight: 400,
                      lineHeight: '27.465px',
                      fontStyle: 'normal',
                      my: 2,
                    }}
                  >
                    {item?.mainParagraph}
                  </Typography>
                  <Link href={`/blogs/${item?.id}`}>
                    <span className="default-btn" sx={{ position: 'relative' }}>
                      <ArrowForwardIosIcon
                        sx={{
                          position: 'absolute',
                          left: 12,
                          top: 10,
                          color: '#fff',
                        }}
                      />

                      {READ_MORE}
                    </span>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogCards;
