import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { faqDescStyles } from '@/components/faq/faqsStyles';

const Faqs = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  /**
   * Handles the expansion and collapse of panels in an accordion component.
   *
   * @param {string} panel - The identifier for the panel being interacted with.
   * @returns {function} - A function that takes an event and a boolean indicating
   * whether the panel is expanded, and updates the state accordingly.
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h3" align="center" color={'#09114A'}>
            {data?.title}
          </Typography>
        </Box>
        <Grid container spacing={4} py={'5%'}>
          {data?.questions?.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={() => handleChange(`panel${i}`)({}, !expanded)}
                >
                  <Typography variant="h4" color={'#09114A'}>
                    {item?.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={faqDescStyles}>
                    {item?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Faqs;
