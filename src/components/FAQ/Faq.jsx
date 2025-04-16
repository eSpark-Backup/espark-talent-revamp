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
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  boxContainerStyles,
  accordionDetailsStyles,
  headingStyles,
  accordianStyles,
  accordianDropDownIconStyles2,
  accordianDropDownIconStyles,
  accordianSummaryStyles,
} from '@/components/faq/FaqStyles';
import ParagraphTitle from '@/components/homepage/ParagraphTitle';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  /**
   * Handles the expansion state of a panel in an accordion component.
   *
   * @param {string} panel - The identifier for the panel being interacted with.
   * @returns {function} - A function that takes an event and the expansion state,
   *                       and updates the expanded panel accordingly.
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={boxContainerStyles} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={{ lg: 1, md: 3, sm: 0, xs: 0 }}>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(0, 3)?.map((item, index) => {
              const panel = `panel${item?.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={accordianStyles}
                >
                  <AccordionSummary
                    sx={accordianSummaryStyles}
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={accordianDropDownIconStyles(expanded, panel)}
                      />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
                      variant="h4"
                      sx={headingStyles(expanded, panel)}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={accordionDetailsStyles}>
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
                  sx={accordianStyles}
                >
                  <AccordionSummary
                    sx={accordianSummaryStyles}
                    expandIcon={
                      <ArrowDropDownIcon sx={accordianDropDownIconStyles2} />
                    }
                    aria-controls={`${panel}-content`}
                    id={`${panel}-header`}
                  >
                    <Typography
                      variant="h4"
                      sx={headingStyles(expanded, panel)}
                    >
                      {item?.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={accordionDetailsStyles}>
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
