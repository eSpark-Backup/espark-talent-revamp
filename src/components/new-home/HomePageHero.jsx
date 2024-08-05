'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { getAnimation, open } from '@/utils';

const HomePageHero = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#fff',
        background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          py: { xs: 3, sm: 4, md: 0 },
          pl: 3,
          '@media (min-width: 1650px) and (max-width: 1920px)': {
            py: 6,
            pl: 6,
          },
          '@media(min-width:1921px)': {
            justifyContent: 'space-between',
            py: 6,
            pl: 16,
          },
          '@media(min-width:1300px) and (max-width:1649px)': { py: 5 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'flex-end',
            py: { xs: 3, sm: 4, md: 6 },
            pl: 3,
            '@media (min-width: 1650px) and (max-width: 1920px)': {
              justifyContent: 'flex-end',
              py: 6,
              pl: 6,
            },
            '@media(min-width:1921px)': {
              justifyContent: 'space-between',
              maxWidth: '100%',
              py: 6,
              pl: 16,
            },
            '@media(min-width:1300px) and (max-width:1649px)': {
              py: 5,
            },
          }}
        >
          <Box
            component={'hr'}
            sx={{ width: { xs: '90%', sm: '62%' }, mt: 4, mb: 1 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '22px', sm: '28px', md: '30px', lg: `42px` },
              fontWeight: 400,
              '@media (min-width: 1650px)': { fontSize: '61px' },
            }}
          >
            {data?.subTitle || '#'}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '27px', sm: '30px', md: '40px' },
              lineHeight: {
                xs: 'calc(1.3 * 27px)',
                sm: 'calc(1.3 * 30px)',
                md: 'calc(1.3 * 32px)',
              },
              fontWeight: 'bold',
              '@media (min-width: 1440px)': {
                fontSize: '49px',
                lineHeight: 'calc(1.3 * 49px)',
              },
              '@media (min-width: 1650px)': {
                fontSize: '55px',
                lineHeight: 'calc(1.3 * 55px)',
              },
            }}
          >
            {data?.title || '#'}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              display: 'inline-block',
              fontSize: {
                xs: '27px',
                sm: '30px',
                md: '40px',
                lg: '49px',
                xl: '55px',
              },
              animation: `${getAnimation()} 1s infinite alternate`,
            }}
            className="typography-animate"
          >
            {data?.animateText || '#'}
          </Typography>

          <Box sx={{ maxWidth: '700px', pr: 2, pt: 1.2 }}>
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '18px', lg: '22px' },
                fontWeight: 300,
                '@media (min-width: 1650px)': { fontSize: '18px' },
                '@media (min-width: 1920px)': { fontSize: '22px' },
              }}
            >
              {data?.description || ''}
            </Typography>
          </Box>
          <Box sx={{ width: 'auto', mt: 2.5 }}>
            <Button
              onClick={() => open(data?.btnLink, '_blank')}
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid #fff',
                color: '#fff',
                fontWeight: 600,
                fontSize: { xs: '18px', sm: '20px' },
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#029894',
                  borderColor: '#029894',
                },
              }}
              disableRipple
            >
              {data?.btnTitle || ''}
            </Button>
          </Box>
          <Box
            component={'img'}
            src={data?.bgImage || ''}
            sx={{
              width: { xs: '46%' },
              height: { xs: 'auto' },
              maxWidth: '726px',
              maxHeight: '639px',
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Box
            component={'img'}
            src={data?.responsiveImage || ''}
            sx={{
              display: { xs: 'flex', md: 'none' },
              mt: 4,
              ml: 'auto',
              mr: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            width: { sm: '500px', md: '726px' },
            height: { sm: '400px', md: '639px' },
            display: { xs: 'none', md: 'flex' },
            background: `url(${data?.bgImage || ''})`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Box
          component={'img'}
          src={data?.responsiveImage || ''}
          sx={{ display: { xs: 'flex', md: 'none' }, mt: 4, ml: 'auto', mr: 0 }}
        />
      </Box>
    </Box>
  );
};

export default HomePageHero;
