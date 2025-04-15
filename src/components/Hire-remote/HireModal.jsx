'use client';

import { Modal, Box, Slide } from '@mui/material';
import {
  modalStyle,
  closeButtonContainerStyle,
  closeButtonStyle,
  contentStyle,
  modalContainerStyle,
} from '@/components/hire-remote/HireModalStyles';

export default function HireModal({ content, open, handleModalClose }) {
  return (
    <div>
      <Modal
        disableScrollLock
        closeAfterTransition
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalContainerStyle}
      >
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box sx={modalStyle}>
            <Box sx={closeButtonContainerStyle}>
              <Box onClick={handleModalClose} sx={closeButtonStyle}>
                X
              </Box>
            </Box>
            <Box sx={contentStyle}>{content}</Box>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
