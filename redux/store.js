import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import apartmentReducer from "./slices/searchApartmentForRentSlice";

export const store = configureStore({
  reducer: { user: userReducers, apartment: apartmentReducer},
});
