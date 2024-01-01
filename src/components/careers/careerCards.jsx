'use client';
import React from 'react';
import { Box, Container, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
const CareerCards = ({ data }) => {
  return (
    <>
      <Box sx={{ py: '3%' }}>
        <Container>
          {data?.map((item, index) => (
            <Grid
              key={index}
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                borderTop: '.5px solid #000000',
                py: '2%',
              }}
            >
              <Grid item xs={3} px="20px">
                <Typography variant="h3" color="secondary">
                  {item?.heading}
                </Typography>
                <Typography variant="body1">
                  {' '}
                  {`${item?.location[0]}, ${item?.location[1]} `}
                </Typography>
              </Grid>
              <Grid item xs={7} px="20px">
                <Typography variant="h3" color="secondary">
                  {' '}
                  Description
                </Typography>
                <Typography variant="body1">{item?.description}</Typography>
              </Grid>
              <Grid item xs={2} display="flex" alignItems={'center'} justifyContent={'center'} px="20px">
                <Link href={item?.link}>
                  <Button variant="primary" color="secondary">
                    {`Apply Now >`}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default CareerCards;
