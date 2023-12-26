import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import TitleParagraph from '../global/titleParagraph';
import { OUTSOURCE_BENEFITS_DATA } from '@/constants/home-page/outsource-benifits';

const OutSourceBenefits = () => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
        <Container>
          <Box sx={{ px: '20%' }}>
            <TitleParagraph
              title={OUTSOURCE_BENEFITS_DATA?.title}
              paragraph={OUTSOURCE_BENEFITS_DATA?.paragraph}
            />
          </Box>
          <Grid container spacing={2}>
            {OUTSOURCE_BENEFITS_DATA.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                lg={4}
                xl={4}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch', // Ensure the cards have equal height
                  justifyContent: 'center',
                  p: '20px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      borderRadius: '20px 20px 0 0 ',
                      background: 'rgba(0, 28, 99, 0.04)',
                      p: '20px',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      height={45}
                      width={45}
                    />
                    <Typography variant="h4" color="secondary" sx={{ ml: 2 }}>
                      {item?.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: '20px', borderRadius: '0 0 20px 20px' }}>
                    <Typography variant="body1" color="initial">
                      {item?.paragraph}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourceBenefits;
