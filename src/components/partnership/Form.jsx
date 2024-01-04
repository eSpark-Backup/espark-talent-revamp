import React, { useState } from 'react';
import PartnerCountrySelect from './PartnerCountrySelect';
import { Button, Box, Typography } from '@mui/material';

const Form = ({ formContent }) => {
  const [selectedOption, setSelectedOption] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const [modalTitle, setModalTitle] = useState(false);
  // const [PhoneError, setPhoneError] = useState();

  // const PartnerFormData = {
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //     phone_number: '',
  //     country: '',
  //     linkedin_profile_link: '',
  // };

  return (
    <Box className="partner-form">
      <form>
        <Box>
          <Typography
            sx={{
              color: '#265579',
              fontWeight: 600,
              fontSize: '25.292px',
              lineHeight: '32.509px',
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
                fontWeight: 600,
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
              // value={values.first_name}
              // onChange={handleChange}
            />
            {/* {touched?.first_name && errors?.first_name && (
                            <span className="error-message">{errors?.first_name}</span>
                        )} */}
          </Box>
          <Box className="partner-form-lastname">
            <Typography
              sx={{
                color: '#265579',
                fontWeight: 600,
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
              // value={values.last_name}
              // onChange={handleChange}
            />
            {/* {touched?.last_name && errors?.last_name && (
                            <span className="error-message">{errors?.last_name}</span>
                        )} */}
          </Box>
        </Box>
        <Box className="partner-form-your-email-adress">
          <Typography
            sx={{
              color: '#265579',
              fontWeight: 600,
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
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {touched?.email && errors?.email && (
                        <span className="error-message">{errors?.email}</span>
                    )} */}
        </Box>
        <Box className="partner-form-your-email-adress">
          <Typography
            sx={{
              color: '#265579',
              fontWeight: 600,
              fontSize: '14.448px',
              lineHeight: '19.867px',
              mb: 1,
            }}
          >
            {formContent.phoneNumber}
            <span className="starick">*</span>
          </Typography>

          <Box className="">
            <input
              type="number"
              className="input"
              placeholder="+00 00000000"
              name="phone"
              // value={values.email}
              // onChange={handleChange}
            />
          </Box>
        </Box>
        <Box className="partner-form-Country">
          <Typography
            sx={{
              color: '#265579',
              fontWeight: 600,
              fontSize: '14.448px',
              lineHeight: '19.867px',
              mb: 1,
            }}
          >
            {formContent.countryLocated}
          </Typography>
          <PartnerCountrySelect
            // options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </Box>
        <Box className="partner-form-LinkedIn-Profile">
          <Typography
            sx={{
              color: '#265579',
              fontWeight: 600,
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
            placeholder="necessary"
            name="linkedin_profile_link"
            // value={values.linkedin_profile_link}
            // placeholder="Enter your LinkedIn profile URL"
            // onChange={handleChange}
          />
          {/* {touched?.linkedin_profile_link &&
                        errors?.linkedin_profile_link && (
                            <span className="error-message">
                                {errors?.linkedin_profile_link}
                            </span>
                        )} */}
        </Box>
        <Box className="partner-form-button">
          <Button
            //  onClick={handleSubmit}
            type="button"
          >
            {formContent.buttonName}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
