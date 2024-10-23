'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const BenefitsWorks = ({ data }) => {
  const containerStyle = {
    py: { xs: 4, sm: 5, md: 6 },
    overflow: 'hidden',
  };
  const boxStyle = {
    mx: 'auto',
    pb: '50px',
    width: { sm: '750px', md: '750px', lg: '900px' },
    '@media (min-width: 600px) and (max-width:767px)': {
      width: '500px',
      pb: '30px',
    },
    '@media (min-width: 425px) and (max-width:599px)': {
      width: '400px',
      pb: '30px',
    },
    '@media (min-width: 300px) and (max-width:424px)': {
      pb: '30px',
    },
  };
  const typographyStyle = {
    variant: "h2",
    color: '#001C63',
    fontSize: { sm: '24px !important', md: '24px !important' },
    fontWeight: 600,
    lineHeight: { sm: 'auto', lg: '42.289px' },
    '@media (min-width: 425px) and (max-width:767px)': {
      fontSize: '26px !important',
    },
    '@media (min-width: 300px) and (max-width:424px)': {
      fontSize: '20px !important',
    },
    '@media (min-width:768px) and (max-width: 790px)': {
      pr: '40px',
    },
    textAlign: 'center',
    flexWrap: 'wrap',
    pb: { xs: '15px' },
  };
  const paragraphStyle = {
    component: 'p',
    color: '#001C63',
    textAlign: 'center',
    fontSize: {
      xs: '16px !important',
      md: '18px !important',
    },
    '@media (min-width: 300px) and (max-width:424px)': {
      px: '25px',
    },
    '@media (min-width: 426px) and (max-width:440px)': {
      pr: '45px',
    },
    '@media (min-width:768px) and (max-width: 790px)': {
      pr: '70px',
    },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: { sm: '27.863px' },
    flexWrap: 'wrap',
    px: { xs: '35px', lg: '10px' },
    pb: { md: '10px', xs: '0px' },
  };
  const gridStyle = {
    container: true,
    spacing: [5, 6, 2, 2],
    gap: { md: '13%', lg: '5.3%', sm: '1%' },
    justifyContent: "center",
    position: 'relative',
    '@media (min-width:278px) and (max-width: 300px)': {
      ml: '-35px !important',
    },
    '@media (min-width:301px) and (max-width: 340px)': {
      ml: '-34px !important',
    },
    '@media (min-width:341px) and (max-width: 425px)': {
      ml: '-34px !important',
    },
    '@media (min-width:426px) and (max-width: 600px)': {
      ml: '-45px !important',
    },
    '@media (min-width:601px) and (max-width: 768px)': {
      ml: '-46px !important',
    },
  };
  const imageStyles = {
    width: { xs: '180.076px', md: '200.076px' },
    height: { xs: '35.708px', md: '40.708px' },
    position: 'absolute',
    transform: {
      xs: 'rotate(152.607deg)',
      sm: 'rotate(149.607deg)',
      md: 'none',
    },
    zIndex: 0,
    top: { sm: 230, md: 90 },
    '@media (min-width:600px) and (max-width: 767px)': {
      top: 210,
    },
    '@media (min-width:425px) and (max-width: 599px)': {
      top: 190,
    },
    '@media (min-width:300px) and (max-width: 424px)': {
      top: 157,
    },
    '@media (min-width:291px) and (max-width: 299px)': {
      top: 170,
    },
    '@media (min-width:278px) and (max-width: 290px)': {
      top: 177,
    },
  };
  const image2Styles = {
    width: { xs: '210.021px', md: '230.021px' },
    height: { xs: '70.83px', md: '85.83px' },
    position: 'absolute',
    zIndex: 0,
    display: { xs: 'none', sm: 'none', md: 'block' },
    top: { md: 160 },
  };
  const image3Styles = {
    width: '210.021px',
    height: '68.83px',
    position: 'absolute',
    zIndex: 0,
    display: { xs: 'block', sm: 'block', md: 'none' },
    top: { sm: 455, md: 160 },
    '@media (max-width: 768px)': {
      top: 420,
    },
    '@media (min-width:600px) and (max-width: 767px)': {
      top: 380,
    },
    '@media (min-width:425px) and (max-width: 599px)': {
      top: 330,
    },
    '@media (min-width:300px) and (max-width: 424px)': {
      top: 280,
    },
    '@media (min-width:291px) and (max-width: 299px)': {
      top: 317,
    },
    '@media (min-width:278px) and (max-width: 290px)': {
      top: 335,
    },
  };
  const image4Styles = {
    width: { xs: '192.958px', md: '210.958px' },
    height: { xs: '50.005px', md: '80.005px' },
    position: 'absolute',
    display: { xs: 'block', md: 'block' },
    transform: {
      xs: 'rotate(152.607deg)',
      sm: 'rotate(142.607deg)',
      md: 'none',
    },
    zIndex: 0,
    top: { sm: 708, md: 260 },
    '@media (max-width: 768px)': {
      top: 655,
    },
    '@media (min-width:600px) and (max-width: 767px)': {
      top: 600,
    },
    '@media (min-width:425px) and (max-width: 599px)': {
      top: 530,
    },
    '@media (max-width: 425px)': {
      top: 510,
    },
    '@media (min-width:300px) and (max-width: 424px)': {
      top: 442,
    },
    '@media (min-width:291px) and (max-width: 299px)': {
      top: 532,
    },
    '@media (min-width:278px) and (max-width: 290px)': {
      top: 555,
    },
  };
  const gridItemStyle = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    p: ['10px', '6px'],
    position: 'relative',
    zIndex: 1,
  };
  const innerBoxStyle = {
    display: 'flex',
    borderRadius: {
      xs: '20px',
      sm: '25px',
      md: '40px',
      lg: '50px',
    },
    p: '20px',
    alignItems: 'center',
    background: ' #FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    height: {
      sm: '162.637px',
      lg: '162.569px',
    },
    width: {
      sm: '589.938px !important',
      lg: '580.938px !important',
    },
    '@media (min-width: 600px) and (max-width: 767px)': {
      width: '450.938px',
      height: '142.637px',
    },
    '@media (min-width: 425px) and (max-width: 599px)': {
      width: '400.938px',
      height: '122.637px',
    },
    '@media (min-width: 300px) and (max-width: 424px)': {
      width: '303.292px',
      height: '100.637px',
    },
  };
  const image5Styles = {
    width: 59,
    height: 59,
    '@media (min-width: 600px) and (max-width: 767px)': {
      width: 40,
      height: 40,
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: 45,
      height: 45,
    },
    '@media (min-width: 300px) and (max-width: 424px)': {
      width: 36,
      height: 36,
    },
  };
  const typography2Style = {
    color: '#000',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: { xs: '18.571px', md: '23px', lg: '30px' },
    ml: 1,
    fontSize: { lg: '20px', xs: '12px' },
  };

  return (
    <>
      <Box sx={containerStyle}>
        <Container>
          <Box sx={boxStyle}>
            <Typography variant="h2" sx={typographyStyle}>
              {data?.title}
            </Typography>
            <Typography component={'p'} sx={paragraphStyle}>
              {data?.paragraph}
            </Typography>
          </Box>
          <Grid sx={gridStyle}>
            <Box sx={imageStyles} src="/images/homepage/outsource-benefits/line1.svg" component={'img'} />
            <Box sx={image2Styles} src="/images/homepage/outsource-benefits/line2.svg" component={'img'} />
            <Box sx={image3Styles} src="/images/homepage/outsource-benefits/line4.svg" component={'img'} />
            <Box sx={image4Styles} src="/images/homepage/outsource-benefits/line3.svg" component={'img'} />
            {data?.items?.map((item, index) => (
              <Grid key={index} item xs={12} sm={12} md={5} sx={gridItemStyle}>
                <Box sx={innerBoxStyle}>
                  <Box component={'img'} src={item?.icon} alt={item?.title} sx={image5Styles} />
                  <Typography sx={typography2Style}>
                    {item?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BenefitsWorks;
