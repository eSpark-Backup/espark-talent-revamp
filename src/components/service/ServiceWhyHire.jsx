'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material'; // Ensuring Box is imported correctly
import ServiceProcessMobile from './ServiceProcessMobile';
import ServiceProcess from './ServiceProcess';

const ServiceWhyHire = ({ data }) => {
  const { styles } = data || {};
  const { mainBoxStyle, titleStyle, descriptionStyle, servicesProcessStyle } =
    styles || {};

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window?.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window?.innerWidth);
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth > 1023;

  const renderTitle = () => (
    <Typography
      variant="h4"
      textAlign="center"
      sx={titleStyle}
      dangerouslySetInnerHTML={{
        __html: data?.title,
      }}
    />
  );

  const renderSubtitle = () => (
    <Typography variant="body1" textAlign="center" sx={descriptionStyle}>
      {data?.subTitle}
    </Typography>
  );

  return (
    <>
      {data && isDesktop ? (
        <Box sx={mainBoxStyle}>
          <Container>
            <Box py={2}>
              {renderTitle()}
              {renderSubtitle()}
            </Box>
          </Container>
          <ServiceProcess
            data={data}
            windowWidth={windowWidth}
            styles={servicesProcessStyle}
          />
        </Box>
      ) : (
        <Container>{data && <ServiceProcessMobile data={data} />}</Container>
      )}
    </>
  );
};

export default ServiceWhyHire;
