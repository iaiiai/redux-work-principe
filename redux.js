export const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: "__INIT__" });
  let subscribers = [];
  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((callback) => callback());
    },

    subscribe(callback) {
      subscribers.push(callback);
    },

    getState() {
      return state;
    }
  };
};
