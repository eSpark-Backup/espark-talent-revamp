import { useState } from 'react';
import { Box, Button, Typography, Input } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useFormik } from 'formik';
import axios from 'axios';
import BasicModal from '@/components/book-a-demo/BookADemoModal';
import ErrorMessage from '@/components/book-a-demo/ErrorMessage';
import FileUpload from '@/components/careers/FileUpload';
import { profileValidationSchema } from '@/schema/schema';
import {
  containerStyles,
  innerContainerStyles,
  titleStyles,
  descriptionStyles,
  inputStyles,
  buttonStyles,
  feildBoxStyles,
  lableTitlestyles,
  fileUploadBoxStyles,
} from '@/components/careers/CareersFormStyles';
const CareersForm = ({ form, jobData, handleCloseModal }) => {
  const { description, fields } = form;
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const handleClose = () => setOpen(false);
  const BOOK_A_DEMO_KEYS = {
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

  const handlePhoneChange = (event) => {
    setFieldValue('phone_number', event);
  };

  const handleFileChange = (event) => {
    setFieldValue('resume', event?.currentTarget?.files[0]);
  };

  const onSubmit = async (values, action) => {
    try {
      const attachment = await fileToBase64(values?.resume);

      const emailData = {
        toAdmin: adminId,
        toSubmitter: values?.email,
        adminTemplateId: adminTemplateId,
        data: {
          applied_for: jobData?.title,
          full_name: values?.full_name,
          email: values?.email,
          phone_number: values?.phone_number,
          city: values?.city,
          joining_date: values?.joining_date,
        },
        attachments: [
          {
            content: attachment,
            filename: values?.resume?.name,
            type: values?.resume?.type,
            disposition: 'attachment',
          },
        ],
      };
      const response = await axios?.post(
        '/api/emailwithattachments',
        emailData
      );

      if (response?.status === 200) {
        action?.resetForm();
        setTimeout(() => {
          handleCloseModal();
        }, 1000);
        setModalText('Your data has been successfully submitted');
      }
    } catch (error) {
      action?.resetForm();
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
      initialValues: BOOK_A_DEMO_KEYS,
      validationSchema: profileValidationSchema,
      onSubmit: onSubmit,
    });

  return (
    <Box sx={containerStyles}>
      <Box sx={innerContainerStyles}>
        <Box>
          <Typography sx={titleStyles}>{jobData?.title}</Typography>
          <Typography sx={descriptionStyles}>
            {jobData?.description?.substring(0, 150)}...
          </Typography>
        </Box>
        <Box component={'form'}>
          {fields &&
            fields?.map((item, index) => (
              <Box sx={feildBoxStyles} key={index}>
                <Typography sx={lableTitlestyles}>{item?.label}</Typography>
                {item?.label === 'Phone Number*' ? (
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={values?.phone_number}
                    id={'phone_number'}
                    defaultCountry={'PK'}
                    onChange={handlePhoneChange}
                  />
                ) : item?.label === 'Joining Date*' ? (
                  <Input
                    type="date"
                    name="joining_date"
                    value={values?.joining_date}
                    onChange={handleChange}
                  />
                ) : item?.label === 'Resume*' ? (
                  <Box sx={fileUploadBoxStyles}>
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
                      sx={inputStyles}
                    />
                  </Box>
                )}
                {touched[item?.key] && errors[item?.key] && (
                  <ErrorMessage message={errors[item?.key]} />
                )}
              </Box>
            ))}
          <Button onClick={handleSubmit} sx={buttonStyles}>
            {'Submit'}
          </Button>
          <Box>
            <Typography
              sx={description}
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
