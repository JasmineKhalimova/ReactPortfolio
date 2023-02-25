import React, { useState } from 'react';
import { FaRegEye, FaGithub } from 'react-icons/fa';
import './portfolio.css';

const Portfolio = () => {
      // Toggle between  tabs
      const [toggleState, setToggleState] = useState(1);
    
      const toggleTab = (index) => {
          setToggleState(index);
      };
  return (
    <section className='portfolio section' id='portfolio'>
        <h2 className='section__title'> Portfolio</h2>
        <h3 className='section__subtitle'>Porjects</h3>
        <div className='box portfolio_container container'>
          {/* Tab Heading */}
          <div className='tabs'>
            <div className={
                    toggleState === 1 ? 'portfolio__button button--flex portfolio__active'
                    : 'portfolio__button button--flex' } onClick = {() => toggleTab(1)}
            >Web Apps</div>

            <div className={
                    toggleState === 2 ? 'portfolio__button button--flex portfolio__active'
                    : 'portfolio__button button--flex' } onClick = {() => toggleTab(2)}
            >Mobile Apps</div>
          </div>

          {/* Tab Content */}
          <div className='contents'>
            <div className={toggleState === 1 ? 'portfolio__content portfolio__content-active' : 'portfolio__content'} >
              <div className='portfolio__items grid'>
                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio1.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio</h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio2.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio</h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio3.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio</h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio4.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio </h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio5.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio</h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio8.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio</h3>
                  <span className='portfolio__subtitle'>Portfolio Description</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

              </div>
            </div>
            <div className={toggleState === 2 ? 'portfolio__content portfolio__content-active' : 'portfolio__content'}>
            <div className='portfolio__items grid'>
                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio6.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio Title</h3>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/portfolio7.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Portfolio Title</h3>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Portfolio