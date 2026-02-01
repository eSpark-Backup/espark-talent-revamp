import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { getSize } from '@/utils';

const DemoCta = ({ data, link, target }) => {
  const { title, linkText, styles } = data || {};
  const {
    containerStyle,
    mainBoxStyle,
    titleStyle,
    buttonStyle,
    linkTextStyle,
  } = styles || {};
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down('xs')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme?.breakpoints?.up('lg'));
  const size = getSize(isSmallScreen, isMediumScreen, isLargeScreen);

  return (
    <>
      <Container sx={containerStyle}>
        <Box sx={mainBoxStyle}>
          <Typography variant="h2" sx={titleStyle}>
            {title}
          </Typography>
          <Link href={link} target={target}>
            <Button size={size} sx={buttonStyle}>
              <Typography
                sx={linkTextStyle}
                dangerouslySetInnerHTML={{ __html: linkText }}
              />
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default DemoCta;
