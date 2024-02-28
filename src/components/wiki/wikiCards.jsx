'use client';
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

const CARD_STYLE = {
  borderRadius: '10px',
  background: '#FFF',
  px: '30px',
  py: '20px',
  m: '10px',
};

const WikiCards = ({ data, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onSelectCategory = (category) => {
    setSelectedCategory(category ? category?._id : 'all');
  };

  const filteredData =
    selectedCategory === 'all'
      ? data
      : data?.filter((item) => item?.wikiCategory === selectedCategory);
  filteredData?.sort((a, b) => a?.id - b?.id);

  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          pt: '4%',
          gap: {
            xs: 1,
            sm: 1,
            md: 1.5,
            lg: 2,
          },
        }}
      >
        <Button
          size="small"
          onClick={() => onSelectCategory(null)}
          variant={selectedCategory === 'all' ? 'contained' : ''}
          color="primary"
          sx={{ borderRadius: '50px' }}
        >
          <Typography
            fontSize={{
              xs: '10px',
              sm: '12px',
              md: '15px',
              lg: '20px',
            }}
            color={selectedCategory === 'all' ? 'white' : '#001C63'}
            fontWeight="600"
          >
            {loading ? <Skeleton width={30} height={12} /> : 'All'}
          </Typography>
        </Button>
        {categories
          ?.sort((a, b) => a?.id - b?.id)
          .map((category, index) => (
            <Button
              key={index}
              onClick={() => onSelectCategory(category)}
              variant={selectedCategory === category?._id ? 'contained' : ''}
              color="primary"
              sx={{ borderRadius: '50px', fontWeight: 600 }}
            >
              <Typography
                fontSize={{
                  xs: '10px',
                  sm: '12px',
                  md: '15px',
                  lg: '20px',
                }}
                color={selectedCategory === category?._id ? 'white' : '#001C63'}
                fontWeight="600"
              >
                {loading ? (
                  <Skeleton width={50} height={12} />
                ) : (
                  category?.title
                )}
              </Typography>
            </Button>
          ))}
      </Grid>
      <Box sx={{ px: ['0%', '0%', '10%', '10%'] }}>
        <Box sx={{ py: '3%' }}>
          <Container>
            <Grid container sx={{ display: 'flex', justifyContent: 'left' }}>
              {filteredData?.map((item) => (
                <Grid
                  key={item?.id}
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  gap="10px"
                >
                  <Box sx={CARD_STYLE}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        pb: '15px',
                      }}
                    >
                      {item?.iconImage ? (
                        <Image
                          quality="85"
                          priority={true}
                          src={item?.iconImage}
                          height={40}
                          width={40}
                          alt={`${item?.title}`}
                        />
                      ) : (
                        <Skeleton width={30} height={30} />
                      )}
                      {item?.title ? (
                        <Link href={`/esparkwiki/${item?.slug}`}>
                          <Typography
                            color="#000"
                            variant="body1"
                            fontWeight={600}
                            fontSize={{
                              xs: '15px',
                              sm: '15px',
                              md: '14px',
                              lg: '18px',
                            }}
                          >
                            {item?.title}
                          </Typography>
                        </Link>
                      ) : (
                        <Skeleton width={100} />
                      )}
                    </Box>
                    <Box sx={{ pb: '15px' }}>
                      <Typography
                        variant="body1"
                        color="#667170"
                        fontWeight={600}
                        fontSize={{
                          xs: '10px',
                          sm: '12px',
                          md: '12px',
                          lg: '15px',
                        }}
                      >
                        {'Average Salary'}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#3b5998"
                        fontSize={{
                          xs: '17px',
                          sm: '17px',
                          md: '15px',
                          lg: '18px',
                        }}
                        fontWeight={600}
                      >
                        {`USD: $${item?.salary.toLocaleString()} per month`}
                      </Typography>
                    </Box>
                    <Box>
                      {item?.slug ? (
                        <Link href={`/esparkwiki/${item?.slug}`}>
                          <Typography
                            variant="body1"
                            color="#029894"
                            fontWeight={600}
                            fontSize={{
                              xs: '12px',
                              sm: '12px',
                              md: '14px',
                              lg: '20px',
                            }}
                          >
                            {'Job Description >'}
                          </Typography>
                        </Link>
                      ) : (
                        <Skeleton width={150} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default WikiCards;
