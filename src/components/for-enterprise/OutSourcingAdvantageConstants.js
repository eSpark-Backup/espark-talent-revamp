import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const outerBoxSx = {
  pt: '2%',
  mb: '2%',
  background: '#3B59980A',
};

const titleTypographySx = {
  fontSize: { xs: '20px', sm: '24px', md: '25px', lg: '28px' },
  lineHeight: { xs: '27px', sm: '30px', md: '42.289px' },
  color: '#001C63',
  fontWeight: 600,
  pr: { sm: '10%' },
  px: { xs: '5%', sm: 0 },
  py: '10px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
};

const paragraphTypographySx = {
  mb: { xs: 1, sm: 0 },
  fontSize: { xs: '14px', sm: '16px', md: '18px' },
  lineHeight: { xs: '20px', sm: '22px', md: '27.363px' },
  pr: { sm: '10%' },
  px: { xs: '5%', sm: 0 },
  py: '10px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
};

const itemsGridContainerSx = {
  display: 'flex',
  mb: 3,
};

const itemBoxSx = {
  display: 'flex',
  alignItems: 'start',
  gap: '10px',
  pb: '10px',
};

const itemTypographySx = {
  color: '#000',
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '13px !important',
    lg: '15px !important',
  },
  fontWeight: '400',
};

const imageGridSx = {
  display: 'flex',
  alignItems: 'center',
};

export {
  theme,
  outerBoxSx,
  titleTypographySx,
  paragraphTypographySx,
  itemsGridContainerSx,
  itemBoxSx,
  itemTypographySx,
  imageGridSx,
};
