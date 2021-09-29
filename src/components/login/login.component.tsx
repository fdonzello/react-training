import { useHistory } from "react-router";
import { useInputChange } from "../../forms"

export function Login() {
    const [email, , onChange] = useInputChange('email', '');
    const [password, , onPasswordChange] = useInputChange('password', '');

    const history = useHistory();

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (email === 'test@test.it') {
            localStorage.setItem('token', 'ok')

            history.push("/");
            return;
        }

    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="email" type="email" value={email} onChange={onChange} placeholder="use test@test.it" />
            <input name="password" type="password" value={password} onChange={onPasswordChange} placeholder="use any password" />

            <button type="submit">Login</button>
        </form>
    )
}