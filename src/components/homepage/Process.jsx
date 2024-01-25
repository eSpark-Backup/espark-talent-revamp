import React from 'react';
import { Box, Typography } from '@mui/material';

const Process = ({ data }) => {
  return (
    <Box
      sx={{
        mx: 'auto',
        maxWidth: { xs: 'auto', md: '1000px', lg: '1100px' },
        py: { sm: 9, md: 10 },
        px: { sm: 5, md: 4, lg: 0 },
        '@media (min-width: 720px) and (max-width: 767px)': {
          px: 2,
          py: 7,
        },
        '@media (min-width: 600px) and (max-width: 719px)': {
          px: 2,
          py: 5,
        },
        '@media (min-width: 280px) and (max-width: 599px)': {
          px: 2,
          py: 5,
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          mb: { xs: 4, lg: 4 },
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
            },
            '@media (min-width: 280px) and (max-width: 359px)': {
              fontSize: '20px !important',
              lineHeight: '27px',
            },
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          component={'p'}
          sx={{
            color: '#001C63',
            fontSize: { sm: '15px !important', md: '18px !important' },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '39.602px',
            '@media (min-width: 600px) and (max-width: 719px)': {
              fontSize: '15px !important',
              lineHeight: '35px',
            },
            '@media (min-width: 360px) and (max-width: 599px)': {
              fontSize: '12px !important',
            },
            '@media (min-width: 280px) and (max-width: 359px)': {
              fontSize: '12px !important',
              lineHeight: '25px',
            },
          }}
        >
          {data?.subTitle}
        </Typography>
      </Box>
      {data?.processes?.map((process, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            py: { sm: 0 },
            px: { sm: 0 },
            '@media (min-width: 720px) and (max-width: 767px)': {
              px: 1,
            },
            '@media (min-width: 600px) and (max-width: 719px)': {
              py: 2,
            },
            '@media (min-width: 360px) and (max-width: 599px)': {
              py: 1.5,
              gap: 2,
            },
            '@media (min-width: 280px) and (max-width: 359px)': {
              flexDirection: 'column',
              alignItems: process?.alignment == 'right' ? 'end' : 'start',
              pb: 2,
            },

            justifyContent: `${
              process?.alignment == 'right' ? 'end' : 'start'
            }`,
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              order: `${process?.alignment == 'right' ? 2 : 1}`,
              '@media (min-width: 280px) and (max-width: 359px)': {
                order: 1,
              },
            }}
          >
            <Box
              component={'img'}
              src={process?.image}
              alt={process?.title}
              sx={{
                width: { sm: 200, lg: 250 },
                height: { sm: 198, lg: 248 },
                '@media (min-width: 720px) and (max-width: 767px)': {
                  width: 150,
                  height: 148,
                },
                '@media (min-width: 600px) and (max-width: 719px)': {
                  width: 110,
                  height: 100,
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  width: '76px',
                  height: '68px',
                },
                '@media (min-width: 280px) and (max-width: 359px)': {
                  width: '100px',
                  height: '100px',
                },
              }}
            />
          </Box>
          <Box
            sx={{
              gap: 1.5,
              width: { sm: '495px', md: '520px', lg: '560px' },
              '@media (min-width: 720px) and (max-width: 767px)': {
                width: '400px',
              },
              '@media (min-width: 600px) and (max-width: 719px)': {
                width: '400px',
                gap: 0.5,
              },
              '@media (min-width: 360px) and (max-width: 599px)': {
                pl: process?.alignment == 'right' ? 1 : 0,
                width: '280px',
                gap: 0.5,
              },
              '@media (min-width: 280px) and (max-width: 359px)': {
                textAlign: 'left',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              order: `${process?.alignment == 'right' ? 1 : 1}`,

              pl: {
                sm: process?.alignment == 'right' ? 5 : 0,
                lg: process?.alignment == 'right' ? 2.3 : 0,
              },
              textAlign: `${process?.alignment == 'right' ? 'right' : 'left'}`,
            }}
          >
            <Typography
              component="h3"
              sx={{
                color: '#001C63',
                fontStyle: 'normal',
                fontWeight: 500,
                '@media (min-width: 600px) and (max-width: 767px)': {
                  fontSize: '16px !important',
                  lineHeight: '25px',
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  fontSize: '12px !important',
                  lineHeight: '20px',
                },
                lineHeight: { sm: '28.621px' },
                fontSize: { md: '25px !important', lg: '28px !important' },
              }}
            >
              {process?.title}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: '#001C63',
                fontSize: { sm: '17px !important' },
                fontStyle: 'normal',
                fontWeight: 400,
                textAlign: 'justify',
                direction:process?.alignment == 'right' ? 'rtl' : 'ltr',
                lineHeight: { sm: '27.363px' },
                '@media (min-width: 500px) and (max-width: 767px)': {
                  fontSize: '13px !important',
                  lineHeight: '20px',
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  fontSize: '11px !important',
                  lineHeight: '15px',
                },
                '@media (min-width: 280px) and (max-width: 359px)': {
                  fontSize: '12px !important',
                  lineHeight: '15px',
                },
              }}
            >
              {process?.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Process;
