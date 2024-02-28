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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ParagraphTitle from '../homepage/ParagraphTitle';
import Image from 'next/image';

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(null);
 const bigImage = <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.10357 11.2241L0.535569 2.65608C0.417389 2.5379 0.329149 2.41027 0.270847 2.27318C0.212545 2.13609 0.182606 1.98798 0.18103 1.82883C0.18103 1.51368 0.289755 1.23793 0.507205 1.00157C0.724655 0.765212 1.00986 0.647034 1.36282 0.647034H19.3261C19.6806 0.647034 19.9666 0.765212 20.1841 1.00157C20.4015 1.23793 20.5095 1.51368 20.5079 1.82883C20.5079 1.90761 20.3897 2.18337 20.1533 2.65608L11.5853 11.2241C11.3884 11.4211 11.1914 11.5589 10.9944 11.6377C10.7975 11.7165 10.5808 11.7559 10.3445 11.7559C10.1081 11.7559 9.89144 11.7165 9.69447 11.6377C9.49751 11.5589 9.30054 11.4211 9.10357 11.2241Z" fill="black" />
  </svg>;
  const smallImage = <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.43589 6.02706L1.09749 1.68867C1.03765 1.62883 0.992968 1.5642 0.963447 1.49478C0.933926 1.42537 0.918767 1.35037 0.917969 1.26979C0.917969 1.11021 0.973022 0.970586 1.08313 0.850906C1.19323 0.731226 1.33765 0.671387 1.51637 0.671387H10.612C10.7916 0.671387 10.9364 0.731226 11.0465 0.850906C11.1566 0.970586 11.2112 1.11021 11.2104 1.26979C11.2104 1.30968 11.1506 1.44931 11.0309 1.68867L6.69253 6.02706C6.59279 6.1268 6.49306 6.19661 6.39333 6.2365C6.29359 6.2764 6.18389 6.29634 6.06421 6.29634C5.94453 6.29634 5.83482 6.2764 5.73509 6.2365C5.63535 6.19661 5.53562 6.1268 5.43589 6.02706Z" fill="black"/>
</svg>;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
 
  return (
    <Box sx={{ pt: '1%',pb: '5%' }} id="faq">
      <Container>
        <ParagraphTitle title={data?.title} />
        <Grid container spacing={{ lg: 4, md: 3, sm: 0, xs: 0 }}>
          <Grid item md={6} sm={12}>
            {data?.questions?.slice(0, 3).map((item, index) => {
              const panel = `panel${item.id}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4 }}
                >
                  <AccordionSummary
                    expandIcon={bigImage}
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
                        pr:'5%',
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
            {data?.questions?.slice(3, 6).map((item, index) => {
              const panel = `panel${item.id}`;
              return (
                  <Accordion
                  key={index}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{ mb: 4 }}
                >
                  <AccordionSummary
                    expandIcon={
                      <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.10357 11.2241L0.535569 2.65608C0.417389 2.5379 0.329149 2.41027 0.270847 2.27318C0.212545 2.13609 0.182606 1.98798 0.18103 1.82883C0.18103 1.51368 0.289755 1.23793 0.507205 1.00157C0.724655 0.765212 1.00986 0.647034 1.36282 0.647034H19.3261C19.6806 0.647034 19.9666 0.765212 20.1841 1.00157C20.4015 1.23793 20.5095 1.51368 20.5079 1.82883C20.5079 1.90761 20.3897 2.18337 20.1533 2.65608L11.5853 11.2241C11.3884 11.4211 11.1914 11.5589 10.9944 11.6377C10.7975 11.7165 10.5808 11.7559 10.3445 11.7559C10.1081 11.7559 9.89144 11.7165 9.69447 11.6377C9.49751 11.5589 9.30054 11.4211 9.10357 11.2241Z" fill="black"/>
</svg>

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
                        pr:'5%',
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
