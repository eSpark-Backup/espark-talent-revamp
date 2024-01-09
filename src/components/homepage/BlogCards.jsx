'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination, PaginationItem } from '@mui/material';

import { READ_MORE } from '@/constants/home-page/blogSections';

const BlogCards = ({ data, smCol }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Box sx={{ my: '3%' }}>
      <Container>
        <Grid container spacing={2} sx={{ py: '5%' }}>
          {data?.slice(startIndex, endIndex)?.map((item, index) => (
            <Grid
              item
              xs={smCol == 2 ? '12' : '12'}
              sm={smCol == 2 ? '12' : '12'}
              md={4}
              lg={4}
              key={index}
            >
              <Box
                className="single-blog-post"
                sx={{
                  px: { sm: '10%', xs: '10%', lg: '0%', md: '0%' },
                }}
              >
                <Link href={`/blogs/${item?.id}`}>
                  <Box className="image" sx={{ display: 'flex' }}>
                    <span style={{ marginRight: '30px' }}>
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
                    <Box className="default-btn" sx={{ position: 'relative' }}>
                      <ArrowForwardIosIcon
                        sx={{
                          position: 'absolute',
                          left: 12,
                          top: 10,
                          color: '#fff',
                        }}
                      />
                      <Typography variant="body1">{READ_MORE}</Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        {data?.length > itemsPerPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={Math.ceil(data.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              size="large"
              // showFirstButton
              // showLastButton
              sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px' } }}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    borderRadius: '10px',
                    color: 'primary.main',
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                />
              )}
              // prevIcon={<KeyboardArrowLeft />}
              // nextIcon={<KeyboardArrowRight />}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogCards;
