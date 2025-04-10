'use client';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesHeroSectionStyles } from '@/constants/hire-developer/hire-developer';

const ServiceHeroSection = ({ data }) => {
  const {
    title,
    titleColor,
    description,
    button,
    awardsSection,
    rightGrid,
    image,
    imageAlt,
  } = data || {};
  const pathName = usePathname();
  const {
    mainBoxStyle,
    gridItemStyle,
    gridContainerStyle,
    titleStyle,
    descriptionStyle,
    buttonStyle,
    buttonLabelStyle,
    girdItemBoxStyle,
    imageStyle,
    imageGridStyle,
    heroImageStyle,
  } = servicesHeroSectionStyles(data, pathName) || {};

  const renderAwardImage = (item, index) => (
    <Box
      component={'img'}
      key={index}
      src={item?.image}
      alt={item?.alt}
      sx={imageStyle}
    />
  );

  return (
    <>
      {data && (
        <Box sx={mainBoxStyle}>
          <Container>
            <Grid container spacing={2} sx={gridContainerStyle}>
              <Grid item xs={12} sm={data?.leftGrid || 7.1} sx={gridItemStyle}>
                {title && (
                  <Typography
                    variant="h1"
                    color={titleColor}
                    sx={titleStyle}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {description && (
                  <Typography sx={descriptionStyle}>{description}</Typography>
                )}
                <Grid container>
                  <Grid item xs={14} lg={4}>
                    {button && (
                      <Box sx={buttonStyle}>
                        <Link href={button?.link} target="_blank">
                          <Typography sx={buttonLabelStyle}>
                            {button?.label || ''}
                          </Typography>
                        </Link>
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Box sx={girdItemBoxStyle}>
                      {awardsSection?.map(renderAwardImage)}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              {image && (
                <Grid item xs={12} sm={rightGrid || 4.9} style={imageGridStyle}>
                  <Box
                    component={'img'}
                    src={image}
                    quality="85"
                    alt={`${imageAlt}`}
                    sx={heroImageStyle}
                  />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ServiceHeroSection;
