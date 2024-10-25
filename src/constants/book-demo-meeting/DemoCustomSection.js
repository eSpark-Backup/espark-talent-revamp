const containerSx = {
  mx: 'auto',
  maxWidth: '900px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  '@media(min-width: 280px) and (max-width: 980px)': {
    maxWidth: 'auto',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    rowGap: '50px',
  },
  pt: 10,
  '@media(max-width: 425px)': {
    pt: 8,
  },
};

const relativeBoxSx = {
  position: 'relative',
  height: 'auto',
  width: 'auto',
  '@media(min-width: 425px) and (max-width: 980px)': {
    mx: 'auto',
    width: '401px',
  },
  '@media(min-width: 280px) and (max-width: 424px)': {
    mx: 'auto',
    width: 'auto',
  },
};

const flexBoxSx = {
  position: 'relative',
  zIndex: 1,
  mx: 'auto',
  maxWidth: '401px',
  height: '224px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  background: '#fff',
  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
  '@media(max-width: 425px)': {
    mx: 1.2,
    height: 'auto',
  },
};

const topBoxSx = {
  width: 'auto',
  height: '89.498px',
  display: 'flex',
  borderRadius: '20px 20px 0 0 ',
  background: '#F7F8FB',
  p: '20px',
  alignItems: 'center',
};

const imgSx = {
  width: 42,
  height: 42,
  '@media(max-width: 425px)': {
    width: 30,
    height: 30,
  },
  '@media(max-width: 280px)': {
    width: 25,
    height: 25,
  },
};

const titleSx = {
  ml: 2,
  color: '#001C63',
  fontSize: '20px',
  fontWeight: 600,
  '@media(max-width: 425px)': {
    fontSize: '18px',
  },
  '@media(max-width: 280px)': {
    fontSize: '16px',
  },
};

const paragraphSx = {
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '23px',
  '@media(max-width: 425px)': {
    fontSize: '15px',
  },
  '@media(max-width: 280px)': {
    fontSize: '13px',
  },
};
const paragraphBoxStyle = {
  p: '10px 20px 20px 20px',
  borderRadius: '0 0 20px 20px',
};

export {
  containerSx,
  relativeBoxSx,
  flexBoxSx,
  topBoxSx,
  imgSx,
  titleSx,
  paragraphSx,
  paragraphBoxStyle,
};
