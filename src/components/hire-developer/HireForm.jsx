import React, { useState, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';
import { PopupModal } from 'react-calendly';
import { usePathname } from 'next/navigation';
import BasicModal from '../book-a-demo/BookADemoModal';
import ErrorMessage from '../book-a-demo/ErrorMessage';

const HireForm = ({ form }) => {
  const { title, subTitle, description, fields } = form;
  const [open, setOpen] = React.useState(false);
  const [modalText, setModalText] = React.useState('');
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const partnersRef = useRef(null);
  const pathName = usePathname();
  const book_A_meeting = '/book-a-meeting';
  const book_A_demo_meeting = '/book-a-demo-meeting';

  const Book_A_Demo_Keys = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    web_url: '',
    no_of_employees: '',
  };

  const adminId = process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL_ID;
  const adminTempleteId = process.env.NEXT_PUBLIC_DEMO_ADMIN_TEMPLETE_ID;
  console.log(adminId, 'adminId');
  console.log(adminTempleteId, 'adminTempleteId');

  const profileValidationSchema = Yup.object().shape({
    first_name: Yup.string()
      .matches(/^[a-z A-Z]+$/, 'First Name must contain only letters')
      .min(3, 'First Name must be at least 3 characters')
      .max(25, 'First Name must be at most 25 characters')
      .required('First Name is required'),
    last_name: Yup.string()
      .matches(/^[a-z A-Z]+$/, 'Last Name must contain only letters')
      .min(3, 'Last Name must be at least 3 characters')
      .max(25, 'Last Name must be at most 25 characters')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid Email')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
        'Invalid Email Address Format'
      )
      .required('Email is required'),
    web_url: Yup.string()
      .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Invalid Url')
      .required('Url is required'),
    no_of_employees: Yup.number()
      .min(1, 'Minimum 1 employees')
      .required('No of employee is required'),
    phone_number: Yup.string()
      .test('phone', 'Invalid Phone Number', (value) =>
        value ? isValidPhoneNumber(value) : true
      )
      .required('Phone Number is required'),
  });

  const handlePhoneChange = (event) => {
    setFieldValue((values.phone_number = event));
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: Book_A_Demo_Keys,
      validationSchema: profileValidationSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            '/api/email',
            {
              toAdmin: adminId,
              toSubmitter: values.email,
              adminTemplateId: adminTempleteId,
              data: {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                phone_number: values.phone_number,
                web_url: values.web_url,
                no_of_employees: values.no_of_employees,
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.status === 200) {
            action.resetForm();
            values.phone_number = '';
            setTimeout(() => {
              setOpen(!open);
              setModalText('Your data has been successfully submitted');
              setTimeout(() => {
                handleClose();
              }, 3000);
            }, 2000);
          }
        } catch (error) {
          action.resetForm();
          values.phone_number = '';
          setTimeout(() => {
            setOpen(!open);
            setModalText('Unfortunately, your data could not be submitted');
            setTimeout(() => {
              handleClose();
            }, 3000);
          }, 2000);

          console.error('Error submitting the form:', error);
        } finally {
          setTimeout(() => {
            setIsOpen(true);
          }, 5000);
        }
      },
    });

  return (
    <>
      <Box
        sx={{
          width: 'auto',
          height: '100%',
          maxWidth: '486px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          mx: { md: 'auto' },
          '@media(min-width: 280px) and (max-width:1259px)': {
            mx: 'auto',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', sm: '100%' },
            display: 'flex',
            flexDirection: 'column',
            mt: {
              xs: pathName == book_A_meeting || book_A_demo_meeting ? 0 : 5,
              sm: pathName == book_A_meeting || book_A_demo_meeting ? 0 : 5,
              md: pathName == book_A_meeting || book_A_demo_meeting ? 0 : 10,
              lg: 0,
            },
            mb: {
              xs: pathName == book_A_meeting || book_A_demo_meeting ? 0 : 5,
              sm: 0,
              md: 0,
              lg: 0,
            },
            px: 2,
            alignItems: { md: 'center' },
            justifyContent: { xs: 'auto', lg: 'center' },
            '@media (min-width: 600px) and (max-width: 768px)': {
              justifyContent: 'center',
              px: 2,
              width: '100%',
            },
            '@media (max-width: 425px)': {
              justifyContent: 'center',
              px: 2,
              width: '100%',
            },
          }}
        >
          {pathName !== book_A_demo_meeting && (
            <Box sx={{ mb: { xs: 3, md: 3 }, textAlign: 'center' }}>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: '32px !important',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '42.289px',
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: '15px !important',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: { xs: '25px', sm: '27.863px' },
                }}
              >
                {subTitle}
              </Typography>
            </Box>
          )}

          <Box component={'form'}>
            {fields &&
              fields?.map((item, index) => (
                <Box sx={{ width: '100%', mb: 1.2 }} key={index}>
                  <Typography
                    sx={{
                      pb: 1.5,
                      color: '#029894',
                      fontSize: '14.448px !important',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '19.867px',
                    }}
                  >
                    {item?.label}
                  </Typography>
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
                        sx={{
                          width: '100%',
                          borderRadius: '5.418px',
                          height: '41px',
                          border: ' 0.903px solid #D0D4EA',
                          background: '#F5F8FA',
                          fontSize: '14px',
                          pl: 1.5,
                          color: 'black',
                          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':
                            {
                              WebkitAppearance: 'none',
                              margin: 0,
                            },
                          '&:focus': {
                            outline: 'none',
                          },
                        }}
                      />
                    </Box>
                  )}
                  {touched[item?.key] && errors[item?.key] && (
                    <ErrorMessage message={errors[item?.key]} />
                  )}
                </Box>
              ))}
            <Button
              onClick={handleSubmit}
              sx={{
                mt: 1,
                mb: 3,
                width: '126.416px',
                height: '32.913px',
                borderRadius: '3.92px',
                background: '#001C63',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#029894',
                },
              }}
            >
              Submit
            </Button>
            <Box>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize:
                    pathName === '/book-a-demo-meeting'
                      ? { xs: '11.06px !important', md: '15px !important' }
                      : '15px !important',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  linehHeight: '27.863px',
                  maxWidth: '430px',
                }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Box>
          </Box>
          <BasicModal text={modalText} open={open} handleClose={handleClose} />

          <div id="partners" ref={partnersRef} />
          <PopupModal
            url="https://calendly.com/esparktalents/60min"
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            rootElement={partnersRef.current}
          />
        </Box>
      </Box>
    </>
  );
};

export default HireForm;
