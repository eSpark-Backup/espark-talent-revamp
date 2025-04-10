import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const LetsConnect = ({ data }) => {
  const { title, descrcipton, btnLink, btnText, styles } = data || {};
  const {
    mainStyle,
    titleTextStyle,
    descTypographyStyle,
    btnStyle,
    btnTypographyStyle,
  } = styles || {};

  return (
    <>
      {data ? (
        <Box sx={mainStyle}>
          <Container>
            <Box py={1}>
              <Typography
                variant="h3"
                textAlign="center"
                sx={titleTextStyle}
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                sx={descTypographyStyle}
              >
                {descrcipton}
              </Typography>
              <Box
                justifyContent={'center'}
                textAlign="center"
                sx={{ py: { lg: 3, xs: 1 } }}
              >
                <Link href={btnLink}>
                  <Button variant="contained" sx={btnStyle}>
                    <Typography sx={btnTypographyStyle}>{btnText}</Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : null}
    </>
  );
};

export default LetsConnect;
