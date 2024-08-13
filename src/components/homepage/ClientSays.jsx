'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import ClientSaysSlider from './ClientSaysSlider';

const ClientSays = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    if (data?.slider) setLoading(false);
  }, [data]);

  return (
    data && (
      <Box
        sx={{
          mt: { xs: 5, sm: 7, md: 9 },
          mb: { xs: '50%', sm: '25%', md: '20%', lg: '13%' },
          backgroundColor: pathName?.includes('book-a-demo-meeting')
            ? '#F7F8FF'
            : '#fff',
          pt: pathName?.includes('book-a-demo-meeting')
            ? { xs: 3, sm: 5, md: 7 }
            : 0,
        }}
      >
        <Container>
          <Box
            sx={{
              mb: { sm: '55px', md: '50px' },
              px: { xs: '2%', sm: '10%', md: '0' },
            }}
          >
            <Typography
              component={'h2'}
              color={'secondary'}
              sx={{
                px: { xs: '5%', md: '7%' },
                fontSize: { xs: '22px', sm: '24px', md: '35px', lg: '43px' },
                mb: 1,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {data?.heading}
            </Typography>
            <Typography
              component={'p'}
              color={'secondary'}
              sx={{
                fontSize: { xs: '11px', sm: '13px', md: '16px', lg: '18px' },
                fontWeight: 500,
                textAlign: 'center',
                px: { xs: '5%', md: '7%' },
              }}
            >
              {data?.subHeading}
            </Typography>
          </Box>
          <Box className="mix-reviews-area">
            <Box className="main-review-area">
              <Box className="reviews-swiper">
                {loading ? (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '300px',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <ClientSaysSlider data={data} />
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default ClientSays;
