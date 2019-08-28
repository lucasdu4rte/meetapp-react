export function updateProfileRequest(name, email, password) {
  return {
    type: '@profile/UPDATE_REQUEST',
    payload: { name, email, password },
  };
}

export function updateProfileSuccess(user) {
  return {
    type: '@profile/UPDATE_SUCCESS',
    payload: { user },
  };
}

export function updateProfileFailure() {
  return {
    type: '@profile/UPDATE_FAILURE',
  };
}
