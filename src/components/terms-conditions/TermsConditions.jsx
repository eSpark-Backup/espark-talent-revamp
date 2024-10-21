src/components/Join-espark-crew/FooterCTA.jsx'use client';
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
import {
  gridStyle,
  termsContentStyle,
  titleStyle,
  paragraphStyle,
  listItemIconStyle,
  listTextStyle,
} from '@/constants/terms-conditions';

const TermsConditions = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  if (!data || data.length === 0) {
    console.error('Data is missing or null');
    return <div>Data is missing or null</div>;
  }

  return (
    <>
      <Container>
        <Grid container sx={gridStyle}>
          <Grid item xs={12}>
            <Box className={`terms-content`} sx={termsContentStyle}>
              {data?.content ? (
                <>
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
                          sx={titleStyle}
                          dangerouslySetInnerHTML={{ __html: item?.title }}
                        />
                        <Typography
                          sx={paragraphStyle}
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
                            <ListItemIcon sx={listItemIconStyle}>
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
                              <Typography sx={listTextStyle}>{list}</Typography>
                            </ListItemText>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </>
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
    </>
  );
};

export default TermsConditions;
