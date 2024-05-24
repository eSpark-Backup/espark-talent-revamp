import * as React from 'react';
import { Button, Stack, Typography, Box, Modal } from '@mui/material';

const style = {
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

export default function ConfirmCloseModal({
  open,
  handleClose,
  handleSuccess,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 600,
            }}
          >
            Are you sure?
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              textAlign: 'center',
              color: 'black',
              my: 3,
            }}
          >
            If you close this modal your entered data will be lost
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            sx={{ mt: 2 }}
          >
            <Button
              sx={{
                padding: '5px 40px',
              }}
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                padding: '5px 40px',
              }}
              variant="contained"
              color="primary"
              onClick={handleSuccess}
            >
              Confirm
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
