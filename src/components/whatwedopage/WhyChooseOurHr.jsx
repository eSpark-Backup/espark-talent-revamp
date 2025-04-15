import { Box, Container, Typography } from '@mui/material';
import WhyChooseOurHrSlider from '@/components/whatwedopage/WhyChooseOurHrSlider';
import {
  boxContainerStyles,
  outerBoxStyles,
  leftBoxStyles,
  innerBoxStyles,
  titleStyles,
  paragraphStyles,
  rightBoxStyles,
} from '@/components/whatwedopage/WhyChooseOurHrStyles';

const WhyChooseOurHr = ({ data }) => {
  return (
    <Box sx={boxContainerStyles}>
      <Container>
        <Box sx={outerBoxStyles}>
          <Box sx={leftBoxStyles}>
            <Box sx={innerBoxStyles}>
              <Typography variant="h2" sx={titleStyles}>
                {data?.title}
              </Typography>
              <Typography sx={paragraphStyles}>{data?.paragraph}</Typography>
            </Box>
          </Box>
          <Box sx={rightBoxStyles}>
            <WhyChooseOurHrSlider data={data} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseOurHr;
