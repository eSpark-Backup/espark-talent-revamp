import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { REGISTRATION_FORM_SUCCESS_MODAL_DATA } from '@/constants/join-espark-crew/join-espark-crew';
import {
  style,
  titleBoxStyle,
  descriptionBoxStyle,
  buttonBoxStyle,
  buttonStyle,
} from '@/components/Join-espark-crew/JoinEsparkSuccessModalStyles';

export default function JoinEsparkSuccessModal({ open, handleClose }) {
  const { title, description, buttonText } =
    REGISTRATION_FORM_SUCCESS_MODAL_DATA;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={titleBoxStyle}>{title}</Typography>
          <Typography sx={descriptionBoxStyle}>{description}</Typography>
          {/* MUI button here */}
          <Box sx={buttonBoxStyle}>
            <Button
              sx={buttonStyle}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
