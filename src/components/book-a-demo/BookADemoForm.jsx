import React, { useState, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ErrorMessage from './ErrorMessage';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isValidPhoneNumber } from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import BasicModal from './BookADemoModal';
import { PopupModal } from 'react-calendly';

const BookADemoForm = ({ form }) => {
  const { title, subTitle, description, fields } = form;
  const [open, setOpen] = React.useState(false);
  const [modalText, setModalText] = React.useState('');
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const partnersRef = useRef(null);

  const Book_A_Demo_Keys = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    web_url: '',
    no_of_employees: '',
  };

  const userid =
    process.env.NEXT_PUBLIC_BOOK_A_MEETING_EMAILJS_USER_ID ||
    'i97Hmgobdw1yJilSn';
  const templeteid =
    process.env.NEXT_PUBLIC_BOOK_A_MEETING_EMAILJS_TEMPLATE_ID ||
    'template_tpktgz5';
  const serviceid =
    process.env.NEXT_PUBLIC_BOOK_A_MEETING_EMAILJS_SERVICE_ID ||
    'service_h5qpxbn';

  emailjs.init(userid);

  const profileValidationSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, 'First name must be at least 3 characters')
      .max(25, 'First name must be at most 25 characters')
      .required('First Name is required'),
    last_name: Yup.string()
      .min(3, 'Last name must be at least 3 characters')
      .max(25, 'Last name must be at most 25 characters')
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
      .max(10, 'Maximum 10 employees')
      .required('No of emp is required'),
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
        console.log(values, 'values');

        try {
          const emailResult = await emailjs.send(serviceid, templeteid, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            web_url: values.web_url,
            no_of_employees: values.no_of_employees,
          });

          if (emailResult.status === 200) {
            action.resetForm();
            values.phone_number = '';
            setTimeout(() => {
              setOpen(!open);
              setModalText('Your data has been successfully submitted');
            }, 2000);
          }
        } catch (error) {
          action.resetForm();
          values.phone_number = '';
          setTimeout(() => {
            setOpen(!open);
            setModalText('Unfortunately, your data could not be submitted');
          }, 2000);

          console.error('Error submitting the form:', error);
        } finally {
          setTimeout(() => {
            setIsOpen(true);
          }, 2000);
        }
      },
    });

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: 'auto', sm: '100%' },
          display: 'flex',
          flexDirection: 'column',
          mt: { xs: 7, sm: 10, md: 10, lg: 0 },
          mb: { xs: 7, sm: 0, md: 0, lg: 0 },
          px: { xs: 7 },
          alignItems: { sm: 'center' },
          justifyContent: { xs: 'auto', lg: 'center' },
          '@media (max-width: 425px)': {
            px: 4,
          },
        }}
      >
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
        <Box component={'form'}>
          {fields &&
            fields?.map((item, index) => (
              <Box sx={{ width: '100%', mb: 1.2 }} key={index}>
                <Typography
                  sx={{
                    mb: 0.5,
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
                        width: { xs: '100%', sm: '436.277px' },
                        borderRadius: '5.418px',
                        height: '41px',
                        border: ' 0.903px solid #D0D4EA',
                        background: '#F5F8FA',
                        fontSize: '14px',
                        pl: 1.5,
                        color: 'black',
                        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':
                          {
                            '-webkit-appearance': 'none',
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
                fontSize: '15px !important',
                fontStyle: 'normal',
                fontWeight: 400,
                linehHeight: '27.863px',
                width: { xs: '280', sm: '430px', md: '430px' },
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
    </>
  );
};

export default BookADemoForm;
