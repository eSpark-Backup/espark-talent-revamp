import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import TitleParagraph from '@/components/global/titleParagraph';

const OutSourcingSolutions = ({ data }) => {
  return (
    <>
      <Box sx={{ py: ['2.5%', '5%'], overflow: 'hidden' }}>
        <Container>
          <Box sx={{ py: '2.5%', textAlign: 'center' }}>
            <TitleParagraph title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid container spacing={2} justifyContent="center">
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
                    // display: 'flex',
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
                    height={item?.iconHeight}
                    width={item?.iconWidth}
                  />
                  <Typography variant="h5" color="secondary" sx={{ pr: '10%' }}>
                    {item?.title}
                  </Typography>
                  <Typography variant="body1">{item?.paragraph}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingSolutions;
