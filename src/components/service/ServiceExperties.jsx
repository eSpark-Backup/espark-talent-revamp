'use client';
import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Link from 'next/link';
import ServiceExpertiesResponsive from './ServiceExpertiesResponsive';
import { usePathname } from 'next/navigation';

const ServiceExperties = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      {data && (
        <Box sx={{ py: '2.5%' }}>
          <Container>
            <Box>
              <Box
                component={'div'}
                sx={{
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  flexDirection: 'column',
                  // width: { sm: '600px', md: '700px', lg: '900px' },
                  '@media(min-width: 570px) and (max-width: 767px)': {
                    width: '550px',
                    pt: 2,
                  },
                  '@media(min-width: 425px) and (max-width: 569px)': {
                    pt: 2,
                    width: '400px',
                  },
                  '@media(min-width: 340px) and (max-width: 370px)': {
                    pt: 2,
                    width: '300px',
                  },
                  '@media(min-width: 280px) and (max-width: 299px)': {
                    pt: 2,
                    width: '240px',
                  },
                  mb: 4,
                  gap: 2,
                }}
              >
                <Typography
                  variant={'h2'}
                  color={'secondary'}
                  sx={{
                    fontSize: {
                      xs: '20px',
                      sm: '20px',
                      md: '35px',
                      lg: '48px',
                    },
                    fontWeight: 600,
                    lineHeight: {
                      xs: '29px',
                      sm: '45px',
                      md: '50px',
                      lg: '65px',
                    },
                    '@media(min-width: 420px) and (max-width: 480px)': {
                      px:
                        pathName === '/hire-mean-stack-developers'
                          ? '20px'
                          : '0px',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: data?.title }}
                />
                <Typography
                  variant={'body1'}
                  color={'secondary'}
                  // className="hrFirmDesktop"
                  sx={{
                    fontSize: { xs: '11px', sm: '14px', md: '19px' },
                    fontWeight: 400,
                    lineHeight: { xs: '19px', sm: '22px', md: '33px' },
                    px: { xs: '5%', sm: '8%', md: '20%' },
                    mt: { xs: '-10px !important', md: '0px !important' },
                    mb: { xs: '-25px !important', md: '0px !important' },
                  }}
                >
                  {data?.paragraph}
                </Typography>
              </Box>
            </Box>
            <Grid
              container
              sx={{ mx: 'auto' }}
              maxWidth={{ sm: 'auto', md: '1000px', lg: '1270px' }}
              spacing={1}
              className="hrFirmDesktop"
            >
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={4}
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: '20px',
                  }}
                >
                  <Box
                    sx={{
                      width: { md: '311.696px', lg: '401.696px' },
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '20px',
                      background: '#fff',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0.3, 0.2)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 'auto',
                        height: '89.498px',
                        display: 'flex',
                        borderRadius: '20px 20px 0 0 ',
                        background: '#F7F8FB',
                        p: '20px',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component={'img'}
                        src={item?.icon}
                        alt={item?.title}
                        sx={{
                          width: { md: 33, lg: 43 },
                          height: { md: 33, lg: 43 },
                        }}
                      />
                      <Typography
                        component={'h4'}
                        color="secondary"
                        sx={{
                          ml: 2,
                          color: '#001C63',
                          fontSize: {
                            md: '16px !important',
                            lg: '20px !important',
                          },
                          fontWeight: 600,
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: '20px',
                        borderRadius: '0 0 20px 20px',
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{
                          fontSize: {
                            sm: '11px !important',
                            md: '13px !important',
                            lg: '16px !important',
                          },
                          fontWeight: 400,
                          lineHeight: { md: '20px', lg: '23px' },
                        }}
                        color="initial"
                      >
                        {item?.paragraph}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box className="hrFirmResponsive">
              <ServiceExpertiesResponsive
                items={data?.items}
                arrowIconRight={data?.arrowIconRight}
                arrowIconLeft={data?.arrowIconLeft}
                arrowIconCircle={data?.arrowIconCircle}
              />
            </Box>
            <Box
              justifyContent={'center'}
              textAlign="center"
              sx={{ py: { xs: 0.5, md: 2 } }}
            >
              {data?.btnLink && (
                <Link href={data?.btnLink || '#'} target="_blank">
                  <Button
                    sx={{
                      width: { xs: '102.29px', sm: '130px', md: '210px' },
                      height: { xs: '30.24px', md: '60px' },
                      borderRadius: '50px',
                      backgroundColor: '#029894',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 28, 99, 1)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '9.62px', sm: '11px', md: '20px' },
                        fontWeight: 500,
                        lineHeight: { xs: '13.12px', md: '30px' },
                        textAlign: 'center',
                      }}
                    >
                      {data?.btnText}
                    </Typography>
                  </Button>
                </Link>
              )}
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ServiceExperties;
