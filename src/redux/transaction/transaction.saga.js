import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import transactionService from '../../services/transaction.service';
import {
  addTransactionFailure,
  addTransactionSuccess,
  fetchTransactionFailure,
  fetchTransactionSuccess,
} from './transaction.actions';
import TransactionActionTypes from './transaction.types';

// fetch Transactions
export function* fetchTransactionsAsync({ payload: { currentUser } }) {
  try {
    const transactions = yield transactionService.getMany(currentUser);
    yield put(fetchTransactionSuccess(transactions));
    yield fetchTransactionsAsync();
  } catch (error) {
    yield put(fetchTransactionFailure(error.message));
  }
}

export function* fetchTransactionStart() {
  yield takeEvery(
    TransactionActionTypes.FETCH_TRANSACTIIONS_START,
    fetchTransactionsAsync
  );
}
// add new transaction
export function* addTransaction({ payload: { transaction, currentUser } }) {
  try {
    const newTransaction = yield transactionService.createOne(
      transaction,
      currentUser
    );
    yield put(addTransactionSuccess(newTransaction));
    yield fetchTransactionsAsync({ payload: { currentUser } });
  } catch (e) {
    yield put(addTransactionFailure(e));
  }
}

export function* onAddTransaction() {
  yield takeLatest(
    TransactionActionTypes.ADD_TRANSACTION_START,
    addTransaction
  );
}

export function* transactionSagas() {
  yield all([call(onAddTransaction), call(fetchTransactionStart)]);
}
