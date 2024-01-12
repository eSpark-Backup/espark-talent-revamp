'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import ESparkButton from '../global/eSparkButton';

const Perks = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? index : index);
  };
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{ py: '5%', px: '3%' }}>
      <Container>
        <Box
          sx={{
            borderRadius: '20px',
            mx: 'auto',
            width: { md: '980px', lg: '1250px' },
            // '@media (min-width: 768px) and (max-width: 1023px)': {
            //   width: '90%',
            // },
            background:
              'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
            // py: '3%',
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              p: { lg: '20px', md: '20px', sm: '20px', xs: '20px' },
              alignItems: ' center',
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={5}
              xl={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mx: { lg: '20px', md: '20px' }, py: { sm: '20px' } }}>
                {data?.map((perk, index) => (
                  <Box
                    container
                    key={index}
                    onClick={() => handleCardClick(index)}
                    sx={{
                      // width: { md: 'auto' },
                      // '@media (min-width: 768px) and (max-width: 1023px)': {
                      //   width: '251px',
                      // },
                      // '@media (min-width: 600px) and (max-width: 767px)': {
                      //   width: '100%',
                      // },
                      display: 'flex',
                      gap: '10px',
                      borderRadius: '20px',
                      mb: '20px',
                      py: '20px',
                      px: { xs: '20px', md: '20px' },
                      // mx: { xs: '15px', md: '20px' },
                      background:
                        index === selectedCard
                          ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
                          : '#fff',
                      boxShadow:
                        '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)',
                      flexDirection: 'row',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      component={'img'}
                      src={
                        index === selectedCard ? perk?.activeIcon : perk?.icon
                      }
                      sx={{
                        width: { sm: 24, lg: 38 },
                        height: { sm: 24, lg: 38 },
                      }}
                      alt={perk.title}
                    />
                    <Typography
                      color={index === selectedCard ? '#FFFFFF' : '#001C63'}
                      sx={{
                        flexWrap: 'wrap',
                        pl: '10px',
                        fontWeight: 500,
                        fontSize: {
                          lg: '20px',
                          xl: '20px',
                          sm: '15px',
                          xs: '13px',
                        },
                      }}
                    >
                      {perk?.title}
                    </Typography>
                    <Typography
                      fontSize={'30px'}
                      color={'rgba(224, 221, 221, 0.68)'}
                    >
                      {perk?.sno}
                    </Typography>
                    <Box
                      component={'img'}
                      src={perk?.hoverIcons}
                      sx={{
                        width: {
                          sm: 18,
                          lg: 24,
                        },
                        height: {
                          sm: 18,
                          lg: 24,
                        },
                      }}
                      alt={perk.title}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={7}
              xl={7}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  pt: { lg: '20px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: ' space-between',
                }}
              >
                <Typography
                  color={'#fff'}
                  fontWeight={700}
                  pb={1}
                  textAlign={{
                    lg: 'start',
                    md: 'start',
                    sm: 'center',
                    xs: 'center',
                  }}
                  fontSize={{ lg: '27px', md: '22px', sm: '18px', xs: '18px' }}
                >
                  {data[selectedCard]?.content?.heading}
                </Typography>
                <Typography
                  color={'#fff'}
                  sx={{
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '13px',
                      lg: '16px',
                    },
                    mb: { xs: '10px', md: '30px' },
                    pr: { xs: '2px', md: '15px', lg: '0px' },
                  }}
                >
                  {data[selectedCard]?.content?.paragraph}
                </Typography>
                <Grid container>
                  {data[selectedCard]?.content?.list?.map((item, index) => (
                    <Grid item xs={6} key={index} py={'1%'}>
                      <Box
                        sx={{
                          py: '0',
                          display: `flex`,
                          alignItems: `center`,
                          gap: {
                            xs: '10px',
                            sm: '10px',
                            md: '10px',
                            lg: '20px',
                          },
                        }}
                      >
                        <Image
                          src={`/images/homepage/our-perks/list-icon.svg`}
                          alt="List Icon"
                          height={
                            isSmallScreen
                              ? 12
                              : isMediumScreen
                                ? 12
                                : isLargeScreen
                                  ? 15
                                  : 15
                          }
                          width={
                            isSmallScreen
                              ? 10
                              : isMediumScreen
                                ? 12
                                : isLargeScreen
                                  ? 15
                                  : 15
                          }
                        />
                        <Typography
                          variant="body1"
                          color="#fff"
                          textAlign={`left`}
                          sx={{
                            fontSize: {
                              xs: '10px',
                              sm: '10px',
                              md: '13px',
                              lg: '16px',
                            },
                          }}
                        >
                          {item?.item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                  <Grid
                    item
                    xs={12}
                    display={'flex'}
                    justifyContent={{
                      lg: 'start',
                      md: 'start',
                      sm: 'center',
                      xs: 'center',
                    }}
                  >
                    <Box sx={{ my: 2 }}>
                      <ESparkButton
                        title={data[selectedCard]?.content?.buttonText}
                        link={data[selectedCard]?.content?.buttonLink}
                        color={'secondary'}
                        // size={{sm:'60px', md:'90px', lg:'120px', xl:'120px'}}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Perks;
