import { styled } from '@mui/material/styles';

export const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    h1: {
      fontSize: `calc(50px * 0.6)`,
    },
    h2: {
      fontSize: `calc(32px * 0.6)`,
    },
    h3: {
      fontSize: `calc(28px * 0.6)`,
    },
    h4: {
      fontSize: `calc(18px * 0.6)`,
    },
    h5: {
      fontSize: `calc(22px * 0.6)`,
    },
    h6: {
      fontSize: `calc(16px * 0.6)`,
    },
    p: {
      fontSize: `calc(20px * 0.6)`,
    },
  },
  [theme.breakpoints.up('sm')]: {
    h1: {
      fontSize: `calc(50px * 0.7)`,
    },
    h2: {
      fontSize: `calc(32px * 0.7)`,
    },
    h3: {
      fontSize: `calc(28px * 0.7)`,
    },
    h4: {
      fontSize: `calc(18px * 0.7)`,
    },
    h5: {
      fontSize: `calc(22px * 0.7)`,
    },
    h6: {
      fontSize: `calc(16px * 0.7)`,
    },
    p: {
      fontSize: `calc(20px * 0.7)`,
    },
  },
  [theme.breakpoints.up('md')]: {
    h1: {
      fontSize: `calc(50px * 0.8)`,
    },
    h2: {
      fontSize: `calc(32px * 0.8)`,
    },
    h3: {
      fontSize: `calc(28px * 0.8)`,
    },
    h4: {
      fontSize: `calc(18px * 0.8)`,
    },
    h5: {
      fontSize: `calc(22px * 0.8)`,
    },
    h6: {
      fontSize: `calc(16px * 0.8)`,
    },
    p: {
      fontSize: `calc(20px * 0.8)`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    h1: {
      fontSize: `calc(50px * 0.9)`,
    },
    h2: {
      fontSize: `calc(32px * 0.9)`,
    },
    h3: {
      fontSize: `calc(28px * 0.9)`,
    },
    h4: {
      fontSize: `calc(18px * 0.9)`,
    },
    h5: {
      fontSize: `calc(22px * 0.9)`,
    },
    h6: {
      fontSize: `calc(16px * 0.9)`,
    },
    p: {
      fontSize: `calc(20px * 0.9)`,
    },
  },
  [theme.breakpoints.up('xl')]: {
    h1: {
      fontSize: '50px',
    },
    h2: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '28px',
    },
    h4: {
      fontSize: '18px',
    },
    h5: {
      fontSize: '22px',
    },
    h6: {
      fontSize: '16px',
    },
  },
  [theme.breakpoints.up('xl')]: {
    h1: {
      fontSize: '50px',
    },
    h2: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '28px',
    },
    h4: {
      fontSize: '18px',
    },
    h5: {
      fontSize: '22px',
    },
    h6: {
      fontSize: '16px',
    },
  },
}));

export default Root;
