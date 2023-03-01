import React from 'react';
import './day.styles.scss';
const logo = 'img/sun.png';
const alt = 'sun';


interface Props {
}

export const Day = (props: Props) => {
    return (
        <div className="day_container">
            <div className="upper_block">
                <div className="upper_info">
                    <div className="temperature"> 20°</div>
                    <div className="day"> Today</div>
                </div>
                <img src={logo} alt={alt}/>
            </div>
            <div className="bottom_block">
                <div className="city">City:<span> Tallinn</span></div>
                <div className="time">Time:<span> 19:32</span></div>
            </div>
        </div>
    )
}