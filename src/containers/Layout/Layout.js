import React from 'react';

import './Layout.css';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import HotelView from '../HotelView/HotelView';

const layout = () => (
    <div className="container">
        <Header />
        <div className="content">
            <Sidebar />
            <HotelView />
        </div>
    </div>
);

export default layout;