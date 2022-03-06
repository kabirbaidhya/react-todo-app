import React, { useState } from 'react';

const CheckBox = (props) => {
    const [checked, setChecked] = useState(props.checked);
    
    handleChange(e) {
        setChecked(e.target);
        props.onChange(checked);
    }

    return (
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
    );
}

export default CheckBox;
