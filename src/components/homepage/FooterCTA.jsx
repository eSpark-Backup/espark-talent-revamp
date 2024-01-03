import React from 'react';
import Image from 'next/image';
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
        <Grid container>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#ECECED',
                  fontSize: { lg: '34px', md: '30px', sm: '20px' },
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
            xs={12}
            sm={4}
            sx={{ textAlign: isSmallScreen ? 'center' : 'end' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', lg: 'end' },
              }}
            >
              <Image
                src={data?.image}
                width={isSmallScreen ? 300 : 360}
                height={isSmallScreen ? 290 : 350}
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
