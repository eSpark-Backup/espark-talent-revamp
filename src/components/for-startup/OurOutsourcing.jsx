'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const OurOutsourcing = ({ data }) => {
  const { listItem, heading, subHeading } = data;
  return (
    <Box sx={{ mb: { xs: '26px', md: '40px' } }}>
      <Box sx={{ m: { xs: '16px 0 8px 0', lg: '61px 0 75px 0' } }}>
        <Typography
          variant="h2"
          sx={{
            color: '#001C63',
            fontSize: { md: '32px', xs: '20px' },
            lineHeight: { lg: '42.289px', xs: '33.289px' },
            fontWeight: 600,
            textAlign: 'center',
            flexWrap: 'wrap',
            mx: { xs: '30px', md: '0px' },
            pb: { xs: '7px' },
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: '#001C63',
            textAlign: 'center',
            fontSize: { md: '18px', xs: '13px' },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: { md: '27.863px', xs: '16.363px' },
            flexWrap: 'wrap',
            px: '35px',
            pb: { md: '10px', xs: '0px' },
          }}
        >
          {subHeading}
        </Typography>
      </Box>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={6.4}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: '#001C63',
                  fontSize: { xs: '20px', md: '28px' },
                  lineHeight: { xs: '31px', md: '41.547px' },
                  fontWeight: 500,
                  mb: { md: '15px' },
                  mt: '10px',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontWeight: 400,
                  fontSize: { xs: '12px', sm: '13px', md: '18px' },
                  lineHeight: { xs: '20px', md: '27.863px' },
                  textAlign: { xs: 'center', md: 'justify' },
                  fontStyle: 'normal',
                  my: { xs: '5px', md: '22px' },
                  mr: { lg: '4%', md: '3%' },
                }}
              >
                {data?.description}
              </Typography>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    textAlign: 'baseline',
                    mx: { sm: '20%', md: '0%' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '28px', md: '30px' } }}>
                    <TaskAltIcon
                      fontSize="small"
                      sx={{
                        color: '#029894',
                        fontSize: { xs: '15px', md: '22px' },
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      mb: 2,
                      color: '#001C63',
                      fontSize: { xs: '11px', md: '14px' },
                      lineHeight: { xs: '13.729px', md: '23.741px' },
                      textAlign: 'left',
                      fontWeight: 600,
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5.6}
            sx={{
              display: { md: 'flex', lg: 'block' },
              justifyContent: { md: 'center' },
            }}
          >
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                pt: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                quality="85"
                priority={true}
                src={data?.image}
                width={380}
                height={300}
                alt={`${data?.alt}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurOutsourcing;
