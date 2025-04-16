export const ACHIEVEMENTS_STYLES = {
  mainBoxStyle: (isSpecialPath, isMeetingPath, isDemo) => ({
    background: {
      xs: isSpecialPath || isMeetingPath || isDemo ? 0 : '20px',
      md: isMeetingPath || isSpecialPath || isDemo ? null : '40px',
    },
  }),
  titleAndImagesBoxStyle: {
    py: '2.5%',
    px: '1%',
    border: '1px solid rgba(170, 169, 169, 0.41)',
  },
  titleBoxStyle: { px: { xs: '20%', md: '0' }, pt: '20px' },
  commonBoxStyles: {
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'noWrap' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 4, sm: 3, md: 5 },
    px: { xs: 2 },
  },
  renderImageBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBoxStyle: {
    width: { xs: '100px', sm: '120px', lg: '150px' },
    height: 'auto',
  },
  titleAndRenderImageBoxStyle: {
    background: '#F7F8FB',
    py: '1.5%',
    pb: { xs: '40px', sm: '70px', lg: '50px' },
    '@media (max-width:424px)': { pb: '30px' },
    '@media (min-width:425px) and (max-width:480px)': { pb: '55px' },
  },
};
