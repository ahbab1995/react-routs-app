import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <h1>React Route Test..</h1>
             <nav>
                <Link to='/'>Home</Link>
                <Link to='/friends'>Friend</Link>
                <Link to='/about'>About</Link>
             </nav>
        </div>
    );
};

export default Header;