'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/homepage/Hero';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { JOIN_CREW_HERO_DATA } from '@/constants/global/hero-sections';
import { BENEFITS, KEYS, ABOUT } from '@/constants/join-espark-crew';
import JoinEsparkRegistrationModal from './JoinEsparkRegistrationModal';
import { toast } from 'react-toastify';
import supabase from '@/supabase/supabaseClient';
import JoinEsparkSuccessModal from './JoinEsparkSuccessModal';

export default function JoinEsparkCrewPage() {
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
    const newPhone_num = form.phone_num.replace(/\s|-/g, '');

    if (newPhone_num.length !== 13 || !newPhone_num.startsWith('+923')) {
      toast.error('Invalid Phone Number');
      setLoading(false);
      return;
    }

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

    if (
      form?.experience === '' ||
      form?.availability === '' ||
      form?.prefrences === '' ||
      form?.tags.length <= 0 ||
      form?.education === '' ||
      form?.city === '' ||
      form?.cv === '' ||
      form?.field === '' ||
      form?.subField === '' ||
      form?.job_type === '' ||
      form?.projects === ''
    ) {
      toast?.error('All Fields Are Required');
      setLoading(false);
      return;
    }
    if ((form?.cnic?.length || 0) !== 13) {
      toast?.error('Invalid CNIC Number');
      setLoading(false);
      return;
    }

    if (form?.salary_expection <= 0) {
      toast?.error('Invalid Salary');
      setLoading(false);
      return;
    }

    if (
      !form?.linkedin_profile.includes('linkedin') ||
      !form?.linkedin_profile.includes('.com')
    ) {
      toast?.error('Invalid Linked Profile URL');
      setLoading(false);
      return;
    }
    if (
      !form?.github_profile.includes('github') ||
      !form?.github_profile.includes('.com')
    ) {
      toast?.error('Invalid Github Profile URL');
      setLoading(false);
      return;
    }

    let resumeKey;

    if (form.cv instanceof File) {
      const formData = new FormData();
      formData.append('file', form.cv);

      const response = await fetch('/api/resumeupload', {
        method: 'POST',
        body: formData,
      });

      const { fileKey } = await response.json();

      console.log(fileKey, 'fileKey');
      resumeKey = fileKey;

      setForm((prev) => ({
        ...prev,
        cv: fileKey,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        cv: form.cv,
      }));
    }

    try {
      const { data, error } = await supabase.from('Applicants').insert({
        ...form,
        availability: form.availability?.value,
        city: form.city?.value,
        cnic: form.cnic,
        education: form.education?.value,
        email: form.email,
        experience: form.experience?.value,
        field: form.field?.value,
        github_profile: form.github_profile,
        linkedin_profile: form.linkedin_profile,
        name: form.name,
        phone_num: newPhone_num,
        prefrences: form.prefrences?.value,
        salary_expection: form.salary_expection,
        tags: form.tags,
        subField: form.position?.value ? form.subField?.value : null,
        position: !form.position?.value
          ? form.subField?.value
          : form.position?.value,
        job_type: form.job_type?.value,
        projects: form.projects,
        cv: resumeKey ? resumeKey : form.cv,
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
            variant="h4"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            Who should work at eSpark Talent?
          </Typography>
          <Typography
            fontSize={{ md: '12px', xs: '18px' }}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            SOME THINGS ABOUT YOU
          </Typography>
          <Grid container spacing={2}>
            {ABOUT.map((point, index) => {
              return (
                <Grid
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-end',
                    display: { sm: 'inline-block', md: index === 0 && 'flex' },
                  }}
                  padding="10px"
                  key={point}
                  sm={12}
                  md={6}
                >
                  <Stack
                    direction={{
                      sm: 'row',
                      md: index % 2 === 0 ? 'row-reverse' : 'row',
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="20px"
                    sx={{
                      width: {
                        sm: '100%',
                        md: index === 0 || index === 1 ? '80%' : '100%',
                      },
                      padding: '10px',
                      boxShadow: '0px 4px 25.2px 0px #0000001F',
                      borderRadius: '7px',
                      position: 'relative',
                      minHeight: '95px',
                      ':after': {
                        content: '" "',
                        width: { sm: '3px', md: '3px' },
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        left: { sm: '0px', md: 'auto !important' },
                        [index % 2 !== 0 ? 'left' : 'right']: '0px !important',
                        backgroundColor: '#029894',
                      },
                    }}
                  >
                    <Typography
                      sx={{ letterSpacing: '5px' }}
                      color="secondary"
                      fontSize={20}
                      fontWeight={600}
                    >
                      0{index + 1}
                    </Typography>
                    <Typography
                      color="secondary"
                      fontSize={18}
                      fontWeight={500}
                      textAlign={{ xs: 'center', md: 'initial' }}
                    >
                      {point}
                    </Typography>
                  </Stack>
                </Grid>
              );
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
            variant="h4"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            Key Points To Consider:
          </Typography>
          {KEYS.map((key, index) => {
            const splitedKey = key.split(':');
            const title = `${splitedKey[0]}:`;
            const desc = splitedKey[1];
            return (
              <Stack
                key={key}
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="10px"
                sx={{
                  marginBottom: index !== KEYS.length - 1 ? '20px' : '0px',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    borderRadius: '50%',
                    padding: '7px',
                    position: 'relative',
                    ':after': {
                      content: '" "',
                      position: 'absolute',
                      top: '40px',
                      left: '22px',
                      backgroundColor: '#029894',
                      width: { xs: '0px', sm: '2px' },
                      height: index !== KEYS.length - 1 ? '50px' : '0px',
                    },
                  }}
                >
                  <Typography
                    sx={{ width: '30px', height: '30px' }}
                    lineHeight={1.6}
                    textAlign="center"
                    fontWeight={700}
                    color="#fff"
                  >
                    {index + 1}
                  </Typography>
                </Box>

                <Typography
                  mt="5px"
                  lineHeight={1.65}
                  fontWeight={500}
                  fontSize={{
                    xs: '12px',
                    sm: '12px',
                    md: '16px',
                    lg: '20px',
                    xl: '20px',
                  }}
                  color="secondary"
                >
                  <span style={{ fontWeight: 700, color: '#001C63' }}>
                    {title}
                  </span>
                  {desc}
                </Typography>
              </Stack>
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
            variant="h4"
            fontSize={{ md: '32px', xs: '20px' }}
            lineHeight={{ lg: '48px', xs: '26px' }}
            fontWeight={700}
            textAlign="center"
            color="secondary"
            mb="30px"
          >
            Why eSpark Talent
          </Typography>
          <Grid container spacing={2}>
            {BENEFITS.map((benefit, index) => {
              return (
                <Grid
                  key={index}
                  sx={{ padding: '20px' }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="10px"
                    sx={{
                      backgroundColor: '#E8F4FF66',
                      padding: '10px',
                      border: '0.67px solid #0000004D',
                      borderRadius: '3.34px',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        width: '30px',
                        borderRadius: '50%',
                        padding: '7px',
                      }}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/images/join-crew/tick.png"
                      />
                    </Box>
                    <Typography variant="subtitle2" color="secondary">
                      {benefit}
                    </Typography>
                  </Stack>
                </Grid>
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
            Are you ready to join the team
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
            We are always looking for bright minds and enthusiastic people from
            diverse backgrounds, who want to be part of an outstanding team.
            Even if you don’t find a suitable position below, please do not
            hesitate to drop us your resume.
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
              Join Us Now
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
