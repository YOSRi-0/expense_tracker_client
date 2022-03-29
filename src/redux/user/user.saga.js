import { put, takeLatest, all, call } from 'redux-saga/effects';
import authService from '../../services/auth.service';
import { signInFailure, signInSuccess } from './user.actions';
import UserActionTypes from './user.types';

export function* signIn({ payload: { email, password } }) {
  try {
    const user = yield authService.login(email, password);
    console.log(user);
    yield put(signInSuccess(user));
  } catch (e) {
    put(signInFailure(e));
  }
}

export function* onSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* userSagas() {
  yield all([call(onSignIn)]);
}
