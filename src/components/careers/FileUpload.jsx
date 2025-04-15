'use client';

import { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { boxStyle, fileNameStyle } from '@/components/careers/FileUploadStyles';

const FileUpload = ({ handleFileChange }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('No file chosen');

  /**
   * Handles the file selection event from an input element.
   * Validates the selected file to ensure it is a PDF and updates the state with the file name.
   * If the file is not a PDF, an alert is displayed, and the input value is cleared.
   *
   * @param {Object} event - The event object from the file input element.
   * @param {Object} event.target - The target element of the event.
   * @param {FileList} event.target.files - The list of files selected in the input element.
   * @param {File} event.target.files[0] - The first file in the selected file list.
   */
  const handleFileSelect = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      if (file?.type === 'application/pdf') {
        setFileName(file?.name);
        handleFileChange(event);
      } else {
        alert('Only PDF files are allowed!');
        event.targe.value = '';
      }
    }
  };

  /**
   * Handles the click event to open the file input dialog.
   * Prevents the default behavior of the event and triggers a click on the file input element.
   *
   * @param {Event} e - The event object from the click action. Optional.
   */
  const handleClickOpen = (e) => {
    e?.preventDefault();
    fileInputRef?.current?.click();
  };

  return (
    <Box sx={boxStyle}>
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
      <Typography variant="body1" sx={fileNameStyle}>
        {fileName}
      </Typography>
    </Box>
  );
};

export default FileUpload;
