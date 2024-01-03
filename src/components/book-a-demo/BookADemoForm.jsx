import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const BookADemoForm = ({ form }) => {
  const { title, subTitle, description, fields } = form;
  return (
    <>
      <Box
        sx={{
          my: { xs: 5, md: 4, lg: 0 },
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: { xs: 'auto', lg: 'center' },
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            sx={{
              color: '#001C63',
              fontFamily: 'Poppins',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '42.289px',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: '#001C63',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '27.863px',
            }}
          >
            {subTitle}
          </Typography>
        </Box>
        <Box component={'form'}>
          {fields &&
            fields?.map((item, index) => (
              <Box sx={{ mb: 2 }} key={index}>
                <Typography
                  sx={{
                    mb: 0.5,
                    color: '#029894',
                    fontFamily: 'Titillium Web',
                    fontSize: '14.448px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '19.867px',
                  }}
                >
                  {item?.label}
                </Typography>
                <TextField
                  placeholder={item?.placeHolder}
                  sx={{
                    width: '436.277px',

                    borderRadius: '5.418px',
                    background: '#F5F8FA',
                    '& .MuiInputBase-input': {
                      height: '10px',
                      fontSize: '14px',
                    },
                  }}
                  id="outlined-basic"
                  variant="outlined"
                />
              </Box>
            ))}
          <Button
            sx={{
              mt: 1,
              mb: 3,
              width: '126.416px',
              height: '32.913px',
              borderRadius: '3.92px',
              background: '#001C63',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#029894',
              },
            }}
          >
            Submit
          </Button>
        </Box>

        <Box>
          <Typography
            sx={{
              color: '#001C63',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              linehHeight: '27.863px',
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookADemoForm;
