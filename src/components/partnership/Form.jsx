'use client';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import PartnerCountrySelect from './PartnerCountrySelect';
import PhoneInput from 'react-phone-number-input';
import { Button, Box, Typography } from '@mui/material';
import 'react-phone-number-input/style.css';
import BasicModal from '../book-a-demo/BookADemoModal';
import axios from 'axios';
import { CountryCode } from '@/constants/global/CountryCodes';
import { PopupModal } from 'react-calendly';
import { partnerShipFormValidationSchema } from '@/schema/schema';
import { PartnerFormData } from '@/constants/partnership';

const adminId = process?.env?.NEXT_PUBLIC_PARTNERS_ADMIN_EMAIL_ID;
const adminTempleteId = process?.env?.NEXT_PUBLIC_PARTNERS_ADMIN_TEMPLETE_ID;

const Form = ({ formContent, fields }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const handleClose = () => setOpen(false);
  const partnersRef = useRef(null);
  const options = CountryCode?.map((opt) => opt?.name);

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: PartnerFormData,
      validationSchema: partnerShipFormValidationSchema,
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
                country: selectedOption,
                linkedin_profile_link: values?.linkedin_profile_link,
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
            setTimeout(() => {
              setOpen(!open);
              setModalText('Your data has been successfully submitted');
              setTimeout(() => {
                handleClose();
              }, 3000);
            }, 2000);
          }
        } catch (error) {
          action?.resetForm();
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
              {formContent?.title}
            </Typography>
          </Box>
          {fields?.map(
            (
              {
                boxStyle,
                typographyStyle,
                id,
                placeHolder,
                label,
                starickStyle,
                starick,
                type,
                inputStyle,
                key,
                errorStyle,
                fullName,
                defaultCountry,
              },
              index
            ) => (
              <Box key={index}>
                {fullName ? (
                  <Box className="partner-form-full-name">
                    {fullName?.map(
                      (
                        {
                          type,
                          label,
                          key,
                          boxStyle,
                          inputStyle,
                          starickStyle,
                          errorStyle,
                          starick,
                          typographyStyle,
                        },
                        eachIndex
                      ) => (
                        <Box className={boxStyle} key={eachIndex}>
                          <Typography sx={typographyStyle}>
                            {label}
                            <span className={starickStyle}>{starick}</span>
                          </Typography>
                          <input
                            type={type}
                            className={inputStyle}
                            name={key}
                            placeholder={label}
                            value={values[key]}
                            onChange={handleChange}
                          />
                          {touched[key] && errors[key] && (
                            <Typography className={errorStyle}>
                              {errors[key]}
                            </Typography>
                          )}
                        </Box>
                      )
                    )}
                  </Box>
                ) : label === 'Phone Number' ? (
                  <Box className={boxStyle}>
                    <Typography sx={typographyStyle}>
                      {label}
                      <span className={starickStyle}>{starick}</span>
                    </Typography>
                    <PhoneInput
                      placeholder={placeHolder}
                      value={values[key]}
                      id={id}
                      name={key}
                      defaultCountry={defaultCountry}
                      onChange={handlePhoneChange}
                    />
                    {touched[key] && errors[key] && (
                      <Typography className={errorStyle}>
                        {errors?.phone_number}
                      </Typography>
                    )}
                  </Box>
                ) : label === 'Which Country are you Located in?' ? (
                  <Box className={boxStyle} sx={{ mt: 1.8 }}>
                    <Typography sx={typographyStyle}>{label}</Typography>
                    <PartnerCountrySelect
                      options={options}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                    />
                  </Box>
                ) : (
                  <Box className={boxStyle}>
                    <Typography sx={typographyStyle}>
                      {label}
                      <span className={starickStyle}>{starick}</span>
                    </Typography>
                    <input
                      type={type}
                      className={inputStyle}
                      placeholder={placeHolder}
                      name={key}
                      value={values[key]}
                      onChange={handleChange}
                    />
                    {touched[key] && errors[key] && (
                      <Typography className={errorStyle}>
                        {errors[key]}
                      </Typography>
                    )}
                  </Box>
                )}
              </Box>
            )
          )}
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
