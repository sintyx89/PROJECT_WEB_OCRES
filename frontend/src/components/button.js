import React from 'react';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Button extends React.Component {
    render() {
        const { text, style, onClick } = this.props;

        return (
            <div class="col">
                <div class='button' onClick={onClick} style={style}>
                    {text}
                </div>
            </div>)
    }
}