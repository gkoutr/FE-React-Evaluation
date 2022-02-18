import React, { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Interests from '../Interests/Interests';

const Home = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.userName);
    return (
        <div>
            <h1>Welcome {username}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan ege.</p>
            <Interests />
        </div>
    )
};

export default Home;