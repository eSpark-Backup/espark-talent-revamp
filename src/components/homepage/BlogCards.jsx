'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { BlogCard } from './BlogCard';

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
