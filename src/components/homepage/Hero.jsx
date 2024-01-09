'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ESparkButton from '../global/eSparkButton';
import { useTheme } from '@mui/system';

const Hero = ({ data, innerData, color }) => {
  const hero = innerData || data;
  console.log(data.button.label)
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          py: data?.spacing,
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Grid item xs={12} sm={6} sx={{}}>
              {data?.title && (
                <Typography
                  variant={data?.titleVariant}
                  color={data?.titleColor}
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      textAlign: "center",
                      fontSize: "23px !important"
                    },
                  }}
                >
                  {data?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{
                    py: '10px',
                    [theme.breakpoints.down('sm')]: {
                      textAlign: "center",
                    }
                  }}
                >
                  {data?.description}
                </Typography>
              )}
              <Box sx={{
                [theme.breakpoints.down('sm')]: {
                  display: "none"
                }
              }}>
                {/* <ESparkButton
                  title={data.button.label}
                  link={data.button.link}
                  color={data.button.btnColor}
                  size={'180px'}
                /> */}
                <Button sx={{
                  backgroundColor: "#fff", '&:hover': {
                    backgroundColor: '#fff',
                  },
                  height:"50px",
                  width:"160px", color:"#001C63",
                  fontWeight:"700"
                }}>
                  {data.button.label}
                </Button>
              </Box>
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={data?.image}
                  alt={data?.imageAlt}
                  width={data?.imageWidth}
                  height={data?.imageHeight}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
