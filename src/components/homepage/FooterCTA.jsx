import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';

const FooterCTA = ({ data }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        backgroundColor: '#029894',
        backgroundImage: [
          '',
          '',
          `url(/images/footer-cta-main-bg.png)`,
          `url(/images/footer-cta-main-bg.png)`,
        ],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid
            item
            xs={8.5}
            sx={{ display: 'flex', alignItems: 'center', py: '1%' }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#ECECED',
                  fontSize: { lg: '54px', md: '50px', sm: '20px' },
                  fontWeight: 700,
                  my: 1,
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  color: '#ECECED',
                  fontSize: { lg: '24px', md: '20px', sm: '16px' },
                  fontWeight: 400,
                  lineHeight: ' 36.523px',
                  my: 2,
                }}
              >
                {data?.description}
              </Typography>
              <Link href={data?.buttonLink}>
                <Button
                  sx={{
                    py: '13px',
                    px: '15px',
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: '#fff',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '17px',
                      color: '#09114A',
                    }}
                  >
                    {data?.buttonLabel}
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{ textAlign: isSmallScreen ? 'center' : 'start' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <img
                src={data?.image}
                // width={isSmallScreen ? 300 : 360}
                // height={isSmallScreen ? 290 : 350}
                alt="images"
                style={{
                  marginTop: isSmallScreen ? 0 : '-61px',
                  zIndex: 1000,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterCTA;
