import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  button: {
    marginTop: '25px',
  },
  gridItem: {
    marginTop: '15px',
  },
  datepicker: {
    '& input::-webkit-calendar-picker-indicator': {
      filter: 'invert(1)',
    },
  },
}));
