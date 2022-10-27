import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "./amount.reducer";
import isLoggedInReducer from "./is-logged-in.reducer";

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        isLoggedIn: isLoggedInReducer,
    },
})
