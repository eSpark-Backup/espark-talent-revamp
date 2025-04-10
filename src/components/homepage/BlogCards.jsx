'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { buttonStyle, READ_MORE } from '@/constants/blogs';
import { usePathname } from 'next/navigation';
const {
  containerBoxStyle,
  typographyAndArrowBoxStyle,
  arrowStyle,
  typographyStyle,
  linkStyle,
} = buttonStyle;

const BlogCard = ({ item }) => (
  <Box
    className="single-blog-post"
    sx={{ px: { xs: '5%', sm: '5%', md: '2%', lg: '2%' }, pb: '30px' }}
  >
    <Link href={`/blogs/${item?.slug}`}>
      <Box className="image" sx={{ display: 'flex' }}>
        <span style={{ marginRight: '18px' }}>
          {item?.featureImage && (
            <Image
              quality="85"
              priority
              src={item?.featureImage}
              alt={item?.title}
              width={900}
              height={900}
              style={{ borderRadius: '15px' }}
            />
          )}
        </span>
        {item?.publishedAt && (
          <Typography
            component={'span'}
            className="date"
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
            }}
          >
            {Intl?.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })?.format(new Date(item?.publishedAt))}
          </Typography>
        )}
      </Box>
    </Link>
    <Box sx={{ width: '90%', my: 2 }}>
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 'auto', lg: '210px' },
          maxHeight: { xs: 'auto', lg: '210px' },
        }}
      >
        <Link href={`/blogs/${item?.slug}`}>
          <Typography
            sx={{
              color: '#09114A',
              fontSize: { xs: '18px', md: '20px', lg: '23.49px' },
              fontWeight: 600,
            }}
          >
            {item?.title}
          </Typography>
        </Link>
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
  const cardsInRow = isSmallScreen ? 8.5 : isMediumScreen ? 6 : 12;
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
    <Box sx={{ my: '3%' }}>
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
            <Grid
              container
              spacing={{ xs: 0, md: 2 }}
              sx={{
                pt: { xs: '10%', sm: '8%', md: '2%' },
                pb: { xs: '0%', md: '2%' },
              }}
            >
              {displayedBlogs?.map((item, index) => (
                <Grid
                  item
                  xs={11}
                  sm={cardsInRow}
                  md={4}
                  key={index}
                  sx={{ mx: isSmallScreen ? 'auto' : 0 }}
                >
                  <BlogCard item={item} />
                </Grid>
              ))}
            </Grid>
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
