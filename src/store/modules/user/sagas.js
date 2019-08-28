import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, oldPassword, password, confirmPassword } = payload;

    const { data } = yield call(api.put, '/users', {
      name,
      email,
      oldPassword: String(oldPassword).length ? oldPassword : undefined,
      password: String(password).length ? password : undefined,
      confirmPassword,
    });

    yield put(updateProfileSuccess(data));

    toast.success('Perfil salvo com sucesso!');
  } catch (error) {
    const errorMsg = error.response
      ? error.response.data.error
      : 'Houve um problema, por favor revise os dados e tente novamente.';

    toast.error(errorMsg);

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@profile/UPDATE_REQUEST', updateProfile)]);
