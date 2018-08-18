import React from 'react';

import './Header.css';
import Logo from '../../assets/img/logo.png';
import UserAvatar from '../../assets/img/user.jpg';
import SVGIcon from '../UI/SVGIcon/SVGIcon';

const header  = () => (
    <header className="header">
        <img src={Logo} alt="Trillo Logo" className="logo"/>
        <div action="#" className="search">
            <input type="text" className="search__input" placeholder="Search Hotels"/>
            <button className="search__button">
                <SVGIcon className="search__icon" icon="icon-magnifying-glass"/>
            </button>
        </div>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <SVGIcon className="user-nav__icon" icon="icon-bookmark"/>
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <SVGIcon className="user-nav__icon" icon="icon-chat"/>
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src={UserAvatar} alt="User Avatar" className="user-nav__user-photo"/>
                <span className="user-nav__user-name">Andrei</span>
            </div>
        </nav>
    </header>
);

export default header;