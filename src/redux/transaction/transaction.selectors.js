import { createSelector } from 'reselect';

const selectTransactions = (state) => state.transaction;

export const selectTransactionsData = createSelector(
  [selectTransactions],
  (transaction) =>
    transaction.transactions && transaction.transactions.reverse()
);

export const selectTransactionsPreview = createSelector(
  [selectTransactionsData],
  (transactions) => transactions.filter((t, idx) => idx < 4)
);

export const selectIncomeTotal = createSelector(
  [selectTransactionsData],
  (transactions) =>
    transactions.reduce((accTotal, transaction) => {
      if (transaction.type === 'income') {
        console.log(transaction);
        return accTotal + transaction.amount;
      }
      return accTotal;
    }, 0)
);

export const selectExpenseTotal = createSelector(
  [selectTransactionsData],
  (transactions) =>
    transactions.reduce((accTotal, transaction) => {
      if (transaction.type === 'expense') {
        return accTotal + transaction.amount;
      }
      return accTotal;
    }, 0)
);

export const selectBalance = createSelector(
  [selectExpenseTotal, selectIncomeTotal],
  (expenseTotal, incomeTotal) => incomeTotal - expenseTotal
);
