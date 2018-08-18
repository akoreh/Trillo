import React from 'react';

import './Gallery.css';

const gallery = (props) => {
    return (
        <div className="gallery">
                {
                    props.images.map((image, index) => (
                        <figure className="gallery__item">
                            <img src={image} alt="Hotel" key={index+Math.random()} className="gallery__photo"/>
                        </figure>
                    ))
                }
        </div>
    );
}

export default gallery;