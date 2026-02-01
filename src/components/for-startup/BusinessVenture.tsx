'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  outerBoxStyle,
  containerGridStyle,
  leftGridStyle,
  titleTypographyStyle,
  listItemBoxStyle,
  listItemIconStyle,
  taskAltIconStyle,
  listItemTypographyStyle,
  imageBoxStyle,
} from '@/constants/solutions/for-business-startup/BusinessVentureConstant';

const BusinessVenture = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  const { listItem, title, image, alt } = data;

  return (
    <Box sx={outerBoxStyle}>
      <Container>
        <Grid container sx={containerGridStyle}>
          <Grid item sm={12} md={6.4}>
            <Box sx={leftGridStyle}>
              <Box>
                <Typography variant="h3" sx={titleTypographyStyle}>
                  {title}
                </Typography>
              </Box>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box sx={listItemBoxStyle}>
                  <ListItemIcon sx={listItemIconStyle}>
                    <TaskAltIcon fontSize="small" sx={taskAltIconStyle} />
                  </ListItemIcon>
                  <Typography
                    sx={listItemTypographyStyle}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={5.6}>
            <Box sx={imageBoxStyle}>
              <Image
                quality="85"
                priority={true}
                src={image}
                width={380}
                height={300}
                alt={alt}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessVenture;
