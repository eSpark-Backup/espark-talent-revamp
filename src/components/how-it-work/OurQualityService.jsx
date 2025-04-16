import { Box, Container, Grid, Typography } from '@mui/material';
import {
  containerStyles,
  gridContainerStyles,
  cardStyles,
  headingStyles,
  subHeadingStyles,
  headingBoxStyles,
  gridStyles,
} from '@/components/how-it-work/OurQualityServiceStyles';

const OurQualityService = ({ ourQualityService }) => {
  const { card, heading, subHeading } = ourQualityService;
  return (
    <Box sx={containerStyles}>
      <Container>
        <Grid container {...gridContainerStyles.container}>
          <Grid item md={6}>
            <Grid container spacing={2} sx={gridContainerStyles.item1}>
              {card?.map((item, index) => (
                <Grid item xs={12} md={12} lg={6} key={index} sx={gridStyles}>
                  <Box sx={cardStyles.container}>
                    <Typography sx={cardStyles.typography}>
                      {item?.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={gridContainerStyles.item2}>
            <Box sx={headingBoxStyles}>
              <Typography variant="h2" sx={headingStyles}>
                {heading}
              </Typography>
              <Typography sx={subHeadingStyles}>{subHeading}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurQualityService;
