import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CustomComponent = () => {
  return (
    <Container
      sx={{
        py: {
          xs: 3,
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
        },
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          textTransform: 'capitalize',
          fontSize: {
            xs: '22px',
            sm: '24px',
            md: '35px',
            lg: '43px',
          },
          fontWeight: 700,
          lineHeight: 1.4,
          color: '#001C63',
          px: { xs: '5%', md: '7%', lg: '14%' },
        }}
        dangerouslySetInnerHTML={{
          __html: `Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`,
        }}
      />
    </Container>
  );
};

export default CustomComponent;
