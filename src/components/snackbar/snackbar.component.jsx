import React from 'react';
import { Snackbar } from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './snackbar.styles';

const CustomSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  console.log('render');

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
