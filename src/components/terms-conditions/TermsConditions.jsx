'use client';

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
  containerStyles,
  boxStyles,
  titleStyles,
  paragraphStyles,
  listItemIconStyles,
  listItemTextStyles,
  itemStyles,
  titleStyle,
} from '@/components/terms-conditions/TermsConditionsStyles';

const TermsConditions = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme?.breakpoints?.up('lg'));

  return (
    <Container>
      <Grid container sx={containerStyles}>
        <Grid item xs={12}>
          <Box className={`terms-content`} sx={boxStyles}>
            {data?.content ? (
              <Box>
                {data?.content?.map((item, index) => (
                  <Box key={index} sx={titleStyle}>
                    <Typography
                      variant="h2"
                      sx={titleStyles}
                      dangerouslySetInnerHTML={{ __html: item?.title }}
                    />
                    <Typography
                      sx={paragraphStyles}
                      dangerouslySetInnerHTML={{ __html: item?.paragraph }}
                    />
                    {item?.items?.map((list, itemIndex) => (
                      <Box key={itemIndex} sx={itemStyles}>
                        <ListItemIcon sx={listItemIconStyles}>
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
                          <Typography sx={listItemTextStyles}>
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
