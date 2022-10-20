import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to all Countries</h1>
            <a href="/home">Home</a>
            <a href="/home">Blog</a>
            <a href="/home">Contact Us</a>
        </div>
    );
};

export default Header;