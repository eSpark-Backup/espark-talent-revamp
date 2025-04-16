import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Typography, Stack, Tooltip, Box } from '@mui/material';
import { NumericFormat } from 'react-number-format'; // Assuming NumericFormat is correctly imported
import InfoIcon from '@mui/icons-material/Info';
import {
  labelStyle,
  infoIconStyle,
  boxStyle,
  tooltipBoxStyle,
  inputStyle,
} from '@/components/global/inputs/CustomInputStyles';

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
  /**
   * Handles changes to the phone input field.
   *
   * @param {string} value - The raw phone number value entered by the user.
   * @param {Object} country - The country object containing details about the selected country.
   * @param {React.ChangeEvent} e - The event object associated with the input change.
   * @param {string} formattedValue - The formatted phone number value.
   */
  const handlePhoneChange = (value, country, e, formattedValue) => {
    onChange(name, formattedValue); // Assuming you want to pass the formatted phone number
  };

  return type === 'tel' ? (
    <Stack>
      <Box sx={boxStyle}>
        <Typography color={'secondary'} mb={1} sx={labelStyle}>
          {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
        </Typography>
        <Box sx={tooltipBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={infoIconStyle} />
          </Tooltip>
        </Box>
      </Box>
      <PhoneInput
        country={'pk'}
        inputStyle={{ color: 'black', fontSize: '16px' }}
        countryCodeEditable={false}
        onChange={handlePhoneChange}
        value={phone}
      />
    </Stack>
  ) : name === 'salary_expection' ? (
    <Stack direction="column">
      <Box sx={boxStyle}>
        <Typography mb={1} textAlign="left" color={'secondary'} sx={labelStyle}>
          {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
        </Typography>
        <Box sx={tooltipBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={infoIconStyle} />
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
        onChange={(e) => onChange(name, e?.target?.value)}
        style={inputStyle}
      />
    </Stack>
  ) : (
    <Stack direction="column">
      {!(name === 'cv') && (
        <Box className={className} sx={boxStyle}>
          <Typography
            mb={1}
            textAlign="left"
            color={'secondary'}
            sx={labelStyle}
          >
            {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
          </Typography>
          <Box sx={tooltipBoxStyle}>
            <Tooltip placement="top-start" title={tooltip}>
              <InfoIcon sx={infoIconStyle} />
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
          onChange(
            name,
            type === 'file' ? e?.target?.files[0] : e?.target?.value
          )
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
          onInput: (e) =>
            (e.target.value = e?.target?.value?.slice(0, maxLength)),
        })}
      />
    </Stack>
  );
};

export default CustomInput;
