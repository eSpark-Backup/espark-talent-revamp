'use client';
import { Grid, Typography, Box, Container } from '@mui/material';
import React from 'react';

const Partnership = ({ partnership }) => {
  const { content, listData } = partnership;
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item md={7}>
            <>
              {content.map((item) => (
                <Box sx={{ my: 2 }}>
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </Box>
              ))}
              {listData.map((item) => (
                <Box>
                  <Typography variant="body1" sx={{ my: 2 }}>
                    {item.listItem}Í
                  </Typography>
                </Box>
              ))}
            </>
          </Grid>
          <Grid item md={5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
