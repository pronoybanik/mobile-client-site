import React from 'react';
import NeedHelp from '../../NeedHelp/NeedHelp';
import Reviews from '../../Reviews/Reviews';
import EmailFiled from '../EmailFiled/EmailFiled';
import Headers from '../Headers/Headers';
import MobileDetails from '../MobileDetails/MobileDetails';
import ProductDetail from '../ProductDetail/ProductDetail';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Services></Services>
            <MobileDetails></MobileDetails>
            <ProductDetail></ProductDetail>
            <EmailFiled></EmailFiled>
            <Reviews></Reviews>
            <NeedHelp></NeedHelp>

        </div>
    );
};

export default Home;