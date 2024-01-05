import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

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
                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
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
