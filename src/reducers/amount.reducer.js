import { createAction } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export function amountReducer(state = initialState, action) {
    switch (action.type) {
        case 'deposit':
            return {
                ...state,
                value: state.value + action.payload.amount
            }
        case 'withdraw':
            return {
                ...state,
                value: state.value - action.payload.amount
            }
        default:
            return state
    }
}

export const depositAction = createAction('deposit', (depositAmount) => ({
    payload: {
        amount: depositAmount
    }
}))