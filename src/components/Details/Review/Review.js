import React from 'react';

import './Review.css';

const review = (props) => {

    return (
        <figure className="review">
            <blockquote className="review__text">
                {props.text}
            </blockquote>
            <figcaption className="review__user">
                <img src={props.image} alt="Review User" className="review__photo"/>
                <div className="review__user-box">
                    <p className="review__user-name">{props.user}</p>
                    <p className="review__user-date">{props.date}</p>
                </div>
                <div className="review__rating">{props.rating}</div>
            </figcaption>
        </figure>
    );
}

export default review;