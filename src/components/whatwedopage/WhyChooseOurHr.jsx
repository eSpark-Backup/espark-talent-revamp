import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

import { DATA } from '@/constants/what-we-do-page/why-choose-hr';

const WhyChooseOurHr = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '32px',
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {DATA.title}
            </Typography>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '18px',
                fontWeight: 400,
                pr: { md: 15 },
                textAlign: { xs: 'center', md: 'justify' },
              }}
            >
              {DATA.paragraph}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'center' },
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: '0px 2px 11.6px 0px rgba(0, 0, 0, 0.30)',
                  padding: 3,
                  borderRadius: '15px',
                  width: { sm: '450px', md: '100%' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <Image
                      src={DATA.card.icon}
                      width={300}
                      height={65}
                      alt={DATA.card.alt}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: '20px',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        lineHeight: '26.4px',
                      }}
                    >
                      {DATA.card.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '23.4px',
                        fontStyle: 'normal',
                      }}
                    >
                      {DATA.card.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: 2,
              }}
            >
              <Image
                src={DATA.card.arrowIcon}
                width={50}
                height={65}
                alt={DATA.card.alt}
                style={{}}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseOurHr;
