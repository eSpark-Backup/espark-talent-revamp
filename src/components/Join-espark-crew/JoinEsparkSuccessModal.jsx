import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { REGISTRATION_FORM_SUCCESS_MODAL_DATA } from '@/constants/join-espark-crew';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 450 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '40px',
  fontWeight: 600,
};

const descriptionStyle = {
  fontSize: '18px',
  textAlign: 'center',
  color: 'black',
};

const buttonStyle = {
  padding: '5px 40px',
};

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
