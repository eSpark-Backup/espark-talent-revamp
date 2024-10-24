import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Typography, Stack, Tooltip, Box } from '@mui/material';
import { NumericFormat } from 'react-number-format'; // Assuming NumericFormat is correctly imported
import InfoIcon from '@mui/icons-material/Info';
import {
  labelStyle,
  tooltipIconStyle,
  tooltipBoxStyle,
  phoneInputStyle,
  numericFormatStyle,
  inputStyle,
  labelBoxStyle,
} from '@/constants/global/inputs/CustomInput';
import { labelBoxStyle } from '@/constants/global/inputs/taxtArea';

const CustomInput = ({
  value,
  required,
  label,
  type,
  name,
  onChange,
  placeholder,
  maxLength,
  disabled,
  phone,
  tooltip,
  className,
}) => {
  const handlePhoneChange = (value, country, e, formattedValue) => {
    onChange(name, formattedValue); // Assuming you want to pass the formatted phone number
  };
  return type === 'tel' ? (
    <Stack>
      <Box sx={labelBoxStyle}>
        <Typography sx={labelStyle}>
          {label} {required && <span style={requiredStyle}>*</span>}
        </Typography>
        <Box sx={tooltipBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={tooltipIconStyle} />
          </Tooltip>
        </Box>
      </Box>
      <PhoneInput
        country={'pk'}
        inputStyle={phoneInputStyle}
        countryCodeEditable={false}
        onChange={handlePhoneChange}
        value={phone}
      />
    </Stack>
  ) : name === 'salary_expection' ? (
    <Stack direction="column">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography sx={labelStyle}>
          {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
        </Typography>
        <Box sx={tooltipBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={tooltipIconStyle} />
          </Tooltip>
        </Box>
      </Box>

      <NumericFormat
        allowNegative={false}
        min={10}
        placeholder={placeholder}
        name={name}
        allowLeadingZeros
        thousandSeparator=","
        onChange={(e) => onChange(name, e.target.value)}
        style={numericFormatStyle}
      />
    </Stack>
  ) : (
    <Stack direction="column">
      {!(name === 'cv') && (
        <Box
          className={className}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography sx={labelStyle}>
            {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
          </Typography>
          <Box sx={tooltipBoxStyle}>
            <Tooltip placement="top-start" title={tooltip}>
              <InfoIcon sx={tooltipIconStyle} />
            </Tooltip>
          </Box>
        </Box>
      )}

      <input
        value={value}
        style={inputStyle}
        disabled={disabled}
        name={name}
        onChange={(e) =>
          onChange(name, type === 'file' ? e.target.files[0] : e.target.value)
        }
        type={type ? type : 'text'}
        placeholder={placeholder}
        required={required}
        className={`${className} ${
          name === 'cnic'
            ? 'cnic-input'
            : name === 'github_profile'
              ? 'github-input'
              : ''
        }`}
        {...(maxLength && {
          onInput: (e) => (e.target.value = e.target.value.slice(0, maxLength)),
        })}
      />
    </Stack>
  );
};

export default CustomInput;
