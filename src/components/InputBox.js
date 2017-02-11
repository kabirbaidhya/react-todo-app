import React from 'react';
import KeyCode from 'keycode-js';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyUp(e) {
        if (e.keyCode === KeyCode.KEY_RETURN) {
            // Add new Todo Here
            // Clear the text box
        }
    }

    render() {
        return (<input
            type="text"
            className="form-control add-todo"
            value={this.state.value}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New"
        />);
    }
}

export default InputBox;
