import React from 'react';

import IconSprite from '../../../assets/img/sprite.svg';

const svgIcon = (props) => (
    <svg className={props.className}>
        <use xlinkHref={`${IconSprite}#${props.icon}`} />
    </svg>
);

export default svgIcon;
