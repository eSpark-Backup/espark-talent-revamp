'use client';
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PartnerCountrySelect from './PartnerCountrySelect';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { Button, Box, Typography } from '@mui/material';
import 'react-phone-number-input/style.css';
import BasicModal from '../book-a-demo/BookADemoModal';
import axios from 'axios';
import { CountryCode } from '@/constants/global/CountryCodes';
import { PopupModal } from 'react-calendly';

const adminId =
  process.env.NEXT_PUBLIC_PARTNERS_ADMIN_EMAIL_ID || 'info@esparktalent.com';
const adminTempleteId =
  process.env.NEXT_PUBLIC_PARTNERS_ADMIN_TEMPLETE_ID ||
  'd-8e727f584c7e464a8dc4d88bd3b74bab';

const Form = ({ formContent }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  console.log(selectedOption, 'selectedOption');
  const handleClose = () => setOpen(false);
  const partnersRef = useRef(null);
  const PartnerFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country: '',
    linkedin_profile_link: '',
  };

  const options = CountryCode?.map((opt) => opt?.name);

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
      .email('Invalid email')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address format'
      )
      .required('Email is required'),
    linkedin_profile_link: Yup.string()
      .required('LinkedIn Profile is required')
      .matches(
        /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
        'Invalid LinkedIn Profile URL: Must be a valid URL and contain "linkedin.com"'
      ),
    phone_number: Yup.string()
      .test('phone', 'Invalid phone number', (value) =>
        value ? isValidPhoneNumber(value) : true
      )
      .required('Phone number is required'),
  });
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: PartnerFormData,
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
                country: selectedOption,
                linkedin_profile_link: values.linkedin_profile_link,
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
            // values.phone_number = '';
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
          // values.phone_number = '';
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

  const handlePhoneChange = (event) => {
    setFieldValue((values.phone_number = event));
  };

  console.log(values.phone_number, 'phone_number');
  return (
    <Box
      className="partner-form"
      id="partnership-form"
      sx={{
        mt: { xs: '12%', md: '12%' },
        maxWidth: '450px',
        margin: '47px auto !important',
      }}
    >
      <Box sx={{ margin: '0px auto !important' }}>
        <form>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: { xs: '10px', md: '0px' },
            }}
          >
            <Typography
              sx={{
                color: '#265579',
                fontWeight: { xs: 600, md: 700 },
                fontSize: { xs: '20px !important', lg: '25.292px !important' },
                lineHeight: { xs: '29px ', md: '32.509px ' },
                mb: 1,
              }}
            >
              {formContent.title}
            </Typography>
          </Box>
          <Box className="partner-form-full-name">
            <Box className="partner-form-firstname">
              <Typography
                sx={{
                  color: '#265579',
                  fontWeight: { xs: 400, md: 600 },

                  fontSize: '14.448px',
                  lineHeight: '19.867px',
                  mb: 1,
                }}
              >
                {formContent.firstName}
                <span className="starick">*</span>
              </Typography>
              <input
                type="text"
                className="input"
                name="first_name"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange}
              />
              {touched?.first_name && errors?.first_name && (
                <span className="error-message">{errors?.first_name}</span>
              )}
            </Box>
            <Box className="partner-form-lastname">
              <Typography
                sx={{
                  color: '#265579',
                  fontWeight: { xs: 400, md: 600 },

                  fontSize: '14.448px',
                  lineHeight: '19.867px',
                  mb: 1,
                }}
              >
                {formContent.lastName}
                <span className="starick">*</span>
              </Typography>
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
              />
              {touched?.last_name && errors?.last_name && (
                <span className="error-message">{errors?.last_name}</span>
              )}
            </Box>
          </Box>
          <Box className="partner-form-your-email-adress-partnership">
            <Typography
              sx={{
                color: '#265579',
                fontWeight: { xs: 400, md: 600 },

                fontSize: '14.448px',
                lineHeight: '19.867px',
                mb: 1,
              }}
            >
              {formContent.emailAddress}
              <span className="starick">*</span>
            </Typography>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched?.email && errors?.email && (
              <span className="error-message">{errors?.email}</span>
            )}
          </Box>
          <Box className="partner-form-your-email-adress-partnership">
            <Typography
              sx={{
                color: '#265579',
                fontWeight: { xs: 400, md: 600 },

                fontSize: '14.448px',
                lineHeight: '19.867px',
                mb: 1,
              }}
            >
              {formContent.phoneNumber}
              <span className="starick">*</span>
            </Typography>

            <Box className="parnership-form">
              <PhoneInput
                placeholder="Enter phone number"
                value={values.phone_number}
                id={'phone_number'}
                name="phone_number"
                defaultCountry={'PK'}
                onChange={handlePhoneChange}
              />
              {touched?.phone_number && errors?.phone_number && (
                <span className="error-message">{errors?.phone_number}</span>
              )}
            </Box>
          </Box>
          <Box className="partner-form-Country-partnership">
            <Typography
              sx={{
                color: '#265579',
                fontWeight: { xs: 400, md: 600 },

                fontSize: '14.448px',
                lineHeight: '19.867px',
                mb: 1,
              }}
            >
              {formContent.countryLocated}
            </Typography>
            <PartnerCountrySelect
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Box>
          <Box className="partner-form-LinkedIn-Profile-partnership">
            <Typography
              sx={{
                color: '#265579',
                fontWeight: { xs: 400, md: 600 },
                fontSize: '14.448px',
                lineHeight: '19.867px',
                mb: 1,
              }}
            >
              {formContent.linkedInProfile}{' '}
              <Typography component="span" className="starick">
                *
              </Typography>
            </Typography>
            <input
              type="text"
              className="input"
              name="linkedin_profile_link"
              value={values.linkedin_profile_link}
              placeholder="Enter your LinkedIn profile URL"
              onChange={handleChange}
            />
            {touched?.linkedin_profile_link &&
              errors?.linkedin_profile_link && (
                <span className="error-message">
                  {errors?.linkedin_profile_link}
                </span>
              )}
          </Box>
          <Box
            className="partner-form-button"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              py: '15px',
            }}
          >
            <Button onClick={handleSubmit} type="button">
              {formContent.buttonName}
            </Button>
          </Box>
        </form>
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
  );
};

export default Form;
