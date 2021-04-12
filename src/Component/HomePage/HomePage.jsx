import React from 'react';
import BodyPage from '../BodyPage/BodyPage';
import FooterPage from '../FooterPage/FooterPage';
import Navigation from '../Navigation/Navigation';
import SlidePage from '../SlidePage/SlidePage';

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <SlidePage/>
            <BodyPage/>
            <FooterPage/>
        </div>
    );
};

export default HomePage;