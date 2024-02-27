'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import BookADemoForm from '../book-a-demo/BookADemoForm';

const BookAMeeting = ({ data }) => {
  const { form } = Book_A_Demo_Data;

  return (
    <>
      <Box
        id={'top'}
        sx={{
          pt: { xs: 5, sm: 5 },
          pb: { xs: 5, sm: 8 },
          px: { xs: 2, sm: 5 },
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            maxWidth: '1400px',
            gap: 2,
            justifyContent: 'center',
            '@media(min-width: 280px) and (max-width:1259px)': {
              flexDirection: 'column !important',
              gap: 10,
            },
            '@media(max-width: 425px)': {
              gap: 6,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              order: { xs: 2, sm: 0 },
              gap: { xs: 2, sm: 3, md: 5, lg: 7 },
              '@media(min-width: 280px) and (max-width:1259px)': {
                mx: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                mx: { xs: 'auto', md: 0 },
                alignItems: 'center',
              }}
            >
              <Link href="/">
                <Box
                  component={'img'}
                  sx={{
                    width: { xs: 122, sm: 132, md: 142, lg: 162 },
                    height: { xs: 50, sm: 60, md: 80, lg: 100 },
                  }}
                  src="/images/eSpark Talent Logo.svg"
                  alt="eSpark Talent logo"
                />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  flexDirection: 'column',
                  gap: { xs: 1, sm: 0.5, lg: 1 },
                  pr: { xs: 0, md: 4 },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: '22px',
                      sm: '30px',
                      md: '43px',
                      lg: '48px',
                    },
                    textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                    fontWeight: 600,
                    lineHeight: { sm: '40px', lg: '56px' },
                  }}
                  color={data?.titleColor}
                >
                  {data?.title}
                </Typography>
                <Box
                  sx={{
                    mx: { xs: 'auto', md: 0 },
                    maxWidth: {
                      xs: '350px',
                      sm: '450px',
                      md: '650px',
                      lg: '700px',
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: '21px',
                        sm: '25px',
                        md: '40px',
                        lg: '45px',
                      },
                      textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                      fontWeight: 500,
                      lineHeight: {
                        xs: '30px',
                        sm: '38px',
                        md: '45px',
                        lg: '56px',
                      },
                    }}
                    color={data?.subTitleColor}
                  >
                    {data?.subTitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mx: { xs: 'auto', md: 0 },
                    maxWidth: {
                      xs: '400px',
                      sm: '450px',
                      md: '650px',
                      lg: '700px',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '14px',
                        sm: '15px',
                        md: '18px',
                        lg: '20px',
                        xl: '20px',
                      },
                      color: '#0E1155',
                      fontWeight: 500,
                      lineHeight: { xs: 'auto', lg: '37px' },
                    }}
                  >
                    {data?.description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: { sm: 2, md: 6, lg: 5 },
                  pr: { md: 3 },
                  '@media(max-width: 722px)': {
                    flexWrap: 'wrap',
                    gap: 3,
                  },
                }}
              >
                {data &&
                  data?.services?.map((item, index) => (
                    <>
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          maxWidth: {
                            xs: '180px',
                            sm: '180px',
                            md: '210px',
                            lg: '245px',
                          },
                          mx: { xs: 'auto', sm: 'auto', md: 0 },
                          alignItems: { xs: 'center', md: 'start' },
                          textAlign: { xs: 'center', md: 'start' },
                          flexDirection: 'column',
                          gap: 1.1,
                        }}
                      >
                        <Box
                          component={'img'}
                          src={item?.image || ''}
                          alt={`${item?.alt || ''}`}
                          sx={{ mx: { xs: 'auto', sm: 0 } }}
                          width={28}
                          height={28}
                        />
                        <Typography
                          sx={{
                            fontSize: {
                              xs: '11px',
                              sm: '12px',
                              md: '18px',
                              lg: '20px',
                            },
                            maxWidth: { sm: '140px', md: '200px', lg: '227px' },
                            fontWeight: 600,
                          }}
                        >
                          {item?.title || ''}
                        </Typography>
                        <Typography
                          sx={{
                            color: `#1D4E72`,
                            fontSize: {
                              xs: '10px',
                              sm: '11px',
                              md: '13px',
                              lg: '15px',
                            },
                            fontWeight: 400,
                            maxHeight: { md: '65px', lg: '90px' },
                          }}
                        >
                          {item?.description || ''}
                        </Typography>
                      </Box>
                    </>
                  ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: { xs: 0, md: 3 }, pb: { xs: 0, sm: 1 } }}>
            <Box
              sx={{
                width: 'auto',
                maxWidth: '486px',
                height: 'auto',
                borderRadius: '8px',
                py: 3,
                px: 0.8,
                boxShadow: '0 0 9px 0 rgba(0,0,0,0.29)',
                order: { xs: 0, sm: 1 },
                '@media(min-width: 280px) and (max-width:1259px)': {
                  mx: 'auto',
                },
              }}
            >
              <BookADemoForm form={form} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookAMeeting;
