'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';

const PricingWorks = ({ data }) => {
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
              lg: '39px',
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
              lg: '21px',
            },
            fontWeight: 400,
            textAlign: 'center',
            px: { xs: '0%', md: '16%' },
            pb: '6px',
          }}
        >
          {description}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          pl={{ xs: 0, md: '8%', lg: '10%' }}
          pr={{ xs: 0, md: '6%', lg: '10%' }}
          sx={{ py: '2%' }}
        >
          {cards?.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                boxShadow={4}
                sx={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '455px',
                  minHeight: { xs: 'auto', md: '499px' },
                  borderRadius: item.rightBorder
                    ? { xs: '9px', md: '20px 70px 70px 20px' }
                    : { xs: '9px', md: '70px 20px 20px 70px' },
                  overflow: 'hidden',
                  // height: { xs: 'auto', xxl: '631.07px' },
                  backgroundColor: '#F7F8FF',
                  ml: { xs: 'auto', md: index === 0 ? 'auto' : 0 },
                  mr: { xs: 'auto' },
                }}
              >
                <Box
                  sx={{
                    // borderRadius: isLessThenMd && '500px 500px 500px 500px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={!isLessThenMd ? item?.image : item?.image_res}
                    width={isXsOrSm ? 450 : 750}
                    height={100}
                    alt="dataimage"
                  />
                </Box>
                <Grid
                  container
                  sx={{
                    pl: { xs: '11px', sm: '18px', md: '26px', lg: '25px' },
                    pb: { xs: '20px', md: '2px', lg: '20px' },
                    backgroundColor: '#F7F8FF',
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '11.59px', sm: '14', md: '19px' },
                        lineHeight: {
                          xs: '31.39px',
                          sm: '41.39px',
                          md: '43px',
                          lg: '45px',
                        },
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
                              : 12
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
                                md: '13px',
                                lg: '15.69px',
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
                            alignItems: 'start',
                            py: { xs: '5px', md: '5px', lg: '5px', xxl: '2px' },
                          }}
                        >
                          <CheckCircleIcon
                            fontSize="10px"
                            sx={{
                              fontSize: { xs: '12px', md: '16px', lg: '20px' },
                              color: '#001C63',
                              mt: '2px',
                            }}
                          />
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: {
                                xs: '9.56px',
                                sm: '12px',
                                md: '14px',
                                lg: '15.69px',
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

export default PricingWorks;
