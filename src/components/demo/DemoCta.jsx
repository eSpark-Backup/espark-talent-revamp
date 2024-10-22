import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  containerStyle,
  boxStyle,
  typographyStyle,
  buttonStyle,
  typographyButtonStyle,
} from '@/constants/global/demoCta';

const DemoCta = ({ data, link, target }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <>
      <Container sx={containerStyle}>
        <Box sx={boxStyle}>
          <Typography variant="h2" sx={typographyStyle}>
            {data?.title}
          </Typography>
          <Link href={link} target={target}>
            <Button
              size={
                isSmallScreen
                  ? 'small'
                  : isMediumScreen
                    ? 'medium'
                    : isLargeScreen
                      ? 'large'
                      : 'medium'
              }
              sx={buttonStyle}
            >
              <Typography sx={typographyButtonStyle}>
                {data?.linkText}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default DemoCta;
