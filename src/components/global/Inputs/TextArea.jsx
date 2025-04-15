import {
  Box,
  Stack,
  TextareaAutosize,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {
  stackBoxStyle,
  typographyStyle,
  infoIconStyle,
  tooltipBoxStyle,
} from '@/components/global/inputs/TextAreaStyles';

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
      <Box sx={stackBoxStyle}>
        <Typography
          mb={1}
          textAlign="left"
          color={'secondary'}
          sx={typographyStyle}
        >
          {label} {required && <span style={{ color: '#ff0000' }}>*</span>}
        </Typography>
        <Box sx={tooltipBoxStyle}>
          <Tooltip placement="top-start" title={tooltip}>
            <InfoIcon sx={infoIconStyle} />
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
        onChange={(e) => onChange(name, e?.target?.value)}
        required={required}
      />
    </Stack>
  );
};

export default TextArea;
