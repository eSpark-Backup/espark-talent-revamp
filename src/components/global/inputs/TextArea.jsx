import React from 'react';
import {
  Box,
  Stack,
  TextareaAutosize,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const TextArea = ({
  name,
  placeholder,
  onChange,
  label,
  tooltip,
  required,
}) => {
  return (
    <Stack>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          mb={1}
          textAlign="left"
          color={'secondary'}
          sx={{ fontSize: { xs: '14px', md: '18px' } }}
        >
          {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
        </Typography>
        <Box
          sx={{
            width: '20px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tooltip placement="top-start" title={tooltip}>
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
      </Box>
      <TextareaAutosize
        style={{
          border: '1px solid #cccccc',
          backgroundColor: 'white',
          color: 'black',
          minHeight: '20px',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          width: '100%',
        }}
        className="join-crew-textarea"
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
      />
    </Stack>
  );
};

export default TextArea;
