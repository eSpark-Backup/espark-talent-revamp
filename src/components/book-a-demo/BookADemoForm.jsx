import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ErrorMessage from './ErrorMessage';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isValidPhoneNumber } from 'react-phone-number-input';

const BookADemoForm = ({ form }) => {
  const { title, subTitle, description, fields } = form;
  const Book_A_Demo_Keys = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    web_url: '',
    no_of_employees: '',
  };

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
      .email('Invalid email')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
        'Invalid email address format'
      )
      .required('Email is required'),
    web_url: Yup.string()
      .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Invalid Url')
      .required('Url is required'),
    no_of_employees: Yup.number()
      .min(1, 'minimum 1 employees')
      .max(10, 'maximum 10 employees')
      .required('no of emp is required'),
    phone_number: Yup.string()
      .test('phone', 'Invalid phone number', (value) =>
        value ? isValidPhoneNumber(value) : true
      )
      .required('Phone number is required'),
  });

  const handlePhoneChange = (event) => {
    setFieldValue((values.phone_number = event));
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: Book_A_Demo_Keys,
      validationSchema: profileValidationSchema,
      onSubmit: (values, action) => {
        console.log(values, 'values');
        action.resetForm();
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
          my: { xs: 7, md: 5, lg: 0 },
          px: { xs: 7 },
          alignItems: { sm: 'center' },
          justifyContent: { xs: 'auto', lg: 'center' },
          '@media (max-width: 425px)': {
            px: 4,
          },
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            sx={{
              color: '#001C63',
              fontFamily: 'Poppins',
              fontSize: '32px',
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
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '27.863px',
            }}
          >
            {subTitle}
          </Typography>
        </Box>
        <Box component={'form'}>
          {fields &&
            fields?.map((item, index) => (
              <Box sx={{ width: '100%', mb: 2 }} key={index}>
                <Typography
                  sx={{
                    mb: 0.5,
                    color: '#029894',
                    fontFamily: 'Titillium Web',
                    fontSize: '14.448px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '19.867px',
                  }}
                >
                  {item?.label}
                </Typography>
                {item.label == 'Phone Number*' ? (
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={values?.phone_number}
                    id={'phone_number'}
                    defaultCountry={'PK'}
                    onChange={handlePhoneChange}
                  />
                ) : (
                  <TextField
                    name={item?.key}
                    placeholder={item?.placeHolder}
                    value={values[item?.key]}
                    type={item?.type}
                    onChange={handleChange}
                    sx={{
                      width: { xs: '100%', sm: '436.277px' },
                      borderRadius: '5.418px',
                      background: '#F5F8FA',
                      '& .MuiInputBase-input': {
                        height: '10px',
                        fontSize: '14px',
                      },
                      '& input[type=number]::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: 0,
                      },
                    }}
                    id="outlined-basic"
                    variant="outlined"
                  />
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
        </Box>

        <Box>
          <Typography
            sx={{
              color: '#001C63',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              linehHeight: '27.863px',
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookADemoForm;
