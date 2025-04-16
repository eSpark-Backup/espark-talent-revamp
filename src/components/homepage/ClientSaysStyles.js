export const mainContainerStyleForClientSlider = (
  pathName,
  book_a_demo_metting
) => {
  return {
    pt: pathName?.includes(book_a_demo_metting)
      ? { xs: '38px', sm: '45px', md: '55px', lg: '60px' }
      : 0,
    pb: { xs: 0, lg: !pathName?.includes(book_a_demo_metting) ? 2 : 0 },
    backgroundColor: pathName?.includes(book_a_demo_metting)
      ? '#F7F8FF'
      : '#fff',
  };
};
