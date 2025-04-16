import React, { use } from 'react';

const Users2 = ({ usersPromise }) => {
    const user = use(usersPromise);
    console.log(user)
  return (
    <div>
      <h2>This is user2</h2>
    </div>
  );
};

export default Users2;