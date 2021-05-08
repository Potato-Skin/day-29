import React from 'react';

export default function IdCard(props) {
  const { birth, firstName, lastName, gender, height, picture } = props;
  return (
    <div className="idCard">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height / 100}m</p>
      {/* <p>Birth: {JSON.stringify(props.birth)}</p> //Looks ugly */}
      <p>Birth: {birth.toDateString()}</p>
      <img src={picture} alt="Ooops" />
    </div>
  );
}
