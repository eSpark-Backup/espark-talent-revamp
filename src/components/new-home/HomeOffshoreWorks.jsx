'use client';
import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const HomeOffshoreWorks = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#F7F8FB', py: 8 }}>
      <Box sx={{ pb: 5 }}>
        <Typography
          variant={'h2'}
          color={'secondary'}
          sx={{
            textAlign: 'center',
            flexWrap: 'wrap',
            fontSize: { xs: '22px', sm: '25px', md: '30px', lg: '40px' },
          }}
        >
          {data?.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          flexWrap: 'wrap',
          px: 1.5,
        }}
      >
        {data?.items?.map((eachItem, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              backgroundImage: {
                xs: `url(${data?.bgImage})`,
                md: `url(${eachItem?.invert ? data?.bgImageInvert : data?.bgImage})`,
              },
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
              px: 3,
              py: 2.5,
              backgroundPosition: {
                xs: 'bottom',
                md: eachItem?.invert ? 'top' : 'bottom',
              },
              backgroundSize: '100%',
              borderRadius: '25px',
              my: 3,
              '@media(max-width: 841px)': {
                backgroundImage: `url(${data?.bgImage})`,
              },
            }}
          >
            <Box
              component={'img'}
              src={eachItem?.icon}
              alt={`Experties Icon`}
              sx={{
                zIndex: 3,
                width: { xs: 75, sm: 90, lg: 100 },
                height: 'auto',
                position: 'absolute',
                top: eachItem?.invert ? 'auto' : -30,
                bottom: eachItem?.invert ? -30 : 'auto',
                left: '50%',
                transform: 'translate(-50%)',
                boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
                borderRadius: '100%',
                '@media (min-width: 481px) and (max-width: 841px)': {
                  top: -30,
                  bottom: 'auto',
                },
                '@media (max-width: 480px)': {
                  top: -20,
                  bottom: 'auto',
                },
              }}
            />
            <Box
              sx={{
                position: 'relative',
                backgroundColor: `#fff`,
                zIndex: 1,
                maxWidth: '361px',
                minHeight: { xs: '151px', md: '227px' },
                maxHeight: { xs: 'auto', md: '227px' },
                overflowY: 'auto',
                px: 2,
                pt: { md: eachItem?.invert ? 4.2 : 10 },
                pb: { md: eachItem?.invert ? 7 : 5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                borderRadius: '25px',
                '@media(max-width: 841px)': {
                  minHeight: '161px',
                  pt: 7.5,
                  pb: 3,
                },
              }}
            >
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: {
                    xs: '18px',
                    sm: '20px',
                    lg: '28.71px',
                    md: '24.71px',
                  },
                  lineHeight: '26px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                {eachItem?.title}
              </Typography>
              <Divider
                variant="middle"
                sx={{
                  mt: 1,
                  width: '80%',
                  color: '#f00',
                }}
              />
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { xs: '13px', sm: '14.95px' },
                  fontWeight: 500,
                  lineHeight: '26.32px',
                  textAlign: 'center',
                  px: 1.5,
                }}
              >
                {eachItem?.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeOffshoreWorks;
