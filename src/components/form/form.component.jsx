import React, { useState } from 'react';
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
} from '@material-ui/core';
import useStyles from './form.styles';
import formatDate from '../../utils/formatDate';

const initialState = {
  amount: '',
  category: '',
  type: '',
  date: formatDate(),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
      return;

    console.log(formData);
    setFormData(initialState);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} theme="dark">
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ....
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <FormControl fullWidth required>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <FormControl fullWidth required>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <MenuItem value="business">Besiness</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <FormControl fullWidth>
            <TextField
              type="number"
              label="Amount"
              required
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <FormControl fullWidth hiddenLabel={true}>
            <TextField
              required
              type="date"
              label="Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Button
          onClick={createTransaction}
          className={classes.button}
          variant="outlined"
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
