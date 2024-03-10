import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Hosts = ({ data }) => {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
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
              top: 0,
              px: 3,
              maxWidth: '961px',
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
              py: { xs: 3.5, sm: 4, md: 6, lg: 12 },
              top: { xs: -62, md: -80, lg: -90 },
              '@media (min-width: 769px) and (max-width:950px)': {
                top: -150,
              },
              '@media (min-width: 680px) and (max-width:768px)': {
                top: -50,
              },
              '@media (min-width: 650px) and (max-width:679px)': {
                top: -80,
              },
              '@media (min-width: 570px) and (max-width:649px)': {
                top: -120,
              },
              '@media (min-width: 540px) and (max-width:569px)': {
                top: -150,
              },
              '@media (min-width: 500px) and (max-width:539px)': {
                top: -170,
              },
              '@media (min-width: 470px) and (max-width:499px)': {
                top: -180,
              },
              '@media (min-width: 445px) and (max-width:469px)': {
                top: -200,
              },
              '@media (min-width: 426px) and (max-width:444px)': {
                top: -200,
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              backgroundImage: `url(${data?.bgImage || ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: { xs: '90%', lg: '75%' },
                display: 'flex',
                p: 5,
                py: { xs: 5, sm: 10 },
                justifyContent: 'center',
                position: 'relative',
                gap: 1.8,
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '20px',
                // backgroundColor: '#F6F1F1',
                boxShadow: '0 9px  30pc rgba(0,0,0,0.19)',
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
    </>
  );
};

export default Hosts;
