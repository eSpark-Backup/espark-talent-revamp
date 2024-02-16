'use client';
import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ThankYou = ({ data }) => {
  return (
    <Box
      className="thankyou-content"
      sx={{
        py: '50px',
        backgroundImage: `url(${data?.bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            src={data?.logo}
            height={100}
            width={200}
            alt="Thankyou - eSpark Talent"
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '30px', md: '35px' },
              fontWeight: '700',
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{ __html: data?.heading }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: '500',
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{ __html: data?.subHeading }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: '500',
              textAlign: 'center',
              pb: '15px',
            }}
            dangerouslySetInnerHTML={{ __html: data?.subTitle }}
          />

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: '400',
              lineHeight: 2,
              textAlign: 'center',
              px: { xs: '5%', md: '0' },
            }}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: '500',
              textAlign: 'center',
              pt: '20px',
              pb: '20px',
            }}
          >
            {data?.stepstitle}
          </Typography>

          <Grid
            container
            sx={{
              justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            {data.steps.map((step, index) => (
              <Grid item xs={12} sm={4} md={4} lg={4} key={index} py={'20px'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pb: '20px',
                  }}
                >
                  <Image
                    src={step.icon}
                    height={70}
                    width={70}
                    alt="Hiring Steps - eSpark Talent"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '18px', md: '20px' },
                      fontWeight: '700',
                      pb: '15px',
                      textAlign: 'center',
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>

                {step.items.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      px: '10%',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 'unset',
                        mr: { lg: '20px', md: '20px', sm: '20px' },
                      }}
                    >
                      <Image
                        src="/images/how-its-works/white.svg"
                        height={15}
                        width={15}
                        alt="Thankyou Icon - eSpark Talent"
                      />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '12px', md: '13px' },
                        fontWeight: '400',
                        lineHeight: 1.8,
                      }}
                      key={idx}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYou;
