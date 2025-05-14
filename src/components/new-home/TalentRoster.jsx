'use client';
import { Box, Button, Grid, Typography } from '@mui/material';

const TalentRoster = ({ data }) => {
  const { title, icon, buttonText, link, designations, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    iconStyle,
    titleAndTextBoxStyle,
    cardStyle,
    textBoxStyle,
    imageStyle,
    cardTitleStyle,
    buttonStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={textBoxStyle}>
        <Box sx={titleAndTextBoxStyle}>
          <Typography sx={titleStyle}>
            <Typography component={'span'} sx={iconStyle}>
              <img src={icon} alt="Icon" objectFit="contain" />
            </Typography>
            {title}
          </Typography>
          <Button
            variant="contained"
            onClick={() => window?.open(link, '_blank')}
            sx={buttonStyle}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
      <Grid
        container
        justifyContent={'center'}
        maxWidth={'1350px'}
        gap={3.5}
        width={'90%'}
      >
        {designations?.map(({ title, icon }, index) => (
          <Box key={index} sx={cardStyle}>
            <Box component={'img'} src={icon} sx={imageStyle} />
            <Typography sx={cardTitleStyle}>{title}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TalentRoster;
