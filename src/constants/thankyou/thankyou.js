export const THANKYOU_DATA = {
  heading: 'Thank You',
  subHeading:
    'Your <span style="font-weight: 700;color: #fff;">Discovery Call</span> is <span style="font-weight:700;color: #fff; ">Booked!</span>',
  subTitle:
    'Take Your <span style="font-weight: 700;color: #fff;">Business</span> To The <span style="font-weight: 700;color: #fff;">Next Level</span>',
  logo: '/images/thankyou/ThankyouPageLogo.webp',
  bgimage: '/images/thankyou/ThankYouPageBG.png',
  description:
    'Your call has been scheduled.<br>We will call you at the date and time you picked.<br>Be sure to add the appointment to your calendar NOW!',
  stepstitle: 'How It Works',
  steps: [
    {
      title: 'Call + Requirements',
      icon: '/images/thankyou/step1.webp',
      items: [
        `Discovery Call at Selected Date & Time`,
        `We will get your Candidate Requirements from you`,
        `Walk away with a Custom Job Description`,
      ],
    },
    {
      title: 'Candidate Interview',
      icon: '/images/thankyou/step2.webp',
      items: [
        `90% + Placement Success Rate`,
        `We'll Handpick the Perfect Candidate for you`,
        `Schedule an Interview with your Candidate`,
      ],
    },
    {
      title: 'Get Started',
      icon: '/images/thankyou/step3.webp',
      items: [
        `Sign your Contract`,
        `Activate Massive Growth`,
        `On - Boarding Call with your Dedicated Customer Success Manager`,
      ],
    },
  ],
  styles: {
    mainBoxStyle: (data) => ({
      py: '50px',
      backgroundImage: `url(${data?.bgimage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: '#fff',
    }),
    innerBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    headingStyle: {
      fontSize: { xs: '30px', md: '35px' },
      fontWeight: '700',
      textAlign: 'center',
    },
    subHeadingStyle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
    },
    subTitleStyle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
      pb: '15px',
    },
    descriptionStyle: {
      fontSize: { xs: '14px', md: '16px' },
      fontWeight: '400',
      lineHeight: 2,
      textAlign: 'center',
      px: { xs: '5%', md: '0' },
    },
    stepsTitle: {
      fontSize: { xs: '24px', md: '32px' },
      fontWeight: '500',
      textAlign: 'center',
      pt: '20px',
      pb: '20px',
    },
    imageBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pb: '20px',
    },
    gridContainerStyle: { justifyContent: 'center' },
    stepTitle: {
      fontSize: { xs: '18px', md: '20px' },
      fontWeight: '700',
      pb: '15px',
      textAlign: 'center',
    },
    itemBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      px: '10%',
    },
    listIconStyle: {
      minWidth: 'unset',
      mr: { lg: '20px', md: '20px', sm: '20px' },
    },
    itemTyporaphyStyle: {
      fontSize: { xs: '12px', md: '13px' },
      fontWeight: '400',
      lineHeight: 1.8,
    },
  },
};
