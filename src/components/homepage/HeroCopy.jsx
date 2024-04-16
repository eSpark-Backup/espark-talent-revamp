'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const HeroCopy = ({ data }) => {
  const isSmallScreen = useMediaQuery('(max-width:425px)');
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
            pt={{ xs: '28px', lg: '0px' }}
            pb={{ xs: '15px', lg: '0px' }}
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
              sm={data?.leftGrid || 7.1}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              {data?.title && (
                <Typography
                  variant="h1"
                  lineHeight={1.4}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '25px',
                    sm: '25px',
                    md: '35px',
                    lg: '50px',
                    xl: '50px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                  fontWeight={700}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
              )}
              {data?.description && (
                <Typography
                  color={data?.descColor}
                  fontWeight={400}
                  lineHeight={'30px'}
                  fontSize={{
                    xs: '13px',
                    sm: '13px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'justify',
                    xl: 'justify',
                  }}
                >
                  {data?.description}
                </Typography>
              )}
              <Grid container>
                <Grid item xs={14} lg={4}>
                  {data?.button && (
                    <Box
                      sx={{
                        mx: {
                          xs: 'auto',
                          sm: 'unset',
                          justifyContent: { xs: 'center', sm: 'flex-end' },
                        },
                        maxWidth: { xs: '123px', md: '230px', lg: '232px' },
                      }}
                      py={{
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '20px',
                        xl: '20px',
                      }}
                    >
                      <Link href={data.button?.link} target="_blank">
                        <Typography
                          sx={{
                            mt: { xs: 0, md: 1 },
                            py: { xs: 1, sm: 1.5, md: 2.5 },
                            px: 2.5,
                            borderRadius: '50px',
                            backgroundColor: '#029894',
                            color: '#fff',
                            fontSize: { xs: '10px', sm: '10px', md: '22px' },
                            fontWeight: 500,
                            lineHeight: { xs: '14.97px', md: '30px' },
                            textAlign: 'center',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 28, 99, 1)',
                              boxShadow:
                                'inset 2px 4px 4px 2px rgba(0, 0, 0, 0.2)',
                            },
                          }}
                        >
                          {data.button?.label || ''}
                        </Typography>
                      </Link>
                    </Box>
                  )}
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Box
                    gap={{ xs: 2.3, sm: 3, md: 4 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: {
                        xs: 'center',
                        sm: 'left',
                        lg: 'center',
                      },
                      py: {
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '20px',
                        xl: '25px',
                      },
                      mt: { xs: 0, md: 1 },
                      '@media(min-width: 301px) and (max-width: 315px)': {
                        px: '110px !important',
                      },
                      '@media(min-width: 291px) and (max-width: 300px)': {
                        px: '103px !important',
                      },
                      '@media(min-width: 270px) and (max-width: 290px)': {
                        px: '100px !important',
                      },
                    }}
                  >
                    {data.awardsSection.map((item, index) => (
                      <Image
                        key={index}
                        src={item.image}
                        width={index >= data.awardsSection.length - 2 ? 70 : 60}
                        height={
                          index >= data.awardsSection.length - 2 ? 60 : 40
                        }
                        alt={item.alt}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={data?.rightGrid || 4.9}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Image
                  quality="85"
                  priority={true}
                  src={data?.image}
                  width={isSmallScreen ? 243 : data?.imageWidth || 450}
                  alt={`${data?.imageAlt}`}
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

export default HeroCopy;
