import { Typography } from '@mui/material';
import Image from 'next/image';
import {
  filenameStyle,
  lableStyle,
  uploadImageStyles,
} from '@/components/global/inputs/ImageUploadStyles';

const ImgUploader = ({ label, name, onChange, disabled, filename, form }) => {
  /**
   * Handles the file input change event and triggers the onChange callback with the selected file.
   *
   * @param {Object} e - The event object from the file input change.
   * @param {string} name - The name associated with the file input field.
   * @returns {void}
   */
  const handleFileChange = (e, name) => {
    if (e?.target?.files?.length > 0) {
      const file = e?.target?.files[0];
      onChange(name, file);
    }
  };
  return (
    <div className="input-parent">
      {label && (
        <Typography mb={1} textAlign="left" sx={lableStyle}>
          {label}
        </Typography>
      )}
      <div>
        <label htmlFor="imageInput">
          <input
            disabled={disabled}
            accept="application/pdf"
            id="imageInput"
            type="file"
            onChange={(e) => handleFileChange(e, name)}
            className="hidden-input"
            name={name}
          />
          <div
            className={
              form ? `image-selector ${disabled ? 'disabled' : ''}` : ''
            }
          >
            <Typography
              sx={{
                backgroundColor: (theme) =>
                  !disabled ? theme?.palette?.primary?.main : '#ccc',
                uploadImageStyles,
              }}
            >
              <Image
                width={22}
                height={22}
                src="/images/join-crew/join-ciew-resume-upload.png"
                alt="Upload Icon"
              />
            </Typography>
            {form && (
              <Typography sx={filenameStyle}>
                {filename
                  ? filename?.length > 15
                    ? filename?.substring(0, 15) + '...'
                    : filename
                  : 'Choose Your File'}
              </Typography>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImgUploader;
