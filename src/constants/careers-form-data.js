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
