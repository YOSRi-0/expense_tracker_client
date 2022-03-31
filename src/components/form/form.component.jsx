import React, { useEffect, useState } from 'react';
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
import CustomSnackbar from '../snackbar/snackbar.component';
import {
  expenseCategories,
  incomeCategories,
} from '../../constants/categories';
import { useSpeechContext } from '@speechly/react-client';
import { useDispatch, useSelector } from 'react-redux';
import { addTransactionStart } from '../../redux/transaction/transaction.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const initialState = {
  amount: '',
  category: '',
  type: '',
  date: null,
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  const { segment } = useSpeechContext();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
      return;
    if (!isValidForm()) {
      return;
    }

    dispatch(
      addTransactionStart(
        {
          name: formData.category,
          list:
            formData.type === 'expense'
              ? currentUser.types.expenseId
              : currentUser.types.incomeId,
          amount: Number(formData.amount),
          date: formData.date,
        },
        currentUser
      )
    );
    setFormData(initialState);
    setOpen(true);
  };

  const selectedCategories =
    formData.type === 'income' ? incomeCategories : expenseCategories;

  const isValidForm = () => {
    return (
      formData.amount &&
      formData.category &&
      formData.type &&
      formData.date &&
      true
    );
  };
  useEffect(() => {
    console.log(segment);
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'expense' });
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'income' });
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'create_transaction'
      ) {
        isValidForm() && createTransaction();
        console.log('createe!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        return;
      } else if (
        segment.isFinal &&
        segment.intent.intent === 'cancel_transaction'
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value
          .slice(1)
          .toLocaleLowerCase()}`;

        switch (s.type) {
          case 'amount':
            setFormData({ ...formData, amount: s.value });
            break;
          case 'category':
            if (incomeCategories.map((ic) => ic.type).includes(category)) {
              setFormData({ ...formData, type: 'income', category });
            } else if (
              expenseCategories.map((ic) => ic.type).includes(category)
            ) {
              setFormData({ ...formData, type: 'expense', category });
            }
            break;
          case 'date':
            setFormData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });

      console.log(isValidForm());
      segment.isFinal && isValidForm() && createTransaction();
    }
  }, [segment]);

  return (
    <ThemeProvider theme={theme}>
      <CustomSnackbar open={open} setOpen={setOpen} />
      <form noValidate>
        <Grid container spacing={2} theme="dark">
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
              {segment ? (
                <div
                  className="segment"
                  style={{ color: '#fff', overflow: 'auto', height: '45px' }}
                >
                  {segment.words.map((w) => w.value).join(' ')}
                </div>
              ) : null}
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
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="income">Income</MenuItem>
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
                {selectedCategories.map((c) => (
                  <MenuItem key={c.type} value={c.type}>
                    {c.type}
                  </MenuItem>
                ))}
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
                className={classes.datepicker}
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
      </form>
    </ThemeProvider>
  );
};

export default Form;
