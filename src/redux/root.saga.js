import { all, call } from 'redux-saga/effects';
import { transactionSagas } from './transaction/transaction.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
  yield all([call(userSagas), call(transactionSagas)]);
}
