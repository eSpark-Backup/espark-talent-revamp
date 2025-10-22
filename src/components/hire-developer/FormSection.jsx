'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import HireForm from './HireForm';
import { usePathname } from 'next/navigation';
import {
  DescriptionBoxStyleForFormSection,
  TitleDescriptionBoxStyleForFormSection,
} from '@/constants/hire-developer/hire-developer';

const FormSection = ({ data }) => {
  const { form } = Book_A_Demo_Data || {};
  const { title, description, styles } = data || {};
  const {
    mainBoxStyle,
    parentBoxStyle,
    contentBoxStyle,
    titleTypographyStyle,
    descriptionBoxStyle,
    formBoxStyle,
  } = styles || {};
  const pathName = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

  return (
    <>
      <Box id={'form'} sx={mainBoxStyle}>
        <Box sx={parentBoxStyle}>
          <Box sx={contentBoxStyle}>
            <Box
              sx={TitleDescriptionBoxStyleForFormSection(
                pathName,
                book_a_demo_meeting
              )}
            >
              <Typography
                variant="h1"
                sx={titleTypographyStyle}
                textTransform={'capitalize'}
              >
                {title}
              </Typography>
              <Box sx={descriptionBoxStyle}>
                <Typography
                  sx={DescriptionBoxStyleForFormSection(
                    pathName,
                    book_a_demo_meeting
                  )}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={formBoxStyle}>
            <HireForm form={form} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FormSection;
