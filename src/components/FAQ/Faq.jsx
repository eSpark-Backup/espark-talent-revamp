'use client';
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  Container,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import Image from 'next/image';

import Title from './Title';

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
    <Box sx={{ py: '1%' }} id="faq">
      <Container>
        <Title title={data?.title} />
        <Grid container>
          {data?.questions?.map((item, index) => {
            const panel = `panel${index}`;
            return (
              <Grid
                item
                md={6}
                sm={12}
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
