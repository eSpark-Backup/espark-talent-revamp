import React from 'react';
import Box from '@mui/material/Box';
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
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '67px',
              color: '#001C63',
              px: '10%',
            }}
            dangerouslySetInnerHTML={{
              __html: `Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`,
            }}
          />
      </Container>
  );
};

export default CustomComponent;
