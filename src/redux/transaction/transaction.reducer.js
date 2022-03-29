import TransactionActionTypes from './transaction.types';

const INITIAL_STATE = {
  transactions: [],
  isFetching: false,
  error: null,
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION_START:
      return { ...state, isFetching: true };
    case TransactionActionTypes.ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case TransactionActionTypes.ADD_TRANSACTION_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default transactionReducer;
