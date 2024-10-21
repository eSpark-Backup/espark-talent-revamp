import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { REGISTRATION_FORM_SUCCESS_MODAL_DATA } from '@/constants/join-espark-crew';
import {
  modalStyle,
  titleStyle,
  descriptionStyle,
  buttonStyle,
} from '@/constants/join-espark-success-modal';

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
        <Box sx={modalStyle}>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={descriptionStyle}>{description}</Typography>

          {/* MUI button here */}
          <Box sx={{ mt: 2 }}>
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
