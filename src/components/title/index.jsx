import React from 'react'

import './style.css'

export default function Title(props) {
    return (
        <div>
            <p id='title'>{props.children.city_name}</p>
        </div>
    )
}
