import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import TitleParagraph from '../global/titleParagraph';
import { BENEFITS_WORKS_DATA } from '@/constants/home-page/benifits-works';

const BenefitsWorks = () => {
  return (
    <>
      <Box sx={{ py: ['2.5%', '5%'], overflow: 'hidden' }}>
        <Container>
          <Box sx={{ px: ['5%', '10%', '15%', '20%'], textAlign: 'center' }}>
            <TitleParagraph
              title={BENEFITS_WORKS_DATA?.title}
              paragraph={BENEFITS_WORKS_DATA?.paragraph}
            />
          </Box>
          <Grid container spacing={2} gap={'10%'} justifyContent="center">
            {BENEFITS_WORKS_DATA.items.map((item, index) => (
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
