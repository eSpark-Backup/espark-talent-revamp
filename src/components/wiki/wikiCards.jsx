import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const CARD_STYLE = {
  borderRadius: '10px',
  // border: '1px solid #000',
  background: '#FFF',
  // boxShadow: '0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
  px: '30px',
  py: '20px',
  m: '10px',
};

const WikiCards = ({ data }) => {
  return (
    <Box sx={{ py: '3%' }}>
      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          {data.map((item) => (
            <Grid key={item.id} item xs={6} lg={4} md={4} sm={6}>
              <Box sx={CARD_STYLE}>
                {/* <Link key={item.id} href={`/wiki/${item.id}`}> */}
                <Box
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Image
                    src={item.icon}
                    height={item.iconHeight}
                    width={item.iconWidth}
                    alt={item.title}
                  />
                  <Typography variant="h4" color="#000">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="#667170" pb="10px">
                  {'Average Salary'}
                </Typography>
                <Typography variant="body1" color="secondary" pb="10px">
                  {`USD: ${item.salary} per month`}
                </Typography>
                <Link href={`/esparkwiki/${item.id}`}>
                  <Typography variant="body1" color="primary" pb="10px">
                    {'Job Description >'}
                  </Typography>
                </Link>
                {/* </Link> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WikiCards;
