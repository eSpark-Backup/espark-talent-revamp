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
  accordionIconStyles,
  accordionSummaryStyles,
  accordionStyles,
  headingStyles,
  detailsStyles,
  descriptionStyles,
  titleStyles,
  containerStyles,
} from '@/components/service/OurServiceStyles';
import { handleChange } from '@/utils';

const ServiceFaq = ({ data, color }) => {
  const [expanded, setExpanded] = useState(null);

  const renderQuestions = (start, end) => {
    return data?.questions
      ?.filter((item) => item?.id % 2 === start)
      ?.slice(0, end)
      ?.map((item, index) => {
        const panel = `panel${item?.id}`;
        return (
          <Accordion
            key={index}
            expanded={expanded === panel}
            onChange={handleChange(panel, setExpanded)}
            sx={accordionStyles(color)}
          >
            <AccordionSummary
              sx={accordionSummaryStyles}
              expandIcon={
                <ArrowDropDownIcon sx={accordionIconStyles(expanded, panel)} />
              }
              aria-controls={`${panel}-content`}
              id={`${panel}-header`}
            >
              <Typography variant="h4" sx={headingStyles(expanded, panel)}>
                {item?.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={detailsStyles}>
              <Typography sx={descriptionStyles}>
                {item?.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      });
  };

  return (
    <Box sx={containerStyles} id="faq">
      <Container>
        <Typography sx={titleStyles}>{data?.title}</Typography>
        <Grid
          container
          spacing={{ lg: 1, md: 3, sm: 0, xs: 0 }}
          justifyContent="center"
        >
          <Grid item md={6} sm={12}>
            {renderQuestions(1, 3)}
          </Grid>
          {data?.questions && data?.questions?.length >= 4 ? (
            <Grid item md={6} sm={12}>
              {renderQuestions(0, 3)}
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceFaq;
