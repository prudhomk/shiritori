import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function openSnackbar() {

  const [toast, setToast] = useState({
    open: false, 
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal, open } = toast;

  const handleOpen = (newState) => () => {
    setToast({ open: true, ...newState });
  };

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I am a toast"
        key={vertical + horizontal}
      />
    </div>
  );
}
