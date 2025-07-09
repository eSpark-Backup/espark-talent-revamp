import { Box } from '@mui/material';
import Image from 'next/image';
import { duplicateSlides } from '@/utils';

const EmployeeSlider = ({ data }) => {
  const { slides, styles } = data || {};
  const { swiperSlideStyle, videoStyle } = styles || {};

  const duplicatedSlides = [
    ...slides,
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
  ];

  return (
    <Box id="short-slider" className="sliderContainer">
      <Box className="sliderTrack">
        {duplicatedSlides?.map((slide, index) => (
          <Box key={index} className="slide" style={swiperSlideStyle}>
            {/* <Image
              alt=""
              width={100}
              height={100}
              style={videoStyle}
              src={slide?.videoUrl || slide?.thumbnailUrl}
              priority
            /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              width={100}
              height={100}
              src={slide?.videoUrl}
              style={videoStyle} // use same styling as before
            >
              <source src={slide?.videoUrl} type="video/mp4" />
            </video>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmployeeSlider;
