import React from 'react';
import UserCard from './UserCard.js';

const UserGrid = (props) => {
    return  <div className="row">
                {props.data.map((user, i) => {
                    return <UserCard userData={user} key={i} />
                })}
            </div>
}

export default UserGrid;