import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { READ_MORE } from '@/constants/blogs/blogs';
import { buttonStyle } from '@/components/homepage/ReadMoreButtonStyles';
const {
  containerBoxStyle,
  typographyAndArrowBoxStyle,
  arrowStyle,
  typographyStyle,
  linkStyle,
} = buttonStyle;

export const ReadMoreButton = ({ slug }) => (
  <Link href={`/blogs/${slug}`} style={linkStyle}>
    <Box className="hoverItem" sx={containerBoxStyle}>
      <Box sx={typographyAndArrowBoxStyle}>
        <ArrowForwardIosIcon sx={arrowStyle} />
      </Box>
      <Typography className="hoverIcon" sx={typographyStyle}>
        {READ_MORE}
      </Typography>
    </Box>
  </Link>
);
