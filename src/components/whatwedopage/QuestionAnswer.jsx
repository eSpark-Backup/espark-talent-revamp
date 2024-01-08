import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

import ESparkButton from '../global/eSparkButton';

const QuestionAnswer = ({ data }) => {
  return (
    <Box sx={{ mb: { md: '4%', xs: '10%' } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ order: { md: 1, xs: 2 } }}>
            <Box
              sx={{
                backgroundColor: 'rgba(59, 89, 152, 0.04)',
                borderRadius: '17.311px',
                width: { lg: '564.66px' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                <Image
                  src={'/images/whatwedo/question-answer/QuesAns.png'}
                  width={413}
                  height={200}
                  alt="We make easy for companies to expand their network with eSpark Talent"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ order: { md: 1, xs: 2 } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                mt: { lg: 6, md: 2 },
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
                  ml: { lg: '11px' },
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { md: '18px', xs: '10px' },
                  fontWeight: { xs: 700, sm: 400 },
                  fontStyle: 'normal',
                  lineHeight: { md: '30.4px', xs: '18px' },
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  textAlign: { xs: 'center', sm: 'right' },
                  my: 2,
                  ml: '10px',
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
                  color={'primary'}
                  size={'170px'}
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
