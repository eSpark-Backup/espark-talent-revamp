import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'next/image';

import TitleParagraph from '@/components/global/titleParagraph';

const BenefitsWorks = ({ data }) => {
  return (
    <>
      <Box sx={{ py: ['2.5%', '5%'], overflow: 'hidden' }}>
        <Container>
          <Box sx={{ px: ['5%', '10%', '15%', '20%'], textAlign: 'center' }}>
            <TitleParagraph title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid container spacing={2} gap={'10%'} justifyContent="center">
            {data?.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={4}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  p: ['10px', '20px'],
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: '30px',
                    p: '20px',
                    alignItems: 'center',
                    background: ' #FFF',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    height={45}
                    width={45}
                  />
                  <Typography variant="h4" color="secondary" sx={{ ml: 2 }}>
                    {item?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BenefitsWorks;
