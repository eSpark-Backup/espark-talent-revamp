import {
  APPLY_FOR_FIELDS,
  PERSONAL_INFO_FIELDS,
  URL_EXPRESSION,
  REGISTRATION_FORM_DATA,
} from '@/constants/join-espark-crew/join-espark-crew';
import { Box, Button, Modal, Stack, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import CustomInput from '@/components/global/inputs/CustomInput';
import Dropdown from '@/components/global/inputs/Dropdown';
import InfoIcon from '@mui/icons-material/Info';
import { TagsInput } from 'react-tag-input-component';
import TextArea from '@/components/global/inputs/TextArea';
import ImgUploader from '@/components/global/inputs/ImageUpload';
import ConfirmCloseModal from '@/components/Join-espark-crew/ConfirmCloseModal';
import { isObjectFilled } from '@/utils/cors';
import Image from 'next/image';
import {
  conatinerStyles,
  submitStyles,
  modalStyle,
  closeButtonBoxStyles,
  closeButtonStyles,
  submitBoxStyles,
  submitContainerStyles,
  dropdownBoxStyles,
  feildsBoxStyles,
  headingTitleStyles,
  orTextStyles,
  infoIconStyles,
  resumeTitleStyles,
  skilsStyles,
  skilsBoxStyles,
  inputBoxStyles,
  containerBoxStyles,
  personalinfoHeadingStyle,
  imageUploaderStack,
  feildsBoxStyles2,
} from '@/components/Join-espark-crew/JoinEsparkRegistrationModalStyles';

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
        sx={modalStyle}
      >
        <>
          <Box
            component="form"
            sx={closeButtonBoxStyles}
            onSubmit={handleSubmit}
          >
            <Button
              sx={closeButtonStyles}
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
            <Box sx={containerBoxStyles(theme)}>
              <Box sx={conatinerStyles}>
                <Typography
                  mb={1}
                  fontSize={25}
                  textAlign="left"
                  color="secondary"
                  sx={personalinfoHeadingStyle}
                >
                  {headings?.PERSONAL_INFO}
                </Typography>
                <Box sx={feildsBoxStyles2}>
                  {PERSONAL_INFO_FIELDS?.map((item, index) => (
                    <Box key={index} sx={inputBoxStyles}>
                      {item?.type === 'text' || item?.type === 'url' ? (
                        <CustomInput
                          value={form[item?.name]}
                          required={item?.required}
                          label={
                            item?.name === 'major' &&
                            (form?.education?.value === 'Bachelors' ||
                              form?.education?.value === 'Masters')
                              ? 'Degree'
                              : item?.label
                          }
                          type={item?.type}
                          name={item?.name}
                          placeholder={
                            item?.name === 'major' &&
                            (form?.education?.value === 'Bachelors' ||
                              form?.education?.value === 'Masters')
                              ? 'Degree'
                              : item?.placeholder
                          }
                          tooltip={
                            item?.name === 'major' &&
                            (form?.education?.value === 'Bachelors' ||
                              form?.education?.value === 'Masters')
                              ? 'Please enter your degree name'
                              : item?.tooltip
                          }
                          onChange={handleChange}
                          maxLength={item?.maxLength && item?.maxLength}
                          className={
                            item?.name === 'major' && !form?.education?.value
                              ? 'hide'
                              : ''
                          }
                        />
                      ) : (
                        <>
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
                          ) : item?.type !== 'tags' &&
                            item?.type !== 'textarea' ? (
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
                                item?.name === 'subField' && !form?.field
                                  ? 'hide'
                                  : item?.name === 'position' && !form?.subField
                                    ? 'hide'
                                    : item?.name === 'position' &&
                                        form?.subField &&
                                        form?.field?.value !==
                                          'Software Engineering'
                                      ? 'hide'
                                      : item?.name === 'city' &&
                                          form?.country?.value !== 'pakistan'
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
                              <Box sx={skilsBoxStyles}>
                                <Typography
                                  color={'secondary'}
                                  sx={skilsStyles}
                                >
                                  Skills, Technologies and Expertise{' '}
                                  <span style={{ color: '#ff0000' }}>*</span>
                                </Typography>
                                <Tooltip
                                  placement="top-start"
                                  title={item?.tooltip}
                                >
                                  <InfoIcon sx={infoIconStyles(theme)} />
                                </Tooltip>
                              </Box>
                              <TagsInput
                                value={form?.tags}
                                onChange={(e) => handleChange('tags', e)}
                                name="skills"
                                placeHolder="Start with # and press enter to add a tag"
                                beforeAddValidate={(tag) => {
                                  if (tag?.trim()?.startsWith('#')) {
                                    return true;
                                  } else {
                                    return false;
                                  }
                                }}
                              />
                            </Stack>
                          )}
                        </>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={conatinerStyles}>
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
                          sx={resumeTitleStyles}
                        >
                          {headings?.RESUME}{' '}
                          <span style={{ color: '#ff0000' }}>*</span>
                        </Typography>
                        <Tooltip
                          placement="top-start"
                          title={
                            'Please choose a file to upload your resume, or you can share a link to your resume with us. Accepted formats are PDF, DOC, and DOCX.'
                          }
                        >
                          <InfoIcon sx={infoIconStyles} />
                        </Tooltip>
                      </Stack>
                      {form?.cv !== '' && (
                        <Image
                          width={25}
                          height={25}
                          src={
                            (
                              typeof form?.cv === 'string'
                                ? form?.cv?.match(new RegExp(URL_EXPRESSION))
                                : form?.cv !== ''
                            )
                              ? '/images/join-crew/green-tick.png'
                              : '/images/join-crew/cross.png'
                          }
                          alt="icon"
                        />
                      )}
                    </Stack>
                    <Stack
                      sx={imageUploaderStack}
                      direction="row"
                      justifyContent="space-between"
                      gap="10px"
                    >
                      <ImgUploader
                        disabled={
                          typeof form?.cv === 'string' && form?.cv !== ''
                        }
                        onChange={handleChange}
                        name={'cv'}
                        filename={form?.cv?.name}
                        form={true}
                      />
                      <Typography sx={orTextStyles} mt={2} variant="subtitle2">
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
              <Box sx={conatinerStyles}>
                <Typography
                  fontSize={25}
                  mb={1}
                  textAlign="left"
                  color="secondary"
                  sx={headingTitleStyles}
                >
                  {headings?.APPLY_FOR}{' '}
                  <span style={{ color: '#ff0000' }}>*</span>
                </Typography>
                <Box sx={feildsBoxStyles}>
                  {APPLY_FOR_FIELDS?.map((item, index) => (
                    <Box key={index} sx={dropdownBoxStyles(theme, item)}>
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
                          item?.name === 'subField' && !form?.field
                            ? 'hide'
                            : item?.name === 'position' && !form?.subField
                              ? 'hide'
                              : item?.name === 'position' &&
                                  form?.subField &&
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

            <Box sx={submitContainerStyles}>
              <Box
                component={'button'}
                sx={submitBoxStyles(theme, loading)}
                className={loading ? 'disabled' : ''}
                disabled={loading}
                type="submit"
              >
                <Typography sx={submitStyles}>
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
