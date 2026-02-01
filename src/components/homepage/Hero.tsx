'use client';
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPathStatus } from '@/utils';
import { HERO_SECTIO_STYLE } from '@/constants/global/hero-sections';

const Hero = ({ data }) => {
  const pathName = usePathname();
  const { title, description, button, image, imageAlt } = data || {};
  const {
    mainBoxStyle,
    linkBoxStyle,
    gridContainerStyle,
    titleStyle,
    descStyle,
    buttonBoxStyle,
    buttonStyle,
    elseButtonStyle,
    gridItemStyle,
    imgageGridItemStyle,
    imageStyle,
  } = HERO_SECTIO_STYLE || {};
  const { isDemo, isHome, isEnterprise, isCrew, isBlogOrStartup } =
    getPathStatus(pathName);

  return (
    <Box component="div" sx={mainBoxStyle(data)}>
      <Container>
        {isDemo && (
          <Box sx={linkBoxStyle}>
            <Link href="/">
              <Image
                priority
                src="/images/eSpark Talent Logo.svg"
                width={162}
                height={100}
                alt="eSpark Talent logo"
              />
            </Link>
          </Box>
        )}
        <Grid container spacing={2} sx={gridContainerStyle(data)}>
          <Grid
            item
            xs={12}
            sm={data?.leftGrid || 7}
            sx={gridItemStyle(isBlogOrStartup)}
          >
            {title && (
              <Typography variant="h1" sx={titleStyle(data)}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                sx={descStyle(data, isHome)}
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            )}
            {button && (
              <Box sx={buttonBoxStyle}>
                {button?.link ? (
                  <Link href={button?.link} target="_blank">
                    <Button sx={buttonStyle(isHome, isDemo, isEnterprise)}>
                      {button?.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={button?.handleClick}
                    sx={elseButtonStyle(isCrew, isHome, isDemo, isEnterprise)}
                  >
                    {button?.label}
                  </Button>
                )}
              </Box>
            )}
          </Grid>
          {image && (
            <Grid
              item
              xs={12}
              sm={data?.rightGrid || 5}
              sx={imgageGridItemStyle}
            >
              <Box component="img" src={image} sx={imageStyle} alt={imageAlt} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
