import React from 'react';

import './HotelView.css';
import Image1 from '../../assets/img/hotel-1.jpg';
import Image2 from '../../assets/img/hotel-2.jpg';
import Image3 from '../../assets/img/hotel-3.jpg';

import Gallery from '../../components/Gallery/Gallery';
import Overview from '../../components/Overview/Overview';
import Details from '../../components/Details/Details';
import CTA from '../../components/CTA/CTA';

const hotelView = () => {

    return (
        <main className="hotel-view">
            <Gallery images={[Image1, Image2, Image3]}/>
            <Overview />
            <Details />
            <CTA />
        </main>
    );
}

export default hotelView;