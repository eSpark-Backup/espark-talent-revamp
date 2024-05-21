'use client';
import Image from 'next/image';
import Hero from '@/components/homepage/Hero';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { JOIN_CREW_HERO_DATA } from '@/constants/global/hero-sections';
import { BENEFITS, KEYS } from '@/constants/join-espark-crew';
import JoinEsparkRegistrationModal from './JoinEsparkRegistrationModal';
import { useState } from 'react';

export default function JoinEsparkCrewPage() {
  const [registrationModal, setRegistrationModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_num: "",
    cnic: "",
    linkedin_profile: "",
    salary_expection: "",
    experience: "",
    availability: "",
    prefrences: "",
    education: "",
    github_profile: "",
    job_type: "",
    projects: "",
    city: "",
    field: "",
    subField: "",
    position: "",
    tags: [],
    cv: "",
  });

  const handleChange = (name, value) => {
    switch (name) {
      case "field":
        setForm((prev) => ({
          ...prev,
          subField: "",
          position: "",
          [name]: value,

        }));
        break;
      case "subField":
        setForm((prev) => ({
          ...prev,
          position: "",
          [name]: value,
        }));
        break;
      case "position":
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

  return (
    <>
      <Hero
        data={{
          ...JOIN_CREW_HERO_DATA,
          button: { ...JOIN_CREW_HERO_DATA.button, handleClick },
        }}
      />
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
                      content: "''",
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
            {BENEFITS.map((benefit) => {
              return (
                <Grid sx={{ padding: '20px' }} item xs={12} sm={6} md={4}>
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
        handleSubmit={() => console.log(form)}
        form={form}
      />
    </>



  );
}
