import { Box } from '@mui/material';
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
            <video
              autoPlay
              loop
              muted
              playsInline
              width={100}
              height={100}
              src={slide?.videoUrl}
              style={videoStyle}
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
