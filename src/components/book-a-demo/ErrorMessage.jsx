import { Typography } from '@mui/material';
import { errorMessageStyles } from '@/components/book-a-demo/ErrorMessageStyles';

const ErrorMessage = ({ message }) => {
  return <Typography sx={errorMessageStyles}>{message}</Typography>;
};

export default ErrorMessage;
