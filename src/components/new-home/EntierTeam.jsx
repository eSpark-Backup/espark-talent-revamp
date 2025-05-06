import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const EntierTeam = ({ data }) => {
  const { title, text, image, points, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    textStyle,
    imageBoxStyle,
    listBoxStyle,
    avatarStyle,
    avatarTextStyle,
    listTextBoxStyle,
    listHeadingStyle,
    listParagraphStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box>
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography sx={textStyle}>{text}</Typography>
      </Box>
      <Grid container pt={5} alignItems={'center'}>
        <Grid xs={12} md={6} lg={6.5}>
          <Box sx={imageBoxStyle}>
            <Box
              component={'img'}
              src={image}
              sx={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={5.5}>
          <Box sx={listBoxStyle}>
            <List>
              {points?.map((item, index) => (
                <ListItem key={index} sx={{ alignItems: 'flex-start', gap: 2 }}>
                  <ListItemIcon sx={{ minWidth: '32px', color: 'green' }}>
                    <Avatar sx={avatarStyle}>
                      <Typography sx={avatarTextStyle}>{index + 1}</Typography>
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    sx={{ m: 0 }}
                    primary={
                      <Box sx={listTextBoxStyle}>
                        <Typography sx={listHeadingStyle}>
                          {item?.title}
                        </Typography>
                        <Typography sx={listParagraphStyle}>
                          {item?.text}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EntierTeam;
