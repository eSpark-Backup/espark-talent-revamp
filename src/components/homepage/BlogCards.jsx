'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination, PaginationItem } from '@mui/material';
import { READ_MORE } from '@/constants/home-page/blogSections';

const BlogCards = ({ data }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const handleChangePage = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:768px)');

  let cardsInRow = 12; // Default for screens wider than 767px

  if (isSmallScreen) {
    cardsInRow = 12;
  } else if (isMediumScreen) {
    cardsInRow = 6;
  }

  return (
    <Box sx={{ my: '3%' }}>
      <Container>
        <Grid container spacing={2} sx={{ py: '2%' }}>
          {data?.slice(startIndex, endIndex)?.map((item, index) => (
            <Grid item xs={12} sm={cardsInRow} md={4} lg={4} key={index}>
              <Box
                className="single-blog-post"
                sx={{
                  px: { sm: '10%', xs: '10%', lg: '0%', md: '0%' },
                }}
              >
                <Link href={`/blogs/${item?.slug}`}>
                  <Box className="image" sx={{ display: 'flex' }}>
                    <span style={{ marginRight: '30px' }}>
                      <Image
                        src={item?.featureImage}
                        alt={`${item?.title} - eSpark Talent`}
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
                  <Link href={`/blogs/${item?.slug}`}>
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: {
                          xs: '18px',
                          sm: '18px',
                          md: '20px',
                          lg: '24px',
                        },
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
                      fontSize: {
                        xs: '13px',
                        sm: '13px',
                        md: '15px',
                        lg: '18px',
                      },
                      fontWeight: 400,
                      lineHeight: '27.465px',
                      fontStyle: 'normal',
                      my: 2,
                    }}
                  >
                    {item?.subtitle}
                  </Typography>
                  <Link href={`/blogs/${item?.slug}`}>
                    <Box
                      className="hoverItem"
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        transition: 'background-color 0.5s, color 0.5s',
                        border: 'none',
                        zIndex: 1,
                        backgroundColor: 'transparent',
                        width: { xs: '100%', md: '60%' },
                        borderRadius: '5px',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: '5px 5px',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#029894',
                          zIndex: -1,
                          transform: 'translateX(-100%)',
                          transition: 'transform 0.5s',
                        },
                        '&:hover': {
                          color: '#fff ',
                          '&::before': {
                            transform: 'translateX(0)',
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: '#029894',
                          padding: '10px',
                          borderRadius: '5px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          mr: { xs: '6px', md: '10px', lg: '15px' },
                          '&:hover': {
                            color: '#fff',
                            '&::before': {
                              transform: 'translateX(0)',
                            },
                          },
                        }}
                      >
                        <ArrowForwardIosIcon
                          sx={{
                            color: '#fff',
                            transition: 'left 0.5s',
                            '&:hover': {
                              left: '50%',
                              color: '#fff',
                            },
                          }}
                        />
                      </Box>
                      <Typography
                        className="hoverIcon"
                        sx={{
                          fontSize: {
                            xs: '13px',
                            sm: '13px',
                            md: '15px',
                            lg: '20px',
                          },
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: '#09114A',
                          '&:hover': {
                            width: '100%',
                            color: '#fff',
                          },
                        }}
                      >
                        {READ_MORE}
                      </Typography>
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
              count={Math.ceil(data?.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              size="large"
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
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogCards;
