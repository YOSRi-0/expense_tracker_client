import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import transactionService from '../../services/transaction.service';
import {
  addTransactionFailure,
  addTransactionSuccess,
  deleteTransactionFailure,
  deleteTransactionSuccess,
  fetchTransactionFailure,
  fetchTransactionSuccess,
} from './transaction.actions';
import TransactionActionTypes from './transaction.types';

// fetch Transactions
export function* fetchTransactionsAsync({ payload: { currentUser } }) {
  try {
    const transactionsMap = yield transactionService.getMany(currentUser);
    const transactions = transactionsMap.data.map((transaction) => {
      if (transaction.list === currentUser.types.expenseId) {
        return { ...transaction, type: 'expense' };
      }
      return { ...transaction, type: 'income' };
    });
    yield put(fetchTransactionSuccess(transactions));
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

export function* deleteTransaction({
  payload: { transactionId, currentUser },
}) {
  try {
    yield transactionService.deleteOne(transactionId, currentUser);
    yield put(deleteTransactionSuccess(transactionId));
  } catch (e) {
    yield put(deleteTransactionFailure(e));
  }
}

export function* onAddTransaction() {
  yield takeLatest(
    TransactionActionTypes.ADD_TRANSACTION_START,
    addTransaction
  );
}

export function* onDeleteTransaction() {
  yield takeLatest(
    TransactionActionTypes.DELETE_TRANSACTION_START,
    deleteTransaction
  );
}

export function* transactionSagas() {
  yield all([
    call(onAddTransaction),
    call(fetchTransactionStart),
    call(onDeleteTransaction),
  ]);
}
