import { createSelector } from 'reselect';

const selectTransactions = (state) => state.transaction;

export const selectTransactionsData = createSelector(
  [selectTransactions],
  (transaction) => transaction.transactions.data
);
