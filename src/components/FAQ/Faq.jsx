import React from 'react';
import Title from './Title';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import { Box, Grid, Typography } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { FAQ_DATA, TITLE } from '@/constants/home-page/faq-section';

const Faq = () => {
  return (
    <Box sx={{ my: 4 }} id="faq">
      <Container>
        <Title title={TITLE} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {FAQ_DATA?.map((item, index) => {
            return (
              <Grid item md={6} xs={12} sx={{ display: 'flex', py: 4}} key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src={'/images/homepage/faq-sections/open.svg'}
                        width={30}
                        height={15}
                        alt="icon"
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: '30.833px',
                        fontWeight: 400,
                        lineHeight: '73.998px',
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item?.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
