import React from 'react';
import './ToggleBar.css'

export default (props) => {
    return (
        <div className="toggle" onClick={props.onToggle.bind(this)}> </div>

    )
}
