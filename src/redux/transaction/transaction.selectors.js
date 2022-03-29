import { createSelector } from 'reselect';

const selectTransactions = (state) => state.transaction;

export const selectTransactionsData = createSelector(
  [selectTransactions],
  (transaction) => transaction.transactions.data.reverse()
);

export const selectTransactionsPreview = createSelector(
  [selectTransactionsData],
  (transactions) => transactions.filter((t, idx) => idx < 4)
);
