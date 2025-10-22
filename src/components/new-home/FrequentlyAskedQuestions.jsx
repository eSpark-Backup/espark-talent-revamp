'use client';
import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const FrequetlyAskedQuestions = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    cardDescriptionStyle,
    cardTitleStyle,
    titleStyle,
    titleBoxStyle,
    cardStyle,
    buttonStyle,
  } = styles || {};

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const renderCard = (startIndex, endIndex) => (
    <Grid
      item
      xs={12}
      sm={12}
      md={5}
      lg={5.5}
      gap={2.8}
      display={'flex'}
      flexDirection={'column'}
    >
      {cards
        ?.slice(startIndex, endIndex)
        ?.map(({ title, description, id }, index) => {
          const isOpen = openIndex === id;
          const hasDescription = Boolean(description);
          return (
            <Grid item xs={12} key={index}>
              <Box sx={cardStyle}>
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography sx={cardTitleStyle}>{title}</Typography>
                  <Button
                    onClick={() => handleToggle(id)}
                    disableRipple
                    disableElevation
                    sx={buttonStyle}
                  >
                    {isOpen ? '−' : '+'}
                  </Button>
                </Box>
                {hasDescription && isOpen && (
                  <Typography
                    sx={cardDescriptionStyle}
                    mt={1}
                    dangerouslySetInnerHTML={{ __html: description || '' }}
                  />
                )}
              </Box>
            </Grid>
          );
        })}
    </Grid>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={titleBoxStyle}>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems={'flex-start'}
        maxWidth="1300px"
        gap={2.8}
      >
        {renderCard(0, 3)}
        {renderCard(3, 6)}
      </Grid>
    </Box>
  );
};

export default FrequetlyAskedQuestions;
