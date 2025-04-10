import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

/**
 * Validation schema for the Partnership Form using Yup.
 * Ensures that the form fields meet the specified validation criteria.
 *
 * Fields:
 * - `first_name`:
 *   - Must contain only letters (a-z, A-Z).
 *   - Minimum length: 3 characters.
 *   - Maximum length: 25 characters.
 *   - Required field.
 * - `last_name`:
 *   - Must contain only letters (a-z, A-Z).
 *   - Minimum length: 3 characters.
 *   - Maximum length: 25 characters.
 *   - Required field.
 * - `email`:
 *   - Must be a valid email address.
 *   - Must match the standard email format.
 *   - Required field.
 * - `linkedin_profile_link`:
 *   - Must be a valid LinkedIn profile URL.
 *   - URL must contain "linkedin.com".
 *   - Required field.
 * - `phone_number`:
 *   - Must be a valid phone number (validated using `isValidPhoneNumber` function).
 *   - Required field.
 */
const partnerShipFormValidationSchema = Yup?.object()?.shape({
  first_name: Yup?.string()
    ?.matches(/^[a-z A-Z]+$/, 'First Name must contain only letters')
    ?.min(3, 'First Name must be at least 3 characters')
    ?.max(25, 'First Name must be at most 25 characters')
    ?.required('First Name is required'),
  last_name: Yup?.string()
    ?.matches(/^[a-z A-Z]+$/, 'Last Name must contain only letters')
    ?.min(3, 'Last Name must be at least 3 characters')
    ?.max(25, 'Last Name must be at most 25 characters')
    ?.required('Last Name is required'),
  email: Yup?.string()
    ?.email('Invalid email')
    ?.matches(
      /^[A-Z0-9?._%+-]+@[A-Z0-9?.-]+\?.[A-Z]{2,}$/i,
      'Invalid email address format'
    )
    ?.required('Email is required'),
  linkedin_profile_link: Yup?.string()
    ?.required('LinkedIn Profile is required')
    ?.matches(
      /((https?:\/\/)?((www|\w\w)\?.)?linkedin\?.com\/)((([\w]{2,3})?)|([^]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
      'Invalid LinkedIn Profile URL: Must be a valid URL and contain "linkedin?.com"'
    ),
  phone_number: Yup?.string()
    ?.test('phone', 'Invalid phone number', (value) =>
      value ? isValidPhoneNumber(value) : true
    )
    ?.required('Phone number is required'),
});

/**
 * Validation schema for the "Book A Demo" form using Yup.
 * This schema validates the following fields:
 *
 * - `first_name`:
 *   - Must contain only letters (a-z, A-Z).
 *   - Minimum length: 3 characters.
 *   - Maximum length: 25 characters.
 *   - Required field.
 * - `last_name`:
 *   - Must contain only letters (a-z, A-Z).
 *   - Minimum length: 3 characters.
 *   - Maximum length: 25 characters.
 *   - Required field.
 * - `email`:
 *   - Must be a valid email address.
 *   - Must match the standard email format.
 *   - Required field.
 * - `web_url`:
 *   - Must be a valid URL.
 *   - Supports formats like http, https, ftp, or www.
 *   - Required field.
 * - `no_of_employees`:
 *   - Must be a number.
 *   - Minimum value: 1.
 *   - Required field.
 * - `phone_number`:
 *   - Must be a valid phone number (validated using `isValidPhoneNumber` function).
 *   - Required field.
 */
const BookADemoFormValidationSchema = Yup?.object()?.shape({
  first_name: Yup?.string()
    ?.matches(/^[a-z A-Z]+$/, 'First Name must contain only letters')
    ?.min(3, 'First Name must be at least 3 characters')
    ?.max(25, 'First Name must be at most 25 characters')
    ?.required('First Name is required'),
  last_name: Yup?.string()
    ?.matches(/^[a-z A-Z]+$/, 'Last Name must contain only letters')
    ?.min(3, 'Last Name must be at least 3 characters')
    ?.max(25, 'Last Name must be at most 25 characters')
    ?.required('Last Name is required'),
  email: Yup?.string()
    ?.email('Invalid Email')
    ?.matches(
      /^[A-Z0-9?._%+-]+@[A-Z0-9?.-]+\?.[A-Z]{3,}$/i,
      'Invalid Email Address Format'
    )
    ?.required('Email is required'),

  web_url: Yup?.string()
    ?.matches(
      /^(https?:\/\/|ftp:\/\/|www\?.)[^\s/$?.?#]?.[^\s]*$/,
      'Invalid Url'
    )
    ?.required('Url is required'),

  no_of_employees: Yup?.number()
    ?.min(1, 'Minimum 1 employees')
    ?.required('No of employee is required'),
  phone_number: Yup?.string()
    ?.test('phone', 'Invalid Phone Number', (value) =>
      value ? isValidPhoneNumber(value) : true
    )
    ?.required('Phone Number is required'),
});

export { partnerShipFormValidationSchema, BookADemoFormValidationSchema };
