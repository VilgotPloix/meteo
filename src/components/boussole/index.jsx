import React from 'react'
import fleche from '../../images/fleche.svg'
import './style.css'

export default function Boussole(props) {

    let direction = props.children.wind_dir - 90;

    return (
        <div id='boussole'>
            <div className='rond'>
                <p id="nord">N</p>
                <p id="sud">S</p>
                <p id="est">E</p>
                <p id="west">W</p>
                <div className="cadre"><img src={fleche} alt="blabla" className="fleche"
                    style={{transform: `rotate(${direction}deg)`}}
                /></div>
            </div>
            <p id='speedometer'>~{parseInt(props.children.wind_spd * 3.6)}km/h</p>
        </div>
    )
}
