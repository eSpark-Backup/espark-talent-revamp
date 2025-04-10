'use client';

import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ThankYou = ({ data }) => {
  const {
    heading,
    subHeading,
    subTitle,
    description,
    stepstitle,
    steps,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    headingStyle,
    subHeadingStyle,
    subTitleStyle,
    descriptionStyle,
    stepsTitle,
    imageBoxStyle,
    gridContainerStyle,
    stepTitle,
    itemBoxStyle,
    itemTyporaphyStyle,
    listIconStyle,
  } = styles || {};

  const render = (item, idx) => (
    <Box key={idx} sx={itemBoxStyle}>
      <ListItemIcon sx={listIconStyle}>
        <Image
          src="/images/how-its-works/white.svg"
          height={15}
          width={15}
          alt="Thankyou Icon - eSpark Talent"
        />
      </ListItemIcon>
      <Typography variant="body1" sx={itemTyporaphyStyle} key={idx}>
        {item}
      </Typography>
    </Box>
  );

  const renderSteps = (step, index) => (
    <Grid item xs={12} sm={4} md={4} lg={4} key={index} py={'20px'}>
      <Box sx={imageBoxStyle}>
        <Image
          src={step?.icon}
          height={70}
          width={70}
          alt="Hiring Steps - eSpark Talent"
        />
      </Box>
      <Box>
        <Typography variant="h3" sx={stepTitle}>
          {step?.title}
        </Typography>
      </Box>
      {step?.items?.map(render)}
    </Grid>
  );

  return (
    <Box className="thankyou-content" sx={mainBoxStyle(data)}>
      <Container>
        <Box sx={innerBoxStyle}>
          <Link href={'/'}>
            <Image
              src={data?.logo}
              height={100}
              width={200}
              alt="Thankyou - eSpark Talent"
            />
          </Link>
          <Typography
            variant="h1"
            sx={headingStyle}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Typography
            variant="h2"
            sx={subHeadingStyle}
            dangerouslySetInnerHTML={{ __html: subHeading }}
          />
          <Typography
            variant="h2"
            sx={subTitleStyle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
          <Typography
            variant="body1"
            sx={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Typography variant="h3" sx={stepsTitle}>
            {stepstitle}
          </Typography>
          <Grid container sx={gridContainerStyle}>
            {steps?.map(renderSteps)}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYou;
