import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const {name, email, phone, id} = user;

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;