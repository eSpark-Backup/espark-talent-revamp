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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ServiceFaq = ({ data, color }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const renderQuestions = (start, end) => {
    return data?.questions
      ?.filter((item) => item.id % 2 === start)
      .slice(0, end)
      .map((item, index) => {
        const panel = `panel${item.id}`;
        return (
          <Accordion
            key={index}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
            sx={{
              mb: { xs: 1, md: 4 },
              position: 'relative',
              backgroundColor: color || '#F7F8FF',
            }}
          >
            <AccordionSummary
              sx={{
                alignItems: 'flex-start',
              }}
              expandIcon={
                expanded === 'panel' ? (
                  <ArrowDropUpIcon
                    sx={{
                      color: 'black',
                      fontSize: { xs: '1.5em', md: '2em' },
                    }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    sx={{
                      color: 'black',
                      fontSize: { xs: '1.5em', md: '2em' },
                    }}
                  />
                )
              }
              aria-controls={`${panel}-content`}
              id={`${panel}-header`}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#09114A  !important',
                  fontSize: {
                    lg: '21.94px',
                    md: '20px',
                    sm: '15px',
                    xs: '10.85px',
                  },
                  fontWeight: expanded === panel ? 600 : 400,
                  lineHeight: { xs: '12.86px', md: '26px' },
                }}
              >
                {item?.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mt: { xs: '-15px', md: '0px' } }}>
              <Typography
                sx={{
                  color: '#09114A !important ',
                  // textAlign: 'justify',
                  fontWeight: 400,
                  fontSize: {
                    lg: '18px',
                    md: '15px',
                    sm: '10px',
                    xs: '10px',
                  },
                  lineHeight: { xs: '15px', md: '23.69px' },
                  pr: '50px',
                }}
              >
                {item?.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      });
  };

  return (
    <Box sx={{ pt: { xs: '0%', md: '1%' }, pb: '5%' }} id="faq">
      <Container>
        <Typography
          sx={{
            textAlign: 'center',
            flexWrap: 'wrap',
            fontSize: { xs: '20px', md: '32px ' },
            fontWeight: 700,
            color: '#001C63',
            pb: { lg: 4, md: 2, sm: 4, xs: 3 },
          }}
        >
          {data?.title}
        </Typography>
        <Grid
          container
          spacing={{ lg: 1, md: 3, sm: 0, xs: 0 }}
          justifyContent="center"
        >
          <Grid item md={6} sm={12}>
            {renderQuestions(1, 3)}
          </Grid>
          {data?.questions && data.questions.length >= 4 ? (
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
