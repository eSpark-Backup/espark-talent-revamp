'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const TeamBanner = ({ data }) => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <Box
        sx={{
          py: { xs: 4, sm: 8 },
          px: { xs: 0.5, sm: 0 },
          width: 'auto',
          maxWidth: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, #FFFFFF 15.3%, #5DA19F 70.9%, #036C69 102.02%)',
          position: 'relative',
        }}
      >
        <Box
          component={'img'}
          src={data?.image_3 || ''}
          sx={{
            width: '135px',
            height: '135px',
            display: 'flex',
            position: 'absolute',
            left: { xs: 80, xl: 100 },
            top: 80,
            '@media(min-width:280px) and (max-width:1399px)': {
              display: 'none',
            },
          }}
        />
        <Box
          component={'img'}
          src={data?.image_6 || ''}
          sx={{
            width: 'calc(22vw - 5%)',
            height: '257px',
            display: 'flex',
            position: 'absolute',
            left: { xs: 'calc(320px - 4vw)', xl: 250 },
            top: 320,
            '@media(min-width:280px) and (max-width:1399px)': {
              display: 'none',
            },
          }}
        />
        <Box
          component={'img'}
          src={data?.image_1 || ''}
          sx={{
            width: 'calc(22vw - 8%)',
            display: 'flex',
            position: 'absolute',
            left: 'auto',
            right: { xs: 'calc(270px - 3vw)', xl: 200 },
            top: 320,
            '@media(min-width:280px) and (max-width:1399px)': {
              display: 'none',
            },
          }}
        />
        <Box
          component={'img'}
          src={data?.image_2 || ''}
          sx={{
            width: 'auto',
            display: 'flex',
            position: 'absolute',
            left: 'auto',
            right: { xs: 'calc(180px - 3vw)', xl: 150 },
            top: 160,
            '@media(min-width:280px) and (max-width:1399px)': {
              display: 'none',
            },
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            px: { xs: 0.5, sm: 0.8 },
            gap: 1,
          }}
        >
          <Link href={data?.logoLink || ''}>
            <Box
              component={'img'}
              src={data?.logo || ''}
              sx={{
                width: { xs: '139px', md: '159px' },
                height: { xs: '68px', md: '78px' },
                mb: 2,
              }}
            />
          </Link>
          <Typography
            sx={{
              fontSize: { xs: '18px', sm: '21px', xl: '33px' },
              fontWeight: 600,
              color: 'rgba(49, 51, 55, 1)',
              '@media(min-width:769px) and (max-width: 1399px)': {
                fontSize: '22px',
              },
              '@media(min-width:1400px) and (max-width: 1920px)': {
                fontSize: 'calc(3vw - 100%)',
              },
            }}
          >
            {data?.subTitle || ''}
          </Typography>
          <Typography
            component={'h1'}
            sx={{
              fontSize: { xs: '25px', sm: '30px', xl: '58px' },
              fontWeight: 600,
              color: 'rgba(2, 37, 126, 1)',
              textAlign: 'center',
              lineHeight: 'auto',
              '@media(min-width:769px) and (max-width: 1399px)': {
                fontSize: '39px',
              },
              '@media(min-width:1400px) and (max-width: 1920px)': {
                fontSize: 'calc(3vw - 12%)',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: `${
                isLargeScreen ? data.desktopTitle : data.mobileTitle || ''
              }`,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: '11px', sm: '14px', xl: '21px' },
              px: { xs: '10px', sm: '0px' },
              fontWeight: 400,
              color: 'rgba(21, 22, 23, 1)',
              textAlign: 'center',
              '@media(min-width:578px) and (max-width: 800px)': {
                px: '100px',
              },
              lineHeight: { xs: '23px', sm: 'auto' },
              '@media(min-width:769px) and (max-width: 1399px)': {
                fontSize: '14px',
              },
              '@media(min-width:1400px) and (max-width: 1920px)': {
                fontSize: 'calc(1.2vw - 14%)',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: `${
                isLargeScreen
                  ? data.desktopDescription
                  : data.mobileDescription || ''
              }`,
            }}
          />
          <Link href={data?.btnLink || ''}>
            <Typography
              sx={{
                mt: 2,
                py: { xs: 1, sm: 1.5, md: 2 },
                px: 2.5,
                borderRadius: '50px',
                backgroundColor: 'rgba(0, 28, 99, 1)',
                color: '#fff',
                fontSize: { xs: '16px', sm: '18px', md: '22px' },
                fontWeight: 500,
                lineHeight: '30px',
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: '#029894',
                  boxShadow: 'inset 2px 4px 4px 2px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {data?.btnText || ''}
            </Typography>
          </Link>
        </Box>
        <Box
          component={'img'}
          src={data?.group_img || ''}
          sx={{
            mx: 'auto',
            mt: 3,
            width: { xs: 'auto', md: '50%' },
            height: 'auto',
            display: 'none',
            '@media(min-width:280px) and (max-width:1399px)': {
              display: 'flex',
            },
          }}
        />
        <Box
          sx={{
            width: ' 100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            pt: { xs: 5.5, sm: 6.5 },
          }}
        >
          <Typography
            sx={{ fontSize: '18px', fontWeight: 500, color: '#212123' }}
          >
            {data?.awardTitle || ''}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 0.5, md: 2 },
              flexDirection: { xs: 'row', sm: 'row' },
            }}
          >
            {data?.awardsSection?.map((item, index) => (
              <Box
                key={index}
                alt={item?.alt || ''}
                component={'img'}
                src={item?.image || ''}
                sx={{
                  width: { xs: '80px', sm: '77px', md: 'auto' },
                  height: { xs: '70px', sm: '77px', md: 'auto' },
                  '@media(min-width:280px) and (max-width:319px)': {
                    width: '50px',
                    height: '50px',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
