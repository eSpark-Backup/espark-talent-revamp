import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { open } from '@/utils';

const HomePageHiringModal = ({ data }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 0, md: 3 },
        '@media (max-width:319px)': { pb: 2 },
      }}
    >
      <Box sx={{ width: 'auto', px: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: '26px', sm: '28px', md: '30px', lg: '32px' },
            fontWeight: 600,
            color: '#001C63',
            mb: 5,
            textAlign: 'center',
          }}
        >
          {data?.title || ''}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data?.items?.map((eachItem, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '376.38px' },
                minHeight: { xs: '160px', sm: '200px', md: '245.1px' },
                border: '1px solid #029894',
                borderRadius: '9px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                  height: { xs: 'auto', sm: '82', md: '92px' },
                  backgroundColor: '#029894',
                  borderTopRightRadius: '7px',
                  borderTopLeftRadius: '7px',
                  pl: 2,
                  py: { xs: 2, sm: 2.5, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    position: 'relative',
                    fontSize: {
                      xs: '22px',
                      sm: '28px',
                      md: '30px',
                      lg: '32px',
                    },
                    fontWeight: 700,
                    color: '#fff',
                    '@media (max-width:319px)': { fontSize: '17px' },
                  }}
                >
                  {eachItem?.title || ''}
                </Typography>
                <Box
                  component={'img'}
                  src={eachItem?.image || ''}
                  sx={{
                    width: { xs: '45px', sm: '55px', md: 'auto' },
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                  }}
                />
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography component={'ul'} sx={{ pl: 0 }}>
                  {eachItem?.points?.map((item, i) => (
                    <Typography
                      key={i}
                      component={'li'}
                      sx={{
                        display: 'flex',
                        gap: 1,
                        mb: 1,
                        alignItems: 'start',
                      }}
                    >
                      <Box
                        component={'img'}
                        src={item?.icon || ''}
                        sx={{ mt: 0.7 }}
                      />
                      <Typography
                        component={'span'}
                        sx={{
                          fontSize: {
                            xs: '15px',
                            sm: '16px',
                            md: '17px',
                            lg: '18px',
                          },
                          fontWeight: 500,
                          color: '#354899',
                        }}
                      >
                        {item?.text || ''}
                      </Typography>
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', mt: 5 }}>
          <Button
            onClick={() => open(data?.btnLink || '', '_blank')}
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #001C63',
              color: '#001C63',
              fontWeight: 600,
              fontSize: { xs: '18px', sm: '20px' },
              '&:hover': {
                color: '#fff',
                backgroundColor: '#029894',
                borderColor: '#029894',
              },
            }}
            disableRipple
          >
            {data?.btnTitle || ''}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageHiringModal;
