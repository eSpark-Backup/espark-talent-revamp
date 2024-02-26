'use client';
import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Container,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

const TermsConditions = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Container>
      <Grid
        container
        sx={{
          py: '5%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12}>
          <Box
            className={`terms-content`}
            sx={{
              backgroundColor: '#fff',
              p: { xs: '20px', md: '30px' },
              borderRadius: '10px',
              boxShadow: '0px 0px 7.800000190734863px 0px rgba(0, 0, 0, 0.25)',
              textAlign: 'justify',
            }}
          >
            {data?.content ? (
              <Box>
                {data?.content?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      pr: { md: 4 },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: '#3B5998',
                        px: {  sm: 0 },
                        py: '5px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        textAlign: { xs: 'center', md: 'left' },
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    />
                    <Typography
                      sx={{
                        color: '#263238',
                        textAlign: { xs: 'center', md: 'justify' },
                        fontSize: { xs: '10px', md: '18px' },
                        fontWeight: 400,
                        lineHeight: { xs: '17px', md: '45.766px' },
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.paragraph }}
                    />
                    {item?.items?.map((list, itemIndex) => (
                      <Box
                        key={itemIndex}
                        sx={{
                          display: 'flex',
                          textAlign: 'baseline',
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: { xs: '15px', md: '22px' },
                            mr: { xs: '10px',sx: '15px',md: '20px', },
                          }}
                        >
                          <Image
                            src="/images/how-its-works/true.svg"
                            height={
                          isSmallScreen
                            ? 12
                            : isMediumScreen
                              ? 15
                              : isLargeScreen
                                ? 20
                                : 20
                        }
                            width={
                          isSmallScreen
                            ? 12
                            : isMediumScreen
                              ? 15
                              : isLargeScreen
                                ? 20
                                : 20
                        }
                            alt="Terms & Conditions - eSpart Talent"
                          />
                        </ListItemIcon>

                        <ListItemText>
                          <Typography
                            sx={{
                              color: '#263238',
                              textAlign: 'justify',
                              fontSize: { xs: '10px', md: '18px ' },
                              fontWeight: 400,
                              lineHeight: { xs: '17px', md: '45.766px' },
                            }}
                          >
                            {list}
                          </Typography>
                        </ListItemText>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            ) : (
              <Box>
                <Skeleton
                  height={20}
                  width="80%"
                  style={{ marginBottom: '10px' }}
                />
                <Skeleton count={10} height={20} width="100%" />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TermsConditions;
