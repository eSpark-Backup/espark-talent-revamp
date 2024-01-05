import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

import Image from 'next/image';
// import ParagraphTitle from './ParagraphTitle';

import TitleParagraph from '@/components/global/titleParagraph';
import OutSourceBenefitsSlider from './OutSourceBenefitsSlider';

const SourceBenefits = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
        <Container>
          <Box>
            <ParagraphTitle title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid container spacing={2} className="hrFirmDesktop">
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                lg={4}
                xl={4}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
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
          <Box className="hrFirmResponsive">
            <OutSourceBenefitsSlider items = {data?.items} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SourceBenefits;
