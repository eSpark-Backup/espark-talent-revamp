// 'use client';
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import Link from 'next/link';
// import 'swiper/css/autoplay';
// import 'swiper/css';

// const GlobalTeams = ({ data }) => {
//   const { title, text, slides, styles } = data || {};

//   const {
//     mainBoxStyle,
//     titleStyle,
//     textStyle,
//     swiperSlideStyle,
//     slideImageStyle,
//     flagBoxStyle,
//     flagImageStyle,
//     countryTextStyle,
//   } = styles || {};

//   const BreakBorderSlider = () => {
//     return (
//       <Box maxWidth={1400} mx="auto" my={3}>
//         <Swiper
//           modules={[Autoplay]}
//           speed={3000}
//           observer={true}
//           spaceBetween={30}
//           grabCursor={true}
//           slidesPerView="auto"
//           observeParents={true}
//           autoplay={{ delay: 1000, disableOnInteraction: false }}
//           breakpoints={{
//             0: { spaceBetween: 20 },
//             769: { spaceBetween: 30 },
//           }}
//         >
//           {slides?.map((slide, i) => (
//             <SwiperSlide
//               key={i}
//               style={{ ...swiperSlideStyle, pointerEvents: 'auto' }}
//             >
//               <Link
//                 prefetch={true}
//                 href={slide?.link}
//                 style={{ textDecoration: 'none' }}
//               >
//                 <Box sx={slideImageStyle}>
//                   <Image
//                     src={slide?.image}
//                     alt={`logo-${i}`}
//                     width={297}
//                     height={407}
//                     placeholder="blur"
//                     priority
//                     style={{
//                       objectFit: 'cover',
//                       borderRadius: '30px',
//                       display: 'block',
//                       margin: '0 auto',
//                     }}
//                   />

//                   <Box sx={flagBoxStyle}>
//                     <Box sx={flagImageStyle}>
//                       <Image
//                         fill
//                         priority
//                         src={slide?.flag}
//                         alt={`flag-${i}`}
//                         placeholder="blur"
//                         style={{
//                           objectFit: 'cover',
//                           borderRadius: '100%',
//                         }}
//                       />
//                     </Box>
//                     <Typography sx={countryTextStyle}>
//                       {slide?.country}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Box>
//     );
//   };

//   return (
//     <Box sx={mainBoxStyle}>
//       <Box>
//         <Typography sx={titleStyle}>{title}</Typography>
//         <Typography sx={textStyle}>{text}</Typography>
//       </Box>
//       <Box>
//         <BreakBorderSlider />
//       </Box>
//     </Box>
//   );
// };

// export default GlobalTeams;

'use client';
import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/autoplay';
import 'swiper/css';
import { useLinkStatus } from 'next/link';

const GlobalTeams = ({ data }) => {
  const { title, text, slides, styles } = data || {};
  const { pending } = useLinkStatus();
  const {
    mainBoxStyle,
    titleStyle,
    textStyle,
    swiperSlideStyle,
    slideImageStyle,
    flagBoxStyle,
    flagImageStyle,
    countryTextStyle,
  } = styles || {};

  const BreakBorderSlider = () => {
    return (
      <Box maxWidth={1400} mx="auto" my={3}>
        <Swiper
          modules={[Autoplay]}
          speed={3000}
          observer={true}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView="auto"
          observeParents={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            0: { spaceBetween: 20 },
            769: { spaceBetween: 30 },
          }}
        >
          {pending
            ? Array.from(new Array(5)).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`} style={swiperSlideStyle}>
                  <Box sx={{ ...slideImageStyle, p: 2 }}>
                    <Skeleton
                      variant="rectangular"
                      width={297}
                      height={407}
                      sx={{ borderRadius: '30px', mb: 1 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ borderRadius: '50%' }}
                      />
                      <Skeleton variant="text" width={80} height={30} />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))
            : slides?.map((slide, i) => (
                <SwiperSlide
                  key={i}
                  style={{ ...swiperSlideStyle, pointerEvents: 'auto' }}
                >
                  <Link
                    href={slide?.link}
                    prefetch={true}
                    style={{
                      textDecoration: 'none',
                      pointerEvents: pending ? 'none' : 'auto',
                      opacity: pending ? 0.6 : 1,
                      cursor: pending ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <Box sx={slideImageStyle}>
                      <Image
                        src={slide?.image}
                        alt={`logo-${i}`}
                        width={297}
                        height={407}
                        placeholder="blur"
                        priority
                        style={{
                          objectFit: 'cover',
                          borderRadius: '30px',
                          display: 'block',
                          margin: '0 auto',
                        }}
                      />

                      <Box sx={flagBoxStyle}>
                        <Box sx={flagImageStyle}>
                          <Image
                            fill
                            priority
                            src={slide?.flag}
                            alt={`flag-${i}`}
                            placeholder="blur"
                            style={{
                              objectFit: 'cover',
                              borderRadius: '100%',
                            }}
                          />
                        </Box>
                        <Typography sx={countryTextStyle}>
                          {slide?.country}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
    );
  };

  return (
    <Box sx={mainBoxStyle}>
      <Box>
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography sx={textStyle}>{text}</Typography>
      </Box>
      <Box>
        <BreakBorderSlider />
      </Box>
    </Box>
  );
};

export default GlobalTeams;
