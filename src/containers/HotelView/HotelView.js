import React from 'react';

import './HotelView.css';
import Image1 from '../../assets/img/hotel-1.jpg';
import Image2 from '../../assets/img/hotel-2.jpg';
import Image3 from '../../assets/img/hotel-3.jpg';

import Gallery from '../../components/Gallery/Gallery';
import Overview from '../../components/Overview/Overview';

const hotelView = () => {

    return (
        <main className="hotel-view">
            <Gallery images={[Image1, Image2, Image3]}/>
            <Overview />
        </main>
    );
}

export default hotelView;