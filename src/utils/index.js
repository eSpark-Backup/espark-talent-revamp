import supabase from '@/supabase/supabaseClient';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { toast } from 'react-toastify';

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

export const handleSubmitJoinCrew = async (
  e,
  form,
  setLoading,
  setForm,
  setRegistrationModal,
  setSuccessModal
) => {
  e.preventDefault();
  setLoading(true);

  if (!isValidPhoneNumber(form?.phone_num)) {
    toast?.error('Invalid Phone Number');
    setLoading(false);
    return;
  }

  const newPhone_num = form?.phone_num?.replace(/[\s\-()]/g, '');

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(form?.name)) {
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
    if (updatedForm?.city === '' || updatedForm?.city === null) {
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
    formData.append('file', updatedForm?.cv);

    const response = await axios.post('/api/resumeupload', formData, {
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
};

// home page hero untils

export const getAnimation = () => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']?.reduce((acc, key) => {
    acc[`is_${key}`] = useMediaQuery((theme) => theme?.breakpoints?.only(key));
    return acc;
  }, {});

  if (breakpoints.is_xl) return 'textSizeAnimation_Xl';
  if (breakpoints.is_lg) return 'textSizeAnimation_lg';
  if (breakpoints.is_md) return 'textSizeAnimation_md';
  if (breakpoints.is_sm) return 'textSizeAnimation_sm';
  if (breakpoints.is_xs) return 'textSizeAnimation_xs';
  return null;
};

export const open = (link, target) => {
  return window?.open(link || '', target);
};

// home page expert team

export const openForm = (link, target, path, handle) =>
  path && path?.includes('/hire-remote-developers')
    ? handle()
    : window?.open(link, target);

// home page faqs

export const handleChange = (panel, setExpanded) => (event, isExpanded) => {
  setExpanded && setExpanded(isExpanded ? panel : null);
};

// ************************** //

// what-we-do page

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

export const paginateData = (data, selectedCategory, page, perPage) => {
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data?.filter((item) => item?.title === selectedCategory);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return filteredData?.slice(startIndex, endIndex);
};

export const totalPageCount = (data, selectedCategory, perPage) => {
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data?.filter((item) => item?.title === selectedCategory);

  return Math.ceil(filteredData?.length / perPage);
};

export const handleJobCategoryChange = (
  event,
  setSelectedCategory,
  setPage
) => {
  setSelectedCategory(event?.target?.value);
  setPage(1);
};

export const handlePaginationChange = (event, value, setPage) => {
  setPage(value);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const handleApplyButtonClick = (
  selectedJobData,
  handleOpen,
  setJobData
) => {
  handleOpen();
  setJobData(selectedJobData);
};

// home page experties section

export const handleChangeAccordion =
  (panel, setExpandedAccordion) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

export const checkingExpendedAccordion = (expandedAccordion, index) => {
  return expandedAccordion === index ? true : false;
};

// Client Says section in hire-a-frontend-developer

export const navigationImageDirection = (
  direction,
  left,
  right,
  prevRef,
  nextRef
) => {
  return direction === left ? prevRef : direction === right ? nextRef : null;
};
