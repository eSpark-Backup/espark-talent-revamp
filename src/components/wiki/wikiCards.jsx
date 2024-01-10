import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import useMediaQuery from '@mui/material/useMediaQuery';

const CARD_STYLE = {
  borderRadius: '10px',
  background: '#FFF',
  px: '30px',
  py: '20px',
  m: '10px',
  // boxShadow: {lg:'none',sm:`4px 4px 15px rgba(0,0,0,.3)`},
};

const WikiCards = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box sx={{ py: '3%' }}>
      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          {data?.map((item) => (
            <Grid key={item?.id} item lg={4} md={4} sm={6} xs={12} gap="10px">
              <Link href={`/esparkwiki/${item?.slug}`}>
                <Box sx={CARD_STYLE}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      pb: '15px',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      height={
                        isSmallScreen
                          ? 15
                          : isMediumScreen
                            ? 20
                            : isLargeScreen
                              ? 30
                              : 30
                      }
                      width={
                        isSmallScreen
                          ? 15
                          : isMediumScreen
                            ? 20
                            : isLargeScreen
                              ? 30
                              : 30
                      }
                      alt={item?.title}
                    />
                    <Link href={`/esparkwiki/${item?.slug}`}>
                      <Typography
                        color="#000"
                        variant="body1"
                        fontWeight={600}
                        fontSize={{
                          xs: '15px',
                          sm: '15px',
                          md: '14px',
                          lg: '20px',
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Link>
                  </Box>
                  <Box sx={{ pb: '15px' }}>
                    <Typography
                      variant="body1"
                      color="#667170"
                      fontWeight={600}
                      fontSize={{
                        xs: '10px',
                        sm: '12px',
                        md: '12px',
                        lg: '15px',
                      }}
                    >
                      {'Average Salary'}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="secondary"
                      fontSize={{
                        xs: '17px',
                        sm: '17px',
                        md: '15px',
                        lg: '20px',
                      }}
                      fontWeight={600}
                    >
                      {`USD: ${item?.salary} per month`}
                    </Typography>
                  </Box>
                  <Box>
                    {' '}
                    <Link href={`/esparkwiki/${item?.slug}`}>
                      <Typography
                        variant="body1"
                        color="#029894"
                        fontWeight={600}
                        fontSize={{
                          xs: '12px',
                          sm: '12px',
                          md: '14px',
                          lg: '20px',
                        }}
                      >
                        {'Job Description >'}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WikiCards;
