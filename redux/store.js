import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import { searchParamReducers } from "./reducers/searchParamReducers";

export const store = configureStore({
  reducer: { user: userReducers, searchParam: searchParamReducers },
});
