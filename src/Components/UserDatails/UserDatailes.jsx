import React from 'react';
import { useLoaderData } from 'react-router';

const UserDatailes = () => {
    const user = useLoaderData();
    const { website, username } = user;
    return (
        <div>
            <h2>This is user datails</h2>
            <h2>Username:{username}</h2>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDatailes;