'use client';

import { Box, Typography } from '@mui/material';

import { BOOK_A_DEMO_DATA } from '@/constants/book-a-demo/book-a-demo';
import HireForm from '@/components/hire-developer/HireForm';
import { usePathname } from 'next/navigation';
import {
  DescriptionBoxStyleForFormSection,
  TitleDescriptionBoxStyleForFormSection,
} from '@/components/hire-developer/HireDeveloperStyle';

const FormSection = ({ data }) => {
  const { form } = BOOK_A_DEMO_DATA || {};
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
                >
                  {description}
                </Typography>
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
