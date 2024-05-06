'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import ESparkButton from '../global/eSparkButton';

const Perks = ({ data, link, target, title, btnTitle }) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const pathName = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isExtraSmallScreen = useMediaQuery('(max-width:310px)');
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? index : index);
  };
  return (
    <>
      {data && (
        <Box
          sx={{
            py:
              pathName === book_a_demo_meeting
                ? '0%'
                : pathName.includes('developers') ||
                    pathName.includes('designers') ||
                    pathName.includes('engineers') ||
                    pathName.includes('marketers') ||
                    pathName.includes('experts')
                  ? '2%'
                  : '5%',
            pb: `${pathName === book_a_demo_meeting ? '3%' : '0%'}`,
            px: '3%',
            pt:
              pathName.includes('developers') ||
              pathName.includes('designers') ||
              pathName.includes('engineers') ||
              pathName.includes('marketers') ||
              pathName.includes('experts')
                ? '30px'
                : '0px',
          }}
        >
          <Container>
            <Box sx={{ mb: 3.5 }}>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  textTransform: 'capitalize',
                  fontSize: {
                    xs: '18px',
                    sm: '24px',
                    md: '35px',
                    lg: '43px',
                  },
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: '#001C63',
                  px: { xs: '2%', md: '7%', lg: '14%' },
                  '@media(min-width: 419px) and (max-width:460px)': {
                    px: '32px',
                  },
                  '@media(min-width: 461px) and (max-width:480px)': {
                    px: '39px',
                  },
                  '@media(min-width: 361px) and (max-width:412px)': {
                    px: '30px',
                  },
                  '@media(min-width: 413px) and (max-width:600px)': {
                    px: '60px',
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: title || '',
                }}
              />
            </Box>
            <Box
              sx={{
                borderRadius: '20px',
                mx: 'auto',
                background:
                  'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
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
                  <Box
                    sx={{
                      mx: { lg: '13.1px', md: '20px' },
                      py: { sm: '20px' },
                    }}
                  >
                    {data?.map((perk, index) => (
                      <Box
                        key={index}
                        onClick={() => handleCardClick(index)}
                        sx={{
                          display: 'flex',
                          gap: '10px',
                          borderRadius: '20px',
                          mb: '20px',
                          py: { xs: '0px', md: '10px', lg: '20px' },
                          px: { xs: '20px', md: '20px' },
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
                          sx={{
                            '@media (max-width: 300px)': {
                              width: '40px',
                            },
                          }}
                        >
                          {index === selectedCard ? (
                            <Image
                              quality="85"
                              priority={true}
                              src={perk?.activeIcon}
                              alt={perk.title}
                              height={38}
                              width={38}
                            />
                          ) : (
                            <Image
                              quality="85"
                              priority={true}
                              src={perk?.icon}
                              alt={perk.title}
                              height={38}
                              width={38}
                            />
                          )}
                        </Box>
                        <Typography
                          variant="h3"
                          color={index === selectedCard ? '#FFFFFF' : '#001C63'}
                          sx={{
                            flexWrap: 'wrap',
                            pl: isExtraSmallScreen ? '3px' : '10px',
                            width: { lg: '260px' },
                            fontWeight: 500,
                            fontSize: {
                              lg: '20px',
                              xl: '20px',
                              sm: '15px',
                              xs: '13px',
                            },
                            '@media(min-width: 551px) and (max-width:768px)': {
                              width: '230px',
                            },
                          }}
                        >
                          {perk?.title}
                        </Typography>
                        <Typography
                          fontSize={isExtraSmallScreen ? '30px' : '60px'}
                          color={'rgba(224, 221, 221, 0.68)'}
                          fontWeight={700}
                        >
                          {perk?.sno}
                        </Typography>
                        <Box
                          component={'img'}
                          src={perk?.hoverIcons}
                          sx={{
                            width: {
                              xs: 16,
                              sm: 18,
                              lg: 24,
                            },
                            height: {
                              sm: 18,
                              lg: 24,
                            },
                            transform: {
                              xs: 'rotate(90deg)',
                              md: 'rotate(0deg)',
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
                      px: { lg: '10px' },
                    }}
                  >
                    <Typography
                      variant="h3"
                      color={'#fff'}
                      fontWeight={700}
                      pb={1}
                      textAlign={{
                        lg: 'start',
                        md: 'start',
                        sm: 'center',
                        xs: 'center',
                      }}
                      fontSize={{
                        lg: `${pathName === book_a_demo_meeting ? '37px' : '27px'}`,
                        md: '22px',
                        sm: '18px',
                        xs: '18px',
                      }}
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
                          lg: `${pathName === book_a_demo_meeting ? '18.3px' : '16px'}`,
                        },
                        mb: { xs: '10px', md: '30px' },
                        pr: {
                          xs: '2px',
                          md: '15px',
                          lg: `${pathName === book_a_demo_meeting ? '7%' : '15%'}`,
                        },
                        textAlign:
                          pathName === book_a_demo_meeting
                            ? { xs: 'center', md: 'justify' }
                            : 'justify',
                      }}
                    >
                      {data[selectedCard]?.content?.paragraph}
                    </Typography>
                    <Grid
                      container
                      columnSpacing={pathName === book_a_demo_meeting ? 3 : 0}
                    >
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
                                lg: `${pathName === book_a_demo_meeting ? '10px' : '20px'}`,
                              },
                            }}
                          >
                            <Image
                              quality="85"
                              priority={true}
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
                                  lg: `${pathName === book_a_demo_meeting ? '17.76px' : '16px'}`,
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
                            title={
                              btnTitle ||
                              data[selectedCard]?.content?.buttonText
                            }
                            size={pathName.includes('qa') ? '200px' : null}
                            link={link}
                            hover={'#fff'}
                            target={target}
                            color={'secondary'}
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
      )}
    </>
  );
};

export default Perks;
