'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const InnerHero = ({ data, innerData }) => {
  const wikiString = JSON.stringify(innerData);
  const parsedWiki = JSON.parse(wikiString);
  return (
    <>
      {/* <Box
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
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              pt: { sm: '10%', xs: '10%', md: '5%', lg: '3%' },
              pb: { sm: '10%', xs: '10%', md: '5%', lg: '3%' },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={7}
              md={7}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: { sm: 'left', xs: 'center', md: 'left', lg: 'left' },
              }}
            >
              {data?.title && (
                <Typography
                  // variant={data?.titleVariant}
                  color={data?.titleColor}
                  sx={{
                    fontSize: {
                      xs: '23px',
                      sm: '23px',
                      md: '25px',
                      lg: '30px',
                      xl: '45px',
                    },
                    fontWeight: 600,
                  }}
                >
                  {parsedWiki?.title}
                </Typography>
              )}
              {parsedWiki?.shortDescription && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{
                    py: '10px',
                    fontSize: {
                      xs: '13px',
                      sm: '13px',
                      md: '15px',
                      lg: '20px',
                      xl: '20px',
                    },
                  }}
                >
                  {parsedWiki?.shortDescription}
                </Typography>
              )}
              {data?.button && (
                <Button
                  variant="secondary"
                  href={data?.button?.link}
                  sx={{
                    py: '10px',
                    px: '30px',
                    backgroundColor: '#029894',
                    '&:hover': {
                      backgroundColor: '#029894',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold', fontSize: '17px' }}
                  >
                    {data?.button?.label}
                  </Typography>
                </Button>
              )}
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={6}
                lg={5}
                md={5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Image
                  src={parsedWiki?.heroImage}
                  alt={`${parsedWiki?.title} - eSpark Talent`}
                  width={data?.imageWidth}
                  height={data?.imageHeight}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box> */}
      <Box
        sx={{
          py: data?.spacing,
          pt: data?.pt,
          pb: 0,
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            pt={data?.pt2 || '50px'}
            pb={'0'}
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
                  // variant={data?.titleVariant}
                  lineHeight={1.3}
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
                  {parsedWiki?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  color={data?.descColor}
                  lineHeight={1.5}
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
                  {parsedWiki?.shortDescription}
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
                    herf="/book-a-demo"
                    target="_blank"
                    sx={{
                      backgroundColor: '#fff',
                      display: { xs: 'none', sm: 'flex' },
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#fff',
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
                sm={data?.rightGrid || 5}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Image
                  src={parsedWiki?.heroImage}
                  alt={`${parsedWiki?.title} - eSpark Talent`}
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

export default InnerHero;
