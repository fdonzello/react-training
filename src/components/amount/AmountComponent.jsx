import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect";
import { depositAction } from "../../reducers/amount.reducer";

const selectAmountValue = createSelector(
    (state) => state.amount,
    (amount) => amount.value
)

export function Amount() {
    const value = useSelector(selectAmountValue);

    const dispatch = useDispatch()

    const deposit = () => {
        dispatch(depositAction(10))
    }

    return (
        <div>
            current amount with selector: <strong>{value}</strong>
            <hr />
            <button onClick={deposit}>Deposit 10</button>
        </div>
    )
}