import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import Title from '@/components/how-it-work/Title.jsx';
import HRFirmSuccessSlider from '@/components/how-it-work/HRFirmSuccessSlider.jsx';
import {
  hrBoxStyles,
  imageBoxStyles,
  textBoxStyles,
  descriptionStyles,
  boxContainerStyle,
  gridTextBoxStyles,
} from '@/components/how-it-work/HRFirmSuccessStyles';

const HRFirmSuccess = ({ hrFirm }) => {
  const { heading, subHeading, card } = hrFirm;
  return (
    <Box sx={boxContainerStyle}>
      <Container>
        <Title heading={heading} subHeading={subHeading} variant={`h2`} />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={1}
          className="hrFirmDesktop"
        >
          {card?.map((item, index) => (
            <Grid item sm={6} key={index}>
              <Grid container sx={hrBoxStyles} className="HrBox">
                <Grid item md={5} lg={5}>
                  <Box sx={imageBoxStyles}>
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.image}
                      width={200}
                      height={100}
                      alt={`${item?.alt}`}
                    />
                  </Box>
                </Grid>
                <Grid item md={7} lg={7} sx={gridTextBoxStyles}>
                  <Box sx={textBoxStyles}>
                    <Typography variant="h4" color="secondary">
                      {item?.title}
                    </Typography>
                    <Typography
                      className="typoDescription"
                      sx={descriptionStyles}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Box className="hrFirmResponsive">
          <HRFirmSuccessSlider card={card} />
        </Box>
      </Container>
    </Box>
  );
};

export default HRFirmSuccess;
