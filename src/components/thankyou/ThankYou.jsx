'use client';
import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ThankYou = ({ data }) => {
  return (
    <Box
      class="thankyou-content"
      sx={{
        py: '50px',
        backgroundImage: `url(${data?.bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
      }}
    >
      <Container
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
            fontSize: { lg: '35px', md: '35px', sm: '30px' },
            fontWeight: '700',
          }}
          dangerouslySetInnerHTML={{ __html: data?.heading }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { lg: '32px', md: '35px', sm: '30px' },
            fontWeight: '500',
          }}
          dangerouslySetInnerHTML={{ __html: data?.subHeading }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { lg: '32px', md: '35px', sm: '30px' },
            fontWeight: '500',
            pb: '15px',
          }}
          dangerouslySetInnerHTML={{ __html: data?.subTitle }}
        />

        <Typography
          variant="body1"
          sx={{
            fontSize: { lg: '16px', md: '16px', sm: '12px' },
            fontWeight: '400',
            pb: '15px',
            lineHeight: 3,
          }}
          dangerouslySetInnerHTML={{ __html: data?.description }}
          textAlign={'center'}
        />

        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: '32px', md: '35px', sm: '30px' },
            fontWeight: '500',
            pb: '20px',
          }}
        >
          {data?.stepstitle}
        </Typography>

        <Grid
          container
          spacing={2}
          mt={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {data.steps.map((step, index) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={index} px={'3%'}>
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
              <Typography
                variant="h3"
                sx={{
                  fontSize: { lg: '20px', md: '18px', sm: '15px' },
                  fontWeight: '700',
                  pb: '15px',
                  textAlign: 'center',
                }}
              >
                {step.title}
              </Typography>

              {step.items.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    textAlign: 'baseline',
                    alignItems: 'baseline',
                  }}
                >
                  {' '}
                  <ListItemIcon
                    sx={{
                      minWidth: { xs: '15px', md: '22px' },
                      mr: { md: '20px' },
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
                      fontSize: { lg: '13px', md: '13px', sm: '10px' },
                      fontWeight: '400',
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
      </Container>
    </Box>
  );
};

export default ThankYou;
