'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Skeleton,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CARD_STYLE = {
  borderRadius: '10px',
  px: '30px',
  py: '20px',
  height: '100%',
  background: '#fff',
};

const WikiCards = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const wikis = data || [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const wikiCategories = [
    ...new Set(wikis?.map((item) => item?.wikiCategory)?.filter(Boolean)),
  ];
  const categories = wikiCategories?.length
    ? ['All', ...wikiCategories]
    : wikiCategories;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData =
    selectedCategory === 'All'
      ? wikis
      : wikis.filter((item) => item?.wikiCategory === selectedCategory);

  return (
    <Box sx={{ backgroundColor: '#3b59980f' }}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          pt: { xs: '5%', sm: '3%' },
          px: 1,
          gap: 1,
        }}
      >
        {categories?.map((category, index) =>
          loading ? (
            <Skeleton
              key={index}
              width={140}
              height={33}
              variant="rectangular"
              sx={{ borderRadius: '50px' }}
            />
          ) : (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: { xs: '12px', sm: '13px', md: '15px', lg: '20px' },
                px: 2.2,
                color:
                  selectedCategory === category ? '#fff' : 'rgb(0, 28, 99)',
                border: 'none',
                '&:hover': {
                  border: 'none',
                },
              }}
            >
              {category}
            </Button>
          )
        )}
      </Grid>

      <Box sx={{ px: { xs: '5%', md: '3%', lg: '10%' }, py: '3%' }}>
        <Container>
          <Grid container spacing={2}>
            {filteredData?.map((item, index) => (
              <Grid key={item?.id || index} item lg={4} md={4} sm={6} xs={12}>
                <Box sx={CARD_STYLE}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      pb: '15px',
                    }}
                  >
                    {loading ? (
                      <Skeleton width={40} height={40} />
                    ) : (
                      <Image
                        src={item?.iconImage}
                        height={40}
                        width={40}
                        alt={item?.title || ''}
                        priority
                        quality={85}
                      />
                    )}

                    <Typography
                      sx={{ width: '100%' }}
                      fontWeight={600}
                      color={'#000'}
                      fontSize={{ xs: '15px', lg: '18px' }}
                    >
                      {loading ? (
                        <Skeleton width="100%" />
                      ) : (
                        <Link href={`/esparkwiki/${item?.slug}`}>
                          {item?.title}
                        </Link>
                      )}
                    </Typography>
                  </Box>
                  <Box pb="15px">
                    <Typography
                      fontWeight={600}
                      fontSize={{
                        xs: '10px',
                        sm: '12px',
                        lg: '15px',
                        color: '#667170',
                      }}
                    >
                      {loading ? <Skeleton width="100%" /> : 'Average Salary'}
                    </Typography>
                    <Typography
                      color="#3b5998"
                      fontWeight={600}
                      fontSize={{ xs: '17px', lg: '18px' }}
                    >
                      {loading ? (
                        <Skeleton width="100%" />
                      ) : (
                        `USD: $${item?.salary?.toLocaleString()} per month`
                      )}
                    </Typography>
                  </Box>
                  <Link href={`/esparkwiki/${item?.slug}`}>
                    <Typography
                      color="#029894"
                      fontWeight={600}
                      fontSize={{ xs: '12px', lg: '20px' }}
                    >
                      {loading ? <Skeleton width={150} /> : 'Job Description >'}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WikiCards;
