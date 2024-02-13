import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export const UserCard = ({ user }) => {

    const getBackgroundColor = () => {
    const colors = user.hair_color.split(',');
    return colors[0].trim();
  };
    const userUuid = uuid();
  const cardStyle = {
    backgroundColor: getBackgroundColor(),
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    color: 'white',
  };

  return (
    <div style={cardStyle}>
      <img src={`https://picsum.photos/200/300?random=${userUuid}`} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Hair Color: {user.hair_color}</p>
      <p>Skin Color: {user.skin_color}</p>
      <p>Gender: {user.gender}</p>
      <p>Vehicles Count: {user.vehicles.length}</p>
    </div>
  );
};


