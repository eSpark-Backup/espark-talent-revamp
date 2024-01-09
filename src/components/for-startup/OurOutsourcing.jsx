'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const OurOutsourcing = ({ data }) => {
  const { listItem, heading, subHeading } = data;
  return (
    <Box sx={{ my: 2, pb: '45px' }}>
      <Box sx={{ py: '2%' }}>
        <Typography
          sx={{
            color: '#001C63',
            fontSize: { md: '32px', xs: '20px' },
            fontWeight: 600,
            lineHeight: { lg: '42.289px', xs: '23.289px' },
            textAlign: 'center',
            flexWrap: 'wrap',
            pb: { xs: '7px' },
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: '#001C63',
            textAlign: 'center',
            fontSize: { md: '18px', xs: '11px' },
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
          <Grid item sm={12} md={6}>
            <Box>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: '28px',
                  fontWeight: 500,
                  lineHeight: '41.547px',
                  mr: { lg: '10%', md: '5%' },
                  mb: { md: '15px' },
                  mt: '10px',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '27.863px',
                  textAlign: { xs: 'center', md: 'justify' },
                  fontStyle: 'normal',
                  my: { xs: '25px', md: '22px' },
                  mr: { lg: '10%', md: '5%' },
                }}
              >
                {data.description}
              </Typography>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box sx={{ display: 'flex', textAlign: 'baseline' }}>
                  <ListItemIcon sx={{ minWidth: '30px' }}>
                    <TaskAltIcon fontSize="small" sx={{ color: '#029894' }} />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      mb: 2,
                      color: '#001C63',
                      fontSize: '14px',
                      textAlign: 'justify',
                      fontWeight: 600,
                      lineHeight: '27.23.741px',
                    }}
                  >
                    {item.description}
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
              <Image src={data.image} width={380} height={300} alt={data.alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurOutsourcing;
