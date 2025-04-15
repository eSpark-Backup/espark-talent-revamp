import { Box, Container, Typography } from '@mui/material';
import {
  containerStyles,
  outerBoxStyles,
  imageBoxStyles,
  imageStyles,
  contentBoxStyles,
  innerContentStyles,
  titleStyles,
  descriptionStyles,
  buttonContainerStyles,
} from '@/components/whatwedopage/QuestionAnswerStyles.js';
import ESparkButton from '@/components/global/eSparkButton';

const QuestionAnswer = ({ data }) => {
  return (
    <Box sx={containerStyles}>
      <Container>
        <Box sx={outerBoxStyles}>
          <Box sx={imageBoxStyles}>
            <Box
              component={'img'}
              sx={imageStyles}
              src={'/images/whatwedo/question-answer/QuesAns.png'}
              alt="We make easy for companies to expand their network with eSpark Talent"
            />
          </Box>

          <Box sx={contentBoxStyles}>
            <Box sx={innerContentStyles}>
              <Typography variant="h2" sx={titleStyles}>
                {data?.title}
              </Typography>
              <Typography sx={descriptionStyles}>
                {data?.descrioption}
              </Typography>
              <Box sx={buttonContainerStyles}>
                <ESparkButton
                  title={data?.buttonLabel}
                  link={data?.buttonLink}
                  target="_blank"
                  color={'secondary'}
                  size={{ xs: '140px', lg: '190px' }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default QuestionAnswer;
