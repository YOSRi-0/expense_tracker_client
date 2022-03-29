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
    transactions.reduce(
      (accTotal, transaction) =>
        transaction.type === 'income' && accTotal + transaction.amount,
      0
    )
);

export const selectExpenseTotal = createSelector(
  [selectTransactions],
  (transactions) =>
    transactions.reduce(
      (accTotal, transaction) =>
        transaction.type === 'expense' && accTotal + transaction.amount,
      0
    )
);
