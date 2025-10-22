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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ParagraphTitle from '../homepage/ParagraphTitle';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <Box sx={{ pt: '1%', pb: '5%' }} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={{ lg: 1, md: 3, sm: 0, xs: 0 }}>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(0, 3).map((item, index) => {
              const panel = `panel${item.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4, position: 'relative' }}
                >
                  <AccordionSummary
                    sx={{
                      alignItems: 'flex-start',
                    }}
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: 'black',
                          fontSize: { xs: '1.5em', md: '2em' },
                          mt: expanded === panel ? 0 : 0.5,
                          mb: expanded === panel ? 1.5 : 0,
                        }}
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#09114A  !important',
                        fontSize: {
                          lg: '24px',
                          md: '20px',
                          sm: '15px',
                          xs: '15px',
                        },
                        fontWight: { lg: 400, md: 400, sm: 700, xs: 700 },
                        fontWeight: expanded === panel ? 600 : 400,
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: '#09114A !important ',
                        textAlign: 'justify',
                        fontWeight: 400,
                        fontSize: {
                          lg: '18px',
                          md: '15px',
                          sm: '10px',
                          xs: '12px',
                        },
                        lineHeight: '23.69px',
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(3, 6).map((item, index) => {
              const panel = `panel${item.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4, position: 'relative' }}
                >
                  <AccordionSummary
                    sx={{
                      alignItems: 'flex-start',
                    }}
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: 'black',
                          fontSize: { xs: '1.5em', md: '2em' },
                          mt: expanded === panel ? 0 : 0.6,
                          mb: expanded === panel ? 1.9 : 0,
                        }}
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#09114A  !important',
                        fontSize: {
                          lg: '24px',
                          md: '20px',
                          sm: '15px',
                          xs: '15px',
                        },
                        fontWight: { lg: 400, md: 400, sm: 700, xs: 700 },
                        fontWeight: expanded === panel ? 600 : 400,
                      }}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: '#09114A !important ',
                        textAlign: 'justify',
                        fontWeight: 400,
                        fontSize: {
                          lg: '18px',
                          md: '15px',
                          sm: '10px',
                          xs: '12px',
                        },
                        lineHeight: '23.69px',
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
