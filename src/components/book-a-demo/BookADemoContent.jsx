import React from 'react';
import { Box, Typography } from '@mui/material';

const BookADemoContent = ({ content }) => {
  const { title, description, image, alt } = content;
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#029894' }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              pt: { xs: 3, sm: 5, md: 7, lg: 7, xl: 10 },
              px: { xs: 3, sm: 0 },
              mb: { xs: 2, lg: 0 },
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: { xs: '30px', sm: '42.289px' },
                fontSize: { xs: '27px', sm: '30px', md: '32px' },
              }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Typography
              sx={{
                width: { xs: '100%', sm: '540px' },
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24.863px',
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            component={'img'}
            src={image}
            sx={{
              width: { xs: 327.271, sm: 452 },
              height: { xs: 274.264, sm: 378.855 },
              '@media (min-width:425px) and (max-width:599px)': {
                width: 400,
                height: 300,
              },
            }}
            alt={alt}
          />
          {/* <ClientSlider
            data={CLIENTS_SLIDER_DATA}
            txtColor={'#fff'}
            hvariant={'h6'}
            fontWeight={500}
            title={text}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default BookADemoContent;
