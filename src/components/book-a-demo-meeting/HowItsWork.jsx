'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  gridContainerStyle,
  cardBoxStyle,
  cardImageBoxStyle,
  cardImageStyle,
  cardContentContainerStyle,
  cardHeadingStyle,
  cardListItemStyle,
  cardListItemIconStyle,
  cardListItemTextStyle,
} from '../../constants/book-demo-meeting/HowItsWork';

const HowItsWork = ({ data }) => {
  const { title, description, cards } = data || {};
  const isLessThenMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={containerStyle}>
      <Container>
        <Typography component={'h2'} color={'secondary'} sx={titleStyle}>
          {title}
        </Typography>
        <Typography component={'p'} color={'secondary'} sx={descriptionStyle}>
          {description}
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          sx={gridContainerStyle}
        >
          {cards?.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                boxShadow={4}
                sx={{
                  ...cardBoxStyle,
                  borderRadius: item.rightBorder
                    ? { xs: '9px', md: '20px 70px 70px 20px' }
                    : { xs: '9px', md: '70px 20px 20px 70px' },
                }}
              >
                <Box
                  sx={{
                    ...cardImageBoxStyle,
                    borderRadius: isLessThenMd && '0px 0px 9px 9px',
                  }}
                >
                  <Image
                    src={item.image}
                    sx={{ ...cardImageStyle, width: isXsOrSm ? 450 : 750 }}
                    alt="dataimage"
                  />
                </Box>
                <Grid container sx={cardContentContainerStyle}>
                  <Grid item xs={12}>
                    <Typography sx={cardHeadingStyle}>
                      {item?.heading}
                    </Typography>
                  </Grid>
                  {isLessThenMd
                    ? item?.responsiveListItem?.map((list, index) => (
                        <Grid
                          key={index}
                          item
                          xs={
                            index === item.responsiveListItem.length - 1
                              ? 12
                              : 6
                          }
                          md={12}
                          sx={cardListItemStyle}
                        >
                          <CheckCircleIcon
                            fontSize="10px"
                            sx={cardListItemIconStyle}
                          />
                          <Typography sx={cardListItemTextStyle}>
                            {list?.item}
                          </Typography>
                        </Grid>
                      ))
                    : item?.desktopListItem?.map((list, index) => (
                        <Grid key={index} item md={12} sx={cardListItemStyle}>
                          <CheckCircleIcon
                            fontSize="10px"
                            sx={cardListItemIconStyle}
                          />
                          <Typography sx={cardListItemTextStyle}>
                            {list?.item}
                          </Typography>
                        </Grid>
                      ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItsWork;
