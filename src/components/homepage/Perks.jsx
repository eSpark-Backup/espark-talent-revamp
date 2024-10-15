'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import { Button, FormControl, Typography } from '@mui/material';

const perksContent = (content, checked, btnText, btnLink, target) => {
  const { heading, paragraph, list } = content || {};
  return (
    <>
      <Grow in={checked} timeout={{ enter: 450, exit: 450 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 1.5,
            '@media(min-width:1024px)': {
              textAlign: 'left',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '20px', sm: '30px', md: '35px', lg: '37px' },
              fontWeight: 700,
              lineHeight: { xs: '30px', sm: '40px', md: '50px' },
              color: '#FFFFFF',
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '20.84px' },
              fontWeight: 400,
              lineHeight: { xs: '20.85px', sm: '30px', md: '33.16px' },
              color: '#FFFFFF',
            }}
          >
            {paragraph}
          </Typography>
          <Typography
            component={'ul'}
            sx={{
              display: 'grid',
              pl: 0,
              pt: 2,
              listStyle: 'none',
              gap: 2,
              gridTemplateColumns: 'repeat(1, 1fr)',
              '@media(min-width: 1024px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
            }}
          >
            {list?.map((list, listIndex) => (
              <Box
                key={listIndex}
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  gap: 1.2,
                  '@media(min-width: 1024px)': { justifyContent: 'flex-start' },
                }}
              >
                <Box
                  component={'img'}
                  src="/images/homepage/our-perks/list-icon.png"
                  sx={{ width: '14px', height: '14px', mt: '6px' }}
                />
                <Typography
                  component={'li'}
                  sx={{
                    fontSize: {
                      xs: '10px',
                      sm: '13px',
                      md: '15px',
                      lg: '19px',
                    },
                    textAlign: 'left',
                    fontWeight: 400,
                    lineHeight: { xs: '22px', sm: '27.35px' },
                    color: '#FFFFFF',
                  }}
                >
                  {list?.item}
                </Typography>
              </Box>
            ))}
          </Typography>
          {btnText && (
            <Button
              disableRipple
              onClick={() => window?.open(btnLink, target)}
              sx={{
                mt: 1,
                mx: 'auto',
                color: '#fff',
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                  md: '15px',
                  lg: '17.42px',
                },
                width: { xs: '150px', sm: '180px', lg: '200.6px' },
                height: {
                  xs: '30px',
                  sm: '38px',
                  md: '43px',
                  lg: '53.89px',
                },
                backgroundColor: '#001C63',
                borderRadius: '6.42px',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#001C63',
                },
                '@media(min-width: 1024px)': {
                  mx: 0,
                },
              }}
            >
              {btnText}
            </Button>
          )}
        </Box>
      </Grow>
    </>
  );
};

const Perks = ({ data, btnText, btnLink, target }) => {
  const [checked, setChecked] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  const handleChange = (index) => {
    setChecked(false);
    setTimeout(() => {
      setIndex(index);
      setChecked(true);
    }, 150);
  };

  return (
    <>
      {data === null || data?.length === 0 ? null : (
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormControl>
            <Box
              sx={{
                p: { xs: 2, sm: 5 },
                gap: 5,
                width: '95%',
                mx: 'auto',
                maxWidth: '1260px',
                maxHeight: 'auto',
                minHeight: '553px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                background:
                  'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
                '@media(min-width:1024px)': {
                  flexDirection: 'row',
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '100%', lg: '500px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 3.5,
                  '@media(min-width:1024px)': {
                    width: { md: '400px', lg: '500px' },
                  },
                }}
              >
                {data?.map((btn, ind) => (
                  <Button
                    key={ind}
                    disableRipple
                    sx={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '118px',
                      justifyContent: 'space-around',
                      gap: 1.5,
                      background:
                        index == ind
                          ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
                          : '#fff',
                      boxShadow:
                        index == ind
                          ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)'
                          : 'none',
                      borderRadius: '20.59px',
                      transitionProperty: 'background',
                      transitionDelay: '1m',
                      transitionDuration: '1s',
                      '&:hover': {
                        backgroundColor: '#fff',
                        boxShadow:
                          index == ind
                            ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)'
                            : 'none',
                      },
                      '@media(min-width:1024px)': {
                        justifyContent: 'space-between',
                      },
                    }}
                    variant="contained"
                    onClick={() => handleChange(ind)}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        component={'img'}
                        src={index == ind ? btn?.activeIcon : btn?.icon || '/'}
                        sx={{
                          width: { xs: '24px', sm: '32px', lg: 'auto' },
                          height: { xs: '24px', sm: '32px', lg: 'auto' },
                        }}
                      />
                      <Typography
                        sx={{
                          width: '100%',
                          maxWidth: { xs: '135px', sm: '180px', md: '350px' },
                          fontSize: {
                            xs: '15px',
                            sm: '18px',
                            md: '20px',
                            lg: '24px',
                          },
                          fontWeight: 500,
                          lineHeight: {
                            xs: '21.27px',
                            sm: '25px',
                            md: '29px',
                            lg: '33.73px',
                          },
                          color: index == ind ? '#fff' : '#001C63',
                          textAlign: 'left',
                          pr: 0,
                          textWrap: 'wrap',
                          '@media(min-width: 1024px)': {
                            textAlign: 'left',
                            maxWidth: '240px',
                          },
                          '@media(min-width: 280px) and (max-Width:359px)': {
                            maxWidth: '80px',
                            py: 0.5,
                            fontSize: '12px',
                          },
                        }}
                      >
                        {btn?.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '42px',
                            sm: '45px',
                            md: '50px',
                            lg: '67.34px',
                          },
                          fontWeight: 700,
                          color: '#E0DDDDAD',
                        }}
                      >
                        {btn?.sno}
                      </Typography>
                      <Box
                        component={'img'}
                        src={btn?.hoverIcons || '/'}
                        sx={{
                          width: { xs: '18px', sm: '20px', lg: '24px' },
                          height: { xs: '18px', sm: '20px', lg: '24px' },
                        }}
                      />
                    </Box>
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  '@media(min-width:1024px)': {
                    width: 'calc(100% - 500px)',
                  },
                }}
              >
                {perksContent(
                  data[index]?.content,
                  checked,
                  btnText,
                  btnLink,
                  target
                )}
              </Box>
            </Box>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default Perks;
