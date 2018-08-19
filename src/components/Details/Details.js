import React from 'react';

import './Details.css';

import Review1 from '../../assets/img/user-1.jpg';
import Review2 from '../../assets/img/user-2.jpg';
import Friend1 from '../../assets/img/user-3.jpg';
import Friend2 from '../../assets/img/user-4.jpg';
import Friend3 from '../../assets/img/user-5.jpg';
import Friend4 from '../../assets/img/user-6.jpg';

import Review from './Review/Review';

const details = () => {

    const reviews = [
        {
            user: 'Nick Smith',
            date: 'Feb 23rd, 2018',
            rating: '7.8',
            image: Review1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
        },
        {
            user: 'Mary Thomas',
            date: 'Aug 13th, 2018',
            rating: '9.3',
            image: Review2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
        }
    ]

    return (
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>

                <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Perfect for families</li>
                </ul>

                <div className="recommend">
                    <p className="recommend__count">
                        Lucy and 3 other friends recommend this hotel.
                    </p>
                    <div className="recommend__friends">
                        <img src={Friend1} alt="Friend1" className="recommend__photo"/>
                        <img src={Friend2} alt="Friend2" className="recommend__photo"/>
                        <img src={Friend3} alt="Friend3" className="recommend__photo"/>
                        <img src={Friend4} alt="Friend4" className="recommend__photo"/>
                    </div>
                </div>
            </div>

            <div className="user-reviews">
                {
                    reviews.map(review => (
                        <Review key={review.user} {...review} />
                    ))
                }

                <button className="btn-inline">Show All <span>&rarr;</span></button>
            </div>
        </div>
    );
}

export default details;