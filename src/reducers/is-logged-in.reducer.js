import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
    initialState: {
        value: false
    },
    name: 'isLoggedIn',
    reducers: {
        login: (state) => state = true,
        logout: (state) => state = false,
    }
})


export const { login, logout } = isLoggedInSlice.actions

export const selectIsLoggedInValue = (state) => state.isLoggedIn.value


export default isLoggedInSlice.reducer