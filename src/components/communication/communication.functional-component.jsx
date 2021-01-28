import React, { useState } from 'react';
import { Input, H1 } from './others.component';

export function FunctionalCommunication() {
    const [text, setText] = useState('');

    const onChange = (value) => setText(value);


    if (text.length == 0) {
        return (
            <div>
                <Input onChange={onChange} />
            </div>
        )
    }
    return (
        <div>
            <Input onChange={onChange} />
            <hr />
            <H1 text={text} />
        </div>
    )
}

export class Communication extends React.Component {

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);

        this.state = {
            text: ''
        }
    }

    onChange(t) {
        this.setState({ text: t });
    }


    render() {
        if (this.state.text.length == 0) {
            return (
                <div>
                    <Input onChange={this.onChange} />
                </div>
            )
        }
        return (
            <div>
                <Input onChange={this.onChange} />
                <hr />
                <H1 text={this.state.text} />
            </div>
        )
    }
}


