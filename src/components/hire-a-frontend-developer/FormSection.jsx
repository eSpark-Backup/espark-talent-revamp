'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import HireForm from './HireForm';

const FormSection = ({ data }) => {
  const { form } = Book_A_Demo_Data;

  return (
    <>
      <Box
        id={'form'}
        sx={{
          pt: { xs: 5, sm: 5 },
          pb: { xs: 5, sm: 8 },
          px: { xs: 2, sm: 5 },
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            maxWidth: '1200px',
            gap: 2,
            justifyContent: 'center',
            '@media(min-width: 280px) and (max-width:1259px)': {
              flexDirection: 'column !important',
              gap: 10,
            },
            '@media(max-width: 425px)': {
              gap: 6,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              maxWidth: '1400px',
              // flexDirection: 'column',
              alignItems: 'center', // Align items vertically center
              order: { xs: 2, sm: 0 },
              gap: { xs: 2, sm: 3, md: 5, lg: 7 },
              '@media(min-width: 280px) and (max-width:1259px)': {
                mx: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                maxWidth: '700px',
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
                flexDirection: 'column',
                gap: { xs: 1, sm: 0.5, lg: 1 },
                pr: { xs: 0, md: 4 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '22px',
                    sm: '30px',
                    md: '40px',
                    lg: '48px',
                  },
                  lineHeight: '63px',
                  fontWeight: 600,
                }}
                color={data?.titleColor}
              >
                {data?.title}
              </Typography>
              <Box
                sx={{
                  mx: { xs: 'auto', md: 0 },
                  maxWidth: {
                    xs: '400px',
                    sm: '450px',
                    md: '650px',
                    lg: '700px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '15px',
                      md: '18px',
                      lg: '23px',
                      xl: '23px',
                    },
                    color: '#0E1155',
                    fontWeight: 400,
                    lineHeight: { xs: 'auto', lg: '43px' },
                  }}
                >
                  {data?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: { xs: 0, md: 3 }, pb: { xs: 0, sm: 1 } }}>
            <Box
              sx={{
                width: 'auto',
                maxWidth: '700px',
                height: 'auto',
                borderRadius: '8px',
                py: 3,
                px: 0.8,
                boxShadow: '0 0 9px 0 rgba(0,0,0,0.29)',
                order: { xs: 0, sm: 1 },
                '@media(min-width: 280px) and (max-width:1259px)': {
                  mx: 'auto',
                },
              }}
            >
              <HireForm form={form} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FormSection;
