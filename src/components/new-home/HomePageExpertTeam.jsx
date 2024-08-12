'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

import { openForm } from '@/utils';

const HomePageExpertTeam = ({ data, handleOpen }) => {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 4, md: 6 },
        py: 6,
        width: '100%',
        color: '#fff',
        background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
        '@media (min-width: 1024px)': { gap: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '460px', sm: '600px', md: '700px', lg: '1100px' },
          textAlign: 'center',
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '30px', md: '45px', lg: '65px' },
            fontWeight: 600,
            lineHeight: { xs: 'auto', lg: '78.66px' },
          }}
        >
          {data?.title || ''}
        </Typography>
        <Box sx={{ width: 'auto', mt: { xs: 2.5 } }}>
          <Button
            onClick={() =>
              openForm(data?.btnLink || '', '_blank', pathname, handleOpen)
            }
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              fontWeight: 600,
              fontSize: { xs: '15px', sm: '20px' },
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: { xs: 2, md: 5 },
          flexWrap: 'wrap',
          px: { xs: 2, sm: 3.1, md: 4.6 },
          justifyContent: 'center',
          '@media (min-width: 1024px)': { mb: -8 },
        }}
      >
        {data?.dapartment?.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '90%', sm: 'auto' },
              display: 'flex',
              flexDirection: 'column',
              gap: 2.2,
              alignItems: 'center',
              '@media (min-width: 1024px)': { mt: index == 1 ? -3 : 0 },
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, ml: -2 }}>
              <Box
                component={'img'}
                src={item?.icon || ''}
                alt="designer-icon"
              />
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '26px' },
                  fontWeight: 700,
                }}
              >
                {item?.post || ''}
              </Typography>
            </Box>
            {item?.employees?.map((emp, empIndex) => (
              <Box
                key={empIndex}
                sx={{
                  width: '100%',
                  minHeight: '80.83px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  py: 2,
                  px: 3,
                  borderRadius: '5px',
                  color: `rgba(255, 255, 255, ${index === 0 ? 1 : index === 1 ? 0.6 : 0.4})`,
                  background: `rgba(217, 217, 217, ${index === 0 ? 0.2 : index === 1 ? 0.1 : 0.05})`,
                  minWidth: {
                    xs: '240px',
                    sm: '330px',
                    md: '290px',
                    lg: '383.58px',
                  },
                }}
              >
                <Box
                  component={'img'}
                  src={emp?.image || ''}
                  sx={{
                    opacity: empIndex === 0 ? 1 : empIndex === 1 ? 0.6 : 0.4,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '13px',
                        sm: '15px',
                        md: '16px',
                        lg: '20px',
                      },
                      fontWeight: 700,
                    }}
                  >
                    {emp?.name || ''}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '12px', md: '13px', lg: '14px' },
                      fontWeight: 500,
                    }}
                  >
                    {emp?.position || ''}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePageExpertTeam;
