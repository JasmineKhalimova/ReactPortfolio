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
                  <img src={require('../../assets/portfolio/trend.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Trend</h3>
                  <span className='portfolio__subtitle'>Health & Beauty Salon</span>
                  <div className='portfolio__icons'>
                    <a href='https://www.trendhealthandbeauty.com/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/upholestry.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Eamonn Lynch</h3>
                  <span className='portfolio__subtitle'>Upholstery Services</span>
                  <div className='portfolio__icons'>
                    <a href='https://eamonnlynchupholstery.com/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/drinks_master.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Drinks Master</h3>
                  <span className='portfolio__subtitle'>Mobile Bartending</span>
                  <div className='portfolio__icons'>
                    <a href='https://github.com/JasmineKhalimova/Party_Shakers' target='_blank' rel="noreferrer">
                      <FaGithub className='portfolio__icon'/>
                      </a>
                    <a href='http://drinksmarter.hol.es/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/magic_thread.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Magic Thread </h3>
                  <span className='portfolio__subtitle'>Dress making and alterations</span>
                  <div className='portfolio__icons'>
                    <a href='https://github.com/JasmineKhalimova/MagicThreadCork' target='_blank' rel="noreferrer">
                      <FaGithub className='portfolio__icon'/>
                      </a>
                    <a href='https://www.magicthreadcork.com/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/olena.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Permanent Makeup</h3>
                  <span className='portfolio__subtitle'>Luxury Permanent Makeup Artist</span>
                  <div className='portfolio__icons'>
                    <a href='https://pmu.ie/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>


                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/fitness.png')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Quality Fitness</h3>
                  <span className='portfolio__subtitle'>Personal Tainer</span>
                  <div className='portfolio__icons'>
                    <a href='/' target='_blank' rel="noreferrer"><FaGithub className='portfolio__icon'/></a>
                    <a href='http://qualityfitness.esy.es/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

              </div>
            </div>
            <div className={toggleState === 2 ? 'portfolio__content portfolio__content-active' : 'portfolio__content'}>
            <div className='portfolio__items grid'>
                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/remax_mobile.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Real Estate: Android Application </h3>
                  <div className='portfolio__icons'>
                    <a href='https://github.com/JasmineKhalimova/Real_Estate_Management_System' target='_blank' rel="noreferrer">
                      <FaGithub className='portfolio__icon'/>
                      </a>
                    <a href='http://remax.esy.es/' target='_blank' rel="noreferrer"><FaRegEye className='portfolio__icon'/></a>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/remax_desktop.jpg')} alt='Profile' title='Profile' className='portfolio__item_img'/>
                  <h3 className='portfolio__title'>Real Estate: Web Application</h3>
                  <div className='portfolio__icons'>
                    <a href='https://github.com/JasmineKhalimova/Android_Real_Estate_App' target='_blank' rel="noreferrer">
                      <FaGithub className='portfolio__icon'/>
                    </a>
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