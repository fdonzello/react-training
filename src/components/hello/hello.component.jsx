import './hello.scss';

export function Hello() {
    const style = {
        padding: '16px'
    }
    return (
        <div style={style}>
            <HelloInlineCss />
            <hr />
            <HelloCssClass />
            <hr />

            <ClickInputButton />
        </div>
    )
}

function HelloInlineCss() {
    const style = {
        border: '1px solid black',
        background: 'white',
        borderRadius: '16px',
        color: 'black',
        fontWeight: 'bold',
    };
    return (
        <div style={style}>
            hello inline-guys!
        </div>
    )
}

function HelloCssClass() {
    return (
        <div className="hello">
            hello guys!
        </div>
    )
}

function ClickInputButton() {

    let inputValue = '';

    const onChange = (v) => {
        const input = v.target;
        const value = v.target.value;

        inputValue = value;
    }

    const onClick = () => {
        alert(inputValue);
    }

    return (
        <div>
            <input type="text" onChange={onChange} />

            <button type="button" onClick={onClick}>
                Show Input value
            </button>
        </div>
    )
}