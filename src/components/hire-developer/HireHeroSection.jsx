'use client';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HireHeroSection = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        pt: { xs: '25px', sm: '25px', md: '30px', lg: '30px' },
        backgroundImage: `url(${data?.bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `100%`,
        color: '#fff',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mt: { xs: '15px', sm: '20px', md: '25px', lg: '35px' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Link href={'/'}>
              <Image
                src={data?.logo}
                width={
                  isSmallScreen
                    ? 100
                    : isMediumScreen
                      ? 150
                      : isLargeScreen
                        ? 200
                        : 200
                }
                height={
                  isSmallScreen
                    ? 50
                    : isMediumScreen
                      ? 75
                      : isLargeScreen
                        ? 100
                        : 100
                }
                alt="Thankyou - eSpark Talent"
              />
            </Link>
          </Box>
          <Typography
            variant="h1"
            color="#001C63"
            sx={{
              fontSize: {
                xs: '25px',
                sm: '25px',
                md: '50px',
                lg: '87px',
                xl: '87px',
              },
              fontWeight: 700,
              lineHeight: '1.4',
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />

          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: '13px',
                sm: '15px',
                md: '16px',
                lg: '19px',
                xl: '19px',
              },
              color: '#6A6A6A',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            {data?.descrcipton}
          </Typography>
          <Box justifyContent={'center'} textAlign="center" py={3}>
            <Link href={data?.btnLink}>
              <Button
                variant="contained"
                sx={{
                  width: '210px',
                  height: '60px',
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
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '30px',
                    textAlign: 'center',
                  }}
                >
                  {data?.btnText}
                </Typography>
              </Button>
            </Link>
          </Box>

          <Box justifyContent={'center'} textAlign="center" pt={3}>
            <img src={data?.image} alt={'Hire A Developer Cover Art'} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HireHeroSection;
