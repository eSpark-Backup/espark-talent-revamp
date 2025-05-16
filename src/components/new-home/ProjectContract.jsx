'use client';
import React from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import DottedLineWithDiamond from './DottedLineWithDiamond';

const ProjectContract = ({ data }) => {
  const { title, description, image, link, buttonText, listItems, styles } =
    data || {};

  const {
    mainBoxStyle,
    firstGridBoxStyle,
    titleAndDescriptionBoxStyle,
    textStyle,
    descriptionStyle,
    imageBoxStyle,
    imageStyle,
    secondGridBoxStyle,
    listStyle,
    listItemStyle,
    listItemIconStyle,
    vectorStyle,
    listItemTextStyle,
    rightVectorBoxStyle,
    rightVectorStyle,
    buttonStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Grid
        container
        spacing={0}
        justifyContent={'center'}
        gap={{ xs: 3, md: 0 }}
      >
        <Grid xs={12} md={5.5} lg={5.5}>
          <Box sx={firstGridBoxStyle}>
            <Box sx={titleAndDescriptionBoxStyle}>
              <Typography sx={textStyle}>{title}</Typography>
              <Typography sx={descriptionStyle}>{description}</Typography>
            </Box>
            <Box sx={imageBoxStyle}>
              <Box component={'img'} src={image} sx={imageStyle} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={5} lg={6}>
          <Box sx={secondGridBoxStyle}>
            <List sx={listStyle}>
              {listItems?.map(({ icon, text, vector, vector_right }, index) => (
                <ListItem key={index} sx={listItemStyle}>
                  <ListItemIcon sx={listItemIconStyle}>
                    <Box component={'img'} src={icon} />
                    <Box component={'img'} src={vector} sx={vectorStyle} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={listItemTextStyle}>{text} </Typography>
                    }
                  />
                  {vector_right && (
                    <Box sx={rightVectorBoxStyle}>
                      <Box sx={rightVectorStyle}>
                        <DottedLineWithDiamond />
                      </Box>
                      <Button
                        variant="contained"
                        onClick={() => window?.open(link, '_blank')}
                        sx={buttonStyle}
                      >
                        {buttonText}
                      </Button>
                    </Box>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectContract;
