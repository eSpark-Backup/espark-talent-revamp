export const CAREERS_FORM_DATA = {
  content: {
    title: `Book a meeting with our experts and <br /> onboard the world’s best talent in minutes.`,
    text: 'Respected Amongst a Network of Global Partners',
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
        label: 'Full Name*',
        placeHolder: 'Full Name',
        type: 'text',
        key: 'full_name',
      },
      {
        label: 'Business email*',
        placeHolder: 'example@domain.com',
        type: 'email',
        key: 'email',
      },
      {
        label: 'Phone Number*',
        placeHolder: 'Phone Number',
        type: 'number',
        key: 'phone_number',
      },
      {
        label: 'City*',
        placeHolder: 'Your City',
        type: 'text',
        key: 'city',
      },
      {
        label: 'When are you available to join?*',
        placeHolder: 'Joining  Date',
        type: 'date',
        key: 'joining_date',
      },
      {
        label: 'Resume*',
        placeHolder: 'Upload your Resume',
        type: 'file',
        key: 'resume',
      },
    ],
  },
};

export const cardContainerStyle = {
  px: 3,
  py: { xs: 3.5, sm: 4, md: 5 },
  my: 2.5,
  rowGap: 2,
  mx: 'auto',
  width: '95%',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '.5px solid #ced4da',
  borderRadius: '20px',
  boxShadow: `5px 5px 15px rgba(0,0,0,.3)`,
  '@media(min-width:900px)': {
    width: '100%',
    flexDirection: 'row',
    boxShadow: 'none',
    borderRadius: '0',
    pl: 4,
  },
};

export const jobTitleBoxStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  '@media(min-width:900px)': {
    width: '300px',
  },
};

export const jobTitleTextStyle = {
  lineHeight: {
    xs: 1.5,
  },
  fontSize: {
    xs: '18px',
    sm: '20px',
    md: '24px',
    lg: '28px',
  },
};

export const jobLocationTextStyle = {
  color: '#000',
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '15px',
    lg: '20px',
  },
};

export const jobDiscriptionBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  pt: 2,
  pr: 1.5,
  gap: 1,
  width: '100%',
  maxWidth: '100%',
  borderTop: '2px solid #ced4da',
  '@media(min-width:900px)': {
    maxWidth: 'calc(100% - 550px)',
    borderTop: 'none',
    gap: 0.5,
    pt: 0,
  },
};

export const jobDiscriptionHeadingStyle = {
  fontSize: {
    xs: '18px',
    sm: '20px',
    md: '24px',
    lg: '28px',
  },
};

export const jobDiscriptionTextStyle = {
  fontSize: {
    xs: '11px',
    sm: '13px',
    md: '15px',
    lg: '20px',
  },
};

export const applyButtonBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  '@media(min-width:900px)': {
    justifyContent: 'center',
    width: '250px',
  },
};

export const applyButtonStyle = {
  width: { xs: '100%', sm: '160px' },
  py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
  px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
  backgroundColor: '#029894',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#029894',
    color: '#fff',
  },
};

export const applyButtonTextStyle = {
  fontWeight: 600,
  fontSize: {
    xs: '15px',
    sm: '12px',
    md: '15px',
    lg: '20px',
  },
  transition: 'none',
  '&:hover': {
    transform: 'none',
  },
};
