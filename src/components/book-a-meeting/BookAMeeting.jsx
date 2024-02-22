'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const BookAMeeting = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      <Box
        sx={{
          py: '5%',
          pt: '25px',
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            pt={ '30px'}
            pb={ '30px'}
            container
            spacing={1}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Grid
              item
              xs={12}
              sm={7}
              sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                           <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              <Link href="/">
                <Image
                  src="/images/eSpark Talent Logo.svg"
                  width={162}
                  height={100}
                  alt="eSpark Talent logo"
                />
              </Link>
                          </Box>
                          <Typography
                  variant="h1"
                  lineHeight={1.4}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '25px',
                    md: '35px',
                    lg: '40px',
                    xl: '40px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                  fontWeight={700}
                >
                  {data?.title}
                          </Typography>
                          <Typography
                  variant="h2"
                  lineHeight={1.4}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '25px',
                    md: '35px',
                    lg: '40px',
                    xl: '40px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                  fontWeight={700}
                >
                  {data?.subTitle}
                </Typography>
                <Typography
                  color={data?.descColor}
                  lineHeight={1.65}
                  fontWeight={500}
                  pr={data?.tpr}
                  fontSize={{
                    xs: '12px',
                    sm: '12px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                >
                  {data?.description}
                </Typography>
            </Grid>
              <Grid
                item
                xs={12}
                sm={ 5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
                      >
                          
                          <Box>
                              
                          </Box>
              </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BookAMeeting;
