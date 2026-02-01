import React, { useState } from 'react';
import { Box, Button, Typography, Input } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { isValidPhoneNumber } from 'react-phone-number-input';
import axios from 'axios';
import BasicModal from '../book-a-demo/BookADemoModal';
import ErrorMessage from '../book-a-demo/ErrorMessage';
import FileUpload from './FileUpload ';

const CareersForm = ({ form, jobData, handleCloseModal }) => {
  const { description, fields } = form;
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const handleClose = () => setOpen(false);
  const Book_A_Demo_Keys = {
    applied_for: '',
    full_name: '',
    email: '',
    phone_number: '',
    city: '',
    resume: null,
    joining_date: '',
  };

  const adminId = process.env.NEXT_PUBLIC_CAREERS_ADMIN_EMAIL_ID;
  const adminTemplateId = process.env.NEXT_PUBLIC_CAREERS_ADMIN_TEMPLETE_ID;

  const profileValidationSchema = Yup.object().shape({
    full_name: Yup.string()
      .matches(/^[a-z A-Z]+$/, 'Full Name must contain only letters')
      .min(3, 'Full Name must be at least 3 characters')
      .max(50, 'Full Name must be at most 25 characters')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid Email')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
        'Invalid Email Address Format'
      )
      .required('Email is required'),
    phone_number: Yup.string()
      .test('phone', 'Invalid Phone Number', (value) =>
        value ? isValidPhoneNumber(value) : true
      )
      .required('Phone Number is required'),
    city: Yup.string()
      .matches(/^[a-z A-Z]+$/, 'City Name must contain only letters')
      .min(3, 'City Name must be at least 3 characters')
      .max(25, 'City Name must be at most 25 characters')
      .required('City Name is required'),
    resume: Yup.mixed()
      .required('Resume is required')
      .test('fileType', 'Only PDF files are allowed', (value) => {
        return value && value.type === 'application/pdf';
      }),
    joining_date: Yup.date()
      .min(new Date(), 'Joining Date must be in the future')
      .required('Joining Date is required'),
  });

  const handlePhoneChange = (event) => {
    setFieldValue('phone_number', event);
  };

  const handleFileChange = (event) => {
    setFieldValue('resume', event.currentTarget.files[0]);
  };

  const onSubmit = async (values, action) => {
    try {
      const attachment = await fileToBase64(values.resume);

      const emailData = {
        toAdmin: adminId,
        toSubmitter: values.email,
        adminTemplateId: adminTemplateId,
        data: {
          applied_for: jobData?.title,
          full_name: values.full_name,
          email: values.email,
          phone_number: values.phone_number,
          city: values.city,
          joining_date: values.joining_date,
        },
        attachments: [
          {
            content: attachment,
            filename: values.resume.name,
            type: values.resume.type,
            disposition: 'attachment',
          },
        ],
      };
      const response = await axios.post('/api/emailwithattachments', emailData);

      if (response.status === 200) {
        action.resetForm();
        setTimeout(() => {
          handleCloseModal();
        }, 1000);
        setModalText('Your data has been successfully submitted');
      }
    } catch (error) {
      action.resetForm();
      setTimeout(() => {
        handleCloseModal();
      }, 1000);
      setModalText('Unfortunately, your data could not be submitted');
      console.error('Error submitting the form:', error);
    } finally {
      setOpen(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  // Function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: Book_A_Demo_Keys,
      validationSchema: profileValidationSchema,
      onSubmit: onSubmit,
    });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: '486px',
        display: 'flex',
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
          px: 2,
          alignItems: { md: 'center' },
          '@media (min-width: 600px) and (max-width: 768px)': {
            px: 2,
            width: '100%',
          },
          '@media (max-width: 425px)': {
            px: 2,
            width: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', sm: '100%' },
            display: 'flex',
            flexDirection: 'column',
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
          <Typography
            sx={{
              color: '#001C63',
              fontSize: {
                xl: '32px',
                lg: 'calc(32px*.8)',
                md: 'calc(32px*.7)',
                sm: 'calc(32px*.7)',
                xs: 'calc(32px*.7)',
              },

              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {jobData.title}
          </Typography>
          <Typography
            sx={{
              color: '#001C63',
              fontSize: {
                xl: '15px',
                lg: 'calc(15px * .8)',
                md: 'calc(15px * .7)',
                sm: 'calc(15px * .6)',
                xs: 'calc(15px * .5)',
              },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
            dangerouslySetInnerHTML={{
              __html: `${jobData.description?.substring(0, 150) || ''}...`,
            }}
          />
        </Box>
        <Box component={'form'}>
          {fields &&
            fields?.map((item, index) => (
              <Box sx={{ width: '100%', mb: 1.2 }} key={index}>
                <Typography
                  sx={{
                    mb: 0.5,
                    color: '#029894',
                    fontSize: {
                      xl: '14px',
                      lg: 'calc(14px*.8)',
                      md: 'calc(14px*.8)',
                      sm: 'calc(14px*.7)',
                      xs: 'calc(14px*.7)',
                    },
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: {
                      xl: '19px',
                      lg: 'calc(19px*.8)',
                      md: 'calc(19px*.8)',
                      sm: 'calc(19px*.7)',
                      xs: 'calc(19px*.7)',
                    },
                  }}
                >
                  {item?.label}
                </Typography>
                {item?.label === 'Phone Number*' ? (
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={values?.phone_number}
                    id={'phone_number'}
                    defaultCountry={'PK'}
                    onChange={handlePhoneChange}
                    height={{
                      xl: '40px',
                      lg: 'calc(40px*.8)',
                      md: 'calc(40px*.7)',
                      sm: 'calc(40px*.7)',
                      xs: 'calc(40px*.7)',
                    }}
                  />
                ) : item?.label === 'Joining Date*' ? (
                  <Input
                    type="date"
                    name="joining_date"
                    value={values?.joining_date}
                    onChange={handleChange}
                    sx={{
                      height: {
                        xl: '40px',
                        lg: 'calc(40px*.8)',
                        md: 'calc(40px*.7)',
                        sm: 'calc(40px*.7)',
                        xs: 'calc(40px*.7)',
                      },
                    }}
                  />
                ) : item?.label === 'Resume*' ? (
                  <Box sx={{ pt: 0.8 }}>
                    <FileUpload handleFileChange={handleFileChange} />
                  </Box>
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
                        height: {
                          xl: '40px',
                          lg: 'calc(40px*.8)',
                          md: 'calc(40px*.8)',
                          sm: 'calc(40px*.7)',
                          xs: 'calc(40px*.7)',
                        },
                        border: ' 0.903px solid #D0D4EA',
                        background: '#F5F8FA',
                        fontSize: {
                          xl: '14px',
                          lg: 'calc(14px*.8)',
                          md: 'calc(14px*.8)',
                          sm: 'calc(14px*.7)',
                          xs: 'calc(14px*.7)',
                        },
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
              mb: 2,
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
            {'Submit'}
          </Button>
          <Box>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: {
                  xl: '15px',
                  lg: 'calc(15px*.8)',
                  md: 'calc(15px*.8)',
                  sm: 'calc(15px*.7)',
                  xs: 'calc(15px*.7)',
                },
                fontStyle: 'normal',
                fontWeight: 400,
                linehHeight: 1.6,
                maxWidth: '430px',
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Box>
        </Box>
        <BasicModal text={modalText} open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default CareersForm;
