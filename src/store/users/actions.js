export const USERS_INIT = "USERS_INIT";
export const usersInit = () => ({
  type: USERS_INIT
});

export const USERS_INIT_SUCCESS = "USERS_INIT_SUCCESS";
export const usersInitSuccess = message => ({
  type: USERS_INIT_SUCCESS,
  payload: {
    message
  }
});
