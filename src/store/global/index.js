const initialState = {
  initialized: false
};

const init = (state, action) => {
  return {
    ...state,
    initialized: true
  };
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "GLOBAL_INIT": {
      return init(state, action);
    }
    default: {
      return state;
    }
  }
};
