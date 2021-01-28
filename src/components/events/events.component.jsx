import React from 'react';


export class Events extends React.Component {

    value;

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.show = this.show.bind(this);
    }

    onChange(e) {
        this.value = e.target.value;
    }

    show() {
        alert(this.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <button type="button" onClick={this.show}>Show</button>
            </div>
        )
    }
}