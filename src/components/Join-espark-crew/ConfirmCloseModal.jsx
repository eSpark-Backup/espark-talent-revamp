import * as React from 'react';
import { Button, Stack, Typography, Box, Modal } from '@mui/material';
import {
  CONFIRMATION_MODAL_DATA,
  modalStyle,
  headingStyle,
  descriptionStyle,
  buttonStyle,
} from '@/constants/join-espark-crew';

export default function ConfirmCloseModal({
  open,
  handleClose,
  handleSuccess,
}) {
  const { heading, description, cancelButton, confirmationButton } =
    CONFIRMATION_MODAL_DATA;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={modalStyle}>
          <Typography style={headingStyle}>{heading}</Typography>
          <Typography style={descriptionStyle}>{description}</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            sx={{ mt: 2 }}
          >
            <Button
              style={buttonStyle}
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              {cancelButton}
            </Button>
            <Button
              style={buttonStyle}
              variant="contained"
              color="primary"
              onClick={handleSuccess}
            >
              {confirmationButton}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
