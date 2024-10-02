export const CLIENT_SLIDER_BREAK_POINTS = {
  280: {
    slidesPerView: 1,
  },
  300: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 3,
  },
  1920: {
    slidesPerView: 4,
  },
};

export const Book_A_Demo_Keys = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  web_url: '',
  no_of_employees: '',
};

export const Book_A_Demo_Data = {
  content: {
    title: `Book a meeting with our experts and <br /> onboard the world’s best talent in minutes.`,
    text: 'Meet our partners who trust our certified tech experts',
    image: '/images/book-a-demo/book a demo image.png',
    alt: 'book-a-demo-image',
    description:
      'Our on-time, cost-efficient, and proven outsourcing services are waiting for you. So, talk to us and onboard your professional outsourcing employees today!',
  },
  form: {
    title: 'Book A Demo',
    subTitle: 'Come first & hire talent without any management fee.',
    description: `<span style="color: #029894; font-weight: 600">Submit</span> the form, and our team will contact you within 24 hours.`,
    fields: [
      {
        label: 'First Name*',
        placeHolder: 'First Name',
        type: 'text',
        key: 'first_name',
      },
      {
        label: 'Last Name*',
        placeHolder: 'Last Name',
        type: 'text',
        key: 'last_name',
      },
      {
        label: 'Phone Number*',
        placeHolder: 'Phone Number',
        type: 'number',
        key: 'phone_number',
      },
      {
        label: 'Business email*',
        placeHolder: 'Business email',
        type: 'email',
        key: 'email',
      },
      {
        label: 'Website URL*',
        placeHolder: 'Website URL*',
        key: 'web_url',
        type: 'text',
      },
      {
        label: 'No of employees you want to hire*',
        placeHolder: 'No of employees',
        key: 'no_of_employees',
        type: 'number',
      },
    ],
  },
};

export const styles = {
  mainBox: { width: '100%', height: '100%', backgroundColor: '#029894' },
  innerBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    pb: { xs: 3, sm: 4, md: 4, lg: 0 },
  },
  textBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    pt: { xs: 3, sm: 5, md: 7, lg: 7, xl: 10 },
    px: { xs: 0, sm: 0 },
    mb: { xs: 2, lg: 0 },
    gap: 1,
  },
  titleStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 600,
    textWrap: 'balance',
    lineHeight: { xs: '30px', sm: '42.289px' },
    fontSize: {
      xs: '27px !important',
      sm: '30px !important',
      md: '32px !important',
    },
    '@media (min-width:600px) and (max-width:767px)': {
      width: '550px',
      fontSize: '24px !important',
    },
    '@media (min-width:425px) and (max-width:599px)': {
      width: '390px',
      fontSize: '20px !important',
    },
    '@media (min-width:300px) and (max-width:424px)': {
      width: '280px',
      fontSize: '20px !important',
      lineHeight: '29px',
    },
    '@media (min-width:280px) and (max-width:299px)': {
      width: '280px',
      fontSize: '19px !important',
      lineHeight: '29px',
    },
  },
  descriptionStyle: {
    width: { xs: '100%', sm: '640px' },
    color: '#FFF',
    textAlign: 'center',
    fontSize: '16px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24.863px',
    '@media (min-width:600px) and (max-width:767px)': {
      width: '550px',
      fontSize: '15px !important',
    },
    '@media (min-width:425px) and (max-width:599px)': {
      width: '390px',
      fontSize: '14px !important',
    },
    '@media (min-width:300px) and (max-width:424px)': {
      width: '280px',
      fontSize: '13px !important',
    },
    '@media (min-width:280px) and (max-width:299px)': {
      fontSize: '12px !important',
    },
  },
  imageStyle: {
    '@media (min-width:425px) and (max-width:599px)': {},
  },
};

export const bookADemoFormStyles = {
  mainContainer: {
    width: 'auto',
    height: '100%',
    maxWidth: '486px',
    display: 'flex',
    alignItems: 'center',
    mx: { md: 'auto' },
    '@media(min-width: 280px) and (max-width:1259px)': {
      mx: 'auto',
    },
  },
  titleStyle: {
    color: '#001C63',
    fontSize: '32px !important',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '42.289px',
  },
  subTitleStyle: {
    color: '#001C63',
    fontSize: '15px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: { xs: '25px', sm: '27.863px' },
  },
  lableStyle: {
    mb: 0.5,
    color: '#029894',
    fontSize: '14.448px !important',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '19.867px',
  },
  inputStyle: {
    width: '100%',
    borderRadius: '5.418px',
    height: '41px',
    border: ' 0.903px solid #D0D4EA',
    background: '#F5F8FA',
    fontSize: '14px',
    pl: 1.5,
    color: 'black',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  submitButtonStyle: {
    mt: 1,
    mb: 3,
    width: '126.416px',
    height: '32.913px',
    borderRadius: '3.92px',
    background: '#001C63',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#029894',
    },
  },
  lastDescriptionStyle: {
    color: '#001C63',
    fontSize: '15px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    linehHeight: '27.863px',
    maxWidth: '430px',
  },
};

export const formBoxStyles = (pathName, book, remote) => {
  const formBox = {
    width: '100%',
    height: { xs: 'auto', sm: '100%' },
    display: 'flex',
    flexDirection: 'column',
    mt: {
      xs: pathName == book || pathName?.includes(remote) ? 0 : 5,
      sm: pathName == book || pathName?.includes(remote) ? 0 : 5,
      md: pathName == book || pathName?.includes(remote) ? 0 : 10,
      lg: 0,
    },
    mb: {
      xs: pathName == book ? 0 : 5,
      sm: 0,
      md: 0,
      lg: 0,
    },
    px: 2,
    alignItems: { md: 'center' },
    justifyContent: { xs: 'auto', lg: 'center' },
    '@media (min-width: 600px) and (max-width: 768px)': {
      justifyContent: 'center',
      px: 2,
      width: '100%',
    },
    '@media (max-width: 425px)': {
      justifyContent: 'center',
      px: 2,
      width: '100%',
    },
  };
  return formBox;
};
