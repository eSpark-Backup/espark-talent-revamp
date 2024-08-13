'use client';
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPathStatus } from '@/utils';

const Hero = ({ data }) => {
  const pathName = usePathname();

  const { isDemo, isHome, isEnterprise, isCrew, isBlogOrStartup } =
    getPathStatus(pathName);

  return (
    <Box
      component="div"
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
        {isDemo && (
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
        )}
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
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: isBlogOrStartup ? { xs: 3.5, sm: 0.5, md: 0 } : 0,
              mb: isBlogOrStartup ? { xs: 0.5, sm: 0.5, md: 2 } : 0,
            }}
          >
            {data?.title && (
              <Typography
                variant="h1"
                lineHeight={1.4}
                color={data?.titleColor}
                fontSize={{ xs: '22px', sm: '25px', md: '35px', lg: '45px' }}
                textAlign={{ xs: 'center', sm: 'left' }}
                fontWeight={700}
              >
                {data?.title}
              </Typography>
            )}
            {data?.description && (
              <Typography
                sx={{ pr: isHome ? { lg: '80px' } : 'undefined' }}
                color={data?.descColor}
                lineHeight={1.65}
                fontWeight={500}
                pr={data?.tpr}
                fontSize={{ xs: '12px', sm: '12px', md: '16px', lg: '18px' }}
                textAlign={{ xs: 'center', sm: 'left' }}
              >
                {data?.description}
              </Typography>
            )}
            {data?.button && (
              <Box
                sx={{
                  mx: { xs: 'auto', sm: 'unset' },
                  py: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
                }}
              >
                {data?.button?.link ? (
                  <Link href={data.button?.link} target="_blank">
                    <Button
                      sx={{
                        backgroundColor: isHome || isDemo ? '#001C63' : '#fff',
                        '&:hover': {
                          color: isEnterprise ? '#fff' : '#fff',
                          backgroundColor: `${isEnterprise ? '#001C63' : '#029894'}`,
                        },
                        py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                        px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                        height: '50px',
                        width: '160px',
                        color: isHome || isDemo ? '#fff' : '#001C63',
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
                      border: isCrew
                        ? '1px solid #fff'
                        : '1px solid transparent',
                      backgroundColor:
                        isHome || isDemo
                          ? '#001C63'
                          : isCrew
                            ? 'transparent'
                            : '#fff',
                      '&:hover': {
                        color: isEnterprise
                          ? '#fff'
                          : isCrew
                            ? '#029894'
                            : '#fff',
                        backgroundColor: `${isEnterprise ? '#001C63' : isCrew ? '#ffffff' : '#029894'}`,
                      },
                      py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                      px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                      height: '50px',
                      width: '160px',
                      color: isHome || isDemo || isCrew ? '#fff' : '#001C63',
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
              sm={data?.rightGrid || 5}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
              }}
            >
              <Box
                component="img"
                quality="85"
                priority
                src={data?.image}
                sx={{
                  width: { xs: '220px', md: '380px', lg: '450px' },
                  height: 'auto',
                }}
                alt={data?.imageAlt}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
