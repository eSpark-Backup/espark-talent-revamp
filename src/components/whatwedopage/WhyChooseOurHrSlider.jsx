// import React, { useRef } from 'react';
// import { Box, ListItemIcon, Typography, useMediaQuery } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { handleControlSwiper } from '@/utils';

// const WhyChooseOurHrSlider = ({ data }) => {
//   const swiperRef = useRef(null);
//   const isXsOrSm = useMediaQuery((theme) => theme?.breakpoints?.down('sm'));
//   return (
//     <>
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={1}
//         modules={[Pagination]}
//         className="mySwiper"
//         breakpoints={{
//           600: {
//             slidesPerView: 1,
//             pagination: { el: '.swiper-pagination', clickable: true },
//           },
//           960: {
//             slidesPerView: 1,
//             pagination: { el: '.swiper-pagination', clickable: true },
//           },
//         }}
//       >
//         {data?.card?.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: { lg: 'center' },
//                 justifyContent: { lg: 'center' },
//                 margin: 0.5,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: { xs: 'center' },
//                   justifyContent: { xs: 'center' },
//                   backgroundColor: '#fff',
//                   boxShadow: '0px 2px 8.6px 0px rgba(0, 0, 0, 0.30)',
//                   padding: '15px',
//                   borderRadius: '15px',
//                   width: {
//                     xs: '294.309px',
//                     sm: '314.309px',
//                     md: '390px',
//                     lg: '485px',
//                   },
//                   height: '100%',
//                   minHeight: {
//                     xs: '155px',
//                     sm: '140px',
//                     md: '100%',
//                     lg: '180px',
//                   },
//                   pr: 2.5,
//                   mt: { xs: 1, md: 0 },
//                   margin: '10px auto !important',
//                   '@media(min-width: 769px) and (max-width: 872px)': {
//                     py: 1.5,
//                     minHeight: '225px',
//                   },
//                   '@media(min-width: 280px) and (max-width: 319px)': {
//                     pr: 2.4,
//                     minHeight: '200px',
//                   },
//                 }}
//               >
//                 <Box sx={{ display: 'flex', px: { lg: '25px' } }}>
//                   <Box
//                     sx={{
//                       mr: 2,
//                       pl: { xs: 1, lg: 0.5 },
//                       pt: { md: '15px', lg: '12px' },
//                     }}
//                   >
//                     <ListItemIcon sx={{ minWidth: '30px' }}>
//                       <Image
//                         quality="85"
//                         priority
//                         src={item.icon}
//                         width={isXsOrSm ? 205 : 260}
//                         height={65}
//                         alt={item?.alt}
//                       />
//                     </ListItemIcon>
//                   </Box>
//                   <Box>
//                     <Typography
//                       sx={{
//                         color: '#09114A',
//                         fontSize: {
//                           lg: '20px',
//                           xs: '13.08px',
//                           md: '16px',
//                         },
//                         fontWeight: 700,
//                         lineHeight: { lg: '26.4px', xs: '17.266px' },
//                         py: { xs: '5px', sm: 1, md: 0.5 },
//                         px: { lg: '14px' },
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography
//                       sx={{
//                         color: '#000',
//                         fontSize: {
//                           lg: '15px',
//                           md: '15px',
//                           sm: '11px',
//                           xs: '9.81px',
//                         },
//                         fontWeight: { xs: 700, md: 400, lg: 400 },
//                         lineHeight: {
//                           lg: '23.4px',
//                           md: '18px',
//                           sm: '15.304px',
//                           xs: '15.304px',
//                         },
//                         px: { lg: '14px' },
//                       }}
//                     >
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </SwiperSlide>
//         ))}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             my: { xs: 1, sm: 2 },
//           }}
//         >
//           {['next', '', 'prev']?.map((type, index) => (
//             <Box
//               key={index}
//               sx={{
//                 minWidth: { xs: '18px', md: '23px' },
//                 height: { xs: '15px', md: '23px' },
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <Image
//                 quality="85"
//                 priority
//                 onClick={() => type && handleControlSwiper(type, swiperRef)}
//                 src={
//                   data[
//                     type === 'next'
//                       ? 'arrowIconLeft'
//                       : type === 'prev'
//                         ? 'arrowIconRight'
//                         : 'arrowIconCircle'
//                   ]
//                 }
//                 width={17}
//                 height={17}
//                 alt={data?.alt}
//                 className="swiper-controller-icon"
//               />
//             </Box>
//           ))}
//         </Box>
//       </Swiper>
//     </>
//   );
// };

// export default WhyChooseOurHrSlider;

'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CircularProgress,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import {
  avatarStyle,
  cardStyle,
  containerStyle,
  contentStyle,
  headerStyle,
  headingStyle,
  headingTextStyle,
  iconContainerStyle,
  paragraphStyle,
  slideStyle,
  titleStyle,
} from '@/constants/what-we-do-page/why-choose-hr';

const WhyChooseOurHrSlider = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Card sx={cardStyle}>
        <CardHeader
          sx={headerStyle}
          avatar={
            <Box
              component={'img'}
              quality="85"
              priority={true}
              src={card?.icon || '/'}
              sx={avatarStyle}
              alt={card?.alt || 'alt'}
              className="our-team-swiper-image"
            />
          }
          title={
            <Typography variant="h3" sx={titleStyle}>
              {card?.title || ''}
            </Typography>
          }
        />
        <CardContent sx={contentStyle}>
          <Typography sx={paragraphStyle}>{card?.description}</Typography>
        </CardContent>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box sx={containerStyle}>
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
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef?.current;
            swiper.params.navigation.nextEl = nextRef?.current;
            swiper?.navigation?.init();
            swiper?.navigation?.update();
          }}
        >
          {data?.card?.map(renderSlide)}
        </Swiper>
      )}

      <Box sx={iconContainerStyle}>
        {['arrowIconLeft', 'arrowIconCircle', 'arrowIconRight']?.map(
          (arrow, i) => (
            <Image
              key={i}
              ref={
                arrow === 'arrowIconLeft'
                  ? prevRef
                  : arrow === 'arrowIconRight'
                    ? nextRef
                    : null
              }
              src={data[arrow]}
              alt={data?.alt}
              width={17}
              height={17}
              style={arrow === 'arrowIconCircle' ? {} : { cursor: 'pointer' }}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default WhyChooseOurHrSlider;
