'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { buttonStyle, READ_MORE } from '@/constants/blogs';
import { usePathname } from 'next/navigation';
import FlaxibleSlider from '../new-home/FlexibleSlider';

const {
  containerBoxStyle,
  typographyAndArrowBoxStyle,
  arrowStyle,
  typographyStyle,
  linkStyle,
} = buttonStyle;

const BlogCard = ({ item }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      mminWidth: '300px',
      maxWidth: '397px',
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      overflow: 'hidden',
      '@media(min-width: 1024px)': {
        display: 'flex',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
      <Link href={`/blogs/${item?.slug}`}>
        <Box
          component="img"
          src={item?.featureImage}
          alt={item?.title}
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: '321px',
            maxHeight: '382px',
            borderRadius: '13.55px',
          }}
        />
      </Link>
      <Typography
        sx={{
          display: 'flex',
          writingMode: 'vertical-lr',
          position: 'relative',
          color: '#6F76A8',
          fontSize: { xs: '13px', md: '14.46px' },
          mt: 6.5,
          '&::before': {
            content: "''",
            height: '50px',
            width: '1px',
            backgroundColor: '#6F76A8',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%) translateY(-100%)',
          },
        }}
      >
        <Link href={`/blogs/${item?.slug}`} style={{ marginTop: '10px' }}>
          {Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).format(new Date(item?.publishedAt))}
        </Link>
      </Typography>
    </Box>

    <Box sx={{ pr: 2 }}>
      <Typography
        sx={{
          color: '#09114A',
          fontSize: { xs: '18px', md: '20px', lg: '23.49px' },
          fontWeight: 600,
        }}
      >
        <Link href={`/blogs/${item?.slug}`}>{item?.title}</Link>
      </Typography>
      <Typography
        sx={{
          color: '#6F76A8',
          fontSize: { xs: '13px', md: '14.46px' },
          fontWeight: 400,
          my: 2,
        }}
      >
        {item?.subtitle}
      </Typography>
    </Box>

    <Box sx={{ mt: 'auto' }}>
      <ReadMoreButton slug={item?.slug} />
    </Box>
  </Box>
);

const ReadMoreButton = ({ slug }) => (
  <Link href={`/blogs/${slug}`} style={linkStyle}>
    <Box className="hoverItem" sx={containerBoxStyle}>
      <Box sx={typographyAndArrowBoxStyle}>
        <ArrowForwardIosIcon sx={arrowStyle} />
      </Box>
      <Typography className="hoverIcon" sx={typographyStyle}>
        {READ_MORE}
      </Typography>
    </Box>
  </Link>
);

const BlogCards = ({ data }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:768px)');
  const pagination = isSmallScreen
    ? 'small'
    : isMediumScreen
      ? 'medium'
      : 'medium';
  const pathName = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathName]);

  const handleChangePage = (event, value) => {
    setPage(value);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sortedBlogs = (data || [])?.sort((a, b) =>
    a?.publishedAt && b?.publishedAt
      ? new Date(b?.publishedAt) - new Date(a?.publishedAt)
      : 0
  );
  const displayedBlogs = sortedBlogs?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <Box sx={{ my: '3%' }} id="pricing-difference">
      <Container>
        {loading || data === null || data?.length === 0 ? (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              my: 0,
            }}
          >
            <Box component={'img'} src="/images/no_data.png" />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                mx: 'auto',
                width: '100%',
                maxWidth: '1200px',
                display: { xs: 'flex', md: 'grid' },
                gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                gap: 6,
              }}
            >
              {displayedBlogs?.map((item, index) => (
                <BlogCard item={item} key={index} />
              ))}
              <FlaxibleSlider
                data={displayedBlogs}
                isDisplay={true}
                slideStyle={{
                  width: '100%',
                  maxWidth: '350px',
                  paddingBottom: '20px',
                }}
                card={() => <Box sx={{ width: '300px' }}>Ali</Box>}
              />
            </Box>

            {data?.length > itemsPerPage && (
              <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 5 }}
              >
                <Pagination
                  count={Math?.ceil(data?.length / itemsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  color="primary"
                  size={pagination}
                  sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px' } }}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      sx={{
                        borderRadius: '10px',
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
          </>
        )}
      </Container>
    </Box>
  );
};

export default BlogCards;
