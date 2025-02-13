import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

const partnerShipFormValidationSchema = Yup?.object()?.shape({
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

const BookADemoFormValidationSchema = Yup.object().shape({
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
  .matches(/^(https?:\/\/|ftp:\/\/|www\.)[^\s/$.?#].[^\s]*$/, 'Invalid Url')
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

export { partnerShipFormValidationSchema, BookADemoFormValidationSchema };
