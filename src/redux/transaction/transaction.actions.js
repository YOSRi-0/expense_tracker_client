import TransactionActionTypes from './transaction.types';

export const addTransactionStart = (transaction, currentUser) => ({
  type: TransactionActionTypes.ADD_TRANSACTION_START,
  payload: { transaction, currentUser },
});

export const addTransactionSuccess = (transaction) => ({
  type: TransactionActionTypes.ADD_TRANSACTION_SUCCESS,
  payload: transaction,
});

export const addTransactionFailure = (error) => ({
  type: TransactionActionTypes.FETCH_TRANSACTIIONS_FAILURE,
  payload: error,
});

export const fetchTransactionStart = (currentUser) => ({
  type: TransactionActionTypes.FETCH_TRANSACTIIONS_START,
  payload: { currentUser },
});

export const fetchTransactionSuccess = (transactions) => ({
  type: TransactionActionTypes.FETCH_TRANSACTIIONS_SUCCESS,
  payload: transactions,
});

export const fetchTransactionFailure = (errorMessage) => ({
  type: TransactionActionTypes.FETCH_TRANSACTIIONS_FAILURE,
  payload: errorMessage,
});
