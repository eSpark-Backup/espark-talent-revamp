import React from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import Title from '@/components/how-it-work/Title.jsx';
import HRFirmSuccessSlider from '@/components/how-it-work/HRFirmSuccessSlider.jsx';

const HRFirmSuccess = ({ hrFirm }) => {
  const { heading, subHeading, card } = hrFirm;
  return (
    <Box sx={{ my: '4%' }}>
      <Container>
        <Title heading={heading} subHeading={subHeading} />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={1}
          className="hrFirmDesktop"
        >
          {card?.map((item, index) => (
            <Grid item sm={6} key={index} sx={{}}>
              <Grid
                container
                sx={{
                  borderRadius: '13.764px',
                  border: '0.918px solid #E5E5E5',
                  background: '#FFF',
                  width: { lg: '583.614px', md: 'auto' },
                  height: { md: '238.584px', lg: '238.584px' },
                  padding: ' 28.447px 17.435px 35.788px 17.435px',
                  display: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  m: 1,
                }}
                className="HrBox"
              >
                <Grid item md={5} lg={5} sx={{}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      ml: 1,
                    }}
                  >
                    <Image
                      src={item.image}
                      width={200}
                      height={100}
                      alt={`${item?.alt} - eSpark Talent`}
                    />
                  </Box>
                </Grid>
                <Grid item md={7} lg={7} sx={{ px: '15px' }}>
                  <Box
                    sx={{
                      mx: { lg: 1 },
                      height: 'auto',
                      width: 'auto',
                      pt: '10px',
                      pl: '10px',
                    }}
                  >
                    <Typography variant="h4" color="secondary" sx={{}}>
                      {item?.title}
                    </Typography>
                    <Typography
                      className="typoDescription"
                      sx={{
                        color: '#001C63',
                        textAlign: 'justify',
                        fontSize: '16.517px',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: { lg: '27.896px', md: '27.896px' },
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Box className="hrFirmResponsive">
          <HRFirmSuccessSlider card={card} />
        </Box>
      </Container>
    </Box>
  );
};

export default HRFirmSuccess;
