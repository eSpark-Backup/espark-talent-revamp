import { Box, Button, Stack, Typography } from '@mui/material';
import { JOINT_ESPARK_CREW_HEADING_DATA } from '@/constants/join-espark-crew';

const FooterCTA = ({ handleClick }) => {
  const { footerSecHeading, footerSecDescription, jointusSecHeading } =
    JOINT_ESPARK_CREW_HEADING_DATA;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#029894',
        backgroundImage: [
          '',
          '',
          `url(/images/footer-cta-main-bg.png)`,
          `url(/images/footer-cta-main-bg.png)`,
        ],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '30px',
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ width: { sm: '100%', md: '80%', lg: '70%' } }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#ECECED',
            fontSize: {
              lg: '50px',
              md: '32px',
              sm: '20px',
              xs: '14px',
            },
            '@media (min-width: 280px) and (max-width:359px)': {
              fontSize: '12px',
              lineHeight: 1.1,
            },
            '@media (min-width: 426px) and (max-width:459px)': {
              fontSize: '13px',
              lineHeight: 1,
            },
            lineHeight: 1.3,
            fontWeight: 700,
            py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
            pb: { lg: '1%', md: '1%', sm: '2.5%', xs: '2.5%' },
          }}
        >
          {footerSecHeading}
        </Typography>
        <Typography
          sx={{
            color: '#ECECED',
            fontSize: {
              lg: '24px',
              md: '20px',
              sm: '10px',
              xs: '10px',
            },
            '@media (min-width: 280px) and (max-width:359px)': {
              fontSize: '8px',
            },
            lineHeight: 1.3,
            fontWeight: 400,
            py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
            pb: { lg: '3.5%', md: '3%', sm: '3%', xs: '3%' },
            textAlign: 'center',
          }}
        >
          {footerSecDescription}
        </Typography>

        <Box
          sx={{
            mx: {
              xs: 'auto',
              sm: 'unset',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            },
          }}
          py={{
            xs: '14px',
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '20px',
          }}
        >
          <Button
            onClick={handleClick}
            sx={{
              border: '1px solid #fff',
              backgroundColor: 'transparent',
              '&:hover': {
                color: '#029894',
                backgroundColor: '#ffffff',
              },
              py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
              px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
              height: '50px',
              width: '160px',
              color: '#fff',
              fontWeight: '700',
            }}
          >
            {jointusSecHeading}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default FooterCTA;
