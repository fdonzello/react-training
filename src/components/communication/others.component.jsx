export function Input({ onChange }) {

    return (
        <div>
            <input
                placeholder="Type something..."
                onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export function H1({ text }) {
    return (
        <h1>{text}</h1>
    )
}
