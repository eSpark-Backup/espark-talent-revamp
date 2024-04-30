import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Hosts = ({ data }) => {
  return (
    <>
      {data && (
        <Box sx={{ my: 2 }}>
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              mb: { xs: 45, sm: 32, md: 35, lg: 56 },
              '@media(min-width:426px) and (max-width:539px)': {
                mb: 40,
              },
              '@media(min-width:387px) and (max-width:425px)': {
                mb: 40,
              },
              '@media(min-width:320px) and (max-width:386px)': {
                mb: 45,
              },
              '@media(min-width:300px) and (max-width:319px)': {
                mb: 42,
              },
              '@media(min-width:280px) and (max-width:299px)': {
                mb: 42,
              },
            }}
          >
            <Box
              component={'img'}
              sx={{
                display: { xs: 'none', lg: 'flex' },
                width: 'auto',
                height: 'auto',
                left: 0,
                top: 70,
                right: 'auto',
                position: 'absolute',
              }}
              src={`${data?.leftImage || ''}`}
            />
            <Box
              sx={{
                position: 'relative',
                top: 0,
                px: 3,
                maxWidth: {
                  xs: '310px',
                  sm: '490px',
                  md: '700px',
                  lg: '961px',
                },
                height: { xs: 'auto', sm: '400px', md: '565px', lg: '576px' },
              }}
            >
              <Box
                component={'img'}
                sx={{
                  width: 'auto',
                  height: 'auto',
                }}
                src={`${data?.image || ''}`}
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 255, sm: 240, md: 280, lg: 440 },
                '@media(min-width:426px) and (max-width:539px)': {
                  top: 270,
                },
                '@media(min-width:387px) and (max-width:425px)': {
                  top: 230,
                },
                '@media(min-width:320px) and (max-width:386px)': {
                  top: 255,
                },
                '@media(min-width:300px) and (max-width:319px)': {
                  top: 245,
                },
                '@media(min-width:280px) and (max-width:299px)': {
                  top: 241,
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${data?.bgImage || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: { xs: '90%', lg: '1324px' },
                  display: 'flex',
                  p: 5,
                  '@media(min-width:280px) and (max-width:320px)': {
                    p: 3,
                  },
                  justifyContent: 'center',
                  position: 'relative',
                  gap: 1.8,
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  boxShadow: '0px 9px 29.5px 0px #00000030',
                  backgroundColor: 'rgba(246, 241, 241, 0.78)',
                  border: '1px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '18px',
                      sm: '26px',
                      md: '35px',
                      lg: '48px',
                    },
                    fontWeight: 600,
                    lineHeight: {
                      xs: '28px',
                      sm: '40px',
                      md: '50px',
                      lg: '65px',
                    },
                    color: '#001C63',
                    maxWidth: { md: '1000px', lg: '1000px' },
                    letterSpacing: '0em',
                    textAlign: 'center',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${data?.title || ''}`,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: '11px',
                      sm: '15px',
                      md: '19px',
                      lg: '20px',
                    },
                    fontWeight: 500,
                    lineHeight: {
                      xs: '19.5px',
                      sm: '25px',
                      md: '30px',
                      lg: '40px',
                    },
                    color: '#0E1155',
                    textAlign: 'center',
                    maxWidth: '975.45px',
                  }}
                >
                  {data?.descrcipton || ''}
                </Typography>
                <Link href={`${data?.btnLink || ''}`}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: {
                        xs: '12px',
                        sm: '14px',
                        md: '15px',
                        lg: '17.42px',
                      },
                      width: { xs: '150px', sm: '180px', lg: '200.6px' },
                      height: {
                        xs: '30px',
                        sm: '38px',
                        md: '43px',
                        lg: '53.89px',
                      },
                      backgroundColor: '#001C63',
                      borderRadius: '6.42px',
                    }}
                  >
                    {data?.btnText || ''}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Hosts;
