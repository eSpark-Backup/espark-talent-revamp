import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';

const FooterCTA = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#029894',
        height: { lg: '357px' },
      }}
    >
      <Container sx={{ px: { xs: '0%', lg: '2%' } }}>
        <Grid container>
          <Grid item sm={7} sx={{}}>
            <Box
              sx={{
                my: { xs: '45px', sm: '0px' },
                mt: { sm: '40px' },
                mx: { xs: '15px', lg: '0px' },
                pl: { lg: '6%' },
                width: { lg: '95%' },
              }}
            >
              <Typography
                sx={{
                  color: '#ECECED',
                  fontSize: { lg: '34px', md: '30px', sm: '20px' },
                  fontWeight: 700,
                  my: 1,
                }}
              >
                {FOOTER_CTA_DATA.title}
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
                {FOOTER_CTA_DATA.description}
              </Typography>
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
                  {FOOTER_CTA_DATA.buttonLabel}
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} sx={{}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', lg: 'start' },
              }}
            >
              <Image
                src={'/images/footer/footerCta.png'}
                width={360}
                height={350}
                alt="images"
                style={{
                  marginTop: '-61px',
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
