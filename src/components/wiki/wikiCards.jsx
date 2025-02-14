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
  const wikis = data ? data : [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const wikiCategories = [
    ...new Set(wikis?.map((item) => item?.wikiCategory)?.filter(Boolean)),
  ];
  const all = wikiCategories?.length ? 'All' : null;
  const new_wikiCategories = all ? [all, ...wikiCategories] : wikiCategories;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const onSelectCategory = (category) => {
    setSelectedCategory(category ? category : 'All');
  };

  const filteredData =
    selectedCategory === 'All'
      ? wikis
      : wikis?.filter((item) => item?.wikiCategory === selectedCategory);
  filteredData?.sort((a, b) => a?.id - b?.id);
  return (
    <>
      <Box sx={{ backgroundColor: '#3b59980f' }}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            pt: '4%',
            px: 1,
            gap: {
              xs: 1,
              sm: 1,
              md: 1.5,
              lg: 2,
            },
          }}
        >
          {new_wikiCategories?.map((category, index) => (
            <>
              {!category || loading ? (
                <Skeleton
                  width={140}
                  height={33}
                  key={index}
                  variant="rectangular"
                  sx={{ borderRadius: '50px' }}
                />
              ) : (
                <Button
                  key={index}
                  onClick={() => onSelectCategory(category)}
                  variant={
                    selectedCategory === category ? 'contained' : 'outlined'
                  }
                  color="primary"
                  sx={{
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: {
                      xs: '12px',
                      sm: '13px',
                      md: '15px',
                      lg: '20px',
                    },
                    px: 2.2,
                    color: selectedCategory === category ? 'white' : '#001C63',
                    '&:hover': {
                      border: 'none',
                    },
                  }}
                >
                  {category}
                </Button>
              )}
            </>
          ))}
        </Grid>
        <Box sx={{ px: { md: '3%', lg: '10%' } }}>
          <Box sx={{ py: '3%' }}>
            <Container>
              <Grid
                container
                sx={{ display: 'flex', justifyContent: 'left' }}
                spacing={2}
              >
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
                        {!loading && item?.iconImage ? (
                          <Image
                            quality="85"
                            priority={true}
                            src={item?.iconImage}
                            height={40}
                            width={40}
                            alt={`${item?.title}`}
                          />
                        ) : (
                          <Skeleton width={40} height={40} />
                        )}
                        {!loading && item?.title ? (
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
                          <Skeleton
                            variant="text"
                            sx={{ fontSize: '2rem' }}
                            width={'100%'}
                          />
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
                          {!loading && item?.avgSalary ? (
                            'Average Salary'
                          ) : (
                            <Skeleton
                              variant="text"
                              sx={{ fontSize: '1rem' }}
                            />
                          )}
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
                          {!loading && item?.avgSalary ? (
                            <Stack direction={'column'}>
                              {item?.avgSalary?.map((avgSalary) => (
                                <Stack
                                  key={avgSalary?.name}
                                  direction={'row'}
                                  columnGap={1}
                                  rowGap={1}
                                  alignItems={'center'}
                                  flexWrap={'wrap'}
                                  justifyContent={'space-between'}
                                >
                                  <Typography
                                    variant="h6"
                                    style={{
                                      width: '120px',
                                      textTransform: 'capitalize',
                                    }}
                                  >
                                    {avgSalary?.name}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    style={{
                                      textWrap: 'nowrap',
                                    }}
                                  >
                                    {`$${avgSalary?.salary?.from}
                                    -$${avgSalary?.salary?.to} per month`}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          ) : (
                            ''
                          )}
                        </Typography>
                      </Box>
                      <Box>
                        {!loading && item?.slug ? (
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
      </Box>
    </>
  );
};
export default WikiCards;
