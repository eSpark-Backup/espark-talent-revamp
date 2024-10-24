import React from 'react';
import {
  Box,
  Stack,
  TextareaAutosize,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {
  textAreaStyle,
  labelStyle,
  requiredStyle,
  infoIconStyle,
  infoIconBoxStyle,
  labelBoxStyle,
} from '@/constants/global/inputs/taxtArea';

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
      <Box sx={labelBoxStyle}>
        <Typography sx={labelStyle}>
          {label} {required && <span style={requiredStyle}>*</span>}
        </Typography>
        <Box sx={infoIconBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={infoIconStyle} />
          </Tooltip>
        </Box>
      </Box>
      <TextareaAutosize
        style={textAreaStyle}
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
