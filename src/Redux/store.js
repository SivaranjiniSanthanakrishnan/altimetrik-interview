import { combineReducers, applyMiddleware, createStore } from "redux";
import { carListFilterReducer } from "./Reducer/CarListFilter";
import { carListDataReducer } from "./Reducer/CarListData";
import { thunk } from "redux-thunk";

const store = createStore(
  combineReducers({
    carData: carListDataReducer,
    carListFilter: carListFilterReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
