'use client';
import {
  Avatar,
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';

const FifthSection = ({ data }) => {
  const pathname = usePathname();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        backgroundColor: pathname.includes('service')
          ? isSmallScreen
            ? '#F7F8FF'
            : '#F7F8FF'
          : isSmallScreen
            ? ''
            : '#F7F8FF',
        py: 3,
      }}
    >
      <Container>
        <Box
          sx={{
            py: pathname.includes('service') ? 0 : 2,
          }}
        >
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
              lineHeight: { xs: '29px', md: 1.4 },
              color: '#001C63',
              px: pathname.includes('service')
                ? { xs: '0%', sm: '5%', md: '10%', lg: '15%' }
                : { xs: '9%', sm: '9%', md: '10%', lg: '15%' },
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
                xs: pathname.includes('service') ? '11px' : '13px',
                sm: '15px',
                md: '18px',
                lg: '23px',
                xl: '23px',
              },
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#001C63',
              pt: pathname.includes('service') ? 1 : 0,
              pb: pathname.includes('service') ? 2 : 0,
              px: pathname.includes('service')
                ? { xs: '0%', sm: '5%', md: '5%', lg: '12%' }
                : { xs: '5%', sm: '5%', md: '5%', lg: '12%' },
            }}
          >
            {data?.descrcipton}
          </Typography>
        </Box>
        <Grid
          container
          display={'flex'}
          justifyContent={'space-between'}
          textItems={'flex-end'}
          spacing={pathname.includes('service') ? { xs: 1, sm: 2, md: 3 } : 3}
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
                  '@media (min-width: 280px) and (max-width: 359px)': {
                    lineHeight: '30px',
                    pb: 1,
                  },
                }}
              >
                {item?.title}
              </Typography>
              <Box
                py={{ xs: '0px', sm: '10px' }}
                sx={{
                  display: 'flex',
                  flexDirection: pathname.includes('service')
                    ? { md: 'column' }
                    : 'row',
                  flexWrap: 'wrap',
                  mx: 'auto',
                  gap: '0.2rem',
                  alignItems: pathname.includes('service')
                    ? { md: 'center', lg: 'start' }
                    : 'center',
                  textAlign: 'left',
                  maxWidth: { xs: 'auto', md: '800px', lg: 'auto' },
                  justifyContent: {
                    xs: 'center',
                    md: 'center',
                    lg: 'start',
                    xl: 'start',
                  },
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
                          '@media (min-width: 280px) and (max-width: 359px)': {
                            fontSize: '13.1px',
                            lineHeight: '15px',
                          },
                        }}
                        dangerouslySetInnerHTML={{ __html: chip }}
                      ></Typography>
                    }
                    sx={{
                      width: 'auto',
                      minWidth: '93px',
                      maxWidth: pathname.includes('service')
                        ? { xs: '964px', md: '464px' }
                        : { xs: '264px' },
                      backgroundColor: '#E9ECF6',
                      color: '#000',
                      borderRadius: '3px',
                      mb: '10px',
                      mr: { md: '10px' },
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
