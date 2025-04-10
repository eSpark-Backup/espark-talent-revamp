'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import ParagraphTitle from '../homepage/ParagraphTitle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { checkingExpendedAccordion, handleChangeAccordion } from '@/utils';

const HomePageExperties = ({ data }) => {
  const pathName = usePathname();
  const hire_remote_developers = checkingExpendedAccordion(
    pathName,
    '/hire-remote-developers'
  );
  const { title, services, styles } = data || {};
  const {
    containerStyle,
    accordionStyle,
    accrodionSummaryStyle,
    imageStyle,
    serviceTypographyStyle,
    titleStyle,
  } = styles || {};
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const renderServiceText = (item, idx) => (
    <Grid item key={idx}>
      <Link href={item?.link}>
        <Typography sx={titleStyle(hire_remote_developers)}>
          {item?.title}
        </Typography>
      </Link>
    </Grid>
  );

  const renderService = (service, index) => (
    <Grid item key={service?.id} xs={12} sm={6} md={6} lg={4}>
      <Accordion
        expanded={checkingExpendedAccordion(expandedAccordion, index)}
        onChange={handleChangeAccordion(index, setExpandedAccordion)}
        sx={accordionStyle}
      >
        <AccordionSummary
          expandIcon={
            checkingExpendedAccordion(expandedAccordion, index) ? (
              <RemoveIcon color="primary" />
            ) : (
              <AddIcon color="secondary" />
            )
          }
          sx={accrodionSummaryStyle}
          aria-controls={`panel${index}bh-content`}
          id={`panel${index}bh-header`}
        >
          <Box
            component={'img'}
            src={
              checkingExpendedAccordion(expandedAccordion, index)
                ? service?.activeIcon
                : service?.icon
            }
            alt={service?.heading}
            sx={imageStyle}
          />
          <Typography sx={serviceTypographyStyle(expandedAccordion, index)}>
            {service?.heading}
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <Grid container direction="column">
            {service?.listItems &&
              Array?.isArray(service?.listItems) &&
              service?.listItems?.map(renderServiceText)}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );

  return (
    <Container sx={containerStyle}>
      <ParagraphTitle title={title} />
      {!data || !services || !Array?.isArray(services) ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          No services data available.
        </Box>
      ) : (
        <Grid container spacing={4}>
          {data?.services?.map(renderService)}
        </Grid>
      )}
    </Container>
  );
};

export default HomePageExperties;
