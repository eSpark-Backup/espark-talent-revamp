'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PaginationItem from '@mui/material/PaginationItem';

const CareerCards = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);

  const jobCategories = Array.from(
    new Set(data.flatMap((item) => (Array.isArray(item.category) ? item.category : [item.category])))
  );

  const filteredData =
    selectedCategory === 'all'
      ? data
      : data.filter((item) => item.category.includes(selectedCategory));

  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleJobCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1); 
  };

  return (
    <>
      <Box sx={{ py: { xs: '5%', sm: '3%', md: '2%', lg: '1%' } }}>
        <Container>
          <Box sx={{ py: '2%' }}>
            <Select
              labelId="job-category-label"
              id="job-category"
              className="dropdown"
              value={selectedCategory}
              onChange={handleJobCategoryChange}
              fullWidth
            >
              <MenuItem value="all">All</MenuItem>
              {jobCategories.map((category, index) => (
                <MenuItem key={`job-category-${index}`} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {paginatedData.map((item, index) => (
             <Grid
              key={index}
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                borderTop: '.5px solid #ced4da',
                py: { lg: '3%', xs: '10%', sm: '10%' }, my: { xs: '20px', sm: '20px' },
                borderRadius: { xs: '10px', sm: '10px' }
              }}
            >
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: '10px', sm: '20px' }}>
                <Typography variant="h3" color="secondary">
                  {item?.heading}
                </Typography>
                <Typography variant="body1">
                  {`${item?.location[0]}, ${item?.location[1]} `}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={7} px={{ xs: '10px', sm: '20px' }}>
                <Typography variant="h3" color="secondary">
                  Description
                </Typography>
                <Typography variant="body1">
                   {item?.description}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={2}
                display="flex"
                alignItems={'center'}
                justifyContent={'center'}
                px={{ xs: '10px', sm: '20px' }}
              >
                <Link href={item?.link}>
                  <Button variant="primary" color="secondary">
                    {`Apply Now >`}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          ))}
          {filteredData.length > perPage && (
            <Stack spacing={2} sx={{ justifyContent: 'center', mt: 3 }}>
              <Pagination
                count={Math.ceil(filteredData.length / perPage)}
                page={page}
                onChange={(event, value) => setPage(value)}
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
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
};

export default CareerCards;
