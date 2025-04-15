import { Button, Stack, Typography, Box, Modal } from '@mui/material';
import { CONFIRMATION_MODAL_DATA } from '@/constants/join-espark-crew/join-espark-crew';
import {
  style,
  headingStyle,
  descriptionStyle,
  buttonStyle,
  stackStyle,
} from '@/components/Join-espark-crew/ConfirmCloseModalStyles';

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
        <Box sx={style}>
          <Typography sx={headingStyle}>{heading}</Typography>
          <Typography sx={descriptionStyle}>{description}</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            sx={stackStyle}
          >
            <Button
              sx={buttonStyle}
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              {cancelButton}
            </Button>
            <Button
              sx={buttonStyle}
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
