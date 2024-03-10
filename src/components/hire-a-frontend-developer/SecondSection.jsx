import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const SecondSection = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#F7F8FF', py: 3 }}>
      <Container>
        <Box py={2}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              textTransform: 'capitalize',
              fontSize: {
                xs: '18px',
                sm: '18px',
                md: '35px',
                lg: '43px',
              },
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#001C63',
              px: { xs: '16%', md: '5%' },
            }}
            dangerouslySetInnerHTML={{
              __html: data?.title,
            }}
          />
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '13px',
                sm: '13px',
                md: '15px',
                lg: '21px',
              },
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#001C63',
              px: '7%',
            }}
          >
            {data?.descrcipton}
          </Typography>
          <Box justifyContent={'center'} textAlign="center" py={3}>
            <Link href={data?.btnLink}>
              <Button
                variant="contained"
                style={{
                  width: '210px',
                  height: '60px',
                  borderRadius: '50px',
                  backgroundColor: '#029894',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '30px',
                    textAlign: 'center',
                  }}
                >
                  {data?.btnText}
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecondSection;
