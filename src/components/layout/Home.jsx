import React, { useContext } from 'react';
import Header from '../Header/Header';
import About from '../extra/About';
import Services from '../extra/Services';
import Contact from '../extra/Contact';
import { DataProvider } from '../Providers/AuthProvider';
import MeetOutTeam from '../extra/MeetOutTeam';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <MeetOutTeam></MeetOutTeam>
        </div>
    );
};

export default Home;