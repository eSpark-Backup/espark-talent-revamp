'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import ClientSaysSlider from './ClientSaysSlider';
import {
  mainContainerStyleForClientSlider,
  OUR_CLIENT_SAYS,
} from '@/constants/homepage';

const ClientSays = () => {
  const { heading, subHeading, slider, styles } = OUR_CLIENT_SAYS || {};
  const {
    headingStyle,
    subHeadingStyle,
    clientSaySliderBoxStyle,
    clientSaySliderStyles,
  } = styles || {};
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
  const book_a_demo_metting = 'book-a-demo-meeting';

  useEffect(() => {
    if (slider) setLoading(false);
  }, [OUR_CLIENT_SAYS]);

  return (
    // data && (
    <Box
      sx={{
        ...mainContainerStyleForClientSlider(pathName, book_a_demo_metting),
      }}
    >
      <Container>
        <Box>
          <Typography component={'h2'} color={'secondary'} sx={headingStyle}>
            {heading}
          </Typography>
          <Typography component={'p'} color={'secondary'} sx={subHeadingStyle}>
            {subHeading}
          </Typography>
        </Box>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box id="client-says-slider">
            <Box sx={clientSaySliderBoxStyle}>
              <ClientSaysSlider data={slider} styles={clientSaySliderStyles} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
    // )
  );
};

export default ClientSays;
