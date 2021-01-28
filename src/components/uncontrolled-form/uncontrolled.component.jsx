import { useRef, useState } from "react"

export function UncontrolledNewsForm() {
    const title = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder="title"
                ref={title}
            />
        </form>
    )
}

export const useInputChange = () => {
    const [input, setInput] = useState()

    const onChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })

    return [input, onChange]
}

export function ControlledInputHooks() {
    const [values, onChange] = useInputChange()

    const formValue = JSON.stringify(values)

    return (
        <>
            <pre>{formValue}</pre>
            <input name="name" onChange={onChange} />
            <input name="email" onChange={onChange} />
        </>
    );
}









function BorderedContainer({ children }) {
    const style = {
        border: "2px solid black"
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}


function Form() {
    return (
        <BorderedContainer>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
            </ul>
        </BorderedContainer>
    )
}














