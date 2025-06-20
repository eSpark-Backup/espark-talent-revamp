export const BOOK_A_MEETING = {
  styles: {
    mainBoxStyle: {
      pt: { xs: 5, sm: 5 },
      pb: { xs: 5, sm: 8 },
      px: { xs: 2, sm: 5 },
    },
    innerBoxStyle: {
      mx: 'auto',
      display: 'flex',
      maxWidth: '1400px',
      gap: 2,
      justifyContent: 'center',
      '@media(min-width: 280px) and (max-width:1259px)': {
        flexDirection: 'column !important',
        gap: 10,
      },
      '@media(max-width: 425px)': {
        gap: 6,
      },
    },
    parentContentBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      order: { xs: 2, sm: 0 },
      gap: { xs: 2, sm: 3, md: 5, lg: 7 },
      '@media(min-width: 280px) and (max-width:1259px)': {
        mx: 'auto',
      },
    },
    linkBoxStyle: {
      display: { xs: 'none', sm: 'flex' },
      mx: { xs: 'auto', md: 0 },
      alignItems: 'center',
    },
    imageStyle: {
      width: { xs: 122, sm: 132, md: 142, lg: 162 },
      height: { xs: 50, sm: 60, md: 80, lg: 100 },
    },
    contentAndItemsBoxStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    },
    contentBoxStyle: {
      display: 'flex',
      textAlign: { xs: 'center', sm: 'center', md: 'left' },
      flexDirection: 'column',
      gap: { xs: 1, sm: 0.5, lg: 1 },
      pr: { xs: 0, md: 4 },
    },
    titleStyle: {
      fontSize: {
        xs: '22px',
        sm: '30px',
        md: '43px',
        lg: '48px',
      },
      textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
      fontWeight: 600,
      lineHeight: { sm: '40px', lg: '56px' },
    },
    subTitleBoxStyle: {
      mx: { xs: 'auto', md: 0 },
      maxWidth: {
        xs: '350px',
        sm: '450px',
        md: '650px',
        lg: '700px',
      },
    },
    subTitleStyle: {
      fontSize: {
        xs: '21px',
        sm: '25px',
        md: '40px',
        lg: '45px',
      },
      textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
      fontWeight: 500,
      lineHeight: {
        xs: '30px',
        sm: '38px',
        md: '45px',
        lg: '56px',
      },
    },
    descriptionBoxStyle: {
      mx: { xs: 'auto', md: 0 },
      maxWidth: {
        xs: '400px',
        sm: '450px',
        md: '650px',
        lg: '700px',
      },
    },
    descriptionStyle: {
      fontSize: {
        xs: '14px',
        sm: '15px',
        md: '18px',
        lg: '20px',
        xl: '20px',
      },
      color: '#0E1155',
      fontWeight: 500,
      lineHeight: { xs: 'auto', lg: '37px' },
    },
    parentItemBoxStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: { sm: 2, md: 6, lg: 5 },
      pr: { md: 3 },
      '@media(max-width: 722px)': {
        flexWrap: 'wrap',
        gap: 3,
      },
    },
    itemBoxStyle: {
      display: 'flex',
      maxWidth: {
        xs: '180px',
        sm: '180px',
        md: '210px',
        lg: '245px',
      },
      mx: { xs: 'auto', sm: 'auto', md: 0 },
      alignItems: { xs: 'center', md: 'start' },
      textAlign: { xs: 'center', md: 'start' },
      flexDirection: 'column',
      gap: 1.1,
    },
    iconStyle: { mx: { xs: 'auto', sm: 0 } },
    itemTitleStyle: {
      fontSize: {
        xs: '11px',
        sm: '12px',
        md: '18px',
        lg: '20px',
      },
      maxWidth: { sm: '140px', md: '200px', lg: '227px' },
      fontWeight: 600,
    },
    itemDescriptionStyle: {
      color: `#1D4E72`,
      fontSize: {
        xs: '10px',
        sm: '11px',
        md: '13px',
        lg: '15px',
      },
      fontWeight: 400,
      maxHeight: { md: '65px', lg: '90px' },
    },
    parentFormBoxStyle: { pt: { xs: 0, md: 3 }, pb: { xs: 0, sm: 1 } },
    formBoxStyle: {
      width: 'auto',
      maxWidth: '486px',
      height: 'auto',
      borderRadius: '8px',
      py: 3,
      px: 0.8,
      boxShadow: '0 0 9px 0 rgba(0,0,0,0.29)',
      order: { xs: 0, sm: 1 },
      '@media(min-width: 280px) and (max-width:1259px)': {
        mx: 'auto',
      },
    },
  },
};
