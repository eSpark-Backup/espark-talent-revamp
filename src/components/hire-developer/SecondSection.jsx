import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const SecondSection = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#F7F8FF', py: { md: 1, lg: 3 } }}>
      <Container>
        <Box py={1}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              textTransform: 'capitalize',
              fontSize: {
                xs: '18px',
                sm: '24px',
                md: '35px',
                lg: '43px',
              },
              fontWeight: 600,
              lineHeight: '62.77px',
              pb: { lg: '20px' },
              pt: { lg: '33px' },
              color: '#001C63',
              px: { md: '11%', lg: '5%' },
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
                xs: '11px',
                sm: '13px',
                md: '15px',
                lg: '21px',
              },
              fontWeight: 400,
              lineHeight: { xs: '25px', lg: '40px' },
              color: '#001C63',
              px: { xs: '0%', sm: '3%', md: '5.1%' },
            }}
          >
            {data?.descrcipton}
          </Typography>
          <Box
            justifyContent={'center'}
            textAlign="center"
            sx={{ py: { lg: 3, xs: 1 } }}
          >
            <Link href={data?.btnLink}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: '130px', md: '170px', lg: '210px' },
                  height: { xs: '30px', md: '50px', lg: '60px' },
                  borderRadius: '50px',
                  backgroundColor: '#029894',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 28, 99, 1)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '8.93px', md: '15px', lg: '20px' },
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
