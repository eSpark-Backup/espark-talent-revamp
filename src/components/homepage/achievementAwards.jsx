import React from 'react';
import { Box,Container,Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import TitleParagraph from '@/components/global/titleParagraph';

const AchievementAwards = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
        <Container>
          <TitleParagraph title={data?.title} />
          <Grid container spacing={2} sx={{justifyContent:'center'}}>
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                md={3}
                lg={2}
                xl={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link href={item?.link}>
                  <Image
                    src={item?.image}
                    height={150}
                    width={150}
                    alt={item?.alt}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AchievementAwards;
