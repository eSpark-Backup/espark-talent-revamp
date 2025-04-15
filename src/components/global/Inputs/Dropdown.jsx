import { Stack, Typography, Tooltip, Box } from '@mui/material';
import Select from 'react-select';
import InfoIcon from '@mui/icons-material/Info';
import { APPLY_FOR_ENUMS } from '@/constants/join-espark-crew/join-espark-crew';
import {
  customStyles,
  infoIconStyle,
  toolTipStyle,
  labelStyle,
  stackBoxStyle,
} from '@/components/global/inputs/DropdownStyles';

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

  return (
    <Stack className={className} gap={1}>
      <Box sx={stackBoxStyle}>
        {label && (
          <Typography color={'secondary'} sx={labelStyle}>
            {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
          </Typography>
        )}
        {showTooltip && (
          <Box sx={toolTipStyle}>
            <Tooltip placement="top-start" title={tooltip}>
              <InfoIcon
                sx={{
                  ...infoIconStyle,
                  color: (theme) => theme?.palette?.primary?.main,
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
