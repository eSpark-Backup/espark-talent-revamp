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
        <Grid container display={'flex'} alignItems={'center'}>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                mr: { xs: '', md: '25px', lg: '35px' },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: '#001C63',
                    fontSize: { xs: '20px', md: '28px' },
                    lineHeight: { xs: '31px', md: '41.547px' },
                    fontWeight: 500,
                    mr: { lg: '35px', xs: '0' },
                    textAlign: { xs: 'center', md: 'left' },
                    mb: { xs: '10px', md: '10px', lg: '15px' },
                    mx: { xs: '20px', md: '0px' },
                  }}
                >
                  {data?.title}
                </Typography>
              </Box>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    textAlign: 'baseline',
                    '@media (min-width: 700px) and (max-width:768px)': {
                      ml: '30%',
                    },
                    '@media (min-width: 550px) and (max-width:699px)': {
                      ml: '20%',
                    },
                    '@media (min-width: 427px) and (max-width:549px)': {
                      ml: '13%',
                    },
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
                      fontSize: { xs: '13px', md: '14px' },
                      lineHeight: { xs: '13.729px', md: '23.741px' },
                      textAlign: 'justify',
                      fontWeight: 600,
                      fontStyle: 'normal',
                    }}
                  >
                    {item?.description}
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
                mt: { xs: 1, md: 2 },
                pt: 1,
                py: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                quality="85"
                proprity={true}
                src={data?.image}
                width={380}
                height={300}
                alt={`${data?.alt} - eSpark Talent`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessVenture;
