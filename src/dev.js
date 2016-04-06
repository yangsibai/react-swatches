'use strict';

import Swatches from './Swatches';
import {render} from 'react-dom';
import {Component} from 'react';

class Dev extends Component {
    constructor() {
        super();
        this.state = {
            color: ''
        };
        this._handleSelectColor = this._handleSelectColor.bind(this);
    }
    render() {
        return (
            <div>
                <span>Selected color: {this.state.color}</span>
                <Swatches onSelectColor={this._handleSelectColor} />
            </div>
        )
    }
    _handleSelectColor(color) {
        this.setState({
            color: color
        });
    }
}

render((
    <Dev />
), document.getElementById('container'));
