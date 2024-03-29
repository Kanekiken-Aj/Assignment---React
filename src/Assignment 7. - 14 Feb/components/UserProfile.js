// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default UserProfile;
