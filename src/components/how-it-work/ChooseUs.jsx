import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

const ChooseUs = ({ chooseUs }) => {
  const { list, image, alt, heading, subHeading } = chooseUs;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={8} sx={{ px: '20px' }}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                sx={{ lineHeight: '56px', fontWeight: 700 }}
              >
                {heading}
              </Typography>
              <Typography variant="body1" color="secondary" sx={{ py: 3 }}>
                {subHeading}
              </Typography>
            </Box>
            <Grid container>
              {list?.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Box
                      sx={{
                        pr: 1,
                      }}
                    >
                      <Image
                        src={item.icon}
                        width={25}
                        height={25}
                        alt="true"
                      />
                    </Box>
                    <Box>
                      <Typography variant="body1" color="secondary">
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#3B59980A',
                borderRadius: '17.311px',
                py: 2,
                px: 2,
              }}
            >
              <Image src={image} width={430} height={25} alt={alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
