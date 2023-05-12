import React from 'react';
import Header from '../Header/Header';
import About from '../extra/About';
import Services from '../extra/Services';
import Contact from '../extra/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;