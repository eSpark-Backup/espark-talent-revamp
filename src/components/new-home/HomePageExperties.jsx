'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import ParagraphTitle from '../homepage/ParagraphTitle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from 'next/link';
import Image from 'next/image';

const HomePageExperties = ({ data }) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  // Check if data exists and has services array
  if (!data || !data?.services || !Array.isArray(data?.services)) {
    return <div>No services data available.</div>;
  }

  return (
    <Container sx={{ py: { xs: '50px', sm: '75px' } }}>
      <ParagraphTitle title={data?.title} />
      <Grid container spacing={4}>
        {data?.services?.map((service, index) => (
          <Grid item key={service?.id} xs={12} sm={6} md={6} lg={4}>
            <Accordion
              expanded={expandedAccordion === index}
              onChange={handleChangeAccordion(index)}
              sx={{ border: '1px solid #6A6565', boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={
                  expandedAccordion === index ? (
                    <RemoveIcon color="primary" />
                  ) : (
                    <AddIcon color="secondary" />
                  )
                }
                sx={{
                  display: 'flex',
                  gap: '10px',
                }}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Image
                  src={service?.icon}
                  alt={service?.heading}
                  height={25}
                  width={25}
                />
                <Typography
                  sx={{
                    px: '10px',
                    fontSize: {
                      xs: '16px',
                      sm: '17px',
                      md: '18px',
                    },
                    fontWeight: 400,
                  }}
                >
                  {service?.heading}
                </Typography>
              </AccordionSummary>
              <Divider variant="middle" />
              <AccordionDetails>
                <Grid container direction="column">
                  {service?.listItems &&
                    Array.isArray(service?.listItems) &&
                    service?.listItems.map((item, idx) => (
                      <Grid item key={idx}>
                        <Link href={item.link}>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: '11.91px',
                                sm: '11.91px',
                                md: '16px',
                                lg: '14.28px',
                                xl: '14.28px',
                              },
                              fontWeight: 400,
                              lineHeight: 2.5,
                              color: '#000000',
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePageExperties;
