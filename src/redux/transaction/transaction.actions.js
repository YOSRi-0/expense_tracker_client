import TransactionActionTypes from './transaction.types';

export const addTransactionStart = (transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION_START,
  payload: transaction,
});

export const addTransactionSuccess = (transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION_SUCCESS,
  payload: transaction,
});

export const addTransactionFailure = (error) => ({
  type: TransactionActionTypes.FETCH_TRANSACTIIONS_FAILURE,
  payload: error,
});
