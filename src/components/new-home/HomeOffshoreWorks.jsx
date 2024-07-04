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
  return (
    <>
      <Hidden only={['xs', 'sm']}>
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
            <Grid
              container
              sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'center' }}
            >
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  md={6}
                  lg={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${item?.invert ? data?.bgImageInvert : data?.bgImage})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100%',
                    p: 2,
                  }}
                >
                  {!item?.invert && (
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      width={100}
                      height={100}
                      alt={`Experties Icon`}
                      style={{ zIndex: '99999' }}
                    />
                  )}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      height: '200px',
                      boxShadow: '0 4px 4px 2px rgba(0,0,0,.25)',
                      borderRadius: '25px',
                      gap: '7px',
                      mt: !item?.invert && '-30px',
                      mb: item?.invert && '-30px',
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: '28.71px',
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
                        fontSize: '16px',
                        lineHeight: '26px',
                        fontWeight: 500,
                        textAlign: 'center',
                        px: 4,
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                  {item?.invert && (
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      width={100}
                      height={100}
                      alt={`Experties Icon`}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Hidden>
      <Hidden only={['lg', 'xl']}>
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
            <Grid
              container
              sx={{
                py: 2,
                px: 2,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={isSmallScreen ? 10 : 5.8}
                  md={5}
                  lg={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${data?.bgImage})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100%',
                    p: 2,
                  }}
                >
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    width={75}
                    height={75}
                    alt={`Experties Icon`}
                    style={{ zIndex: '99999' }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      height: '150px',
                      boxShadow: '0 4px 4px 2px rgba(0,0,0,.25)',
                      borderRadius: '25px',
                      gap: '7px',
                      mt: '-25px',
                      px: 1.5,
                      minWidth: '100%',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: { xs: '16px', sm: '20px' },
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
                        fontSize: '12px',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        textAlign: 'center',
                        px: { xs: 2, sm: isSmallScreen ? 8 : 3 },
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Hidden>
    </>
  );
};

export default HomeOffshoreWorks;
