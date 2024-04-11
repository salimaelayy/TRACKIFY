import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice/authSlice";
import { categoryReducer } from "../slices/categorySlice/categorySlice";
import { expenseReducer } from "../slices/expenseSlice/expenseSlice";
import { incomeReducer } from "../slices/incomeSlice/incomeSlice";
import { userReducer } from "../slices/userSlice/userSlice";
import {currencyReducer} from "../slices/currencySlice/currencySlice"
import {countryReducer} from "../slices/countrySlice/countrySlice"
const store = configureStore({
  reducer: {
    authentifications: authReducer,
    categories: categoryReducer,
    expenses: expenseReducer,
    incomes: incomeReducer,
    users: userReducer,
    currencies: currencyReducer,
    countries:countryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
