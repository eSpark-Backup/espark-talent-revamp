import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import Link from 'next/link';

const DemoCta = ({ data, link, target }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  return (
    <>
      <Container
        sx={{ pb: { xs: '20px', sm: '20px', md: '30px', lg: '40px' } }}
      >
        <Box
          sx={{
            py: { xs: '22px', sm: '30px', md: '50px', lg: '60px' },
            px: { xs: '5%', sm: '10%', md: '10%', lg: '12%' },
            backgroundColor: '#3f5294',
            color: '#fff',
            borderRadius: '20px',
            justifyContent: 'center',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '20px', sm: '25px', md: '28px', lg: '35px' },
              fontWeight: 700,
              lineHeight: { xs: '44px', sm: '64px' },
              textAlign: 'center',
              pb: '20px',
            }}
          >
            {data?.title}
          </Typography>
          <Link href={link} target={target}>
            <Button
              size={
                isSmallScreen
                  ? 'small'
                  : isMediumScreen
                    ? 'medium'
                    : isLargeScreen
                      ? 'large'
                      : 'medium'
              }
              sx={{
                width: { sm: '170px', md: '207.981px' },
                height: { sm: '50px', md: '54.149px' },
                backgroundColor: 'white',
                '@media (min-width: 300px) and (max-width: 767px)': {
                  width: '130px',
                  height: '40px',
                  fontSize: '20px',
                },
                borderRadius: '6.448px',
                fontSize: '17px',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#fff',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#09114A',
                  fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '19px' },
                  fontWeight: 700,
                }}
              >
                {data?.linkText}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default DemoCta;
