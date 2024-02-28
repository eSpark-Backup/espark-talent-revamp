'use client';
import React from 'react';

import Image from 'next/image';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Link from 'next/link';

const OutStaffings = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '3%', my: '2%' }}>
        <Container>
          <Box
            sx={{
              pb: '30px',
              px: { md: '20%', sm: '10%', xs: '2%' },
            }}
          >
            <Typography
              color={'secondary'}
              sx={{
                textAlign: 'center',
                flexWrap: 'wrap',
                fontWeight: 600,
                mb: { xs: 1, sm: 0 },
                lineHeight: { sm: '38px', md: '40px', lg: '42.289px' },
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                  md: '25px',
                  lg: '32px',
                },
              }}
            >
              {data?.heading}
            </Typography>
            <Typography
              color={'secondary'}
              sx={{
                textAlign: 'center',
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                fontWeight: 400,
              }}
            >
              {data?.description}
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {data?.items?.map((list, itemIndex) => (
              <Grid item xs={12} sm={5.5} key={itemIndex}>
                <Box
                  sx={{
                    py: '20px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Image
                    quality="85"
                    priority={true}
                    src={list?.listIcon}
                    alt="List Icon"
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '16px',
                        sm: '18px',
                        md: '20px',
                        lg: '25px',
                      },
                      fontWeight: 500,
                    }}
                    color="secondary"
                  >
                    {list?.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#000',
                      fontSize: {
                        xs: '14px',
                        sm: '18px',
                        md: '18px',
                        lg: '18px',
                      },
                    }}
                  >
                    {list?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            item
            xs={12}
            sx={{
              pt: '40px',
              pb: { xs: '20px', md: '0', lg: '0' },
              textAlign: 'center',
            }}
          >
            <Link href={data?.buttonLink} target="_blank">
              <Button
                sx={{
                  backgroundColor: '#001C63',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#029894',
                  },

                  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                  height: '50px',
                  width: '160px',
                  color: '#fff',
                  fontWeight: '700',
                }}
              >
                {data?.buttonText}
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffings;
