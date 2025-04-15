const headingStyles = (hAlign, theme) => ({
  textAlign: hAlign || 'center',
  flexWrap: 'wrap',
  fontSize: '32px !important',
  [theme?.breakpoints?.down('sm')]: {
    fontSize: '20px !important',
  },
});

const paragraphStyles = (pAlign) => ({
  textAlign: pAlign || 'center',
});

const boxStyles = {
  pb: '30px',
  px: { md: '20%', sm: '10%', xs: '2%' },
};

export { headingStyles, paragraphStyles, boxStyles };
