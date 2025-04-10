import { Stack, Typography, Tooltip, Box } from '@mui/material';
import Select from 'react-select';
import InfoIcon from '@mui/icons-material/Info';
import { APPLY_FOR_ENUMS } from '@/constants/join-espark-crew';

const Dropdown = ({
  name,
  label,
  placeholder,
  options,
  onChange,
  value,
  className,
  tooltip,
  showTooltip,
  required,
}) => {
  const { FIELDS, SUB_FIELDS, POSITION } = APPLY_FOR_ENUMS;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      ':hover': {
        backgroundColor: '#e6e9eb',
      },
      backgroundColor: state?.isSelected ? '#029894' : 'white',
      zIndex: 9999,
    }),
    control: (provided) => ({
      ...provided,
      color: 'black',
      fontSize: '16px',
      minHeight: '51px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #cccccc',
      },
      '&:focus': {
        border: '1px solid #cccccc',
      },
      border: '1px solid #cccccc',
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: '16px',
      backgroundColor: '#F4F4F4',
    }),
  };

  return (
    <Stack className={className} gap={1}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {label && (
          <Typography
            color={'secondary'}
            sx={{ fontSize: { xs: '14px', md: '18px' } }}
          >
            {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
          </Typography>
        )}
        {showTooltip && (
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
                  color: (theme) => theme?.palette?.primary?.main,
                  marginLeft: '5px',
                  fontSize: '13px',
                  marginBottom: '12px',
                }}
              />
            </Tooltip>
          </Box>
        )}
      </Box>

      <Select
        required={name == 'position' || name === 'city' ? false : true}
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        isSearchable={true}
        isClearable={true}
        onChange={(e) => onChange(name, e)}
        value={value}
        menuPlacement={
          name == FIELDS || name == SUB_FIELDS || name == POSITION
            ? 'top'
            : 'bottom'
        }
      />
    </Stack>
  );
};

export default Dropdown;
