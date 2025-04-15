'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material'; // Ensuring Box is imported correctly
import ServiceProcessMobile from '@/components/service/ServiceProcessMobile';
import ServiceProcess from '@/components/service/ServiceProcess';

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

  /**
   * Renders a title using the Typography component.
   *
   * @function renderTitle
   * @returns {JSX.Element} A Typography component with the title content.
   *
   * @description
   * This function returns a Typography component styled with the `titleStyle` object.
   * The content of the title is dynamically set using the `data?.title` property,
   * and it is rendered as HTML using the `dangerouslySetInnerHTML` attribute.
   */
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

  /**
   * Renders a subtitle using the Typography component.
   *
   * @function renderSubtitle
   * @returns {JSX.Element} A Typography component displaying the subtitle text.
   */
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
