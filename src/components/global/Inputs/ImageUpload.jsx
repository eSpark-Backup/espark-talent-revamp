import { Typography } from '@mui/material';
import Image from 'next/image';

const ImgUploader = ({ label, name, onChange, disabled, filename, form }) => {
  const handleFileChange = (e, name) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      onChange(name, file);
    }
  };
  return (
    <div className="input-parent">
      {label && (
        <Typography mb={1} textAlign="left" sx={{ color: 'black' }}>
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
                  !disabled ? theme.palette.primary.main : '#ccc',
                color: '#fff',
                padding: '8px 25px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <Image
                width={22}
                height={22}
                src="/images/join-crew/join-ciew-resume-upload.png"
              />
            </Typography>
            {form && (
              <Typography
                sx={{
                  display: { sm: 'none', md: 'block' },
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {filename
                  ? filename.length > 15
                    ? filename.substring(0, 15) + '...'
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
