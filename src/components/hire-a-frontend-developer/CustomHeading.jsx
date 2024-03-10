import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CustomComponent = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          textTransform: 'capitalize',
          fontSize: {
            xs: '20px',
            sm: '25px',
            md: '40px',
            lg: '48px',
          },
          fontWeight: 600,
          lineHeight: 1.2,
          color: '#001C63',
          px: { xs: '0', md: '10%' },
        }}
        dangerouslySetInnerHTML={{
          __html: `Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`,
        }}
      />
    </Container>
  );
};

export default CustomComponent;
