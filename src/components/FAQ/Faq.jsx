'use client';
import React, { useState } from 'react';
import Title from './Title';
import Image from 'next/image';
import { Accordion } from '@mui/material';
import { Container } from '@mui/material';
import { Box, Grid, Typography } from '@mui/material';
import { AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) =>
      isExpanded
        ? [...prevExpanded, panel]
        : prevExpanded.filter((item) => item !== panel)
    );
  };
  return (
    <Box sx={{ mt: 40 }} id="faq">
      <Container>
        <Title title={data?.title} />
        <Grid container>
          {data?.questions?.map((item, index) => {
            const panel = `panel${index}`;
            return (
              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: 'flex', height: '160px', px: '30px' }}
                key={index}
              >
                <Accordion
                  expanded={expanded.includes(panel)}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4 }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src={'/images/homepage/faq-sections/open.svg'}
                        width={30}
                        height={15}
                        alt="icon"
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: '25.833px',
                        fontWeight: expanded.includes(panel) ? 600 : 400,
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: '#09114A',
                        textAlign: 'justify',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '23.69px',
                      }}
                    >
                      {item?.description}
                    </Typography>
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
