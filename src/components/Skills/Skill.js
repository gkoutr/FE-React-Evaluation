import React from 'react';
import moment from "moment";
import './Skill.css';
const Skill = props => {
    const skill = props.location.state.skill;
    const dateLearned = moment(skill.DateLearned, 'YYYY-MM-DD').format("DD-MMM-YYYY");
    return (
        <div className='skill-page'>
            <h1>{skill.name}</h1>
            <div className='shape'>
             <p className='skill-type'>{skill.type}</p>
            </div>
            <p>Learned on {dateLearned}</p>
            <p>{skill.detail}</p>
        </div>
    )
};

export default Skill;