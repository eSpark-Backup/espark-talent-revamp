import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

import ESparkButton from '../global/eSparkButton';

const QuestionAnswer = ({ data }) => {
  return (
    <Box sx={{ mb: { md: '4%', xs: '10%' } }}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              order: { md: 2, xs: 2, sm: 2 },
              display: { md: 'flex', lg: 'block' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(59, 89, 152, 0.04)',
                borderRadius: '17.311px',
                // width: { lg: '594.66px' },
                mt: { xs: '40px', md: '0px' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pt: 5,
                }}
              >
                <Image
                  src={'/images/whatwedo/question-answer/QuesAns.png'}
                  width={440}
                  height={200}
                  alt="We make easy for companies to expand their network with eSpark Talent"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              order: { md: 2, xs: 1, sm: 1 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  color: '#09114A',
                  textAlign: { xs: 'center', sm: 'right' },
                  fontSize: { md: '32px', xs: '20px' },
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: { md: '48px', xs: '36px' },
                  ml: { md: '5px', lg: '60px' },
                  px: { xs: '5px', md: '0px' },
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { md: '18px', xs: '10px' },
                  fontWeight: { xs: 700, md: 400 },
                  fontStyle: 'normal',
                  lineHeight: { md: '30.4px', xs: '18px' },
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  textAlign: { xs: 'center', sm: 'right' },
                  my: 1.5,
                  ml: { md: '5px', lg: '85px' },
                  px: { xs: '10px', md: '0px' },
                }}
              >
                {data?.descrioption}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { md: 'end', xs: 'center' },
                }}
              >
                <ESparkButton
                  title={data?.buttonLabel}
                  link={data?.buttonLink}
                  target="_blank"
                  color={'secondary'}
                  size={{ xs: '140px', lg: '190px' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QuestionAnswer;
