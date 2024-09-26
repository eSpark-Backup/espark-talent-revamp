'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const BusinessVenture = ({ data }) => {
  const { listItem } = data;

  const outerBoxSx = {
    my: 2,
    pt: { lg: '45px' },
    pb: { sm: '25px' },
  };

  const containerGridSx = {
    display: 'flex',
    alignItems: 'center',
  };

  const leftGridSx = {
    mr: { xs: '', md: '25px', lg: '35px' },
  };

  const titleTypographySx = {
    color: '#001C63',
    fontSize: { xs: '20px', md: '28px' },
    lineHeight: { xs: '31px', md: '41.547px' },
    fontWeight: 500,
    mr: { lg: '35px', xs: '0' },
    textAlign: { xs: 'center', md: 'left' },
    mb: { xs: '10px', md: '10px', lg: '15px' },
    mx: { xs: '20px', md: '0px' },
  };

  const listItemBoxSx = {
    display: 'flex',
    textAlign: 'baseline',
    '@media (min-width: 700px) and (max-width:768px)': {
      ml: '20%',
    },
    '@media (min-width: 550px) and (max-width:699px)': {
      ml: '20%',
    },
    '@media (min-width: 427px) and (max-width:549px)': {
      ml: '13%',
    },
  };

  const listItemIconSx = {
    minWidth: { xs: '28px', md: '30px' },
  };

  const taskAltIconSx = {
    color: '#029894',
    fontSize: { xs: '15px', md: '22px' },
  };

  const listItemTypographySx = {
    mb: 2,
    color: '#001C63',
    fontSize: { xs: '13px', md: '14px' },
    lineHeight: { xs: '13.729px', md: '23.741px' },
    textAlign: 'justify',
    fontWeight: 600,
    fontStyle: 'normal',
  };

  const imageBoxSx = {
    borderRadius: '17.311px',
    backgroundColor: '#3B59980A',
    mt: { xs: 1, md: 2 },
    pt: 1,
    py: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={outerBoxSx}>
      <Container>
        <Grid container sx={containerGridSx}>
          <Grid item sm={12} md={6.4}>
            <Box sx={leftGridSx}>
              <Box>
                <Typography variant="h3" sx={titleTypographySx}>
                  {data?.title}
                </Typography>
              </Box>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box sx={listItemBoxSx}>
                  <ListItemIcon sx={listItemIconSx}>
                    <TaskAltIcon fontSize="small" sx={taskAltIconSx} />
                  </ListItemIcon>
                  <Typography sx={listItemTypographySx}>
                    {item?.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={5.6}>
            <Box sx={imageBoxSx}>
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

export default BusinessVenture;
