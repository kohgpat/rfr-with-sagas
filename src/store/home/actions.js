export const HOME_INIT = "HOME_INIT";
export const homeInit = () => ({
  type: HOME_INIT
});

export const HOME_INIT_SUCCESS = "HOME_INIT_SUCCESS";
export const homeInitSuccess = message => ({
  type: HOME_INIT_SUCCESS,
  payload: {
    message
  }
});
