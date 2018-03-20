import React from 'react';

const UserCard = (props) => {
  const email = props.userData.email;
  const hiddenCar = email.slice(3,6);

  props.userData.email = email.replace(hiddenCar, '...');

  const dateOfBirth = props.userData.dob.split(' ');
  const date = dateOfBirth[0].split('-');
  const finalDate = date[2] + '.' + date[1] + '.' + date[0];
  console.log(finalDate);
  
  props.userData.dob = finalDate;

  const firstLetter = (props.userData.name.first)[0].toUpperCase();
  const otherNameLetter = (props.userData.name.first).slice(1);

  props.userData.name.first = firstLetter + otherNameLetter;
  
    return <div className="col s6 m4">
      <div className="card">
        <div className="card-image">
          <img src={props.userData.picture.large} />
          <span className="card-title">{props.userData.name.first}</span>
        </div>
        <div className="card-content">
          <p>{props.userData.email}</p>
          <p>Birth date: {props.userData.dob}</p>
        </div>
      </div>
    </div>
}

export default UserCard;