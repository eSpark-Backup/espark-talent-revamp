'use client';
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ServiceProcessMobile from './ServiceProcessMobile';
import ServiceProcess from './ServiceProcess';
import { capitalizeFirstLetter } from '@/utils/cors';

const ServiceWhyHire = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    updateWindowWidth();
    const handleResize = () => {
      setWindowWidth(window?.innerWidth);
    };
    window?.addEventListener('resize', handleResize);
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  const desktopStyle = {
    pt: 5,
    pb: 6,
    my: 6,
    backgroundColor: '#F7F8FF',
  };

  const mobileStyle = {
    mx: 'auto',
    maxWidth: { xs: 'auto', md: '1000px', lg: '1100px' },
    pt: { sm: 9, md: 10 },
    px: { sm: 5, md: 4, lg: 0 },
    display: 'none',
    '@media (max-width:1023px)': {
      display: 'flex',
    },
    '@media (min-width: 720px) and (max-width: 767px)': {
      px: 2,
      py: 7,
    },
    '@media (min-width: 600px) and (max-width: 719px)': {
      px: 2,
      pt: 5,
    },
    '@media (min-width: 280px) and (max-width: 599px)': {
      pt: 4,
    },
  };

  const titleStyle = {
    fontSize: {
      xs: '20px',
      sm: '25px',
      md: '40px',
      lg: '48px',
    },
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#001C63',
    '@media (min-width:1024px) and (max-width: 1439px)': {
      fontSize: '35px',
    },
  };

  const subTitleStyle = {
    mt: 1.5,
    textAlign: 'center',
    fontSize: {
      xs: '13px',
      sm: '15px',
      md: '18px',
      lg: '21px',
      xl: '21px',
    },
    '@media (min-width:1024px) and (max-width: 1439px)': {
      fontSize: '19px',
      lineHeight: 1.6,
    },
    fontWeight: 400,
    lineHeight: 1.7,
    color: '#001C63',
    px: { xs: '5%', sm: '5%', md: '5%', lg: '12%' },
  };

  return (
    <>
      {data && windowWidth > 1023 ? (
        <Box sx={desktopStyle}>
          <Container>
            <Box py={2}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={titleStyle}
                dangerouslySetInnerHTML={{
                  __html: data?.title,
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                sx={subTitleStyle}
              >
                {data?.subTitle}
              </Typography>
            </Box>
          </Container>
          <ServiceProcess data={data} windowWidth={windowWidth} />
        </Box>
      ) : windowWidth === undefined || windowWidth === 0 ? (
        <>
          <Box sx={mobileStyle}>
            <Box
              sx={{
                width: '100%',
                textAlign: 'center',
                mb: { xs: 6, lg: 4 },
                '@media (min-width: 600px) and (max-width: 719px)': {
                  mb: 2,
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  mb: 1,
                },
              }}
            >
              <Typography
                component={'h2'}
                sx={{
                  color: '#001C63',
                  fontSize: { sm: '28px !important', md: '32px !important' },
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: { sm: '35px', md: '40.106px' },
                  '@media (min-width: 600px) and (max-width: 767px)': {
                    fontSize: '23px !important',
                    lineHeight: '35px',
                  },
                  '@media (min-width: 360px) and (max-width: 599px)': {
                    fontSize: '23px !important',
                    lineHeight: '22px',
                    px: '10%',
                  },
                  '@media (min-width: 280px) and (max-width: 359px)': {
                    fontSize: '20px !important',
                    lineHeight: '27px',
                  },
                  px: { xs: '13px' },
                }}
                dangerouslySetInnerHTML={{
                  __html: capitalizeFirstLetter(data?.title),
                }}
              />
              <Typography
                component={'p'}
                sx={{
                  color: '#001C63',
                  fontSize: {
                    xs: '11px',
                    sm: '15px !important',
                    md: '18px !important',
                  },
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: { xs: '19px', md: '39.602px' },
                  pt: { xs: '12px', md: '0px' },
                  '@media (min-width: 600px) and (max-width: 719px)': {
                    fontSize: '15px !important',
                    lineHeight: '20px',
                  },
                  '@media (min-width: 360px) and (max-width: 599px)': {
                    fontSize: '11px !important',
                  },
                  '@media (min-width: 280px) and (max-width: 359px)': {
                    fontSize: '12px !important',
                  },
                }}
              >
                {data?.subTitle}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Container>{data && <ServiceProcessMobile data={data} />}</Container>
      )}
    </>
  );
};

export default ServiceWhyHire;
