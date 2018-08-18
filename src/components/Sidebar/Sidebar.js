import React from 'react';

import './Sidebar.css';
import SVGIcon from '../UI/SVGIcon/SVGIcon';

const sidebar = () =>{

    const items = [
        {
            icon: 'icon-home',
            text: 'Hotel'
        },
        {
            icon: 'icon-aircraft-take-off',
            text: 'Flight'
        },
        {
            icon: 'icon-key',
            text: 'Car rental'
        },
        {
            icon: 'icon-map',
            text: 'Tours'
        }
    ]

    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {
                    items.map((item, index) => (
                        <li className={`side-nav__item ${index === 0 ? 'side-nav__item--active' : ''}`} key={item.icon}>
                            <a href="#" className="side-nav__link">
                                <SVGIcon className="side-nav__icon" icon={item.icon} />
                                <span>{item.text}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className="legal">
                &copy; 2018 by trillo. All rights reserved.
            </div>
        </nav>
    );
}

export default sidebar;