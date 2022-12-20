import React from 'react';
import EmailFiled from '../EmailFiled/EmailFiled';
import Headers from '../Headers/Headers';
import ProductDetail from '../ProductDetail/ProductDetail';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Services></Services>
            {/* <ProductDetail></ProductDetail> */}
            <EmailFiled></EmailFiled>
        </div>
    );
};

export default Home;