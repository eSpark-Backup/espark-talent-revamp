import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomSection from './CustomSection';
import CustomSectionSlider from './CustomSectionSlider';
import { usePathname } from 'next/navigation';

const CustomizedSolution = ({ data }) => {
  const { bgImage, title, descrcipton, items } = data;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const pathname = usePathname();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundPosition: 'center',
          backgroundImage: `url(${isSmallScreen ? '' : bgImage})`,
          backgroundColor: `${isSmallScreen ? '#F7F8FF' : ''}`,
          pt: 4,
          pb: isSmallScreen ? 4 : 15,
          '@media(max-width: 425px)': {
            pb: pathname ? 4 : 15,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1, lg: 0 },
              alignItems: 'center',
              width: 'auto',
              px: 3.5,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '18px',
                  sm: '26px',
                  md: '35px',
                  lg: '48px',
                },
                fontWeight: 600,
                lineHeight: {
                  xs: '28px',
                  sm: '40px',
                  md: '50px',
                  lg: '65px',
                },
                color: '#001C63',
                maxWidth: { md: '1000px', lg: '1200px' },
                textAlign: 'center',
              }}
              dangerouslySetInnerHTML={{
                __html: `${title || ''}`,
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: '11px',
                  sm: '15px',
                  md: '19px',
                  lg: '20px',
                },
                fontWeight: 500,
                lineHeight: {
                  xs: '19.5px',
                  sm: '25px',
                  md: '30px',
                  lg: '40px',
                },
                color: '#0E1155',
                textAlign: 'center',
                maxWidth: '975.45px',
              }}
            >
              {descrcipton || ''}
            </Typography>
          </Box>
        </Box>
        {items && (
          <>
            {isSmallScreen ? (
              <CustomSectionSlider items={items} />
            ) : (
              <CustomSection items={items} />
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default CustomizedSolution;
