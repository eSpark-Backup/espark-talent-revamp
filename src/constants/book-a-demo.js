export const CLIENT_SLIDER_BREAK_POINTS = {
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

export const Book_A_Demo_Data = {
  content: {
    title: `Book a meeting with our experts and <br /> onboard the world’s best talent in minutes.`,
    text: 'Respected Amongst a Network of Global Partners',
    image: '/images/book-a-demo/image.svg',
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
        label: 'Business email*',
        placeHolder: 'Business email',
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
