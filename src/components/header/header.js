import React, { useState } from 'react';
import './header.css';
import '../../assets/logo.png';

export const Header = () => {
  // Mobile menu toggle
  const [Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>
                <img src={require('../../assets/web-brick-logo.png')} alt='logo' title='logo' />
            </a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className='nav__list grid'>
                <li className='nav__item'>
                  <a className='nav__link active-link' href='#home'>
                    <i className='uil uil-estate nav__icon'></i>
                    Home
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#about'>
                    <i className='uil uil-user nav__icon'></i>
                    About
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#skills'>
                    <i className='uil uil-file-alt nav__icon'></i>
                    Skills
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#portfolio'>
                    <i className='uil uil-scenery nav__icon'></i>
                    Portfolio
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#contact'>
                    <i className='uil uil-message nav__icon'></i>
                    Contact
                  </a>
                </li>
              </ul>
              <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
              <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;