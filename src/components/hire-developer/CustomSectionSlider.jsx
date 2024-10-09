// import React from 'react';
// import { Box, Typography, Grid } from '@mui/material';
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { usePathname } from 'next/navigation';

// const CustomSectionSlider = ({ items }) => {
//   const pathname = usePathname();

//   // Define styles outside the JSX structure
//   const styles = {
//     container: { mx: 2 },
//     swiperContainer: { spaceBetween: 1 },
//     gridContainer: (pathname) => ({
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       pt: 4,
//       pb: pathname?.includes('/book-a-demo-meeting') ? 0 : 4,
//     }),
//     gridItem: (pathname) => ({
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: pathname === '/hire-a-frontend-developer' ? '250px' : '',
//       width: '140px',
//       my: 1,
//     }),
//     boxContainer: (pathname) => ({
//       position: 'relative',
//       zIndex: 1,
//       mx: 'auto',
//       maxWidth: '401px',
//       height: pathname === '/hire-a-frontend-developer' ? '250px' : '',
//       display: 'flex',
//       flexDirection: 'column',
//       borderRadius: '20px',
//       background: '#fff',
//       boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
//       '@media(max-width: 480px)': {
//         mx: 0.8,
//         height: 'auto',
//       },
//     }),
//     boxHeader: {
//       width: 'auto',
//       height: '59.498px',
//       display: 'flex',
//       borderRadius: '20px 20px 0 0',
//       background: '#F7F8FB',
//       p: '20px',
//       alignItems: 'center',
//     },
//     icon: {
//       width: 42,
//       height: 42,
//       '@media(max-width: 480px)': {
//         width: 35,
//         height: 35,
//       },
//       '@media(max-width: 425px)': {
//         width: 30,
//         height: 30,
//       },
//       '@media(max-width: 280px)': {
//         width: 25,
//         height: 25,
//       },
//     },
//     title: {
//       ml: 2,
//       color: '#001C63',
//       fontSize: '20px',
//       fontWeight: 600,
//       '@media(max-width: 480px)': {
//         fontSize: '15px',
//       },
//       '@media(max-width: 425px)': {
//         fontSize: '13.34px',
//       },
//       '@media(max-width: 280px)': {
//         fontSize: '13.34px',
//       },
//     },
//     contentBox: {
//       p: '10px 20px 20px 20px',
//       borderRadius: '0 0 20px 20px',
//       height: '100px',
//       '@media(max-width: 480px)': {
//         height: '100px',
//       },
//       '@media(min-width: 480px) and (max-width: 480px)': {
//         height: '100px',
//       },
//       '@media(min-width: 426px) and (max-width: 480px)': {
//         height: '100px',
//       },
//       '@media(max-width: 425px)': {
//         height: '80px',
//       },
//       '@media(max-width: 375px)': {
//         height: '120px',
//       },
//       '@media(max-width: 320px)': {
//         height: '115px',
//       },
//       overflow: 'hidden',
//     },
//     paragraph: {
//       fontSize: '15px',
//       color: '#000',
//       fontWeight: 500,
//       lineHeight: '23px',
//       '@media(max-width: 480px)': {
//         fontSize: '12px',
//         lineHeight: '18px',
//       },
//       '@media(max-width: 425px)': {
//         fontSize: '10.67px',
//         lineHeight: '15.41px',
//       },
//       '@media(max-width: 280px)': {
//         fontSize: '10.67px',
//       },
//     },
//   };

//   return (
//     <Box sx={styles.container}>
//       <Swiper
//         {...styles.swiperContainer}
//         modules={[Pagination]}
//         className="mySwiper"
//         id="hireDev"
//         pagination={pathname?.includes('/book-a-demo-meeting') ? false : true}
//         breakpoints={{
//           280: {
//             slidesPerView: 1.2,
//             pagination: { el: '.swiper-pagination', clickable: false },
//           },
//           768: {
//             slidesPerView: 2,
//             pagination: { el: '.swiper-pagination', clickable: false },
//           },
//         }}
//       >
//         {items?.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Grid container sx={styles.gridContainer(pathname)}>
//               <Grid item xs={12} sm={12} sx={styles.gridItem(pathname)}>
//                 <Box sx={styles.boxContainer(pathname)}>
//                   <Box sx={styles.boxHeader}>
//                     <Box
//                       component="img"
//                       src={item?.icon || ''}
//                       alt={item?.alt || ''}
//                       sx={styles.icon}
//                     />
//                     <Typography component="h4" sx={styles.title}>
//                       {item?.title || ''}
//                     </Typography>
//                   </Box>
//                   <Box sx={styles.contentBox}>
//                     <Typography component="p" sx={styles.paragraph}>
//                       {item?.paragraph || ''}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default CustomSectionSlider;

'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { containerStyle } from '@/constants/new-home';
import { usePathname } from 'next/navigation';

const PricingDefference = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (card, index) => (
    <SwiperSlide
      key={index}
      style={{
        paddingTop: '30px',
        paddingBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        maxHeight: '400px',
      }}
    >
      <Card sx={{ width: '100%', backgroundColor: 'red', mx: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 2,
            p: 3,
          }}
        >
          <Box src={card?.icon} component={'img'} sx={{}} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 0.5, sm: 1, lg: 0 },
            }}
          >
            <Typography variant="h3" sx={{}}>
              {card?.title || 'Ali'}
            </Typography>
            <Typography sx={{}}>{card?.description || 'check'}</Typography>
          </Box>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box
      sx={{
        backgroundColor: pathName?.includes('/hire-remote-developers')
          ? '#fff'
          : '#F7F8FB',
      }}
    >
      <Box sx={containerStyle} id="pricing-difference">
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Swiper
            pagination={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            {[1, 2, 3, 4, 5]?.map(renderSlide)}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default PricingDefference;
