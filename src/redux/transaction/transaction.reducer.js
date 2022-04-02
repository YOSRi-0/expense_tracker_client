import TransactionActionTypes from './transaction.types';

const INITIAL_STATE = {
  transactions: [],
  isFetching: false,
  error: null,
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION_START:
    case TransactionActionTypes.FETCH_TRANSACTIIONS_START:
    case TransactionActionTypes.DELETE_TRANSACTION_START:
      return { ...state, isFetching: true };
    case TransactionActionTypes.ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    case TransactionActionTypes.ADD_TRANSACTION_FAILURE:
      return { ...state, error: action.payload, isFetching: false };

    case TransactionActionTypes.FETCH_TRANSACTIIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        isFetching: false,
        error: null,
      };
    case TransactionActionTypes.FETCH_TRANSACTIIONS_FAILURE:
      return { ...state, error: action.payload, isFetching: false };
    case TransactionActionTypes.DELETE_TRANSACTION_SUCCESS:
      const transactions = state.transactions.filter(
        (t) => t._id !== action.payload
      );
      return {
        ...state,
        transactions: transactions,
        isFetching: false,
        error: null,
      };
    case TransactionActionTypes.DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
