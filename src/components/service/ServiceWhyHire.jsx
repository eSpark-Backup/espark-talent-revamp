'use client';
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ServiceProcessMobile from './ServiceProcessMobile';
import ServiceProcess from './ServiceProcess';

const ServiceWhyHire = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(1920);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window?.innerWidth);
    };
    window?.addEventListener('resize', handleResize);
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {data && windowWidth > 1023 ? (
        <Box
          sx={{
            pt: 5,
            pb: 6,
            my: 6,
            backgroundColor: '#F7F8FF',
          }}
        >
          <Container>
            <Box py={2}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
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
                }}
                dangerouslySetInnerHTML={{
                  __html: data?.title,
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
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
                }}
              >
                {data?.subTitle}
              </Typography>
            </Box>
          </Container>
          <ServiceProcess data={data} windowWidth={windowWidth} />
        </Box>
      ) : (
        <Container>{data && <ServiceProcessMobile data={data} />}</Container>
      )}
    </>
  );
};

export default ServiceWhyHire;
