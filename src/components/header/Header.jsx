import React, { useState } from 'react';
import './header.css';
import '../../assets/logo.png';
import { AiOutlineHome, AiOutlineUser, AiOutlineFileDone, AiOutlineSend, AiOutlineClose, AiOutlineAppstore } from 'react-icons/ai';
import { BsCardImage } from 'react-icons/bs';

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
                    <AiOutlineHome className='nav__icon'/>
                    Home
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#about'>
                    <AiOutlineUser className='nav__icon'/>
                    About
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#skills'>
                    <AiOutlineFileDone className='nav__icon'/>
                    Skills
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#portfolio'>
                    <BsCardImage className='nav__icon'/>
                    Portfolio
                  </a>
                </li>
                <li className='nav__item'>
                  <a className='nav__link' href='#contact'>
                    <AiOutlineSend className='nav__icon'/>
                    Contact
                  </a>
                </li>
              </ul>
              <AiOutlineClose className='nav__close'onClick={() => showMenu(!Toggle)} />
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
              <AiOutlineAppstore className='nav__icon'/>
            </div>
        </nav>
    </header>
  )
}

export default Header;