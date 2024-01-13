import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

import Image from 'next/image';

const WikiSingleLeft = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        px: '20px',
        py: '30px',
        borderRadius: '15px',
        boxShadow: '0px 0px 7.8px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      {data?.content?.map((item, index) => (
        <Box
          key={index}
          sx={{
            pb: { xs: '10px', sm: '5px', md: '0px', lg: '0px' },
            // pt: { xs: '5px', sm: '5px', md: '0px', lg: '0px' }
          }}
        >
          <Typography
            color="secondary"
            sx={{
              py: '5px',
              fontWeight: 600,
              fontSize: {
                xs: '23px',
                sm: '23px',
                md: '25px',
                lg: '30px',
                xl: '30px',
              },
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'left',
                lg: 'left',
                xl: 'left',
              },
            }}
          >
            {item?.title}
          </Typography>

          <Typography
            variant="body1"
            color="#000"
            sx={{
              fontSize:
                index === 0
                  ? {
                      xs: '11px',
                      sm: '13px',
                      md: '16px',
                      lg: '22px',
                      xl: '22px',
                    }
                  : {
                      xs: '10px',
                      sm: '12px',
                      md: '15px',
                      lg: '20px',
                      xl: '20px',
                    },
              py: '5px',
              textAlign: {
                xs: 'center',
                sm: 'center',
                md: 'left',
                lg: 'left',
                xl: 'left',
              },
            }}
          >
            {item?.description}
          </Typography>
          {item?.items?.map((list, itemIndex) => (
            <Box key={itemIndex} py={'1%'}>
              <Box
                sx={{
                  py: '0',
                  display: `flex`,
                  gap: { xs: '20px', sm: '20px', md: '30px', lg: '40px' },
                }}
              >
                <Image
                  src={data?.listIcon}
                  alt="List Icon"
                  height={
                    isSmallScreen
                      ? 10
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
                  color="#000"
                  sx={{
                    fontSize: {
                      xs: '8px',
                      sm: '12px',
                      md: '12px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  {list}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WikiSingleLeft;
