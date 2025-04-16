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

export const BOOK_A_DEMO_KEYS = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  web_url: '',
  no_of_employees: '',
};

export const BOOK_A_DEMO_DATA = {
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
        placeHolder: 'example@domain.com',
        type: 'email',
        key: 'email',
      },
      {
        label: 'Website URL*',
        placeHolder: 'https://example.com',
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
