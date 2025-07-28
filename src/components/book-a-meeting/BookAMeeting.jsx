'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import BookADemoForm from '../book-a-demo/BookADemoForm';
import Image from 'next/image';

const BookAMeeting = ({ data }) => {
  const { form } = Book_A_Demo_Data;
  const { title, subTitle, description, services, styles } = data;
  const {
    mainBoxStyle,
    innerBoxStyle,
    parentContentBoxStyle,
    linkBoxStyle,
    imageStyle,
    contentAndItemsBoxStyle,
    contentBoxStyle,
    titleStyle,
    subTitleBoxStyle,
    subTitleStyle,
    descriptionBoxStyle,
    descriptionStyle,
    parentItemBoxStyle,
    itemBoxStyle,
    itemTitleStyle,
    itemDescriptionStyle,
    parentFormBoxStyle,
    formBoxStyle,
  } = styles;

  const renderService = (item, index) => (
    <Box key={index} sx={itemBoxStyle}>
      <Image
        src={item?.image || '/'}
        alt={`${item?.alt || ''}`}
        width={28}
        height={28}
        priority
        style={{ objectFit: 'contain', maxHeight: '28px' }}
      />
      <Typography sx={itemTitleStyle}>{item?.title || ''}</Typography>
      <Typography sx={itemDescriptionStyle}>
        {item?.description || ''}
      </Typography>
    </Box>
  );

  return (
    <>
      <Box id={'top'} sx={mainBoxStyle}>
        <Box sx={innerBoxStyle}>
          <Box sx={parentContentBoxStyle}>
            <Box sx={linkBoxStyle}>
              <Link href="/">
                <Box sx={imageStyle}>
                  <Image
                    src="/images/eSpark Talent Logo.svg"
                    alt="eSpark Talent logo"
                    width={162}
                    height={200}
                    priority
                    style={{
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                </Box>
              </Link>
            </Box>
            <Box sx={contentAndItemsBoxStyle}>
              <Box sx={contentBoxStyle}>
                <Typography
                  variant="h1"
                  sx={titleStyle}
                  color={data?.titleColor}
                >
                  {title}
                </Typography>
                <Box sx={subTitleBoxStyle}>
                  <Typography
                    variant="h1"
                    sx={subTitleStyle}
                    color={data?.subTitleColor}
                  >
                    {subTitle}
                  </Typography>
                </Box>
                <Box sx={descriptionBoxStyle}>
                  <Typography sx={descriptionStyle}>{description}</Typography>
                </Box>
              </Box>
              <Box sx={parentItemBoxStyle}>{services?.map(renderService)}</Box>
            </Box>
          </Box>
          <Box sx={parentFormBoxStyle}>
            <Box sx={formBoxStyle}>
              <BookADemoForm form={form} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookAMeeting;
