'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Hero = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      <Box
        sx={{
          py: data?.spacing,
          pt: data?.pt,
          pb: data?.pb,
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            pt={data?.pt2 || '50px'}
            pb={data?.pb2 || '30px'}
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
              sm={data?.leftGrid || 7}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              {data?.title && (
                <Typography
                  lineHeight={1.4}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '24px',
                    md: '30x',
                    lg: '45px',
                    xl: '50px',
                  }}
                  fontWeight={700}
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
                  lineHeight={1.65}
                  fontWeight={500}
                  pr={data?.tpr}
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
                  <Link href={data.button?.link} target="_blank">
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
                  </Link>
                </Box>
              )}
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={data?.rightGrid || 5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Image
                  quality="85"
                  proprity={true}
                  src={data?.image}
                  alt={`${data?.imageAlt} - eSpark Talent`}
                  width={data?.imageWidth || 450}
                  height={data?.imageHeight || 450}
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
