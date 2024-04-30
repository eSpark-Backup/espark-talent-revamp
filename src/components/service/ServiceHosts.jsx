import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/utils/cors';
import { usePathname } from 'next/navigation';

const ServiceHosts = ({ data }) => {
  const pathname = usePathname();
  console.log(pathname, 'pathname');
  const isTetsPath =
    pathname === '/hire-performance-marketers' ||
    pathname === '/hire-react-native-developers';
  return (
    <>
      <Box sx={{ my: 2, mt: { xs: '230px' } }}>
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: 10,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(${data?.bgImage || ''})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              py: { xs: 0, lg: 7 },
            }}
          >
            <Box
              sx={{
                mt: -5.9,
                width: { xs: '90%', lg: '1324px' },
                display: 'flex',
                p: { xs: 2.1, md: 5 },
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
                    lg: '47px',
                  },
                  fontWeight: 600,
                  lineHeight: {
                    xs: '28px',
                    sm: '40px',
                    md: '50px',
                    lg: '65px',
                  },
                  color: '#001C63',
                  maxWidth: isTetsPath ? null : { md: '1000px', lg: '1000px' },
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
              <Link href={`${data?.btnLink || ''}`} target="_blank">
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
                    width: { xs: '123px', sm: '180px', lg: '200.6px' },
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
                  {capitalizeFirstLetter(data?.btnText) || ''}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceHosts;
