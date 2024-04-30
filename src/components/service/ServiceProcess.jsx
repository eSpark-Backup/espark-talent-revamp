'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { capitalizeFirstLetter } from '@/utils/cors';

const ServiceProcess = ({ data, windowWidth }) => {
  const full_stack = 'full-stack';
  const mern_stack = 'mern-stack';
  const path = usePathname();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            '@media (min-width:1440px)': {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: 7,
            },
            '@media (min-width:1024px) and (max-width: 1439px)': {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mx: 'auto',
              px: 5,
              pt: 7,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              '@media(min-width: 1024px) and (max-width:1439px)': {
                width: '100%',
                ml: 0,
                mx: 0,
                justifyContent: 'space-evenly',
              },
              '@media (min-width:1440px)': {
                justifyContent: 'start',
                gap: 2,
                ml: -3,
                mr: 2,
              },
            }}
          >
            <ProcessCardTop data={data?.processes[0]} />
            <ProcessCardTop
              data={
                windowWidth > 1439 ? data?.processes[2] : data?.processes[1]
              }
            />
            <ProcessCardTop
              data={
                windowWidth > 1439 ? data?.processes[4] : data?.processes[2]
              }
            />
            <Box
              component={'img'}
              src={data?.processes[1]?.vec}
              sx={{
                position: 'absolute',
                top:
                  path?.includes(full_stack) || path?.includes(mern_stack)
                    ? 400
                    : 370,
                left: 420,
                '@media(min-width: 1024px) and (max-width:1439px)': {
                  display: 'none',
                },
              }}
            />
            <Box
              component={'img'}
              src={data?.processes[0]?.vec}
              sx={{
                position: 'absolute',
                top:
                  path?.includes(full_stack) || path?.includes(mern_stack)
                    ? 400
                    : 370,
                left: 100,
                '@media(min-width: 1024px) and (max-width:1439px)': {
                  display: 'none',
                },
              }}
            />
            <Box
              component={'img'}
              src={data?.processes[0]?.vec}
              sx={{
                position: 'absolute',
                top:
                  path?.includes(full_stack) || path?.includes(mern_stack)
                    ? 400
                    : 370,
                left: 510,
                '@media(min-width: 1024px) and (max-width:1439px)': {
                  display: 'none',
                },
              }}
            />
            <Box
              component={'img'}
              src={data?.processes[3]?.vec}
              sx={{
                position: 'absolute',
                top:
                  path?.includes(full_stack) || path?.includes(mern_stack)
                    ? 400
                    : 370,
                right: 320,
                '@media(min-width: 1024px) and (max-width:1439px)': {
                  display: 'none',
                },
              }}
            />
            <Box
              component={'img'}
              src={data?.processes[5]?.vec}
              sx={{
                position: 'absolute',
                top:
                  path?.includes(full_stack) || path?.includes(mern_stack)
                    ? 400
                    : 370,
                right: 200,
                '@media(min-width: 1024px) and (max-width:1439px)': {
                  display: 'none',
                },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            '@media (min-width:1440px)': {
              // width: '1400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: -12,
            },
            '@media (min-width:1024px) and (max-width: 1439px)': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mx: 'auto',
              mt: -12,
              px: 5,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              '@media(min-width: 1024px) and (max-width:1439px)': {
                width: '100%',
                mt: 12,
                mr: 0,
                justifyContent: 'space-evenly',
              },
              '@media (min-width:1440px)': {
                justifyContent: 'flex-end',
                gap: 2,
                mr: 1,
                ml: 6,
              },
            }}
          >
            <ProcessCardBottom
              data={
                windowWidth > 1439 ? data?.processes[1] : data?.processes[3]
              }
            />
            <ProcessCardBottom
              data={
                windowWidth > 1439 ? data?.processes[3] : data?.processes[4]
              }
            />
            <ProcessCardBottom data={data?.processes[5]} />
          </Box>
        </Box>
      </Box>
      {/* </Box > */}
    </>
  );
};

export default ServiceProcess;

const ProcessCardTop = ({ data }) => {
  const full_stack = 'full-stack';
  const mern_stack = 'mern-stack';
  const path = usePathname();

  return (
    <Box
      sx={{
        maxWidth: 'auto',
        px: '15px',
        position: 'relative',
        zIndex: 1,
        '@media (min-width:1440px)': {
          width: '400px',
        },
        '@media (min-width:1024px) and (max-width: 1439px)': {
          width: '330px',
        },
      }}
    >
      <Typography
        sx={{
          color: data?.color,
          fontWeight: 700,
          lineHeight: 'auto',
          fontSize: '20px',
          textAlign: 'center',
          '@media (min-width:1440px)': {
            lineHeight: '64px',
            fontSize: '24px',
          },
        }}
      >
        {capitalizeFirstLetter(data?.title)}
      </Typography>
      <Typography
        sx={{
          color: '#4E4E4E',
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: '15px',
          textAlign: 'center',
          minHeight:
            path?.includes(full_stack) || path?.includes(mern_stack)
              ? '120px'
              : '90px',
          '@media(min-width: 1024px) and (max-width:1439px)': {
            fontSize: '12px',
          },
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
      <Box
        component={'img'}
        src={data?.image}
        sx={{
          margin: '0 auto',
          marginTop: '20px',
          width: 205,
          height: 235,
          '@media(min-width: 1024px) and (max-width:1439px)': { width: 170 },
        }}
      />
    </Box>
  );
};

const ProcessCardBottom = ({ data }) => {
  return (
    <Box
      sx={{
        maxWidth: 'auto',
        px: '15px',
        position: 'relative',
        zIndex: 1,
        '@media (min-width:1440px)': {
          width: '400px',
        },
        '@media (min-width:1024px) and (max-width: 1439px)': {
          width: '330px',
        },
      }}
    >
      <Box
        component={'img'}
        src={data?.image}
        sx={{
          margin: '0 auto',
          marginTop: '20px',
          width: 205,
          height: 235,
          '@media(min-width: 1024px) and (max-width:1439px)': { width: 170 },
        }}
      />
      <Typography
        sx={{
          color: data?.color,
          fontWeight: 700,
          lineHeight: 'auto',
          fontSize: '20px',
          textAlign: 'center',
          mb: 1.5,
          '@media (min-width:1440px)': {
            fontSize: '24px',
            lineHeight: '64px',
            mb: 0,
          },
        }}
      >
        {capitalizeFirstLetter(data?.title)}
      </Typography>
      <Typography
        sx={{
          color: '#4E4E4E',
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: '14px',
          textAlign: 'center',
          '@media(min-width: 1024px) and (max-width:1439px)': {
            fontSize: '12px',
          },
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
    </Box>
  );
};
