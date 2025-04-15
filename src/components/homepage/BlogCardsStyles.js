const noDataStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  my: 0,
};

const gridContainerStyles = {
  pt: { xs: '10%', sm: '8%', md: '2%' },
  pb: { xs: '0%', md: '2%' },
};

const paginationStyles = {
  '& .MuiPaginationItem-root': { borderRadius: '10px' },
};

const paginationItemStyles = {
  borderRadius: '10px',
  '&.Mui-selected': {
    backgroundColor: 'primary.main',
    color: 'white',
  },
};

const paginationWrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  mt: 1,
  mb: 5,
};

const blogCardBoxStyles = (isSmallScreen) => ({
  mx: isSmallScreen ? 'auto' : 0,
});
export {
  noDataStyles,
  gridContainerStyles,
  paginationStyles,
  paginationItemStyles,
  paginationWrapperStyles,
  blogCardBoxStyles,
};
