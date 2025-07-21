import React from 'react';
import { Box, Typography } from '@mui/material';
import BookClientSlider from '../global/BookClientSlider';
import { CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import { CLIENT_SLIDER_BREAK_POINTS } from '@/constants/book-a-demo';

const BookADemoContent = ({ content, styles }) => {
  const { title, text, description, image, alt } = content;
  const {
    mainBox,
    innerBox,
    textBoxStyle,
    titleStyle,
    descriptionStyle,
    imageStyle,
  } = styles;
  return (
    <>
      <Box sx={mainBox}>
        <Box sx={innerBox}>
          <Box sx={textBoxStyle}>
            <Typography
              sx={titleStyle}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Typography sx={descriptionStyle}>{description}</Typography>
          </Box>
          <Box component={'img'} src={image} sx={imageStyle} alt={alt} />
          <BookClientSlider
            data={CLIENTS_SLIDER_DATA}
            breakPoints={CLIENT_SLIDER_BREAK_POINTS}
            shortTitle={text}
            compeleteTitle={text}
            txtColor={'#fff'}
            variant={'h6'}
            fontSize={{ sm: '15px !important', md: '16px !important' }}
            fontWeight={600}
            pb={'0px'}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookADemoContent;
