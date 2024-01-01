import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { QUESTION_ANSWER } from '@/constants/what-we-do-page/question-answer';

const QuestionAnswer = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                backgroundColor: 'rgba(59, 89, 152, 0.04)',
                borderRadius: '17.311px',
                width: { lg: '504px' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                <Image
                  src={'/images/whatwedo/question-answer/QuesAns.png'}
                  width={400}
                  height={200}
                  alt="img"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                ml: { sm: '7%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  color: '#09114A',
                  fontSize: { lg: '32px', md: '25px', sm: '22px', xs: '18' },
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: '48px',
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  textAlign: { xs: 'center', sm: 'right' },
                }}
              >
                {QUESTION_ANSWER.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: '18px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '30.4px',
                  justifyContent: { xs: 'center', sm: 'flex-end' },
                  textAlign: { xs: 'center', sm: 'right' },
                  my: 2,
                }}
              >
                {QUESTION_ANSWER.descrioption}
              </Typography>
              <Button
                sx={{
                  background: '#001C63',
                  color: '#fff',
                  borderRadius: '6.448px',
                  alignSelf: { xs: 'center', sm: 'flex-end' },
                  px: '25px',
                  py: '10px',
                  '&:hover': {
                    backgroundColor: '#001C63',
                    color: '#fff',
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: ' #fff',
                    fontSize: '17px',
                    fontWeight: 700,
                    lineHeight: '27px',
                  }}
                >
                  {QUESTION_ANSWER.buttonLable}
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QuestionAnswer;
