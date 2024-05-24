import {
  APPLY_FOR_FIELDS,
  PERSONAL_INFO_FIELDS,
  URL_EXPRESSION,
  REGISTRATION_FORM_DATA,
} from '@/constants/join-espark-crew';
import { Box, Button, Modal, Stack, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import CustomInput from '../global/Inputs/CustomInput';
import Dropdown from '../global/Inputs/Dropdown';
import InfoIcon from '@mui/icons-material/Info';
import { TagsInput } from 'react-tag-input-component';
import TextArea from '../global/Inputs/TextArea';
import ImgUploader from '../global/Inputs/ImageUpload';
import ConfirmCloseModal from './ConfirmCloseModal';
import { isObjectFilled } from '@/utils/cors';

const JoinEsparkRegistrationModal = ({
  open,
  handleClose,
  form,
  loading,
  handleChange,
  handleSubmit,
  handleEmpty,
}) => {
  const theme = useTheme();
  const [confirmClose, setConfirmClose] = useState(false);

  const { headings } = REGISTRATION_FORM_DATA;

  return (
    <>
      <Modal
        open={open}
        onClose={(e, r) => {
          if (r !== 'backdropClick') {
            handleClose();
          }
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <>
          <Box
            component="form"
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              borderRadius: '10px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: { xs: '100%', md: '90%', lg: '80%', xl: '70%' },
              overflowY: 'scroll',
              height: '80vh',
              position: 'relative',
            }}
            onSubmit={handleSubmit}
          >
            <Button
              sx={{ position: 'absolute', top: '10px', right: '10px' }}
              onClick={() => {
                if (isObjectFilled(form)) {
                  setConfirmClose(true);
                } else {
                  handleClose();
                }
              }}
            >
              <CloseIcon />
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',

                [theme.breakpoints.up('xs')]: {
                  flexDirection: 'column',
                  padding: '20px 10px',
                  rowGap: '10px',
                },

                [theme.breakpoints.up('md')]: {
                  flexDirection: 'row',
                  padding: '30px',
                },
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography
                  mb={1}
                  fontSize={25}
                  textAlign="left"
                  color="secondary"
                  sx={{
                    fontSize: { xs: '25px', lg: '30px', fontWeight: 600 },
                  }}
                >
                  {headings.PERSONAL_INFO}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    rowGap: '6px',
                  }}
                >
                  {PERSONAL_INFO_FIELDS?.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        [theme.breakpoints.up('xs')]: {
                          width: '100%',
                        },

                        [theme.breakpoints.up('md')]: {
                          width:
                            item?.name === 'city' ||
                            item?.name === 'job_type' ||
                            item.name === 'projects'
                              ? '100%'
                              : '30%',
                        },
                        marginBottom: { xs: '10px', md: '15px' },
                      }}
                    >
                      {item?.type !== 'select' &&
                      item?.type !== 'tags' &&
                      item?.type !== 'textarea' ? (
                        <CustomInput
                          required={item?.required}
                          label={item?.label}
                          type={item?.type}
                          name={item?.name}
                          placeholder={item?.placeholder}
                          tooltip={item?.tooltip}
                          onChange={handleChange}
                          maxLength={item?.maxLength && item?.maxLength}
                        />
                      ) : item?.type !== 'tags' && item?.type !== 'textarea' ? (
                        <Dropdown
                          required={item?.required}
                          showTooltip={true}
                          name={item?.name}
                          label={item?.label}
                          placeholder={item?.placeholder}
                          tooltip={item?.tooltip}
                          options={
                            item?.name === 'subField'
                              ? item?.options[form?.field?.value]
                              : item?.name === 'position'
                                ? item?.options[form?.subField?.value]
                                : item?.options
                          }
                          onChange={handleChange}
                          className={
                            item?.name === 'subField' && !form.field
                              ? 'hide'
                              : item?.name === 'position' && !form.subField
                                ? 'hide'
                                : item?.name === 'position' &&
                                    form.subField &&
                                    form?.field?.value !==
                                      'Software Engineering'
                                  ? 'hide'
                                  : ''
                          }
                        />
                      ) : item?.type === 'textarea' ? (
                        <TextArea
                          required={item?.required}
                          name={item?.name}
                          placeholder={item?.placeholder}
                          label={item?.label}
                          title={item?.tooltip}
                          tooltip={item?.tooltip}
                          onChange={handleChange}
                        />
                      ) : (
                        <Stack gap={1}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              color={'secondary'}
                              sx={{ fontSize: '18px' }}
                            >
                              Skills, Technologies and Expertise{' '}
                              <span style={{ color: '#ff0000' }}>*</span>
                            </Typography>

                            <Tooltip
                              placement="top-start"
                              title={item?.tooltip}
                            >
                              <InfoIcon
                                sx={{
                                  color: (theme) => theme.palette.primary.main,
                                  marginLeft: '5px',
                                  fontSize: '13px',
                                  marginBottom: '12px',
                                }}
                              />
                            </Tooltip>
                          </Box>
                          <TagsInput
                            value={form.tags}
                            onChange={(e) => handleChange('tags', e)}
                            name="skills"
                            placeHolder="Start with #"
                            beforeAddValidate={(tag) => {
                              if (tag.trim().startsWith('#')) {
                                return true;
                              } else {
                                return false;
                              }
                            }}
                          />
                        </Stack>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ width: '100%' }}>
                {
                  <>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="10px"
                    >
                      <Stack direction={'row'}>
                        <Typography
                          fontSize={25}
                          mb={1}
                          textAlign="left"
                          color="secondary"
                          sx={{
                            fontSize: {
                              xs: '20px',
                              lg: '24px',
                              fontWeight: 600,
                            },
                          }}
                        >
                          {headings.RESUME}{' '}
                          <span style={{ color: '#ff0000' }}>*</span>
                        </Typography>
                        <Tooltip
                          placement="top-start"
                          title={
                            'Please choose a file to upload your resume, or you can share a link to your resume with us. Accepted formats are PDF, DOC, and DOCX.'
                          }
                        >
                          <InfoIcon
                            sx={{
                              color: (theme) => theme.palette.primary.main,
                              marginLeft: '5px',
                              fontSize: '13px',
                              marginBottom: '12px',
                            }}
                          />
                        </Tooltip>
                      </Stack>
                      {form.cv !== '' && (
                        <img
                          width={25}
                          src={
                            (
                              typeof form.cv === 'string'
                                ? form.cv.match(new RegExp(URL_EXPRESSION))
                                : form.cv !== ''
                            )
                              ? '/images/join-crew/green-tick.png'
                              : '/images/join-crew/cross.png'
                          }
                          alt="icon"
                        />
                      )}
                    </Stack>
                    <Stack
                      sx={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        div: { width: '50%', div: { width: '100%' } },
                      }}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="10px"
                    >
                      <ImgUploader
                        disabled={typeof form.cv === 'string' && form.cv !== ''}
                        onChange={handleChange}
                        name={'cv'}
                        filename={form.cv?.name}
                        form={true}
                      />
                      <Typography
                        style={{ color: 'black' }}
                        mt={2}
                        variant="subtitle2"
                      >
                        OR
                      </Typography>
                      <CustomInput
                        onChange={handleChange}
                        type={'url'}
                        placeholder={'Resume Link'}
                        name={'cv'}
                      />
                    </Stack>
                  </>
                }
              </Box>
              <Box sx={{ width: '100%' }}>
                <Typography
                  fontSize={25}
                  mb={1}
                  textAlign="left"
                  color="secondary"
                  sx={{
                    fontSize: { xs: '20px', lg: '24px', fontWeight: 600 },
                  }}
                >
                  {headings.APPLY_FOR}{' '}
                  <span style={{ color: '#ff0000' }}>*</span>
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                >
                  {APPLY_FOR_FIELDS?.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        [theme.breakpoints.up('xs')]: {
                          width: '100%',
                        },

                        [theme.breakpoints.up('md')]: {
                          width:
                            item?.name === 'city' ||
                            item?.name === 'job_type' ||
                            item.name === 'projects'
                              ? '100%'
                              : '30%',
                        },
                      }}
                    >
                      <Dropdown
                        name={item?.name}
                        label={item?.label}
                        value={form[item?.name]}
                        placeholder={item?.placeholder}
                        tooltip={item?.tooltip}
                        options={
                          item?.name === 'subField'
                            ? item?.options[form?.field?.value]
                            : item?.name === 'position'
                              ? item?.options[form?.subField?.value]
                              : item?.options
                        }
                        onChange={handleChange}
                        className={
                          item?.name === 'subField' && !form.field
                            ? 'hide'
                            : item?.name === 'position' && !form.subField
                              ? 'hide'
                              : item?.name === 'position' &&
                                  form.subField &&
                                  form?.field?.value !== 'Software Engineering'
                                ? 'hide'
                                : ''
                        }
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 30px',
                width: '100%',
              }}
            >
              <Box
                component={'button'}
                sx={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: (theme) =>
                    !loading ? theme.palette.primary.main : '#ccc',
                  color: 'white',
                  margin: 'auto auto',
                  border: 'none',
                  fontSize: '22px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  borderRadius: '8px',
                }}
                className={loading ? 'disabled' : ''}
                disabled={loading}
                type="submit"
              >
                <Typography
                  sx={{
                    fontSize: '21.21px',
                  }}
                >
                  {loading ? 'Loading' : 'Submit'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      </Modal>
      <ConfirmCloseModal
        open={confirmClose}
        handleClose={() => setConfirmClose(false)}
        handleSuccess={() => {
          handleEmpty();
          setConfirmClose(false);
        }}
      />
    </>
  );
};

export default JoinEsparkRegistrationModal;
