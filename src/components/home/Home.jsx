import React from 'react';
import './home.css';
import Social from './Social';
import { AiOutlineSend, AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Social />
                <div className='home__img'></div>
                <div className='home__data'>
                    <h1 className='home__title'>Jane Doe</h1>
                    <h3 className='home__subtitle'>— Job Role —</h3>
                    <p className='home__description'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <a href='#contact' className='button button--flex'>Get In Touch <AiOutlineSend className='send-icon'/></a>
                </div>
            </div>
            <div className='home__scroll'>
                <a href='#about' className='home__scoll-button button--flex'>
                    <span className='home__scroll-label'> Scroll Down</span>
                    <AiOutlineArrowDown className="section__title-large home__scroll-arrow" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home