import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shers/Footer/Footer';
import Nevbar from '../../Shers/Nevbar/Nevbar';

const Main = () => {
    return (
        <div>
            
            <Nevbar></Nevbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;