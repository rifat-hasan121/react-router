import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is Header!</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/users'>Users</Link>
                <Link to='/users2'>Users2</Link>
            </nav>
        </div>
    );
};

export default Header;