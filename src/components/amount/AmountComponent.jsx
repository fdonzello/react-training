import { useContext, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual, ReactReduxContext, } from "react-redux"
import { deposit, selectBalanceValue, withdraw } from "../../reducers/amount.reducer";


export function Amount() {
    const xxxx = useSelector(selectBalanceValue);


    const dispatch = useDispatch()

    const onDeposit = () => {
        dispatch(deposit(10))
    }

    const onWithdraw = () => {
        dispatch(withdraw(10))
    }

    return (
        <div>
            current amount with selector: <strong>{xxxx}</strong>
            <hr />
            <button onClick={onDeposit}>Deposit 10</button>
            <button onClick={onWithdraw}>Withdraw 10</button>
        </div>
    )
}