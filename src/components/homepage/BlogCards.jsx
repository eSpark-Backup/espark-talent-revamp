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
import { BlogCard } from '@/components/homepage/BlogCard';
import {
  noDataStyles,
  gridContainerStyles,
  paginationStyles,
  paginationItemStyles,
  paginationWrapperStyles,
  blogCardBoxStyles,
} from '@/components/homepage/BlogCardsStyles';
import { conatinerBoxStyle } from '@/components/homepage/BlogCardStyles';

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

  /**
   * Handles the page change event for pagination.
   * Updates the current page state and scrolls the window to the top smoothly.
   *
   * @param {Object} event - The event object triggered by the pagination component.
   * @param {number} value - The new page number selected.
   */
  const handleChangePage = (event, value) => {
    setPage(value);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Sorts an array of blog data objects in descending order based on their `publishedAt` property.
   * If `publishedAt` is not present in one or both objects, they are considered equal in sorting.
   *
   * @param {Array<Object>} data - The array of blog objects to be sorted.
   * @param {string} [data[].publishedAt] - The publication date of the blog in ISO string format.
   * @returns {Array<Object>} The sorted array of blog objects, with the most recent blogs first.
   */
  const sortedBlogs = (data || [])?.sort((a, b) =>
    a?.publishedAt && b?.publishedAt
      ? new Date(b?.publishedAt) - new Date(a?.publishedAt)
      : 0
  );

  /**
   * Extracts a subset of blogs to be displayed on the current page.
   *
   * @constant
   * @type {Array|undefined}
   * @description Slices the sortedBlogs array to get the blogs for the current page based on pagination.
   *
   * @param {number} page - The current page number (1-based index).
   * @param {number} itemsPerPage - The number of items to display per page.
   * @returns {Array|undefined} An array of blogs for the current page, or undefined if sortedBlogs is not defined.
   */
  const displayedBlogs = sortedBlogs?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <Box sx={conatinerBoxStyle}>
      <Container>
        {loading || data === null || data?.length === 0 ? (
          <Box sx={noDataStyles}>
            <Box component={'img'} src="/images/no_data.png" />
          </Box>
        ) : (
          <>
            <Grid container spacing={{ xs: 0, md: 2 }} sx={gridContainerStyles}>
              {displayedBlogs?.map((item, index) => (
                <Grid
                  item
                  xs={11}
                  sm={cardsInRow}
                  md={4}
                  key={index}
                  sx={blogCardBoxStyles(isSmallScreen)}
                >
                  <BlogCard item={item} />
                </Grid>
              ))}
            </Grid>
            {data?.length > itemsPerPage && (
              <Box sx={paginationWrapperStyles}>
                <Pagination
                  count={Math?.ceil(data?.length / itemsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  color="primary"
                  size={pagination}
                  sx={paginationStyles}
                  renderItem={(item) => (
                    <PaginationItem {...item} sx={paginationItemStyles} />
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
