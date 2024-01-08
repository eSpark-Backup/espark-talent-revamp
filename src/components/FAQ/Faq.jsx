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

import ParagraphTitle from '../homepage/ParagraphTitle';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ py: '1%' }} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={4}>
          {data?.questions?.map((item, index) => {
            const panel = `panel${index}`;
            return (
              <Grid item md={6} sm={12} key={index}>
                <Accordion
                  expanded={expanded === panel}
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
                      variant="h4"
                      sx={{
                        color: '#09114A',
                        fontSize: '1.5rem',
                        fontWeight: expanded === panel ? 600 : 400,
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
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
