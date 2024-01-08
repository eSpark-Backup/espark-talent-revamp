'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const BusinessVenture = ({ data }) => {
  const { listItem } = data;
  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                mt: { md: '52px', lg: '72px' },
                pb: '12px',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: '#001C63',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '41.547px',
                    mr: { lg: '20%', md: '5%' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
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
                      fontSize: '14.838px',
                      textAlign: 'justify',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      lineHeight: '23.741px',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                mt: 2,
                pt: 1,
                py: 3,
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

export default BusinessVenture;
