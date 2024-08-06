'use client';
import React from 'react';
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

const HomeOffshoreWorks = ({ data }) => {
  const isSmallScreen = useMediaQuery('(max-width:670px)');
  const isXS = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSM = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isMD = useMediaQuery((theme) => theme.breakpoints.only('md'));
  const isLG = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  return (
    <Box
      sx={{
        backgroundColor: '#F7F8FB',
        py: 3,
      }}
    >
      <Container sx={{ p: 1 }}>
        <Box sx={{ pb: { xs: '20px', md: '25px', lg: '30px' } }}>
          <Typography
            variant={'h2'}
            color={'secondary'}
            sx={{
              textAlign: 'center',
              flexWrap: 'wrap',
              fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
            }}
          >
            {data?.title}
          </Typography>
        </Box>
        <Hidden only={['xs', 'sm']}>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                md={isSmallScreen ? 8 : 6}
                lg={4}
                xl={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minwidth: '500px',
                }}
              >
                <Box sx={{ height: isMD ? '50px' : isLG ? '75px' : '75px' }}>
                  {!item?.invert && (
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      width={
                        isXS ? 100 : isSM ? 100 : isMD ? 80 : isLG ? 100 : 100
                      }
                      height={
                        isXS ? 100 : isSM ? 100 : isMD ? 80 : isLG ? 100 : 100
                      }
                      alt={`Experties Icon`}
                      style={{
                        zIndex: 500,
                        position: 'relative',
                        top: !item?.invert && '35px',
                        boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
                        borderRadius: '50px',
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${item?.invert ? data?.bgImageInvert : data?.bgImage})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px',
                    pt: item?.invert ? 2 : 2,
                    pb: item?.invert ? 2 : 2,
                    px: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#fff',
                      minHeight: '200px',
                      boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                      borderRadius: '25px',
                      gap: '7px',
                      pt: item?.invert ? 4 : 8,
                      pb: item?.invert ? 8 : 4,
                      px: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: {
                          xs: '16px',
                          sm: '20px',
                          lg: '28.71px',
                          md: '24.71px',
                        },
                        lineHeight: '26px',
                        fontWeight: 700,
                        textAlign: 'center',
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Divider
                      variant="middle"
                      sx={{
                        width: '80%',
                        color: '#f00',
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: { xs: '12px', sm: '14.95px' },
                        fontWeight: 500,
                        lineHeight: '26.32px',
                        textAlign: 'center',
                        px: 2,
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ height: isMD ? '50px' : isLG ? '75px' : '75px' }}>
                  {item?.invert && (
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      width={isXS ? 100 : isSM ? 100 : isMD ? 80 : 100}
                      height={isXS ? 100 : isSM ? 100 : isMD ? 80 : 100}
                      alt={`Experties Icon`}
                      style={{
                        zIndex: 500,
                        position: 'relative',
                        top: item?.invert && '-65px',
                        boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
                        borderRadius: '50px',
                      }}
                    />
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={8}
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ height: isSM ? '50px' : isMD ? '75px' : '75px' }}>
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    width={isXS ? 80 : isSM ? 80 : isMD ? 100 : 100}
                    height={isXS ? 80 : isSM ? 80 : isMD ? 100 : 100}
                    alt={`Experties Icon`}
                    style={{
                      zIndex: '500',
                      position: 'relative',
                      top: isXS ? '60px' : isSM ? '30px' : '45px',
                      boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
                      borderRadius: '50px',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${data?.bgImage})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px',
                    pt: 2,
                    pb: 2,
                    px: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                      borderRadius: '25px',
                      gap: '7px',
                      pt: 8,
                      pb: 4,
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: {
                          xs: '20px',
                          sm: '28.71px',
                          md: '28.71px',
                          lg: '28.71px',
                        },
                        lineHeight: '26px',
                        fontWeight: 700,
                        textAlign: 'center',
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Divider
                      variant="middle"
                      sx={{
                        width: '90%',
                        color: '#f00',
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: { xs: '12px', sm: '15.95px' },
                        fontWeight: 500,
                        lineHeight: '26.32px',
                        textAlign: 'center',
                        px: 3,
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Hidden>
      </Container>
    </Box>
  );
};

export default HomeOffshoreWorks;
