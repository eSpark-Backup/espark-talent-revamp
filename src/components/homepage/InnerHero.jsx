'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import {
  boxContainerStyles,
  gridBoxStyles,
  gridItemStyles,
  buttonStyles,
  imageGridStyle,
} from '@/components/homepage/InnerHeroStyles';

const InnerHero = ({ data, innerData }) => {
  const wikiString = JSON?.stringify(innerData);
  const parsedWiki = JSON?.parse(wikiString);
  const isLoading = !parsedWiki;

  return (
    <>
      <Box sx={boxContainerStyles(data)}>
        <Container>
          <Grid
            pt={data?.pt2 || '50px'}
            pb={'0'}
            container
            spacing={2}
            sx={gridBoxStyles}
          >
            <Grid item xs={12} sm={data?.leftGrid || 7} sx={gridItemStyles}>
              {data?.title && (
                <Typography
                  variant="h1"
                  lineHeight={1.3}
                  color={data?.titleColor}
                  fontSize={{
                    xs: '22px',
                    sm: '25px',
                    md: '35px',
                    lg: '50px',
                    xl: '50px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                  fontWeight={700}
                >
                  {isLoading ? (
                    <Skeleton width={200} height={24} />
                  ) : (
                    parsedWiki?.title
                  )}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  color={data?.descColor}
                  lineHeight={1.5}
                  fontSize={{
                    xs: '12px',
                    sm: '12px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                  textAlign={{
                    xs: 'center',
                    sm: 'left',
                    md: 'left',
                    lg: 'left',
                    xl: 'left',
                  }}
                >
                  {isLoading ? (
                    <Skeleton count={3} />
                  ) : (
                    parsedWiki?.shortDescription
                  )}
                </Typography>
              )}
              {data?.button && (
                <Box
                  py={{
                    xs: '14px',
                    sm: '14px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                >
                  <Button herf="/book-a-demo" target="_blank" sx={buttonStyles}>
                    {isLoading ? (
                      <Skeleton width={100} height={30} />
                    ) : (
                      data?.button?.label
                    )}
                  </Button>
                </Box>
              )}
            </Grid>
            {data?.image && (
              <Grid item xs={12} sm={data?.rightGrid || 5} sx={imageGridStyle}>
                {isLoading ? (
                  <Skeleton
                    width={data?.imageWidth}
                    height={data?.imageHeight}
                  />
                ) : (
                  <Image
                    quality="85"
                    priority={true}
                    src={parsedWiki?.heroImage}
                    alt={`${parsedWiki?.title}`}
                    width={data?.imageWidth}
                    height={data?.imageHeight}
                  />
                )}
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default InnerHero;
