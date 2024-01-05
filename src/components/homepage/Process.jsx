import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

import ParagraphTitle from './ParagraphTitle';

const Process = ({ data }) => {
  return (
    <>
      <Box sx={{ py: '4%' }}>
        <Container maxWidth="lg">
          <ParagraphTitle title={data?.title} paragraph={data?.subTitle} />
          {data?.processes?.map((process, index) => (
            <Grid
              key={index}
              container
              alignItems="center"
              spacing={2}
              sx={{
                flexDirection: process?.isReverse ? 'row-reverse' : 'row',
              }}
            >
              {process?.alignment === 'left' && (
                <Grid item xs={3} sm={3} lg={2} md={3}>
                  <Image
                    src={process?.image}
                    height={250}
                    width={250}
                    alt={process?.title}
                  />
                </Grid>
              )}
              <Grid
                item
                xs={9}
                sm={9}
                lg={10}
                sx={{
                  p: { lg: '20px' },
                  textAlign: process?.alignment === 'right' ? 'right' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* <Typography
                  variant="h2"
                  color="secondary"
                  sx={{
                    pb: '20px',
                    fontSize: { xs: '17px', sm: '18px', md: '32px' },
                  }}
                >
                  {process?.title}
                </Typography> */}
                {/* <Typography
                  variant="body1"
                  color="secondary"
                  sx={{ fontSize: { xs: '17px', sm: '18px', md: '25px' }, pb: '20px', width:{lg:'700px'} }}
                >
                  {process?.text}
                </Typography> */}
                {process?.alignment === 'left' && (
                  <>
                    <Typography
                      variant="h2"
                      color="secondary"
                      sx={{
                        pb: '20px',
                        fontSize: { xs: '17px', sm: '18px', md: '32px' },
                      }}
                    >
                      {process?.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="secondary"
                      sx={{
                        fontSize: { xs: '17px', sm: '18px', md: '25px' },
                        pb: '20px',
                        width: { lg: '700px' },
                        display: 'flex',
                        mr: { lg: '35%', sm: '20%' },
                      }}
                    >
                      {process?.text}
                    </Typography>
                  </>
                )}
                {process?.alignment === 'right' && (
                  <>
                    <Typography
                      variant="h2"
                      color="secondary"
                      sx={{
                        pb: '20px',
                        fontSize: { xs: '17px', sm: '18px', md: '32px' },
                        display: 'flex',
                        justifyContent: 'flex-end',
                        textAlign: 'right',
                        alignItems: 'right',
                        alignContent: 'right',
                      }}
                    >
                      {process?.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="secondary"
                      sx={{
                        fontSize: { xs: '17px', sm: '18px', md: '25px' },
                        pb: '20px',
                        width: { xs: 'auto', lg: '700px' },
                        display: 'flex',
                        justifyContent: 'flex-end',
                        textAlign: 'right',
                        alignItems: 'right',
                        alignContent: 'right',
                        ml: { lg: '39%', sm: '20%' },
                      }}
                    >
                      {process?.text}
                    </Typography>
                  </>
                )}
              </Grid>
              {process?.alignment === 'right' && (
                <Grid
                  item
                  xs={3}
                  sm={3}
                  lg={2}
                  md={3}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Image
                    src={process?.image}
                    height={250}
                    width={250}
                    alt={process?.title}
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Process;
