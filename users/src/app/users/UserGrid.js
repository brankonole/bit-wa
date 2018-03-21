import React from 'react';
import UserCard from './UserCard.js';

const UserGrid = (props) => {
    return  <div className="row">
                {props.data.map((user, i) => {
                    if (user.gender == 'female') {
                        return <UserCard userData={user} key={i} className='card pink lighten-5 z-depth-1'/>
                    } else {
                        return <UserCard userData={user} key={i} className='card lighten-5 z-depth-1'/>
                    }
                })}
            </div>
}

export default UserGrid;