import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav_logo'>
                <img src='../../assets/logo.png' alt='logo' title='logo'></img>
            </a>
        </nav>
    </header>
  )
}

export default Header;