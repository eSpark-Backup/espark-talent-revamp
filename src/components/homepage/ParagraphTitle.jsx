'use client';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  headingStyles,
  paragraphStyles,
  boxStyles,
} from './ParagraphTitleStyles';

const ParagraphTitle = ({
  title,
  paragraph,
  hVar,
  hColor,
  pColor,
  pVar,
  hAlign,
  pAlign,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={boxStyles}>
        <Typography
          variant={hVar || 'h2'}
          color={hColor || 'secondary'}
          sx={headingStyles(hAlign, theme)}
        >
          {title}
        </Typography>
        <Typography
          variant={pVar || 'body1'}
          color={pColor || 'secondary'}
          sx={paragraphStyles(pAlign)}
        >
          {paragraph}
        </Typography>
      </Box>
    </>
  );
};

export default ParagraphTitle;
