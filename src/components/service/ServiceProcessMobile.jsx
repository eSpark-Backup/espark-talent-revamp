import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceProcessMobile = ({ data }) => {
  return (
    <Box
      sx={{
        mx: 'auto',
        maxWidth: { xs: 'auto', md: '1000px', lg: '1100px' },
        pt: { sm: 9, md: 10 },
        px: { sm: 5, md: 4, lg: 0 },
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
      }}
    >
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
            },
            '@media (min-width: 280px) and (max-width: 359px)': {
              fontSize: '20px !important',
              lineHeight: '27px',
            },
            px: { xs: '13px' },
          }}
          dangerouslySetInnerHTML={{ __html: data?.title }}
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
      {data?.responsiveProcesses?.map((process, index) => (
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
              // justifyContent: `${process?.alignment == 'right' ? 'space-between' : 'space-between'
              //   }`,
            },
            '@media (min-width: 280px) and (max-width: 359px)': {
              flexDirection: 'column',
              alignItems: process?.alignment == 'right' ? 'end' : 'start',
              pb: 2,
            },

            justifyContent: `${
              process?.alignment == 'right' ? 'center' : 'center'
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
                  width: '100%',
                  height: '100%',
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
                pr: process?.alignment == 'left' ? 0.5 : 0,
                width:'100%',
                gap: 0,
              },
              '@media (min-width: 280px) and (max-width: 359px)': {
                width:'100%',
                textAlign: 'left',
                gap: 0,
              },
              '@media (min-width: 280px) and (max-width: 291px)': {
                height: '95.15px',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#F7F8FF',
              order: `${process?.alignment == 'right' ? 1 : 1}`,
              px: 1,
              py: 1,
              pl: {
                sm: process?.alignment == 'right' ? 1 : 1,
                lg: process?.alignment == 'right' ? 2.3 : 0.5,
              },
              textAlign: `${process?.textAlignment == 'right' ? 'right' : 'left'}`,
              backgroundColor: '#F7F8FF',
              height: '85.15px',
              py: '10px',
            }}
          >
            <Typography
              sx={{
                color: process?.color,
                fontStyle: 'normal',
                fontWeight: 700,
                '@media (min-width: 600px) and (max-width: 767px)': {
                  fontSize: '16px !important',
                  lineHeight: '25px',
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  fontSize: '18px !important',
                  lineHeight: '20px',
                  fontWeight: 700,
                },
                lineHeight: { sm: '28.621px' },
                fontSize: { md: '25px !important', lg: '28px !important' },
              }}
              dangerouslySetInnerHTML={{ __html: process?.title }}
            ></Typography>
            <Typography
              component="Box"
              sx={{
                color: '#4E4E4E',
                fontSize: { sm: '17px !important' },
                fontStyle: 'normal',
                fontWeight: 400,
                direction: process?.alignment == 'right' ? 'rtl' : 'ltr',
                lineHeight: { sm: '27.363px' },
                display: 'inline',
                '@media (min-width: 426px) and (max-width: 767px)': {
                  fontSize: '12px !important',
                  lineHeight: '20px',
                },
                '@media (min-width: 360px) and (max-width: 599px)': {
                  fontSize: '11px !important',
                  lineHeight: '16px',
                },
                '@media (min-width: 280px) and (max-width: 359px)': {
                  fontSize: '12px !important',
                  lineHeight: '15px',
                },
              }}
            >
              <p
                style={{
                  direction: 'ltr',
                  display: 'inline',
                  unicodeBidi: 'isolate-override',
                }}
                dangerouslySetInnerHTML={{ __html: process?.text }}
              />
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceProcessMobile;
