import data from "../../data.json";

export const CarListData = () => {
  return async (dispatch) => {
    dispatch({ type: "CAR_LIST_LOADING" });
    setTimeout(() => {
      dispatch({ type: "CAR_LIST_SUCCESS", payload: data });
    }, 5000);
  };
};
