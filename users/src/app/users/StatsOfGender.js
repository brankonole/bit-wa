import React from 'react';
import countGender from '../../shared/utils/countGender.js'

const StatsOfGender = (props) => {
    let numOfPeople = countGender(props.data);
    
    return (
        <div className='right-align'>
            <span>Male: {numOfPeople[0]} </span>
            <span>Female: {numOfPeople[1]}</span>
        </div>
    )
}

export default StatsOfGender;