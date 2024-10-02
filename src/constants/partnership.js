export const PARTNERSHIP = {
  listIcon: `/images/wiki/wiki-icon.svg`,
  formContent: {
    title: 'Join Our Program Today',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: ' Your Email Address',
    phoneNumber: 'Phone Number',
    countryLocated: ' Which Country are you Located in?',
    linkedInProfile: 'Your LinkedIn Profile',
    buttonName: 'Schedule a Meeting',
  },
  content: [
    {
      title: 'What Are eSpark Talent Outsourcing Services?',
      description:
        'eSpark Talent, the leading outsourcing service provider, is here for the assist of small  startups to have their mark in the IT industry. With the back of proven tech professionals specializing in modern IoT-related solutions, we have helped more than one hundred clients worldwide. We eagerly welcome you to join hands with the foremost HR outsourcing /outstaffing firm and earn valuable rewards.',
    },
    {
      title: 'How Your Referral Will Benefit Us?',
      description:
        'The aim is to lead the revolution of outsourced professionals in this digital world. And this referral program is going to be the most effective factor for eSpark Talent to become the perfect exemplar of a global HR outsourcing service providing landscape. We want our existing clients, employees, partners, and external individuals to show their presence and join us in this exciting venture. So, refer a friend and reward yourself!',
    },
    {
      title:
        'Here Is Your Reward-<span class="partnerSpan">Our Way Of Saying Thank You! </span>',
      description:
        'All the enthusiastic and energetic individuals ready to offer referrals will earn around 5% of the total contract value for each successfully acquired client. It is all about truthful connection at eSpark Talent. Hence, commissions will be paid once the referred client is contract with eSpark Talent reaches a minimum duration of three months. ',
    },
    {
      title:
        'Referral Program <span class="partnerSpan">Conditions & Policies </span> Note',
      items: [
        'The referrer must provide accurate and complete information for the referred client.',
        'eSpark Talent reserves the right to disqualify referrals that are suspected of fraudulent or unethical behavior.',
        'Referred clients must sign a contract with eSpark Talent for a minimum duration of three months.',
        'In the case of multiple referrers for the same client, the commission will be awarded to the referrer whose submission was received first.',
        'The client referral program is ongoing and has no predetermined end date.',
        'eSpark Talent may, at its discretion, modify or terminate the program with advance notice.',
        'Referrers must submit client referrals through the official referral submission form on the eSpark Talent website',
      ],
    },
  ],
  fields: [
    {
      fullName: [
        {
          type: 'text',
          label: 'First Name',
          key: 'first_name',
          placeHolder: 'First Name',
          boxStyle: 'partner-form-firstname',
          inputStyle: 'input',
          starickStyle: 'starick',
          errorStyle: 'error-message',
          starick: '*',
          typographyStyle: {
            color: '#265579',
            fontWeight: { xs: 400, md: 600 },
            fontSize: '14.448px',
            lineHeight: '19.867px',
            mb: 1,
          },
        },
        {
          type: 'text',
          label: 'Last Name',
          key: 'last_name',
          placeHolder: 'First Name',
          boxStyle: 'partner-form-firstname',
          inputStyle: 'input',
          starickStyle: 'starick',
          errorStyle: 'error-message',
          starick: '*',
          typographyStyle: {
            color: '#265579',
            fontWeight: { xs: 400, md: 600 },
            fontSize: '14.448px',
            lineHeight: '19.867px',
            mb: 1,
          },
        },
      ],
    },
    {
      type: 'email',
      label: 'Your Email Address',
      key: 'email',
      placeHolder: 'Email',
      boxStyle: 'partner-form-your-email-adress-partnership',
      inputStyle: 'input',
      starickStyle: 'starick',
      errorStyle: 'error-message',
      starick: '*',
      typographyStyle: {
        color: '#265579',
        fontWeight: { xs: 400, md: 600 },
        fontSize: '14.448px',
        lineHeight: '19.867px',
        mb: 1,
      },
    },
    {
      id: 'phone_number',
      label: 'Phone Number',
      key: 'phone_number',
      defaultCountry: 'PK',
      placeHolder: 'Phone Number',
      boxStyle: 'parnership-form',
      starickStyle: 'starick',
      errorStyle: 'error-message',
      starick: '*',
      typographyStyle: {
        color: '#265579',
        fontWeight: { xs: 400, md: 600 },
        fontSize: '14.448px',
        lineHeight: '19.867px',
        mt: 1,
      },
    },
    {
      label: 'Which Country are you Located in?',
      key: 'country',
      placeHolder: '',
      boxStyle: 'partner-form-Country-partnership',
      starickStyle: 'starick',
      errorStyle: 'error-message',
      starick: '*',
      typographyStyle: {
        color: '#265579',
        fontWeight: { xs: 400, md: 600 },
        fontSize: '14.448px',
        lineHeight: '19.867px',
        mb: 1,
      },
    },
    {
      type: 'text',
      label: 'Your LinkedIn Profile',
      key: 'linkedin_profile_link',
      placeHolder: 'Enter your LinkedIn profile URL',
      boxStyle: 'partner-form-LinkedIn-Profile-partnership',
      inputStyle: 'input',
      starickStyle: 'starick',
      errorStyle: 'error-message',
      starick: '*',
      typographyStyle: {
        color: '#265579',
        fontWeight: { xs: 400, md: 600 },
        fontSize: '14.448px',
        lineHeight: '19.867px',
        mb: 1,
      },
    },
  ],
};

export const fields = [
  { label: 'First Name', key: 'first_name' },
  { label: 'Last Name', key: 'last_name' },
  { label: 'Your Email Address', key: 'email' },
  { label: 'Phone Number', key: 'phone_number' },
  { label: 'Which Country are you Located in?', key: 'country' },
  { label: 'Your LinkedIn Profile', key: 'linkedin_profile_link' },
];

export const PartnerFormData = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  country: '',
  linkedin_profile_link: '',
};
