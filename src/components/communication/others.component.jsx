export function Input({ onChange }) {

    return (
        <div>
            <input onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export function H1({ text }) {
    return (
        <h1>{text}</h1>
    )
}
