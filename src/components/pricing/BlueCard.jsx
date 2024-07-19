'use client';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const BlueCard = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 0, md: 3 },
        '@media (max-width:319px)': {
          pb: 2,
        },
      }}
    >
      <Box sx={{ width: 'auto' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: -9,
            '@media(max-width: 783px)': {
              mb: 0,
            },
          }}
        >
          {data?.heroCards?.map((eachItem, index) => (
            <Box
              key={index}
              sx={{
                width: '90%',
                maxWidth: { xs: '280px', md: '300px', lg: '358px' },
                minHeight: { xs: '160px', sm: '200px', md: '459px' },
                backgroundColor: '#ffffff',
                boxShadow: '0px 4.21px 6.32px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '9px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  position: 'relative',
                  width: '100%',
                  height: { xs: '135px', sm: '171px' },
                  backgroundColor: '#001C63',
                  borderTopRightRadius: '7px',
                  borderTopLeftRadius: '7px',
                  pt: 3,
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    position: 'relative',
                    fontSize: {
                      xs: '17px',
                      sm: '22px',
                      md: '25px',
                      lg: '27px',
                    },
                    fontWeight: 500,
                    color: '#fff',
                    '@media (max-width:319px)': {
                      fontSize: '17px',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: eachItem?.title }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: 2,
                  }}
                >
                  <Button
                    onClick={() =>
                      window?.open(eachItem?.btnLink || '#', '_blank')
                    }
                    disableRipple
                    variant="primary"
                    sx={{
                      width: { xs: '100px', sm: '131px' },
                      height: '31px',
                      backgroundColor: '#fff',
                      borderRadius: '7.04px',
                      p: 1,
                      color: '#001C63',
                      fontSize: { xs: '10.5px', sm: '14px' },
                      fontWeight: 600,
                      '&:hover': {
                        color: '#001C63',
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    {eachItem?.btnText}
                  </Button>
                </Box>
                <Box
                  component={'img'}
                  src={eachItem?.cardImage || ''}
                  sx={{
                    width: {
                      xs: '69px',
                      sm: '70px',
                      md: '70px',
                      lg: '98px',
                    },
                    right: '0px',
                    bottom: '0px',
                    position: 'absolute',
                    mr: 0,
                  }}
                />
              </Box>

              <Box sx={{ py: 2, px: { xs: 1.3, sm: 1.3 }, pr: 0 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '15px',
                      sm: '17px',
                      md: '19px',
                      lg: '21px',
                    },
                    fontWeight: 500,
                    font: 'Gilroy-SemiBold',
                    color: '#001C63',
                    textTransform: 'capitalize',
                    ml: 0.3,
                    mb: 1,
                  }}
                >
                  {eachItem && Object?.keys(eachItem)[5]}
                </Typography>
                <Typography component={'ul'} sx={{ p: 0 }}>
                  {eachItem?.featured?.map((item, index) => (
                    <Typography
                      key={index}
                      component={'li'}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 0.8,
                        mb: 1,
                        alignItems: 'start',
                      }}
                    >
                      <Box
                        component={'img'}
                        src="/images/homepage/hiring-modals/green-tick.svg"
                        sx={{ mt: 0.7 }}
                      />
                      <Typography
                        component={'span'}
                        sx={{
                          fontSize: {
                            xs: '12px',
                            sm: '13px',
                            md: '14px',
                            lg: '15px',
                          },
                          fontWeight: 500,
                          font: 'Mulish',
                          color: '#38383A',
                        }}
                      >
                        {item || ''}
                      </Typography>
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlueCard;
