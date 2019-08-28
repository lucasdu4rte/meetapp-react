import produce from 'immer';

const initialState = {
  profile: null,
  // loading: null,
};

export default (state = initialState, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = payload.user;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.profile = payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@profile/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@profile/UPDATE_SUCCESS': {
        draft.profile = payload.user;
        draft.loading = false;
        break;
      }
      case '@profile/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
};
