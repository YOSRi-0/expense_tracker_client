import { put, takeLatest, all, call } from 'redux-saga/effects';
import authService from '../../services/auth.service';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

export function* signIn({ payload: { email, password } }) {
  try {
    const user = yield authService.login(email, password);
    yield put(signInSuccess(user));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* signUp({ payload: { username, email, password } }) {
  try {
    const user = yield authService.signUp(username, email, password);
    yield put(signUpSuccess(user));
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export function* singOut() {
  try {
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure(e));
  }
}

export function* onSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, singOut);
}

export function* userSagas() {
  yield all([call(onSignIn), call(onSignUp), call(onSignOut)]);
}
