import React from 'react';
import formatDate from '../../shared/utils/formatDate';
import formatEmail from '../../shared/utils/formatEmail';
import formatName from '../../shared/utils/formatName';

const UserCard = (props) => {  
    return <div className="col s6 m4">
      <div className={props.className}>
        <div className="card-image">
          <img src={props.userData.largePhoto} />
          <span className="card-title">{formatName(props.userData.firstName)}</span>
        </div>
        <div className="card-content">
          <p>{formatEmail(props.userData.email)}</p>
          <p>Birth date: {formatDate(props.userData.dateOfBirth)}</p>
        </div>
      </div>
    </div>
}

export default UserCard;