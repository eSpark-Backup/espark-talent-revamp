'use client';

import { useState } from 'react';
import Hero from '@/components/homepage/Hero';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { JOIN_CREW_HERO_DATA } from '@/constants/global/hero-sections';
import {
  BENEFITS,
  KEYS,
  ABOUT,
  JOINT_ESPARK_CREW_HEADING_DATA,
} from '@/constants/join-espark-crew';
import JoinEsparkRegistrationModal from './JoinEsparkRegistrationModal';
import { toast } from 'react-toastify';
import supabase from '@/supabase/supabaseClient';
import JoinEsparkSuccessModal from './JoinEsparkSuccessModal';
import AboutCrewCard from './AboutCrewCard';
import KeyPointCrewCard from './KeyPointCrewCard';
import BenefitCrewCard from './BenefitCrewCard';
import { isValidPhoneNumber } from 'libphonenumber-js';
import axios from 'axios';

export default function JoinEsparkCrewPage() {
  const {
    introSecHeading,
    AboutSecHeading,
    keysPointSecHeading,
    benefitsSecHeading,
    footerSecHeading,
    footerSecDescription,
    jointusSecHeading,
  } = JOINT_ESPARK_CREW_HEADING_DATA;

  const [registrationModal, setRegistrationModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_num: '',
    cnic: '',
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
    tags: [],
    cv: '',
    country: '',
  });

  const handleEmpty = () => {
    setRegistrationModal(false);
    setForm({
      name: '',
      email: '',
      phone_num: '',
      cnic: '',
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
      tags: [],
      cv: '',
    });
  };

  const handleChange = (name, value) => {
    switch (name) {
      case 'field':
        setForm((prev) => ({
          ...prev,
          subField: '',
          position: '',
          [name]: value,
        }));
        break;
      case 'subField':
        setForm((prev) => ({
          ...prev,
          position: '',
          [name]: value,
        }));
        break;
      case 'position':
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
      default:
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };

  const handleClick = () => {
    setRegistrationModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidPhoneNumber(form?.phone_num)) {
      toast.error('Invalid Phone Number');
      setLoading(false);
      return;
    }

    const newPhone_num = form.phone_num.replace(/[\s\-()]/g, '');

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(form?.name)) {
      toast.error('Name should contain only alphabets');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error('Invalid Email Address');
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

    if (form?.cnic?.length < 9) {
      toast?.error('Invalid National ID Number');
      setLoading(false);
      return;
    }

    if (form?.salary_expection <= 0) {
      toast?.error('Invalid Salary');
      setLoading(false);
      return;
    }

    if (form?.linkedin_profile !== '') {
      if (
        !form?.linkedin_profile.includes('linkedin') ||
        !form?.linkedin_profile.includes('.com')
      ) {
        toast?.error('Invalid LinkedIn Profile URL');
        setLoading(false);
        return;
      }
    }

    if (form?.tags.length <= 0) {
      toast?.error(
        'Please enter skills in proper format as specified in tooltip and press enter eg: #react'
      );
      setLoading(false);
      return;
    }

    if (form?.github_profile !== '') {
      if (
        !form?.github_profile.includes('github') ||
        !form?.github_profile.includes('.com')
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
      form?.country === '' ||
      form?.country === null ||
      form?.cv === '' ||
      form?.field === '' ||
      form?.field === null ||
      form?.subField === '' ||
      form?.subField === null ||
      form?.job_type === '' ||
      form?.job_type === null ||
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

    try{
    if (updatedForm.cv instanceof File) {
      const formData = new FormData();
      formData.append('file', updatedForm.cv);

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
        cv: updatedForm.cv,
      }));
    }
    console.log(response, "success")
    }
    catch(err){
      console.log(err, "<<<====error")
    }
    try {
      const { data, error } = await supabase.from('Applicants').insert({
        ...updatedForm,
        availability: updatedForm.availability?.value,
        city: updatedForm.city?.value,
        country: updatedForm.country?.value,
        cnic: updatedForm.cnic,
        education: updatedForm.education?.value,
        email: updatedForm.email,
        experience: updatedForm.experience?.value,
        field: updatedForm.field?.value,
        github_profile: updatedForm.github_profile,
        linkedin_profile: updatedForm.linkedin_profile,
        name: updatedForm.name,
        phone_num: newPhone_num,
        prefrences: updatedForm.prefrences?.value,
        salary_expection: updatedForm.salary_expection,
        tags: updatedForm.tags,
        subField: updatedForm.position?.value
          ? updatedForm.subField?.value
          : null,
        position: !updatedForm.position?.value
          ? updatedForm.subField?.value
          : updatedForm.position?.value,
        job_type: updatedForm.job_type?.value,
        projects: updatedForm.projects,
        cv: resumeKey ? resumeKey : updatedForm.cv,
      });

      if (error) {
        console.log(error?.message);
        toast.error('Something went wrong. Please try again');
        setLoading(false);
      }

      if (data) {
        setRegistrationModal(false);
        setLoading(false);
        setSuccessModal(true);
        setForm({
          name: '',
          email: '',
          phone_num: '',
          cnic: '',
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
          tags: [],
          cv: '',
        });
      }
    } catch (error) {
      console.log(error?.message);
      toast.error('Something went wrong. Please try again');
      setLoading(false);
      setForm((prev) => ({
        ...prev,
        cv: null,
      }));
    }
  };

  return (
    <>
      <Hero
        data={{
          ...JOIN_CREW_HERO_DATA,
          button: { ...JOIN_CREW_HERO_DATA.button, handleClick },
        }}
      />
      {/* About You */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          padding: '30px 50px 50px',
          backgroundColor: '#FAFBFC',
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '80%' } }}>
          <Typography
            variant="h3"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            {introSecHeading}
          </Typography>
          <Typography
            fontSize={{ md: '12px', xs: '18px' }}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            {AboutSecHeading}
          </Typography>
          <Grid container spacing={2}>
            {ABOUT.map((point, index) => {
              return <AboutCrewCard key={index} point={point} index={index} />;
            })}
          </Grid>
        </Box>
      </Stack>
      {/* Key Points */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          padding: '30px 50px 50px',
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '80%', lg: '70%', xl: '50%' } }}>
          <Typography
            variant="h3"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            {keysPointSecHeading}
          </Typography>
          {KEYS.map((key, index) => {
            const splitedKey = key.split(':');
            const title = `${splitedKey[0]}:`;
            const desc = splitedKey[1];
            return (
              <KeyPointCrewCard
                KEYS={KEYS}
                key={index}
                title={title}
                desc={desc}
                index={index}
              />
            );
          })}
        </Box>
      </Stack>

      {/* Benefits */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          padding: '30px 50px 50px',
          backgroundColor: '#FAFBFC',
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '80%' } }}>
          <Typography
            variant="h3"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            {benefitsSecHeading}
          </Typography>
          <Grid container spacing={2}>
            {BENEFITS.map((benefit, index) => {
              return (
                <BenefitCrewCard key={index} benefit={benefit} index={index} />
              );
            })}
          </Grid>
        </Box>
      </Stack>

      {/* Footer CTA */}
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: '#029894',
          backgroundImage: [
            '',
            '',
            `url(/images/footer-cta-main-bg.png)`,
            `url(/images/footer-cta-main-bg.png)`,
          ],
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          padding: '30px',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: { sm: '100%', md: '80%', lg: '70%' } }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#ECECED',
              fontSize: {
                lg: '50px',
                md: '32px',
                sm: '20px',
                xs: '14px',
              },
              '@media (min-width: 280px) and (max-width:359px)': {
                fontSize: '12px',
                lineHeight: 1.1,
              },
              '@media (min-width: 426px) and (max-width:459px)': {
                fontSize: '13px',
                lineHeight: 1,
              },
              lineHeight: 1.3,
              fontWeight: 700,
              py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
              pb: { lg: '1%', md: '1%', sm: '2.5%', xs: '2.5%' },
            }}
          >
            {footerSecHeading}
          </Typography>
          <Typography
            sx={{
              color: '#ECECED',
              fontSize: {
                lg: '24px',
                md: '20px',
                sm: '10px',
                xs: '10px',
              },
              '@media (min-width: 280px) and (max-width:359px)': {
                fontSize: '8px',
              },
              lineHeight: 1.3,
              fontWeight: 400,
              py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
              pb: { lg: '3.5%', md: '3%', sm: '3%', xs: '3%' },
              textAlign: 'center',
            }}
          >
            {footerSecDescription}
          </Typography>

          <Box
            sx={{
              mx: {
                xs: 'auto',
                sm: 'unset',
                justifyContent: { xs: 'center', sm: 'flex-end' },
              },
            }}
            py={{
              xs: '14px',
              sm: '14px',
              md: '16px',
              lg: '20px',
              xl: '20px',
            }}
          >
            <Button
              onClick={handleClick}
              sx={{
                border: '1px solid #fff',
                backgroundColor: 'transparent',
                '&:hover': {
                  color: '#029894',
                  backgroundColor: '#ffffff',
                },

                py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                px: { xs: '10px', sm: '10px', md: '12px', lg: '15px' },
                height: '50px',
                width: '160px',
                color: '#fff',
                fontWeight: '700',
              }}
            >
              {jointusSecHeading}
            </Button>
          </Box>
        </Stack>
      </Stack>

      {/* Registration Modal  */}
      <JoinEsparkRegistrationModal
        open={registrationModal}
        handleClose={() => setRegistrationModal(false)}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        form={form}
        handleEmpty={handleEmpty}
      />

      {/* SUCCESS MODAL  */}
      <JoinEsparkSuccessModal
        open={successModal}
        handleClose={() => {
          setSuccessModal(false);
        }}
      />
    </>
  );
}
