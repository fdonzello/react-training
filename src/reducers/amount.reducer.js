import { createSlice } from "@reduxjs/toolkit"


export const balanceSlice = createSlice({
    name: 'balance',
    initialState: { value: 0 },
    reducers: {
        deposit: (state, action) => {
            state.value += action.payload
        },
        withdraw: (state, action) => {
            state.value -= action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { deposit, withdraw } = balanceSlice.actions

export const selectBalanceValue = (state) => state.balance.value


export default balanceSlice.reducer