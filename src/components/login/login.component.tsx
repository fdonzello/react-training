import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useInputChange } from "../../forms"
import { login, selectIsLoggedInValue } from "../../reducers/is-logged-in.reducer";

export function Login() {
    const [email, , onChange] = useInputChange('email', '');
    const [password, , onPasswordChange] = useInputChange('password', '');

    const navigate = useNavigate();

    const isLoggedIn = useSelector(selectIsLoggedInValue)

    const dispatch = useDispatch();

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (email === 'test@test.it') {
            localStorage.setItem('token', 'ok')
            dispatch(login({}))
            navigate("/");
            return;
        }

    }

    if (isLoggedIn) {
        return (
            <>
                <h1>Welcome back</h1>
            </>
        )
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="email" type="email" value={email} onChange={onChange} placeholder="use test@test.it" />
            <input name="password" type="password" value={password} onChange={onPasswordChange} placeholder="use any password" />

            <button type="submit">Login</button>
        </form>
    )
}