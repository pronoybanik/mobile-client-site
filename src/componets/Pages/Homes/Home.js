import React from 'react';
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
        </div>
    );
};

export default Home;