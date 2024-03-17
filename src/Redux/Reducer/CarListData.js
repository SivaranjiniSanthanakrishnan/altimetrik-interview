const initialState = {
  value: {
    loading: true,
  },
};
export const carListDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAR_LIST_LOADING": {
      return { ...state, value: { loading: true, data: null } };
    }
    case "CAR_LIST_SUCCESS":
      return { ...state, value: { loading: false, data: action.payload } };
    default:
      return state;
  }
};
