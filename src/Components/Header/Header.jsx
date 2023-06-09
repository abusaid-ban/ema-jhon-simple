import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/Orders">Order Review</a>
                <a href="/manage ">Manage Inventory</a>
                <a href="/login">Log In </a>
            </div>

        </nav>
    );
};

export default Header;