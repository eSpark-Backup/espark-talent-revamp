import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { BookADemoFormValidationSchema } from '@/schema/schema';
import {
  Book_A_Demo_Keys,
  bookADemoFormStyles,
  formBoxStyles,
} from '@/constants/book-a-demo/book-a-demo';
import BasicModal from '@/components/book-a-demo/BookADemoModal';
import ErrorMessage from '@/components/book-a-demo/ErrorMessage';
import {
  feildStyles,
  titleBoxStyle,
} from '@/components/book-a-demo/BookADemoFormStyles';

const BookADemoForm = ({ form, handleModalClose }) => {
  const { title, subTitle, description, fields } = form;
  const {
    mainContainer,
    titleStyle,
    subTitleStyle,
    lableStyle,
    inputStyle,
    submitButtonStyle,
    lastDescriptionStyle,
  } = bookADemoFormStyles;
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const handleClose = () => setOpen(false);
  const adminId = process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL_ID;
  const adminTempleteId = process.env.NEXT_PUBLIC_DEMO_ADMIN_TEMPLETE_ID;
  const pathName = usePathname();
  const book_A_meeting = '/book-a-meeting';
  const remote = '/hire-remote-developers';
  const handlePhoneChange = (event) => {
    setFieldValue((values.phone_number = event));
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: Book_A_Demo_Keys,
      validationSchema: BookADemoFormValidationSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios?.post(
            '/api/email',
            {
              toAdmin: adminId,
              toSubmitter: values?.email,
              adminTemplateId: adminTempleteId,
              data: {
                first_name: values?.first_name,
                last_name: values?.last_name,
                email: values?.email,
                phone_number: values?.phone_number,
                web_url: values?.web_url,
                no_of_employees: values?.no_of_employees,
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response?.status === 200) {
            action?.resetForm();
            values.phone_number = '';
            setTimeout(() => {
              setOpen(!open);
              setModalText('Your data has been successfully submitted');
              setTimeout(() => {
                handleClose();
                if (handleModalClose) {
                  handleModalClose();
                }
              }, 3000);
            }, 2000);
          }
        } catch (error) {
          action?.resetForm();
          values.phone_number = '';
          setTimeout(() => {
            setOpen(!open);
            setModalText('Unfortunately, your data could not be submitted');
            setTimeout(() => {
              handleClose();
            }, 3000);
          }, 2000);

          console.error('Error submitting the form:', error);
        }
      },
    });
  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={formBoxStyles(pathName, book_A_meeting, remote)}>
          <Box sx={titleBoxStyle}>
            <Typography sx={titleStyle}>{title}</Typography>
            <Typography sx={subTitleStyle}>{subTitle}</Typography>
          </Box>
          <Box component={'form'}>
            {fields &&
              fields?.map((item, index) => (
                <Box sx={feildStyles} key={index}>
                  <Typography sx={lableStyle}>{item?.label}</Typography>
                  {item?.label == 'Phone Number*' ? (
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={values?.phone_number}
                      id={'phone_number'}
                      defaultCountry={'PK'}
                      onChange={handlePhoneChange}
                    />
                  ) : (
                    <Box>
                      <Box
                        component={'input'}
                        name={item?.key}
                        placeholder={item?.placeHolder}
                        value={values[item?.key]}
                        type={item?.type}
                        onChange={handleChange}
                        sx={inputStyle}
                      />
                    </Box>
                  )}
                  {touched[item?.key] && errors[item?.key] && (
                    <ErrorMessage message={errors[item?.key]} />
                  )}
                </Box>
              ))}
            <Button onClick={handleSubmit} sx={submitButtonStyle}>
              Submit
            </Button>
            <Box>
              <Typography
                sx={lastDescriptionStyle}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Box>
          </Box>
          <BasicModal text={modalText} open={open} handleClose={handleClose} />
        </Box>
      </Box>
    </>
  );
};

export default BookADemoForm;
