import React, { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Interests from '../Interests/Interests';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    const username = useSelector((state) => state.user.userName);
    return (
        <div className='home-info'>
            <h1>Welcome {username}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan ege.</p>
            <Interests />
            <Skills />
        </div>
    )
};

export default Home;