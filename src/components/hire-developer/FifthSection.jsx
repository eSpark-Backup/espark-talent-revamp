import { Avatar, Box, Chip, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const FifthSection = ({ data }) => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{
      backgroundColor: `${isSmallScreen ? '' : '#F7F8FF'}`,
      py: 3
    }}>
      <Container>
        <Box py={2}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              textTransform: 'capitalize',
              fontSize: {
                xs: '20px',
                sm: '25px',
                md: '40px',
                lg: '48px',
              },
              fontWeight: 600,
              lineHeight: 1.4,
              color: '#001C63',
              px: { xs: '9%', sm: '9%', md: '10%', lg: '10%' },
            }}
            dangerouslySetInnerHTML={{
              __html: data?.title,
            }}
          />
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '13px',
                sm: '15px',
                md: '18px',
                lg: '23px',
                xl: '23px',
              },
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#001C63',
              px: { xs: '5%', sm: '5%', md: '5%', lg: '12%' },
            }}
          >
            {data?.descrcipton}
          </Typography>
        </Box>
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
          spacing={3}
        >
          {data?.items?.map((item, index) => (
            <Grid
              item
              sm={12}
              xs={12}
              md={item.gridMd}
              lg={item.gridLg}
              gap={'20px'}
              key={index}
            >
              <Typography
                variant="h3"
                textAlign="center"
                mr={item[0] ? `50px` : ''}
                sx={{
                  fontWeight: 700,
                  lineHeight: '48px',
                  color: '#029894',
                  fontSize: {
                    xs: '22px',
                    sm: '22px',
                    md: '22px',
                    lg: '22px',
                    xl: '22px',
                  },
                  textAlign: {
                    xs: 'center',
                    lg: 'left',
                  },
                }}
              >
                {item?.title}
              </Typography>
              <Box
                py={{ xs: '0px', sm: '10px' }}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  mx: 'auto',
                  gap: '0.2rem',
                  alignItems: 'center',
                  textAlign: 'left',
                  maxWidth: { xs: 'auto', md: '800px', lg: 'auto' },
                  justifyContent: { xs: 'center', lg: 'start', xl: 'start' },
                }}
              >
                {item?.items.map((chip, index) => (
                  <Chip
                    key={index}
                    avatar={<Avatar src={'/images/hire-developer/bulit.png'} />}
                    label={
                      <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                          fontSize: '18px',
                          fontWeight: 400,
                          lineHeight: '35px',
                          textAlign: 'left',
                          color: '#000000',
                        }}
                        dangerouslySetInnerHTML={{ __html: chip }}
                      ></Typography>
                    }
                    sx={{
                      width: 'auto',
                      minWidth: '93px',
                      maxWidth: '264px',
                      backgroundColor: '#E9ECF6',
                      color: '#000',
                      borderRadius: '3px',
                      mb: '10px',
                      mr: '10px',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FifthSection;
