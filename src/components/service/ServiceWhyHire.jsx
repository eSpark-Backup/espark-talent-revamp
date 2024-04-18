'use client';
import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import ServiceProcessMobile from './ServiceProcessMobile';
import ServiceProcess from './ServiceProcess';

const ServiceWhyHire = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  return (
    <>
      {!isSmallScreen ? (
        <Box
          sx={{
            py: 4,
            my: 6,
            backgroundColor: '#F7F8FF',
            backgroundImage: 'url(/images/service/why-hire/bg-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Container>
            <Box py={2}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  textTransform: 'capitalize',
                  fontSize: {
                    xs: '20px',
                    sm: '25px',
                    md: '40px',
                    lg: '48px',
                  },
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: '#001C63',
                }}
                dangerouslySetInnerHTML={{
                  __html: data?.title,
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  textAlign: 'center',
                  fontSize: {
                    xs: '13px',
                    sm: '15px',
                    md: '18px',
                    lg: '23px',
                    xl: '23px',
                  },
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#001C63',
                  px: { xs: '5%', sm: '5%', md: '5%', lg: '12%' },
                }}
              >
                {data?.subTitle}
              </Typography>
            </Box>

            <ServiceProcess data={data} />
            {/* <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}>
            <img src={'/images/service/services/INFOGRAPHICS.png'} alt="" />
          </Box> */}
          </Container>
        </Box>
      ) : (
        <Container>
          <ServiceProcessMobile data={data} />
        </Container>
      )}
    </>
  );
};

export default ServiceWhyHire;
