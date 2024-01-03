import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';

import TitleParagraph from '@/components/global/titleParagraph.jsx';

const OurOutsourcing = ({ data }) => {
  const { listItem, heading, subHeading } = data;
  return (
    <Box sx={{ my: 2 }}>
      <TitleParagraph title={heading} paragraph={subHeading} />
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '28px',
                fontWeight: 600,
                lineHeight: '41.547px',
                mr: { lg: '20%', md: '5%' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '27.863px',
                textAlign: { xs: 'center', md: 'justify' },
                my: '20px',
                mr: { lg: '15%', md: '5%' },
              }}
            >
              {data.description}
            </Typography>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      pr: 1,
                    }}
                  >
                    <Image src={item.icon} width={30} height={25} alt="true" />
                  </Box>
                  <Typography
                    sx={{
                      mb: 2,
                      color: '#001C63',
                      fontSize: '14px',
                      textAlign: 'justify',
                      fontWeight: 600,
                      lineHeight: '27.23.741px',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                pt: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={data.image} width={440} height={300} alt={data.alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurOutsourcing;
