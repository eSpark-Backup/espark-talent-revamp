'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/homepage/Hero';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { JOIN_CREW_HERO_DATA } from '@/constants/global/hero-sections';
import {
  BENEFITS,
  KEYS,
  ABOUT,
  JOINT_ESPARK_CREW_HEADING_DATA,
  pageTextStyles,
  pageAboutYouStackStyles,
  pageKeyPointsStackStyles,
  pageBenefitsStackStyles,
} from '@/constants/join-espark-crew';
import {
  handleChangeJoinCrew,
  handleEmptyJoinCrew,
  handleSubmitJoinCrew,
} from '@/utils';

// Dynamic imports
const JoinEsparkRegistrationModal = dynamic(
  () => import('./JoinEsparkRegistrationModal')
);
const JoinEsparkSuccessModal = dynamic(
  () => import('./JoinEsparkSuccessModal')
);
const AboutCrewCard = dynamic(() => import('./AboutCrewCard'));
const KeyPointCrewCard = dynamic(() => import('./KeyPointCrewCard'));
const BenefitCrewCard = dynamic(() => import('./BenefitCrewCard'));
const FooterCTA = dynamic(() => import('./FooterCTA'));

export default function JoinEsparkCrewPage() {
  const {
    introSecHeading,
    AboutSecHeading,
    keysPointSecHeading,
    benefitsSecHeading,
  } = JOINT_ESPARK_CREW_HEADING_DATA;

  const [registrationModal, setRegistrationModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_num: '',
    linkedin_profile: '',
    salary_expection: '',
    experience: '',
    availability: '',
    prefrences: '',
    education: '',
    major: '',
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

  const handleClick = () => {
    setRegistrationModal(true);
  };

  return (
    <>
      <Hero
        data={{
          ...JOIN_CREW_HERO_DATA,
          button: { ...JOIN_CREW_HERO_DATA?.button, handleClick },
        }}
      />
      {/* About You */}
      <Stack sx={pageAboutYouStackStyles}>
        <Box sx={{ width: { sm: '100%', md: '80%' } }}>
          <Typography variant="h3" sx={pageTextStyles} color="secondary">
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
            {ABOUT?.map((point, index) => {
              return <AboutCrewCard key={index} point={point} index={index} />;
            })}
          </Grid>
        </Box>
      </Stack>
      {/* Key Points */}
      <Stack sx={pageKeyPointsStackStyles}>
        <Box sx={{ width: { sm: '100%', md: '80%', lg: '70%', xl: '50%' } }}>
          <Typography variant="h3" sx={pageTextStyles} color="secondary">
            {keysPointSecHeading}
          </Typography>
          {KEYS?.map((key, index) => {
            const splitedKey = key?.split(':');
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
      <Stack sx={pageBenefitsStackStyles}>
        <Box sx={{ width: { sm: '100%', md: '80%' } }}>
          <Typography variant="h3" sx={pageTextStyles} color="secondary">
            {benefitsSecHeading}
          </Typography>
          <Grid container spacing={2}>
            {BENEFITS?.map((benefit, index) => {
              return (
                <BenefitCrewCard key={index} benefit={benefit} index={index} />
              );
            })}
          </Grid>
        </Box>
      </Stack>
      {/* Footer CTA */}
      <FooterCTA handleClick={handleClick} />

      {/* Registration Modal  */}
      <JoinEsparkRegistrationModal
        open={registrationModal}
        handleClose={() => setRegistrationModal(false)}
        loading={loading}
        handleChange={(name, value) =>
          handleChangeJoinCrew(name, value, setForm)
        }
        handleSubmit={(e) => {
          handleSubmitJoinCrew(
            e,
            form,
            setLoading,
            setForm,
            setRegistrationModal,
            setSuccessModal
          );
        }}
        form={form}
        handleEmpty={() => {
          setRegistrationModal(false);
          handleEmptyJoinCrew(setForm);
        }}
      />
      {/* Success Modal */}
      <JoinEsparkSuccessModal
        open={successModal}
        handleClose={() => {
          setSuccessModal(false);
        }}
      />
    </>
  );
}
