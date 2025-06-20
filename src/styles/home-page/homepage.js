export const PROCESS_DATA = {
  styles: {
    mainBoxStyle: {
      mx: 'auto',
      maxWidth: { xs: 'auto', md: '1000px', lg: '1100px' },
      py: { sm: 9, md: 10 },
      px: { sm: 5, md: 4, lg: 0 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        px: 2,
        py: 7,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        px: 2,
        py: 5,
      },
      '@media (min-width: 280px) and (max-width: 599px)': {
        px: 2,
        py: 5,
      },
    },
    titleAndSubTitleBoxStyle: {
      width: '100%',
      textAlign: 'center',
      mb: { xs: 4, lg: 4 },
      '@media (min-width: 600px) and (max-width: 719px)': {
        mb: 2,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        mb: 1,
      },
    },
    titleStyle: {
      color: '#001C63',
      fontSize: { sm: '28px !important', md: '32px !important' },
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: { sm: '35px', md: '40.106px' },
      '@media (min-width: 600px) and (max-width: 767px)': {
        fontSize: '23px !important',
        lineHeight: '35px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '23px !important',
        lineHeight: '22px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '20px !important',
        lineHeight: '27px',
      },
    },
    subTitleStyle: {
      color: '#001C63',
      fontSize: { sm: '15px !important', md: '18px !important' },
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '39.602px',
      '@media (min-width: 600px) and (max-width: 719px)': {
        fontSize: '15px !important',
        lineHeight: '35px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '12px !important',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px !important',
        lineHeight: '25px',
      },
    },
    processBoxStyle: (process) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      py: { sm: 0 },
      px: { sm: 0 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        px: 1,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        py: 2,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        py: 1.5,
        gap: 2,
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        flexDirection: 'column',
        alignItems: process?.alignment == 'right' ? 'end' : 'start',
        pb: 2,
      },

      justifyContent: `${process?.alignment == 'right' ? 'end' : 'start'}`,
      gap: 3,
    }),
    imageBoxStyle: (process) => ({
      display: 'flex',
      justifyContent: 'start',
      order: `${process?.alignment == 'right' ? 2 : 1}`,
      '@media (min-width: 280px) and (max-width: 359px)': {
        order: 1,
      },
    }),
    imageStyle: {
      width: { sm: 200, lg: 250 },
      height: { sm: 198, lg: 248 },
      '@media (min-width: 720px) and (max-width: 767px)': {
        width: 150,
        height: 148,
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        width: 110,
        height: 100,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        width: '76px',
        height: '68px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        width: '100px',
        height: '100px',
      },
    },
    titleAndTextBoxStyle: (process) => ({
      gap: 1.5,
      width: { sm: '495px', md: '520px', lg: '560px' },
      '@media (min-width: 720px) and (max-width: 767px)': {
        width: '400px',
      },
      '@media (min-width: 600px) and (max-width: 719px)': {
        width: '400px',
        gap: 0.5,
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        pl: process?.alignment == 'right' ? 1 : 0,
        width: '280px',
        gap: 0.5,
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        textAlign: 'left',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      order: `${process?.alignment == 'right' ? 1 : 1}`,

      pl: {
        sm: process?.alignment == 'right' ? 5 : 0,
        lg: process?.alignment == 'right' ? 2.3 : 0,
      },
      textAlign: `${process?.alignment == 'right' ? 'right' : 'left'}`,
    }),
    spacificTitleStyle: {
      color: '#001C63',
      fontStyle: 'normal',
      fontWeight: 500,
      '@media (min-width: 600px) and (max-width: 767px)': {
        fontSize: '16px !important',
        lineHeight: '25px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '12px !important',
        lineHeight: '20px',
      },
      lineHeight: { sm: '28.621px' },
      fontSize: { md: '25px !important', lg: '28px !important' },
    },
    textBoxStyle: (process) => ({
      color: '#001C63',
      fontSize: { sm: '17px !important' },
      fontStyle: 'normal',
      fontWeight: 400,
      direction: process?.alignment == 'right' ? 'rtl' : 'ltr',
      lineHeight: { sm: '27.363px' },
      display: 'inline',
      '@media (min-width: 500px) and (max-width: 767px)': {
        fontSize: '13px !important',
        lineHeight: '20px',
      },
      '@media (min-width: 360px) and (max-width: 599px)': {
        fontSize: '11px !important',
        lineHeight: '15px',
      },
      '@media (min-width: 280px) and (max-width: 359px)': {
        fontSize: '12px !important',
        lineHeight: '15px',
      },
    }),
    textStyle: {
      direction: 'ltr',
      display: 'inline',
      unicodeBidi: 'isolate-override',
    },
  },
};

export const DEVELOEPRS_PERKS_DATA = {
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    perksTitleStyle: {
      width: '100%',
      maxWidth: { xs: '400px', sm: '500px', md: '650px', lg: '800px' },
      mx: 'auto',
      px: 3,
      textAlign: 'center',
      mb: 2.5,
      fontSize: { xs: '20px', sm: '32px', md: '38px', lg: '48px' },
      fontWeight: 600,
      lineHeight: { xs: '32px', sm: '45px', md: '55px', lg: '65px' },
      color: '#001C63',
      textTransform: 'capitalize',
    },
    perksBoxStyle: {
      p: { xs: 2, sm: 5 },
      gap: 5,
      width: '95%',
      mx: 'auto',
      maxWidth: '1260px',
      maxHeight: 'auto',
      minHeight: '553px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: 'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
      '@media(min-width:1024px)': {
        flexDirection: 'row',
      },
    },
    perksButtonsBoxStyle: {
      width: { xs: '100%', md: '100%', lg: '500px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 3.5,
      '@media(min-width:1024px)': {
        width: { md: '400px', lg: '500px' },
      },
    },
    perksButtonTextAndImageBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    perksImageStyle: {
      width: { xs: '24px', sm: '32px', lg: 'auto' },
      height: { xs: '24px', sm: '32px', lg: 'auto' },
    },
    perksSerialNumberAndIconBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },
    perksSerialNumberTextStyle: {
      fontSize: {
        xs: '42px',
        sm: '45px',
        md: '50px',
        lg: '67.34px',
      },
      fontWeight: 700,
      color: '#E0DDDDAD',
    },
    perksIconStyle: {
      width: { xs: '18px', sm: '20px', lg: '24px' },
      height: { xs: '18px', sm: '20px', lg: '24px' },
    },
    perksContentMainBoxStyle: {
      width: '100%',
      display: 'flex',
      '@media(min-width:1024px)': {
        width: 'calc(100% - 500px)',
      },
    },
    perksContentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 1.5,
      '@media(min-width:1024px)': {
        textAlign: 'left',
      },
    },
    perksContentHeadingStyle: {
      fontSize: { xs: '20px', sm: '30px', md: '35px', lg: '37px' },
      fontWeight: 700,
      lineHeight: { xs: '30px', sm: '40px', md: '50px' },
      color: '#FFFFFF',
    },
    perksContentParagraphStyle: {
      fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '20.84px' },
      fontWeight: 400,
      lineHeight: { xs: '20.85px', sm: '30px', md: '33.16px' },
      color: '#FFFFFF',
    },
    perksContentUlStyle: {
      display: 'grid',
      pl: 0,
      pt: 2,
      listStyle: 'none',
      gap: 2,
      gridTemplateColumns: 'repeat(1, 1fr)',
      '@media(min-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    perksContentLiBoxStyle: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      gap: 1.2,
      '@media(min-width: 1024px)': { justifyContent: 'flex-start' },
    },
    perksContentLiImageStyle: {
      width: '14px',
      height: '14px',
      mt: { xs: '4px', sm: '6px' },
    },
    perksContentLiStyle: {
      fontSize: {
        xs: '10px',
        sm: '13px',
        md: '15px',
        lg: '19px',
      },
      textAlign: 'left',
      fontWeight: 400,
      lineHeight: { xs: '22px', sm: '27.35px' },
      color: '#FFFFFF',
    },
    perksButtonStyle: {
      mt: 1,
      mx: 'auto',
      color: '#fff',
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '15px',
        lg: '17.42px',
      },
      width: { xs: '150px', sm: '180px', lg: '200.6px' },
      height: {
        xs: '30px',
        sm: '38px',
        md: '43px',
        lg: '53.89px',
      },
      backgroundColor: '#001C63',
      borderRadius: '6.42px',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#001C63',
      },
      '@media(min-width: 1024px)': {
        mx: 0,
      },
    },
  },
};

export const EXPERTIES_DATA = {
  styles: {
    mainBoxStyle: {
      py: 1,
      '@media (min-width: 600px)': { background: '#F7F8FB', py: 6 },
    },
    swiperBoxStyle: {
      borderRadius: '6px',
      background: '#F7F8FB',
      '@media (max-width: 600px)': {
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.40)',
      },
      py: 2,
      mx: 1,
    },
    renderSectionGridStyle: { mx: 'auto' },
    buttonBoxStyle: {
      width: '100%',
      textAlign: 'center',
      mt: { xs: 2, sm: 3.5 },
    },
    gridItemStlye: {
      pt: 2.3,
      mx: 'auto',
      width: { xs: '70%', sm: '80%', md: '80%', lg: '100%' },
    },
    listHeadingBoxStyle: {
      width: { sm: '100%', md: '100%', lg: '100%' },
      mx: 'auto',
    },
    listHeadingStyle: {
      py: '4px',
      fontSize: {
        xs: '15px',
        sm: '15px',
        md: '18px',
        lg: '22px',
      },
      fontWeight: 700,
    },
    listItemBoxStyle: { pb: 2 },
    imageAndLinkBoxStyle: {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      gap: '8px',
      my: 0.2,
    },
    titleStyle: { py: '0px', color: '#000', fontSize: '14px', fontWeight: 400 },
  },
};

export const CLIENTS_SLIDER_STYLES = {
  mainBoxStyle: (bgColor) => ({
    backgroundColor: bgColor,
    PY: '2.5%',
    width: '100%',
    boxShadow: '0 -6px 19.8px  rgba(0,0,0,0.25) ',
  }),
  containerStyle: (pb = '10px') => ({
    pb: pb || '10px',
    display: 'flex',
    justifyContent: 'center',
  }),
  shortTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    fontWeight: fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize: fontSize,
    lineHeight: lineHeight,
    textAlign: 'center',
    display: 'none',
    '@media (max-width:769px)': {
      display: 'flex',
    },
  }),
  completeTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    textAlign: 'center',
    fontWeight: fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize: fontSize,
    lineHeight: lineHeight,
    display: 'none',
    '@media (min-width:770px)': {
      display: 'flex',
    },
  }),
  swiperSlideStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxStyle: (pb = 5) => ({ pb: pb || 5 }),
  imageStyle: {
    width: {
      sm: '130px',
      md: '154px',
      lg: '175px',
    },
    height: {
      sm: '35px',
      md: '35px',
      lg: '37px',
    },
    '@media (min-width: 550px) and (max-width: 767px)': {
      width: '160px',
      height: '25px',
    },
    '@media (min-width: 375px) and (max-width: 549px)': {
      width: '110px',
      height: '25px',
    },
    '@media (min-width: 280px) and (max-width: 374px)': {
      width: '110px',
      height: '25px',
    },
  },
};

export const BOOK_CLIENT_SLIDER_STYLES = {
  mainBoxStyle: (bgColor) => ({
    backgroundColor: bgColor,
    PY: '2.5%',
    width: '100%',
  }),
  containerStyle: (pb = '10px') => ({ pb }),
  bothTitleStyle: (fontWeight, fontSize, lineHeight) => ({
    textAlign: 'center',
    fontWeight,
    py: { xs: '16px', sm: '18px', md: '30px' },
    pt: { xs: '17px', sm: '20px', md: '50px' },
    fontSize,
    lineHeight,
  }),
  swiperSlideStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBoxStyle: (pb = 5) => ({ pb: pb || 5 }),
  imageStyle: {
    width: {
      sm: '144px',
      md: '154px',
      lg: '150px',
    },
    height: 'auto',
    '@media (min-width: 550px) and (max-width: 767px)': {
      width: '160px',
      height: '25px',
    },
    '@media (min-width: 375px) and (max-width: 549px)': {
      width: '90px',
      height: '25px',
    },
    '@media (min-width: 280px) and (max-width: 374px)': {
      width: '88px',
      height: '25px',
    },
  },
};

export const BENEFITS_WORKS_DATA = {
  styles: {
    mainBoxStyle: { py: { xs: 4, sm: 5, md: 6 }, overflow: 'hidden' },
    titleBoxStyle: {
      mx: 'auto',
      pb: '50px',
      width: { sm: '750px', md: '750px', lg: '900px' },
      '@media (min-width: 600px) and (max-width:767px)': {
        width: '500px',
        pb: '30px',
      },
      '@media (min-width: 425px) and (max-width:599px)': {
        width: '400px',
        pb: '30px',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        pb: '30px',
      },
    },
    titleStyle: {
      color: '#001C63',
      fontSize: { sm: '24px !important', md: '24px !important' },
      fontWeight: 600,
      lineHeight: { sm: 'auto', lg: '42.289px' },
      '@media (min-width: 425px) and (max-width:767px)': {
        fontSize: '26px !important',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        fontSize: '20px !important',
      },
      '@media (min-width:768px) and (max-width: 790px)': {
        pr: '40px',
      },
      textAlign: 'center',
      flexWrap: 'wrap',
      pb: { xs: '15px' },
    },
    paragraphStyle: {
      color: '#001C63',
      textAlign: 'center',
      fontSize: {
        xs: '16px !important',
        md: '18px !important',
      },
      '@media (min-width: 300px) and (max-width:424px)': {
        px: '25px',
      },
      '@media (min-width: 426px) and (max-width:440px)': {
        pr: '45px',
      },
      '@media (min-width:768px) and (max-width: 790px)': {
        pr: '70px',
      },
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: { sm: '27.863px' },
      flexWrap: 'wrap',
      px: { xs: '35px', lg: '10px' },
      pb: { md: '10px', xs: '0px' },
    },
    gridContainerStyle: {
      position: 'relative',
      justifyContent: 'center',
      gap: { md: '13%', lg: '5.3%', sm: '1%' },
      '@media (min-width:278px) and (max-width: 300px)': {
        ml: '-35px !important',
      },
      '@media (min-width:301px) and (max-width: 340px)': {
        ml: '-34px !important',
      },
      '@media (min-width:341px) and (max-width: 425px)': {
        ml: '-34px !important',
      },
      '@media (min-width:426px) and (max-width: 600px)': {
        ml: '-45px !important',
      },
      '@media (min-width:601px) and (max-width: 768px)': {
        ml: '-46px !important',
      },
    },
    imageStyles: [
      {
        width: { xs: '180.076px', md: '200.076px' },
        height: { xs: '35.708px', md: '40.708px' },
        position: 'absolute',
        transform: {
          xs: 'rotate(152.607deg)',
          sm: 'rotate(149.607deg)',
          md: 'none',
        },
        zIndex: 0,
        top: { sm: 230, md: 90 },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 210,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 190,
        },
        '@media (min-width:300px) and (max-width: 425px)': {
          top: 157,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 170,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 177,
        },
      },
      {
        width: { xs: '210.021px', md: '230.021px' },
        height: { xs: '70.83px', md: '85.83px' },
        position: 'absolute',
        zIndex: 0,
        display: { xs: 'none', sm: 'none', md: 'block' },
        top: { md: 160 },
      },
      {
        width: '210.021px',
        height: '68.83px',
        position: 'absolute',
        zIndex: 0,
        display: { xs: 'block', sm: 'block', md: 'none' },
        top: { sm: 455, md: 160 },
        '@media (max-width: 768px)': {
          top: 420,
        },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 380,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 330,
        },
        '@media (min-width:300px) and (max-width: 424px)': {
          top: 280,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 317,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 335,
        },
      },
      {
        width: { xs: '192.958px', md: '210.958px' },
        height: { xs: '50.005px', md: '80.005px' },
        position: 'absolute',
        display: { xs: 'block', md: 'block' },
        transform: {
          xs: 'rotate(152.607deg)',
          sm: 'rotate(142.607deg)',
          md: 'none',
        },
        zIndex: 0,
        top: { sm: 708, md: 260 },
        '@media (max-width: 768px)': {
          top: 655,
        },
        '@media (min-width:600px) and (max-width: 767px)': {
          top: 600,
        },
        '@media (min-width:425px) and (max-width: 599px)': {
          top: 530,
        },
        '@media (max-width: 425px)': {
          top: 510,
        },
        '@media (min-width:300px) and (max-width: 424px)': {
          top: 442,
        },
        '@media (min-width:291px) and (max-width: 299px)': {
          top: 532,
        },
        '@media (min-width:278px) and (max-width: 290px)': {
          top: 555,
        },
      },
    ],
    gridItemStyle: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      p: ['10px', '6px'],
      position: 'relative',
      zIndex: 1,
    },
    itemBoxStyle: {
      display: 'flex',
      borderRadius: {
        xs: '20px',
        sm: '25px',
        md: '40px',
        lg: '50px',
      },
      p: '20px',
      alignItems: 'center',
      background: ' #FFF',
      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      height: {
        sm: '162.637px',
        lg: '162.569px',
      },
      width: {
        sm: '589.938px !important',
        lg: '580.938px !important',
      },
      '@media (min-width: 600px) and (max-width: 767px)': {
        width: '450.938px',
        height: '142.637px',
      },
      '@media (min-width: 425px) and (max-width: 599px)': {
        width: '400.938px',
        height: '122.637px',
      },
      '@media (min-width: 300px) and (max-width: 424px)': {
        width: '303.292px',
        height: '100.637px',
      },
    },
    iconStyle: {
      width: 59,
      height: 59,
      '@media (min-width: 600px) and (max-width: 767px)': {
        width: 40,
        height: 40,
      },
      '@media (min-width: 425px) and (max-width: 767px)': {
        width: 45,
        height: 45,
      },
      '@media (min-width: 300px) and (max-width: 424px)': {
        width: 36,
        height: 36,
      },
    },
    itemParagraphStyle: {
      color: '#000',
      fontWeight: 400,
      fontStyle: 'normal',

      lineHeight: { xs: '18.571px', md: '23px', lg: '30px' },
      ml: 1,
      fontSize: { lg: '20px', xs: '12px' },
    },
  },
};

export const ACHIEVEMENTS_STYLES = {
  mainBoxStyle: (isSpecialPath, isMeetingPath, isDemo) => ({
    background: {
      xs: isSpecialPath || isMeetingPath || isDemo ? 0 : '20px',
      md: isMeetingPath || isSpecialPath || isDemo ? null : '40px',
    },
  }),
  titleAndImagesBoxStyle: {
    py: '2.5%',
    px: '1%',
    border: '1px solid rgba(170, 169, 169, 0.41)',
  },
  titleBoxStyle: { px: { xs: '20%', md: '0' }, pt: '20px' },
  commonBoxStyles: {
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'noWrap' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 4, sm: 3, md: 5 },
    px: { xs: 2 },
  },
  renderImageBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBoxStyle: {
    width: { xs: '100px', sm: '120px', lg: '150px' },
    height: 'auto',
  },
  titleAndRenderImageBoxStyle: {
    background: '#F7F8FB',
    py: '1.5%',
    pb: { xs: '40px', sm: '70px', lg: '50px' },
    '@media (max-width:424px)': { pb: '30px' },
    '@media (min-width:425px) and (max-width:480px)': { pb: '55px' },
  },
};

export const OUR_CLIENT_SAYS = {
  styles: {
    headingStyle: {
      px: { xs: '5%', md: '7%' },
      fontSize: { xs: '22px', sm: '24px', md: '35px', lg: '43px' },
      mb: 1,
      fontWeight: 600,
      textAlign: 'center',
    },
    subHeadingStyle: {
      fontSize: { xs: '11px', sm: '13px', md: '16px', lg: '18px' },
      fontWeight: 500,
      textAlign: 'center',
      px: { xs: '5%', md: '7%' },
    },
    clientSaySliderBoxStyle: {
      width: '100%',
      maxWidth: 1210,
      margin: 'auto',
      position: 'relative',
      pt: 5,
    },
    clientSaySliderStyles: {
      swiperSlideStyle: {
        paddingTop: '0px',
        paddingBottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      },
      cardStyle: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: { xs: '220px', sm: '220px', md: '240px', lg: '225px' },
        maxHeight: '100%',
        backgroundColor: '#FFFFFF',
        p: 3,
      },
      logoAndRatingBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      ratingBoxStyle: { display: { xs: 'none', md: 'inline-flex' }, gap: 0.7 },
      cardTitle: { fontSize: '24px', fontWeight: 600, color: '#525252' },
      subTitleAndRatingBoxStyle: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        pb: 1,
      },
      cardSubTitleStyle: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#525252',
      },
      subTitleRatingBoxStyle: {
        display: { xs: 'inline-flex', md: 'none' },
        gap: 0.7,
      },
      descriptionStyle: {
        fontSize: { xs: '10px', md: '11px' },
        fontWeight: 400,
        color: '#525252',
      },
      paginationBoxStyle: {
        width: '100%',
        maxWidth: '495px',
        position: 'absolute',
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 'auto',
        bottom: { xs: 75, sm: 80, md: 100 },
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      },
      paginationStyle: {
        width: { xs: '10px', md: 'auto' },
        height: 'auto',
        cursor: 'pointer',
      },
    },
  },
};

export const DEMO_DATA = {
  styles: {
    containerStyle: { pb: { xs: '20px', sm: '20px', md: '30px', lg: '40px' } },
    mainBoxStyle: {
      py: { xs: '22px', sm: '30px', md: '50px', lg: '60px' },
      px: { xs: '5%', sm: '10%', md: '10%', lg: '12%' },
      backgroundColor: '#3f5294',
      color: '#fff',
      borderRadius: '20px',
      justifyContent: 'center',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
    },
    titleStyle: {
      fontSize: { xs: '20px', sm: '25px', md: '28px', lg: '35px' },
      fontWeight: 700,
      lineHeight: { xs: '44px', sm: '64px' },
      textAlign: 'center',
      pb: '20px',
    },
    buttonStyle: {
      width: { sm: '170px', md: '207.981px' },
      height: { sm: '50px', md: '54.149px' },
      backgroundColor: 'white',
      '@media (min-width: 300px) and (max-width: 767px)': {
        width: '130px',
        height: '40px',
        fontSize: '20px',
      },
      borderRadius: '6.448px',
      fontSize: '17px',
      fontWeight: 700,
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    linkTextStyle: {
      color: '#09114A',
      fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '19px' },
      fontWeight: 700,
    },
  },
};

export const buttonsStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '118px',
    justifyContent: 'space-between',
    gap: 1.5,
    background:
      index == ind
        ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
        : '#fff',
    boxShadow:
      index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    borderRadius: '20.59px',
    transitionProperty: 'background',
    transitionDelay: '1m',
    transitionDuration: '1s',
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow:
        index == ind ? '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)' : 'none',
    },
    '@media(min-width:1024px)': {
      justifyContent: 'space-between',
    },
  };
};

export const buttonTextStyleForPerksComponent = (index, ind) => {
  return {
    width: '100%',
    maxWidth: { xs: '135px', sm: '180px', md: '350px' },
    fontSize: {
      xs: '15px',
      sm: '18px',
      md: '20px',
      lg: '24px',
    },
    fontWeight: 500,
    lineHeight: {
      xs: '21.27px',
      sm: '25px',
      md: '29px',
      lg: '33.73px',
    },
    color: index == ind ? '#fff' : '#001C63',
    textAlign: 'left',
    pr: 0,
    textWrap: 'wrap',
    '@media(min-width: 1024px)': {
      textAlign: 'left',
      maxWidth: '240px',
    },
    '@media(min-width: 280px) and (max-Width:359px)': {
      maxWidth: '80px',
      py: 0.5,
      fontSize: '12px',
    },
  };
};

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

export const TOP_BAR_DATA = {
  styles: {
    mainBoxStyle: {
      width: '100%',
      height: '32px',
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      background:
        'linear-gradient(180deg, rgba(0,28,99,1) 0%, rgba(4,16,44,1) 100%)',
      px: { md: 6.5, lg: 0 },
    },
    topBarBoxStyle: {
      width: '100%',
      maxWidth: { xs: '1280px', xl: '1400px' },
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    mailBoxStyle: { display: 'flex', alignItems: 'center', gap: 0.8 },
    mailTextStyle: {
      fontSize: { md: '13px', lg: '15px' },
      fontWeight: 500,
      color: '#fff',
      textWrap: 'nowrap',
    },
    socialIconBoxStyle: { display: 'flex', alignItems: 'center', gap: 2.5 },
  },
};
