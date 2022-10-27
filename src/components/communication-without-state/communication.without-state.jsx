export function CommunicationWithoutState() {
    const onChange = (text) => {
        const value = text

        document.getElementById('value').innerHTML = value;
    };

    return (
        <div>
            <Input onChange={onChange} />
            <hr />
            <h1>Value: <span id="value"></span></h1>
        </div>
    )
}

function Input({ onChange }) {
    return (
        <div>
            <input
                placeholder="Type something..."
                onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}