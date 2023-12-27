import React from 'react';
import TitleParagraph from '../global/titleParagraph';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, Grid, Button, Container } from '@mui/material';

const OutStaffingTrust = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '3%' }}>
        <Container>
          <TitleParagraph
            title={`Trust eSpark Talent's Outstaffing Services`}
            paragraph={`Partnering With Us Is Remarkable.`}
          />
          <Grid
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {data?.items?.map((list, itemIndex) => (
              <Grid item xs={5} key={itemIndex}>
                <Box sx={{ py: '20px', display: 'flex', gap: '10px' }}>
                  <Image
                    src={list?.listIcon}
                    alt="List Icon"
                    width={15}
                    height={15}
                  />
                  <Typography variant="h4" sx={{ color: 'primary' }}>
                    {list?.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: '#000', fontSize: '18px' }}
                  >
                    {list?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            item
            xs={12}
            sx={{
              py: '30px',
              textAlign: 'center',
            }}
          >
            <Link href={data?.buttonLink}>
              <Button variant="contained" color="secondary">
                {data?.buttonText}
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffingTrust;
