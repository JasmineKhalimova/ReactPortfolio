import React from 'react';
import './home.css';
import Social from './Social';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Social />
                <div className='home__img'></div>
                <div className='home__data'>
                    <h1 className='home__title'>Jasmine Khalimova</h1>
                    <h3 className='home__subtitle'>— Web Developer —</h3>
                    <p className='home__description'>Experienced web developer with a passion for developing innovative applications.</p>
                    <a href='#contact' className='button button--flex'>Get In Touch <i class="uil uil-message"></i></a>
                </div>
            </div>
            <div className='home__scroll'>
                <a href='#about' className='home__scoll-button button--flex'>
                    <span className='home__scroll-label'> Scroll Down</span>
                    <i class="uil uil-arrow-down section__title-large home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home