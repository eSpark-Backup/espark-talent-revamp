'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const OurOutsourcing = ({ data }) => {
  const { listItem, heading, subHeading } = data;

  const outerBoxSx = {
    my: { xs: '40px', md: '60px', lg: '40px' },
  };

  const innerBoxSx = {
    m: { xs: '16px 0 8px 0', lg: '61px 0 75px 0' },
  };

  const headingTypographySx = {
    color: '#001C63',
    fontSize: { md: '32px', xs: '20px' },
    lineHeight: { lg: '42.289px', xs: '33.289px' },
    fontWeight: 600,
    textAlign: 'center',
    flexWrap: 'wrap',
    mx: { xs: '30px', md: '0px' },
    pb: { xs: '7px' },
  };

  const subHeadingTypographySx = {
    color: '#001C63',
    textAlign: 'center',
    fontSize: { md: '18px', xs: '13px' },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: { md: '27.863px', xs: '16.363px' },
    flexWrap: 'wrap',
    px: '35px',
    pb: { md: '10px', xs: '0px' },
  };

  const leftGridBoxSx = {
    px: 1.5,
  };

  const titleTypographySx = {
    color: '#001C63',
    fontSize: { xs: '20px', md: '28px' },
    lineHeight: { xs: '31px', md: '41.547px' },
    fontWeight: 500,
    mb: { md: '15px' },
    mt: '10px',
    textAlign: { xs: 'center', md: 'left' },
  };

  const descriptionTypographySx = {
    color: '#001C63',
    fontWeight: 400,
    fontSize: { xs: '12px', sm: '13px', md: '18px' },
    lineHeight: { xs: '20px', md: '27.863px' },
    textAlign: { xs: 'center', md: 'justify' },
    fontStyle: 'normal',
    my: { xs: '5px', md: '22px' },
    mr: { lg: '4%', md: '3%' },
  };

  const listBoxSx = {
    my: 2.5,
  };

  const listItemBoxSx = {
    display: 'flex',
    textAlign: 'baseline',
    mx: { sm: '20%', md: '0%' },
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
    fontSize: { xs: '11px', md: '14px' },
    lineHeight: { xs: '13.729px', md: '23.741px' },
    textAlign: 'left',
    fontWeight: 600,
  };

  const imageBoxSx = {
    borderRadius: '17.311px',
    backgroundColor: '#3B59980A',
    p: { xs: 2 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={outerBoxSx}>
      <Box sx={innerBoxSx}>
        <Typography variant="h2" sx={headingTypographySx}>
          {heading}
        </Typography>
        <Typography sx={subHeadingTypographySx}>{subHeading}</Typography>
      </Box>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={6.4}>
            <Box sx={leftGridBoxSx}>
              <Typography variant="h3" sx={titleTypographySx}>
                {data?.title}
              </Typography>
              <Typography sx={descriptionTypographySx}>
                {data?.description}
              </Typography>
            </Box>
            <Box sx={listBoxSx}>
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5.6}>
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

export default OurOutsourcing;
