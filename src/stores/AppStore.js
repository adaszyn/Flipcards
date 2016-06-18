import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { FlipcardReducer } from  "../reducers/FlipcardReducer";

export default createStore(combineReducers({
  flipcards: FlipcardReducer
}))
