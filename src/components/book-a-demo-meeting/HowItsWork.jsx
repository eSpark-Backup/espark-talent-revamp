'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';

const HowItsWork = ({ data }) => {
  const { title, description, cards } = data || {};
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isLessThenMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        my: { xs: 2, sm: 1, lg: 5 },
      }}
    >
      <Container>
        <Typography
          component={'h2'}
          color={'secondary'}
          sx={{
            px: { xs: '5%', md: '7%' },
            fontSize: {
              xs: '22px',
              sm: '24px',
              md: '35px',
              lg: '48px',
            },
            mb: 1,
            fontWeight: 600,
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
        >
          {title}
        </Typography>
        <Typography
          component={'p'}
          color={'secondary'}
          sx={{
            fontSize: {
              xs: '11px',
              sm: '13px',
              md: '16px',
              lg: '19px',
            },
            fontWeight: 400,
            textAlign: 'center',
            px: { xs: '0%', md: '16%' },
            pb: '6px',
          }}
        >
          {description}
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} sx={{ py: '2%' }}>
          {cards?.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                boxShadow={4}
                sx={{
                  borderRadius: item.rightBorder
                    ? { xs: '9px', md: '20px 70px 70px 20px' }
                    : { xs: '9px', md: '70px 20px 20px 70px' },
                  overflow: 'hidden',
                  height: { xs: 'auto', xxl: '631.07px' },
                  backgroundColor: '#F7F8FF',
                }}
              >
                <Box
                  sx={{
                    borderRadius: isLessThenMd && '0px 0px 9px 9px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.image}
                    width={isXsOrSm ? 450 : 750}
                    height={100}
                    alt="dataimage"
                  />
                </Box>
                <Grid
                  container
                  sx={{
                    pl: { xs: '11px', sm: '18px', md: '26px', lg: '40px' },
                    pb: { xs: '20px', md: '40px', lg: '10px' },
                    backgroundColor: '#F7F8FF',
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '11.59px', sm: '14', md: '24px' },
                        lineHeight: {
                          xs: '31.39px',
                          sm: '41.39px',
                          md: '51px',
                          lg: '50px',
                        },
                        pt: { xs: '15px' },
                        color: '#001C63',
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </Grid>
                  {isLessThenMd
                    ? item?.responsiveListItem?.map((list, index) => (
                        <Grid
                          key={index}
                          item
                          xs={
                            index === item.responsiveListItem.length - 1
                              ? 12
                              : 6
                          }
                          md={12}
                          sx={{
                            display: 'flex',
                            py: { xs: '5px', md: '9px', lg: '9px', xxl: '3px' },
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="10px"
                            sx={{
                              fontSize: { xs: '12px', md: '23px' },
                              color: '#001C63',
                              mt: '1px',
                            }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: {
                                xs: '9.56px',
                                sm: '12px',
                                md: '19px',
                                lg: '19.8px',
                              },
                              lineHeight: {
                                xs: '13.15px',
                                sm: '16px',
                                md: '21px',
                                lg: '27.22px',
                              },
                              color: '#029894',
                              ml: { xs: 0.5, md: 1 },
                            }}
                          >
                            {list?.item}
                          </Typography>
                        </Grid>
                      ))
                    : item?.desktopListItem?.map((list, index) => (
                        <Grid
                          key={index}
                          item
                          md={12}
                          sx={{
                            display: 'flex',
                            py: { xs: '5px', md: '9px', lg: '9px', xxl: '3px' },
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="10px"
                            sx={{
                              fontSize: { xs: '12px', md: '23px' },
                              color: '#001C63',
                              mt: '1px',
                            }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: {
                                xs: '9.56px',
                                sm: '12px',
                                md: '19px',
                                lg: '19.8px',
                              },
                              lineHeight: {
                                xs: '13.15px',
                                sm: '16px',
                                md: '21px',
                                lg: '27.22px',
                              },
                              color: '#029894',
                              ml: { xs: 0.5, md: 1 },
                            }}
                          >
                            {list?.item}
                          </Typography>
                        </Grid>
                      ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItsWork;
