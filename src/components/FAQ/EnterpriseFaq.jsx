'use client';

import { useState } from 'react';
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
import {
  accordionStyle,
  accordionSummaryIconStyle,
  accordionHeadingStyle,
  accordionDetailsStyle,
  boxContainerStyle,
} from '@/components/faq/EnterpriseFaqStyles';
import ParagraphTitle from '@/components/homepage/ParagraphTitle';
import Image from 'next/image';

const EnterpriseFaq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme?.breakpoints?.up('lg'));

  return (
    <Box sx={boxContainerStyle} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={{ lg: 2, md: 2, sm: 0, xs: 0 }}>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(0, 3)?.map((item, index) => {
              const panel = `panel${item?.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={accordionStyle}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        quality="85"
                        priority={true}
                        src={'/images/homepage/faq-sections/open.svg'}
                        width={
                          isSmallScreen
                            ? 15
                            : isMediumScreen
                              ? 20
                              : isLargeScreen
                                ? 20
                                : 20
                        }
                        height={
                          isSmallScreen
                            ? 15
                            : isMediumScreen
                              ? 20
                              : isLargeScreen
                                ? 20
                                : 20
                        }
                        alt="icon"
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <>
                      <Typography
                        variant="h4"
                        sx={accordionHeadingStyle(expanded, panel)}
                      >
                        {item?.heading}
                      </Typography>
                    </>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={accordionDetailsStyle}>
                      {item?.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(3, 6)?.map((item, index) => {
              const panel = `panel${item?.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={accordionStyle}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        quality="85"
                        priority={true}
                        src={'/images/homepage/faq-sections/open.svg'}
                        {...accordionSummaryIconStyle}
                        alt="icon"
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <>
                      <Typography sx={accordionHeadingStyle(expanded, panel)}>
                        {item?.heading}
                      </Typography>
                    </>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={accordionDetailsStyle}>
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

export default EnterpriseFaq;
