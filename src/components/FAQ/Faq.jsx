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
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

import ParagraphTitle from '../homepage/ParagraphTitle';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ py: '1%' }} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={{ lg: 4, md: 3, sm: 0, xs: 0 }}>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(0, 3).map((item) => {
              const panel = `panel${item.id}`;
              return (
                <Accordion
                  key={item.id}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4 }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src={'/images/homepage/faq-sections/open.svg'}
                        width={
                          isSmallScreen
                            ? 15
                            : isMediumScreen
                              ? 23
                              : isLargeScreen
                                ? 30
                                : 30
                        }
                        height={
                          isSmallScreen
                            ? 8
                            : isMediumScreen
                              ? 10
                              : isLargeScreen
                                ? 15
                                : 15
                        }
                        alt="icon"
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
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
                    >
                      {item?.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(3, 6).map((item) => {
              const panel = `panel${item.id}`;
              return (
                <Accordion
                  key={item.id}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4 }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src={'/images/homepage/faq-sections/open.svg'}
                        width={
                          isSmallScreen
                            ? 15
                            : isMediumScreen
                              ? 24
                              : isLargeScreen
                                ? 30
                                : 30
                        }
                        height={
                          isSmallScreen
                            ? 8
                            : isMediumScreen
                              ? 10
                              : isLargeScreen
                                ? 15
                                : 15
                        }
                        alt="icon"
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
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
                    >
                      {item?.description}
                    </Typography>
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
