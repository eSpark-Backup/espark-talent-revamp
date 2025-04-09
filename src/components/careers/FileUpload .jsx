'use client';
import { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

const FileUpload = ({ handleFileChange }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileSelect = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setFileName(file?.name);
        handleFileChange(event);
      } else {
        alert('Only PDF files are allowed!');
        event.target.value = '';
      }
    }
  };

  const handleClickOpen = (e) => {
    e.preventDefault();
    fileInputRef?.current?.click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        pb: '5px',
        borderBottom: '2px solid #d0d0d0',
        '&:hover': {
          borderBottom: '2px solid #029894',
        },
      }}
    >
      <input
        type="file"
        name="resume"
        accept="application/pdf"
        onChange={handleFileSelect}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button
        onClick={handleClickOpen}
        style={{
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        Choose File
      </button>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '11px', md: '12px', lg: '14px' },
          color: '#029894',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: 'calc(100% - 100px)',
          maxWidth: '260px',
        }}
      >
        {fileName}
      </Typography>
    </Box>
  );
};

export default FileUpload;
