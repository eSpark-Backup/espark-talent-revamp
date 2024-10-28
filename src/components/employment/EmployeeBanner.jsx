import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const EmployeeBanner = ({ data, handleOpen }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          pt: 4,
          pb: { xs: 2, md: 6, lg: 1 },
          // backgroundColor: '#02989412',
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            maxWidth: '1250px',
            display: 'flex',
            gap: { xs: 3, md: 8, lg: 3 },
            '@media (min-width: 1024px)': {
              justifyContent: 'center',
              alignItems: 'center',
              pl: 6,
            },
            '@media (max-width: 1023px)': {
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '100%',
            },
            '@media (min-width: 600px) and (max-width: 1023px)': {
              px: 6,
              pb: 0,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: '#101828',
              pb: { xs: 0, lg: 5 },
              maxWidth: { md: '400px', lg: '500px', xl: '600px' },
              '@media (min-width: 600px) and (max-width: 1023px)': {
                maxWidth: '550px',
                textAlign: 'center',
                alignItems: 'center',
              },
              '@media (min-width: 280px) and (max-width: 599px)': {
                maxWidth: '100%',
                textAlign: 'center',
                alignItems: 'center',
                px: 4,
              },
            }}
          >
            <Box
              sx={{
                '@media (max-width: 1023px)': {
                  width: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '25px',
                    md: '30px',
                    lg: '36px',
                    xl: '36px',
                  },
                  fontWeight: 600,
                  lineHeight: {
                    xs: 1.2,
                    sm: 1.2,
                    md: 1.2,
                    lg: 1.2,
                    xl: 1.2,
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: data?.subTitle || '',
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: '30px',
                    sm: '30px',
                    md: '35px',
                    lg: '50px',
                    xl: '60px',
                  },
                  fontWeight: 600,
                  lineHeight: {
                    xs: '40px',
                    sm: '42px',
                    md: '52px',
                    lg: '62px',
                    xl: '72px',
                  },
                }}
              >
                {data?.title || ''}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '10px', sm: '14px', md: '15px', lg: '17px' },
                fontWeight: 400,
                color: '#1D2939',
                mt: { xs: 1.3, lg: 1 },
              }}
            >
              {data?.description || ''}
            </Typography>
            <Button
              disableRipple
              onClick={handleOpen}
              sx={{
                width: { xs: '180px', md: '200px', lg: '223px' },
                height: { xs: '44px', md: '46px', lg: '48px' },
                backgroundColor: '#101828',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '20px',
                mt: 2,
                '&:hover': {
                  backgroundColor: '#1c4e72',
                  color: '#fff',
                },
              }}
            >
              {data?.btnTitle || ''}
            </Button>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: {
                xs: '80%',
                md: '45%',
                lg: '95%',
                xl: 'auto',
              },
              '@media (min-width: 600px) and (max-width: 1023px)': {
                maxWidth: '400px',
                mx: 'auto',
              },
            }}
          >
            <Box
              component={'img'}
              src={data?.responsiveImage || ''}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeBanner;
