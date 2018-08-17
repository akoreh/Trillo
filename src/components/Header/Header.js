import React from 'react';

import './Header.css';
import Logo from '../../assets/img/logo.png';
import IconSprite from '../../assets/img/sprite.svg';
import UserAvatar from '../../assets/img/user.jpg';

const header  = () => (
    <header className="header">
        <img src={Logo} alt="Trillo Logo" className="logo"/>
        <div action="#" className="search">
            <input type="text" className="search__input" placeholder="Search Hotels"/>
            <button className="search__button">
                <svg className="search__icon">
                    <use xlinkHref={`${IconSprite}#icon-magnifying-glass`} />
                </svg>
            </button>
        </div>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${IconSprite}#icon-bookmark`} />
                </svg>
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${IconSprite}#icon-chat`} />
                </svg>
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