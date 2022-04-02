import UserActionTypes from './user.types';

export const setCurrentUser = (currentUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: currentUser,
});

export const signUpStart = (user) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: user,
});

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => {
  let e;
  if (error?.response && error?.response?.data) {
    e = error.response.data;
  } else {
    e = error;
  }
  return {
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: e,
  };
};

export const signInStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => {
  let e;
  if (error?.response && error?.response?.data) {
    e = error.response.data;
  } else {
    e = error;
  }
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: e,
  };
};

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
