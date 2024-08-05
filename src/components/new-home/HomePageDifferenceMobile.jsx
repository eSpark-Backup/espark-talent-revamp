import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const HomePageDifferenceMobile = ({ data }) => (
  <Grid
    container
    sx={{
      display: { xs: 'flex', sm: 'none' },
      gap: 4,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {data?.map((item, index) => (
      <Grid
        key={index}
        item
        xs={12}
        md={3.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '13.57px',
            boxShadow: '0px 3.21px 6.1px 0px rgba(0, 0, 0, 0.25)',
            '@media (max-width: 767px)': {
              width: '100%',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              height: '70.972px',
              borderTopLeftRadius: '13.57px',
              borderTopRightRadius: '13.57px',
              borderTop: '1px solid lightGray',
              p: '20px',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={item?.icon}
              alt={item?.title}
              sx={{
                width: 43,
                height: 43,
                '@media (max-width: 424px)': {
                  width: 27,
                  height: 27,
                },
              }}
            />
            <Typography
              component="h4"
              color="secondary"
              sx={{
                fontSize: '19px',
                fontWeight: 600,
                ml: 2,
              }}
            >
              {item?.title}
            </Typography>
          </Box>
          <Box
            sx={{
              p: '20px',
              borderRadius: '0 0 20px 20px',
              backgroundColor: '#fff',
              height: '100%',
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: '12.05px',
                lineHeight: '25.3px',
                fontWeight: 400,
                color: '#001C63',
              }}
            >
              {item?.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default HomePageDifferenceMobile;
