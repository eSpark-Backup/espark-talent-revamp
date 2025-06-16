'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { buttonStyle, READ_MORE } from '@/constants/blogs/blogs';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination as SwiperPagination } from 'swiper/modules';

const {
  containerBoxStyle,
  typographyAndArrowBoxStyle,
  arrowStyle,
  typographyStyle,
  linkStyle,
} = buttonStyle;

const BlogCard = ({ item, display = 'none' }) => (
  <Box
    sx={{
      width: { xs: '93%', lg: '100%' },
      height: '100%',
      maxWidth: '285px',
      display: 'none',
      flexDirection: 'column',
      overflow: 'hidden',
      '@media(min-width: 1024px)': {
        width: '100%',
        display: 'flex',
        maxWidth: '400px',
      },
      '@media(max-width: 1023px)': {
        display: display || 'none',
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

const BlogCardSlider = ({ data, slideStyle, isDisplay }) => (
  <Box
    sx={{
      mx: 'auto',
      width: '100%',
      display: 'none',
      justifyContent: 'center',
      '@media(max-width: 1023px)': {
        display: isDisplay || 'none',
      },
    }}
  >
    <Swiper
      pagination={{ clickable: true }}
      modules={[Autoplay, SwiperPagination]}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView="auto"
      speed={3000}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 20px 30px 20px',
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...slideStyle,
          }}
        >
          <BlogCard item={item} display={'flex'} />
        </SwiperSlide>
      ))}
    </Swiper>
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
    <Box sx={{ mx: 'auto', width: '90%' }} id="pricing-difference">
      {loading || data === null || data?.length === 0 ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
              '@media(min-width: 1024px)': {
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
            }}
          >
            {displayedBlogs?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
            <BlogCardSlider
              data={displayedBlogs}
              isDisplay={'flex'}
              slideStyle={{
                width: '100%',
                maxWidth: '300px',
              }}
            />
          </Box>

          {data?.length > itemsPerPage && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: { xs: 3, md: 5 },
              }}
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
    </Box>
  );
};

export default BlogCards;
