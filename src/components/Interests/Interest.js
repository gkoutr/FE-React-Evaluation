import React from 'react';
import './Interest.css';

const Interest = (props) => {
    const interest = props.location.state.interest;
    return (
        <div className='interest-page'>
            <h1>{interest.name}</h1>
            <div className='shape'>
             <p className='interest-type'>{interest.type}</p>
            </div>
            <p>{interest.detail}</p>
        </div>
    )
};

export default Interest;