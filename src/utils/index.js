import supabase from '@/supabase/supabaseClient';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { toast } from 'react-toastify';

const adminId = process.env.NEXT_PUBLIC_JOIN_CREW_ADMIN_EMAIL_ID;
const adminTempleteId = process.env.NEXT_PUBLIC_JOIN_CREW_ADMIN_TEMPLETE_ID;

/**
 * Updates the state based on the provided field name and value.
 * Handles specific cases for fields like 'education', 'field', 'subField', and 'position'
 * to reset dependent fields in the state.
 *
 * @param {string} name - The name of the field being updated.
 * @param {any} value - The new value for the specified field.
 * @param {Function} setState - The state updater function to modify the state.
 */
export const handleChangeJoinCrew = (name, value, setState) => {
  switch (name) {
    case 'education':
      setState((prev) => ({
        ...prev,
        major: '',
        [name]: value,
      }));
      break;
    case 'field':
      setState((prev) => ({
        ...prev,
        subField: '',
        position: '',
        [name]: value,
      }));
      break;
    case 'subField':
      setState((prev) => ({
        ...prev,
        position: '',
        [name]: value,
      }));
      break;
    case 'position':
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));
      break;
    default:
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));
      break;
  }
};

/**
 * Resets the form state for the "Join Crew" form by setting all fields to empty strings.
 *
 * @param {Function} setForm - A state updater function to update the form state.
 */
export const handleEmptyJoinCrew = (setForm) => {
  setForm({
    name: '',
    email: '',
    phone_num: '',
    linkedin_profile: '',
    salary_expection: '',
    experience: '',
    availability: '',
    prefrences: '',
    education: '',
    github_profile: '',
    job_type: '',
    projects: '',
    city: '',
    field: '',
    subField: '',
    position: '',
    tags: '',
    cv: '',
    country: '',
    gender: '',
  });
};

/**
 * Handles the submission of the "Join Crew" form.
 *
 * @async
 * @function
 * @param {Event} e - The event object from the form submission.
 * @param {Object} form - The form data object containing user input.
 * @param {Function} setLoading - Function to set the loading state.
 * @param {Function} setForm - Function to update the form state.
 * @param {Function} setRegistrationModal - Function to toggle the registration modal visibility.
 * @param {Function} setSuccessModal - Function to toggle the success modal visibility.
 * @returns {Promise<void>} - A promise that resolves when the form submission is complete.
 *
 * @throws {Error} Throws an error if the form submission fails.
 *
 * @description
 * This function validates the form data, uploads the resume if provided, and submits the data to the database and email API.
 * It performs the following steps:
 * 1. Prevents the default form submission behavior.
 * 2. Validates the phone number, name, email, and other required fields.
 * 3. Uploads the resume file if it is a File object.
 * 4. Submits the form data to the Supabase database.
 * 5. Sends an email notification to the admin and the submitter.
 * 6. Handles errors and updates the UI accordingly.
 */
export const handleSubmitJoinCrew = async (
  e,
  form,
  setLoading,
  setForm,
  setRegistrationModal,
  setSuccessModal
) => {
  e?.preventDefault();
  setLoading(true);

  if (!isValidPhoneNumber(form?.phone_num)) {
    toast?.error('Invalid Phone Number');
    setLoading(false);
    return;
  }

  const newPhone_num = form?.phone_num?.replace(/[\s\-()]/g, '');

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex?.test(form?.name)) {
    toast?.error('Name should contain only alphabets');
    setLoading(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex?.test(form?.email)) {
    toast?.error('Invalid Email Address');
    setLoading(false);
    return;
  }

  if (form?.field?.value === 'Software Engineering') {
    if (form?.position === '' || form?.position === null) {
      toast?.error('Please Select the Position');
      setLoading(false);
      return;
    }
  }

  if (form?.salary_expection <= 0) {
    toast?.error('Invalid Salary');
    setLoading(false);
    return;
  }

  if (form?.linkedin_profile !== '') {
    if (
      !form?.linkedin_profile?.includes('linkedin') ||
      !form?.linkedin_profile?.includes('.com')
    ) {
      toast?.error('Invalid LinkedIn Profile URL');
      setLoading(false);
      return;
    }
  }

  if (form?.tags == '') {
    toast?.error('Please enter skills or technologies you are proficient in');
    setLoading(false);
    return;
  }

  if (form?.github_profile !== '') {
    if (
      !form?.github_profile?.includes('github') ||
      !form?.github_profile?.includes('.com')
    ) {
      toast?.error('Invalid Github Profile URL');
      setLoading(false);
      return;
    }
  }

  if (
    form?.experience === '' ||
    form?.experience === null ||
    form?.availability === '' ||
    form?.availability === null ||
    form?.prefrences === '' ||
    form?.prefrences === null ||
    form?.education === '' ||
    form?.education === null ||
    form?.major === '' ||
    form?.major === null ||
    form?.country === '' ||
    form?.country === null ||
    form?.cv === '' ||
    form?.field === '' ||
    form?.field === null ||
    form?.subField === '' ||
    form?.subField === null ||
    form?.job_type === '' ||
    form?.job_type === null ||
    form?.gender === null ||
    form?.gender === '' ||
    form?.projects === ''
  ) {
    toast?.error('All Fields Are Required');
    setLoading(false);
    return;
  }

  // Create a copy of the form object and modify it as needed
  const updatedForm = { ...form };
  if (updatedForm?.country?.value === 'pakistan') {
    if (updatedForm.city === '' || updatedForm.city === null) {
      toast?.error('Please select the city');
      setLoading(false);
      return;
    }
  } else {
    updatedForm.city = null;
  }

  let resumeKey;
  if (updatedForm?.cv instanceof File) {
    const formData = new FormData();
    formData?.append('file', updatedForm?.cv);

    const response = await axios?.post('/api/resumeupload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { fileKey } = response.data;

    resumeKey = fileKey;

    setForm((prev) => ({
      ...prev,
      cv: fileKey,
    }));
  } else {
    setForm((prev) => ({
      ...prev,
      cv: updatedForm?.cv,
    }));
  }
  try {
    const { error } = await supabase.from('Applicants').insert(
      {
        ...updatedForm,
        availability: updatedForm?.availability?.value,
        gender: updatedForm?.gender?.value,
        city: updatedForm?.city?.value,
        country: updatedForm?.country?.value,
        cnic: updatedForm?.cnic,
        education: updatedForm?.education?.value,
        email: updatedForm?.email,
        experience: updatedForm?.experience?.value,
        field: updatedForm?.field?.value,
        github_profile: updatedForm?.github_profile,
        linkedin_profile: updatedForm?.linkedin_profile,
        name: updatedForm?.name,
        phone_num: newPhone_num,
        prefrences: updatedForm?.prefrences?.value,
        salary_expection: updatedForm?.salary_expection,
        tags: updatedForm?.tags,
        subField: updatedForm?.position?.value
          ? updatedForm?.subField?.value
          : null,
        position: !updatedForm?.position?.value
          ? updatedForm?.subField?.value
          : updatedForm?.position?.value,
        job_type: updatedForm?.job_type?.value,
        projects: updatedForm?.projects,
        cv: resumeKey ? resumeKey : updatedForm?.cv,
      },
      { returning: 'minimal' }
    );

    if (error) {
      toast?.error('Something went wrong. Please try again');
      setLoading(false);
    } else {
      setRegistrationModal(false);
      setLoading(false);
      setSuccessModal(true);
      handleEmptyJoinCrew(setForm);
    }
  } catch (error) {
    toast?.error('Something went wrong. Please try again');
    setLoading(false);
    setForm((prev) => ({
      ...prev,
      cv: null,
    }));
  }
  // Send data to API
  try {
    const response = await axios?.post(
      '/api/email',
      {
        toAdmin: adminId,
        toSubmitter: updatedForm?.email,
        adminTemplateId: adminTempleteId,
        data: {
          ...updatedForm,
          availability: updatedForm?.availability?.value,
          gender: updatedForm?.gender?.value,
          city: updatedForm?.city?.value,
          country: updatedForm?.country?.value,
          cnic: updatedForm?.cnic,
          education: updatedForm?.education?.value,
          email: updatedForm?.email,
          experience: updatedForm?.experience?.value,
          field: updatedForm?.field?.value,
          github_profile: updatedForm?.github_profile,
          linkedin_profile: updatedForm?.linkedin_profile,
          name: updatedForm?.name,
          phone_num: newPhone_num,
          prefrences: updatedForm?.prefrences?.value,
          salary_expection: updatedForm?.salary_expection,
          tags: updatedForm?.tags,
          subField: updatedForm?.position?.value
            ? updatedForm?.subField?.value
            : null,
          position: !updatedForm?.position?.value
            ? updatedForm?.subField?.value
            : updatedForm?.position?.value,
          job_type: updatedForm?.job_type?.value,
          projects: updatedForm?.projects,
          cv: resumeKey ? resumeKey : updatedForm?.cv,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response?.status === 200) {
      console.log('Your application has been successfully submitted');
    } else {
      console.log('Failed to submit your application');
    }
  } catch (error) {
    console.error('Failed to submit your application');
    console.error('Error submitting the form:', error);
  }
};

// dublicates slides function for empoloyee slider from homepage
/**
 * Creates a duplicate of the given array of slide objects.
 *
 * @param {Array<Object>} originalSlides - The array of slide objects to duplicate.
 * @returns {Array<Object>} A new array containing duplicates of the original slide objects.
 */
export const duplicateSlides = (originalSlides) => {
  return originalSlides?.map((slide) => ({ ...slide }));
};

// home page hero untils

/**
 * Determines the appropriate animation class name based on the current screen size.
 *
 * This function uses media queries to check the current screen size and returns
 * a corresponding animation class name. The screen sizes are categorized as:
 * 'xs' (extra small), 'sm' (small), 'md' (medium), 'lg' (large), and 'xl' (extra large).
 *
 * @returns {string|null} The animation class name corresponding to the current screen size,
 *                        or `null` if no matching screen size is found.
 */
export const getAnimation = () => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']?.reduce((acc, key) => {
    acc[`is_${key}`] = useMediaQuery((theme) => theme?.breakpoints?.only(key));
    return acc;
  }, {});

  if (breakpoints?.is_xl) return 'textSizeAnimation_Xl';
  if (breakpoints?.is_lg) return 'textSizeAnimation_lg';
  if (breakpoints?.is_md) return 'textSizeAnimation_md';
  if (breakpoints?.is_sm) return 'textSizeAnimation_sm';
  if (breakpoints?.is_xs) return 'textSizeAnimation_xs';
  return null;
};

/**
 * Opens a new browser window or tab with the specified URL and target.
 *
 * @param {string} link - The URL to open. Defaults to an empty string if not provided.
 * @param {string} target - The target where the URL should be opened (e.g., "_blank", "_self").
 * @returns {Window|null} A reference to the newly opened window, or null if the operation fails.
 */
export const open = (link, target) => {
  return window?.open(link || '', target);
};

// home page expert team

/**
 * Opens a form or a new window based on the provided parameters.
 *
 * @param {string} link - The URL to open in a new window if the condition is not met.
 * @param {string} target - The target attribute specifying where to open the link (e.g., "_blank").
 * @param {string} path - The current path to check against a specific condition.
 * @param {Function} handle - The callback function to execute if the condition is met.
 */
export const openForm = (link, target, path, handle) =>
  path && path?.includes('/hire-remote-developers')
    ? handle()
    : window?.open(link, target);

// home page faqs

/**
 * Handles the expansion state of a panel.
 *
 * @param {string} panel - The identifier of the panel to be expanded or collapsed.
 * @param {Function} setExpanded - A function to update the expanded state.
 *                                 It should accept a string (panel identifier) or null.
 * @returns {Function} A callback function to handle the change event.
 *                      The callback takes two parameters:
 *                      - {Object} event: The event object.
 *                      - {boolean} isExpanded: A boolean indicating whether the panel is expanded.
 */
export const handleChange = (panel, setExpanded) => (event, isExpanded) => {
  setExpanded && setExpanded(isExpanded ? panel : null);
};

// ************************** //

// what-we-do page

/**
 * Determines the status of a given path based on predefined conditions.
 *
 * @param {string} pathName - The path name to evaluate.
 * @returns {Object} An object containing boolean flags indicating the status of the path:
 * - `isDemo` {boolean}: True if the path is '/demo'.
 * - `isHome` {boolean}: True if the path is '/'.
 * - `isEnterprise` {boolean}: True if the path is '/solutions/enterprises'.
 * - `isCrew` {boolean}: True if the path is '/join-espark-crew'.
 * - `isBlogOrStartup` {boolean}: True if the path includes '/blogs' or '/business-startup'.
 */
export const getPathStatus = (pathName) => {
  return {
    isDemo: pathName === '/demo',
    isHome: pathName === '/',
    isEnterprise: pathName === '/solutions/enterprises',
    isCrew: pathName === '/join-espark-crew',
    isBlogOrStartup:
      pathName?.includes('/blogs') || pathName?.includes('/business-startup'),
  };
};

/**
 * Handles navigation control for a Swiper instance.
 *
 * @param {string} type - The type of navigation action.
 *                        Accepts 'next' to navigate to the previous slide
 *                        or 'prev' to navigate to the next slide.
 * @param {Object} swiperRef - A reference object to the Swiper instance.
 *                             It should have a `current` property containing the Swiper instance.
 */
export const handleControlSwiper = (type, swiperRef) => {
  switch (type) {
    case 'next':
      swiperRef?.current?.swiper?.slidePrev();
      break;
    case 'prev':
      swiperRef?.current?.swiper?.slideNext();
      break;

    default:
      break;
  }
};

// ************************ //

// careers page

/**
 * Paginates and filters data based on the selected category, page number, and items per page.
 *
 * @param {Array} data - The array of data to be paginated and filtered.
 * @param {string} selectedCategory - The category to filter the data by. Use 'all' to skip filtering.
 * @param {number} page - The current page number (1-based index).
 * @param {number} perPage - The number of items to display per page.
 * @returns {Array} - A sliced array containing the paginated and filtered data for the specified page.
 */
export const paginateData = (data, selectedCategory, page, perPage) => {
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data?.filter((item) => item?.title === selectedCategory);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return filteredData?.slice(startIndex, endIndex);
};

/**
 * Calculates the total number of pages based on the provided data, selected category, and items per page.
 *
 * @param {Array} data - The array of data items to paginate.
 * @param {string} selectedCategory - The category to filter the data by. Use 'all' to include all items.
 * @param {number} perPage - The number of items to display per page.
 * @returns {number} The total number of pages required.
 */
export const totalPageCount = (data, selectedCategory, perPage) => {
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data?.filter((item) => item?.title === selectedCategory);

  return Math?.ceil(filteredData?.length / perPage);
};

/**
 * Handles the change event for job category selection.
 *
 * @param {Object} event - The event object from the change event.
 * @param {Function} setSelectedCategory - Function to update the selected category state.
 * @param {Function} setPage - Function to reset the pagination to the first page.
 */
export const handleJobCategoryChange = (
  event,
  setSelectedCategory,
  setPage
) => {
  setSelectedCategory(event?.target?.value);
  setPage(1);
};

/**
 * Handles pagination change by updating the current page and scrolling to the top of the page.
 *
 * @param {Object} event - The event object triggered by the pagination component.
 * @param {number} value - The new page number selected.
 * @param {Function} setPage - A function to update the current page state.
 */
export const handlePaginationChange = (event, value, setPage) => {
  setPage(value);
  window?.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * Handles the click event for the "Apply" button.
 *
 * @param {Object} selectedJobData - The data of the selected job.
 * @param {Function} handleOpen - Function to open a modal or perform an open action.
 * @param {Function} setJobData - Function to set the job data state.
 */
export const handleApplyButtonClick = (
  selectedJobData,
  handleOpen,
  setJobData
) => {
  handleOpen();
  setJobData(selectedJobData);
};

// home page experties section

/**
 * Handles the state change for an accordion component.
 *
 * @param {string} panel - The identifier for the accordion panel.
 * @param {Function} setExpandedAccordion - A state setter function to update the expanded accordion panel.
 * @returns {Function} - A function to handle the accordion's expansion state change.
 */
export const handleChangeAccordion =
  (panel, setExpandedAccordion) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

/**
 * Checks if the given accordion index matches the expanded accordion.
 *
 * @param {number|string} expandedAccordion - The currently expanded accordion identifier.
 * @param {number|string} index - The index of the accordion to check.
 * @returns {boolean} Returns `true` if the given index matches the expanded accordion, otherwise `false`.
 */
export const checkingExpendedAccordion = (expandedAccordion, index) => {
  return expandedAccordion === index ? true : false;
};

// Client Says section in hire-a-frontend-developer

/**
 * Determines the navigation reference based on the given direction.
 *
 * @param {string} direction - The current navigation direction.
 * @param {string} left - The string representing the left direction.
 * @param {string} right - The string representing the right direction.
 * @param {any} prevRef - The reference to use when the direction is left.
 * @param {any} nextRef - The reference to use when the direction is right.
 * @returns {any|null} - Returns `prevRef` if the direction matches `left`,
 *                       `nextRef` if the direction matches `right`,
 *                       or `null` if neither matches.
 */
export const navigationImageDirection = (
  direction,
  left,
  right,
  prevRef,
  nextRef
) => {
  return direction === left ? prevRef : direction === right ? nextRef : null;
};

// footer cta

/**
 * Determines the render data based on the current path and pricing link.
 *
 * @param {string} pathName - The current path name of the application.
 * @param {string} pricingLink - The link or identifier for the pricing page.
 * @param {Object} pricingPageData - The data to render for the pricing page.
 * @param {Object} globalData - The default data to render for other pages.
 * @returns {Object} - Returns `pricingPageData` if the path includes the pricing link, otherwise returns `globalData`.
 */
export const getRenderData = (
  pathName,
  pricingLink,
  pricingPageData,
  globalData
) => {
  return pathName?.includes(pricingLink) ? pricingPageData : globalData;
};

// Client Slider functions

/**
 * Extends the given array of clients to the specified length by repeating its elements.
 *
 * @param {Array<Object>} clients - The array of client objects to extend.
 * @param {number} length - The desired length of the extended array.
 * @returns {Array<Object>} A new array of client objects extended to the specified length.
 */
export const extendClients = (clients, length) => {
  const extendedClients = Array?.from({ length }, (_, index) => ({
    ...clients[index % clients?.length],
  }));
  return extendedClients;
};

/**
 * Modifies the image path based on the provided background color.
 *
 * @param {string} originalImagePath - The original path of the image.
 * @param {string} bgColor - The background color used to determine the image variant.
 *                           If the background color is `#029894` or not provided,
 *                           the function replaces `_dark` with `_light` in the image path.
 *                           Otherwise, it replaces `_light` with `_dark`.
 * @returns {string} - The modified image path with the appropriate variant.
 */
export const getImagePath = (originalImagePath, bgColor) => {
  if (bgColor == '#029894' || !bgColor) {
    return originalImagePath?.replace('_dark', '_light');
  } else {
    return originalImagePath?.replace('_light', '_dark');
  }
};

// demo cta function for demo and book-a-meeting page

/**
 * Determines the size based on screen dimensions.
 *
 * @param {boolean} isSmallScreen - Indicates if the screen is small.
 * @param {boolean} isMediumScreen - Indicates if the screen is medium.
 * @param {boolean} isLargeScreen - Indicates if the screen is large.
 * @returns {string} The size as a string: 'small', 'medium', or 'large'.
 */
export const getSize = (isSmallScreen, isMediumScreen, isLargeScreen) =>
  isSmallScreen
    ? 'small'
    : isMediumScreen
      ? 'medium'
      : isLargeScreen
        ? 'large'
        : 'medium';
