'use client';
import { createTheme } from '@mui/material/styles';

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
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#001C63',
      secondary: '#333',
      info: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '30px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '14px',
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
            backgroundColor: '#029894 !important',
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
          props: { variant: '001C63' },
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
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
      primary: '#001C63',
      secondary: '#333',
      info: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: '50px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '20px',
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
            backgroundColor: '#029894 !important',
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
          props: { variant: '001C63' },
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
});

export { darkTheme, lightTheme };
