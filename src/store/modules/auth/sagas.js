import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'api';
import history from 'services/history';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/meus-meetups');
  } catch (error) {
    toast.error('O usuário ou senha está incorreto, verique seus dados.');
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signUpSuccess(token, user));

    history.push('/meus-meetups');
  } catch (error) {
    toast.error('O usuário ou senha está incorreto, verique seus dados.');
    yield put(signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
