const NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Page Not Found!',
  desc: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};

const WIKIS_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Oops: This Wiki Not Found',
  desc: 'Please check your link and ensure that you are on the correct page.',
  btnLink: '/esparkwiki',
  btnText: 'Back to eSpark Wiki',
};

const BLOGS_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Oops: This Blog Not Found',
  desc: 'Please check your link and make sure that you are on the right page.',
  btnLink: '/blogs',
  btnText: 'Back to Blogs',
};
const HIRES_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Hiring Page Not Found!',
  desc: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};
const SERVICE_NOT_FOUND_DATA = {
  image: '/images/404Error.png',
  title: 'Error 404: Service Page Not Found!',
  desc: 'The service page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  btnLink: '/',
  btnText: 'Back to Homepage',
};

const containerStyle = {
  py: '5%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const imageBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const titleStyle = {
  mt: 4,
  mb: 3,
  textAlign: 'center',
};
const descStyle = {
  mb: 4,
  px: '25%',
  textAlign: 'center',
};
const buttonBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export {
  NOT_FOUND_DATA,
  WIKIS_NOT_FOUND_DATA,
  BLOGS_NOT_FOUND_DATA,
  HIRES_NOT_FOUND_DATA,
  SERVICE_NOT_FOUND_DATA,
  containerStyle,
  imageBoxStyle,
  titleStyle,
  descStyle,
  buttonBoxStyle,
};
