'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NewHero = ({ data }) => {
  const pathName = usePathname();

  return (
    <>
      <Box
        component={'div'}
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
          {pathName == '/demo' ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
          ) : null}
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
              sm={8}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: pathName?.includes('/blogs')
                  ? { xs: 3.5, sm: 0.5, md: 0 }
                  : 0,
                mb:
                  pathName?.includes('/blogs') ||
                  pathName?.includes('/business-startup')
                    ? { xs: 0.5, sm: 0.5, md: 2 }
                    : 0,
              }}
            >
              {data?.subTitle && (
                <Typography
                  variant="h1"
                  lineHeight={1.4}
                  color={'#000'}
                  fontSize={{
                    xs: '22px',
                    sm: '25px',
                    md: '30px',
                    lg: '36px',
                    xl: '36px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                  fontWeight={600}
                  dangerouslySetInnerHTML={{
                    __html: data?.subTitle || '',
                  }}
                />
              )}
              {data?.title && (
                <Typography
                  variant="h1"
                  lineHeight={1.4}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '25px',
                    md: '35px',
                    lg: '45px',
                    xl: '45px',
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
              )}
              {data?.description && (
                <Typography
                  sx={{
                    pr: pathName === '/' ? { lg: '80px' } : 'undefined',
                  }}
                  color={data?.descColor}
                  lineHeight={1.65}
                  fontWeight={500}
                  pr={data?.tpr}
                  fontSize={{
                    xs: '12px',
                    sm: '12px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
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
                  sx={{
                    mx: {
                      xs: 'auto',
                      sm: 'unset',
                      justifyContent: { xs: 'center', sm: 'flex-end' },
                    },
                  }}
                  py={{
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                  }}
                >
                  {data?.button?.link ? (
                    <Link href={data.button?.link} target="_blank">
                      <Button
                        sx={{
                          backgroundColor:
                            pathName == '/' || pathName == '/demo'
                              ? '#001C63'
                              : '#fff',

                          '&:hover': {
                            color:
                              pathName == '/solutions/enterprises'
                                ? '#fff'
                                : '#fff',
                            backgroundColor: `${
                              pathName == '/solutions/enterprises'
                                ? '#001C63'
                                : '#029894'
                            }`,
                          },

                          py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                          px: {
                            xs: '10px',
                            sm: '10px',
                            md: '12px',
                            lg: '15px',
                          },
                          height: '50px',
                          width: '160px',
                          color:
                            pathName == '/' || pathName == '/demo'
                              ? '#fff'
                              : '#001C63',
                          fontWeight: '700',
                        }}
                      >
                        {data.button?.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={data?.button?.handleClick}
                      sx={{
                        border:
                          pathName == '/join-espark-crew'
                            ? '1px solid #fff'
                            : '1px solid transparent',
                        backgroundColor:
                          pathName == '/' || pathName == '/demo'
                            ? '#001C63'
                            : pathName == '/join-espark-crew'
                              ? 'transparent'
                              : '#fff',

                        '&:hover': {
                          color:
                            pathName == '/solutions/enterprises'
                              ? '#fff'
                              : pathName == '/join-espark-crew'
                                ? '#029894'
                                : '#fff',
                          backgroundColor: `${
                            pathName == '/solutions/enterprises'
                              ? '#001C63'
                              : pathName == '/join-espark-crew'
                                ? '#ffffff'
                                : '#029894'
                          }`,
                        },

                        py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                        px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                        height: '50px',
                        width: '160px',
                        color:
                          pathName == '/' ||
                          pathName == '/demo' ||
                          pathName == '/join-espark-crew'
                            ? '#fff'
                            : '#001C63',
                        fontWeight: '700',
                      }}
                    >
                      {data.button?.label}
                    </Button>
                  )}
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
                <Box
                  component={'img'}
                  quality="85"
                  priority={true}
                  src={data?.image}
                  sx={{
                    width: { xs: '220px', md: '380px', lg: '450px' },
                    height: 'auto',
                  }}
                  alt={`${data?.imageAlt}`}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewHero;
