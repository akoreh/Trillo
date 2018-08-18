import React from 'react';

import './Overview.css';
import SVGIcon from '../UI/SVGIcon/SVGIcon';

const overview = (props) => (
    <div className="overview">
        <h1 className="overview__heading">
            Hotel Las Palmas
        </h1>

        <div className="overview__stars">
            <SVGIcon className="overview__icon-star" icon="icon-star"/>
            <SVGIcon className="overview__icon-star" icon="icon-star"/>
            <SVGIcon className="overview__icon-star" icon="icon-star"/>
            <SVGIcon className="overview__icon-star" icon="icon-star"/>
            <SVGIcon className="overview__icon-star" icon="icon-star"/>
        </div>

        <div className="overview__location">
            <SVGIcon className="overview__icon-location" icon="icon-location-pin"/>
            <button className="btn-inline">Albufeira, Portgual</button>
        </div>

        <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
        </div>
    </div>
);

export default overview;