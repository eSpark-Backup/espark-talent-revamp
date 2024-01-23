'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Hero = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      <Box
        sx={{
          py: data?.spacing,
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            pt="50px"
            pb="30px"
            container
            spacing={2}
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
              {data?.title && (
                <Typography
                  // variant={data?.titleVariant}
                  lineHeight={1.2}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '24px',
                    md: '30x',
                    lg: '40px',
                    xl: '45px',
                  }}
                  fontWeight={600}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                >
                  {data?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  color={data?.descColor}
                  lineHeight={1.2}
                  fontSize={{
                    xs: '14px',
                    sm: '14px',
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
              )}
              {data?.button && (
                <Box
                  py={{
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: '#fff',
                      display: { xs: 'none', sm: 'flex' },
                      '&:hover': {
                        color:
                          pathName == '/solutions/enterprises'
                            ? '#fff'
                            : '#001C63',
                        backgroundColor: `${
                          pathName == '/solutions/enterprises'
                            ? '#001C63'
                            : '#fff'
                        }`,
                      },

                      py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                      px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                      height: '50px',
                      width: '160px',
                      color: '#001C63',
                      fontWeight: '700',
                    }}
                  >
                    {data.button?.label}
                  </Button>
                </Box>
              )}
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Image
                  src={data?.image}
                  alt={`${data?.imageAlt} - eSpark Talent`}
                  width={data?.imageWidth}
                  height={data?.imageHeight}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
