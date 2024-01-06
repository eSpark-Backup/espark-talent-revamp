'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// Light Theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#029894',
    },
    secondary: {
      main: '#001C63',
    },
    info: {
      main: '#5732D6 ',
    },
    warning: {
      main: '#F7F8FB  ',
    },
    danger: {
      main: '#ECECED  ',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#029894',
      secondary: '#001C63',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [poppins.style.fontFamily, 'sans-serif'].join(','),
    h1: {
      fontSize: '20px',
      fontWeight: 700,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h5: {
      fontSize: '22px',
      fontWeight: 600,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    body1: {
      fontSize: '20px',
      [lightTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [lightTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    button: {
      textTransform: 'capitalize',
    },
    link: {
      textDecoration: 'none',
      color: '#029894',
      '&:hover': {
        color: '#001C63',
      },
      '&:active': {
        color: '#029894',
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            textTransform: 'capitalize',
            backgroundColor: '#029894',
            color: '#fff',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#001C63',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            textTransform: 'capitalize',
            backgroundColor: '#001C63 ',
            borderRadius: '5px',
            color: '#fff',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#001C63',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            textTransform: 'capitalize',
            backgroundColor: 'red',
            borderRadius: '5px',
            color: 'secondary',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#001C63',
              color: '#secondary',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'capitalize',
            borderColor: '#029894',
            color: '#029894',
            '&:hover': {
              backgroundColor: '#029894',
              color: '#fff',
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        variant: 'link',
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#029894',
          '&:hover': {
            backgroundColor: '#001C63',
            color: '#029894',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
          margin: '0 auto',
        },
      },
    },
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#029894',
    },
    secondary: {
      main: '#001C63',
    },
    info: {
      main: '#5732D6 ',
    },
    warning: {
      main: '#F7F8FB  ',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#029894',
      secondary: '#001C63',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [poppins.style.fontFamily, 'sans-serif'].join(','),
    h1: {
      fontSize: '20px',
      fontWeight: 700,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h5: {
      fontSize: '22px',
      fontWeight: 600,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    body1: {
      fontSize: '20px',
      [darkTheme.breakpoints.up('xl')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('lg')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '',
      },
      [darkTheme.breakpoints.down('xs')]: {
        fontSize: '',
      },
    },
    button: {
      textTransform: 'capitalize',
    },
    link: {
      textDecoration: 'none',
      color: '#029894',
      '&:hover': {
        color: '#001C63',
      },
      '&:active': {
        color: '#029894',
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            textTransform: 'capitalize',
            backgroundColor: '#001C63 !important',
            borderRadius: '5px',
            color: '#fff',
            position: 'relative',
            '&:hover': {
              borderColor: '#029894',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            textTransform: 'capitalize',
            borderColor: '#029894',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#001C63',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'capitalize',
            borderColor: '#ffffff',
            color: '#001C63',
            '&:hover': {
              backgroundColor: '#001C63',
              color: '#fff',
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        variant: 'link',
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#029894',
          '&:hover': {
            backgroundColor: '#001C63',
            color: '#029894',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
          margin: '0 auto',
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
