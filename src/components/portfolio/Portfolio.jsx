import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
        <span className='section__subtitle'>
          I have completed several independent projects for small local businesses across Ireland, 
          offering my services free of charge as a way to contribute to the local community. Additionally,
           I have worked on personal projects to keep up with new languages, libraries, and frameworks, 
           continually expanding my skill set and staying current in the ever-evolving tech landscape.
         </span>
        <div className='box portfolio_container container'>
          {/* Tab Heading */}
          <div className='tabs'>
            <div className={
                    toggleState === 1 ? 'portfolio__button button--flex portfolio__active'
                    : 'portfolio__button button--flex' } onClick = {() => toggleTab(1)}
            >Independent Projects</div>

            <div className={
                    toggleState === 2 ? 'portfolio__button button--flex portfolio__active'
                    : 'portfolio__button button--flex' } onClick = {() => toggleTab(2)}
            >Personal Projects</div>
          </div>

          {/* Tab Content */}
          <div className='contents'>
            <div className={toggleState === 1 ? 'portfolio__content portfolio__content-active' : 'portfolio__content'} >
              <div className='portfolio__items grid'>
                <div className='portfolio__item'>
                  <a href='https://www.trendhealthandbeauty.com/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/trend.png')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='Health & Beauty Salon' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>Trend</h3>
                      <span className='portfolio__subtitle'>Health & Beauty Salon</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <a href='https://eamonnlynchupholstery.com/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/upholestry.png')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='Upholstery Services' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>Eamonn Lynch</h3>
                      <span className='portfolio__subtitle'>Upholstery Services</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <a href='https://www.magicthreadcork.com/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/magic_thread.png')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='Magic Thread' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>Magic Thread </h3>
                      <span className='portfolio__subtitle'>Dress making and alterations</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <a href='https://partyshakers.co/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/partyshakers.jpg')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='Mobile Bartending' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>Party Shakers</h3>
                      <span className='portfolio__subtitle'>Mobile Bartending and Catering Service</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <a href='https://christineloh.art/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/chrissy-art.jpg')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='CONTEMPORARY ART' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>CHRISTINE LOH</h3>
                      <span className='portfolio__subtitle'>CONTEMPORARY ART</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <a href='https://pmu.ie/' target='_blank' rel="noreferrer">
                    <img src={require('../../assets/portfolio/olena.png')} 
                    width="530"  height="490" 
                    alt='Portfolio' 
                    title='Permanent Makeup' 
                    className='portfolio__item_img'/>
                    <div className='portfolio__item_content'>
                      <h3 className='portfolio__title'>Permanent Makeup</h3>
                      <span className='portfolio__subtitle'>Luxury Permanent Makeup Artist</span>
                      <div className='portfolio__icons'>
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/fitness.png')} 
                  width="530"  height="490" 
                  alt='Portfolio' 
                  title='Quality Fitness' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>Quality Fitness</h3>
                    <span className='portfolio__subtitle'>Personal Tainer</span>
                    <div className='portfolio__icons'>
                      <a href='http://qualityfitness.esy.es/' target='_blank' rel="noreferrer">
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/drinks_master.png')} 
                  width="530"  height="490" 
                  alt='Portfolio'
                  title='Drinks Master' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>Drinks Master</h3>
                    <span className='portfolio__subtitle'>Mobile Bartending</span>
                    <div className='portfolio__icons'>
                      <a href='http://drinksmarter.hol.es/' target='_blank' rel="noreferrer">
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/></a>
                    </div>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/walk-in.jpg')} 
                  width="530"  height="490" 
                  alt='Portfolio' 
                  title='Walk-In Clinic' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>Wilton Walk-In Clinic</h3>
                    <span className='portfolio__subtitle'>Walk-in GP Clinic</span>
                    <div className='portfolio__icons'>
                      <a href='http://wiltonwalkin.esy.es/' target='_blank' rel="noreferrer">
                        Visit Website <FaExternalLinkAlt className='portfolio__icon'/>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={toggleState === 2 ? 'portfolio__content portfolio__content-active' : 'portfolio__content'}>
            <div className='portfolio__items grid'>
              <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/book-nook.jpg')} 
                  width="530"  height="490" 
                  alt='Portfolio' 
                  title='Book Nook' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>The Book Nook</h3>
                    <span className='portfolio__subtitle'>Tech stack: MERN stack</span>
                    <div className='portfolio__icons'>
                      <a href='https://github.com/JasmineKhalimova/BookStore' target='_blank' rel="noreferrer">
                        Source Code <FaGithub className='portfolio__icon'/>
                      </a>
                      <a href='http://77.243.85.42/' target='_blank' rel="noreferrer">
                        Demo <FaExternalLinkAlt className='portfolio__icon'/>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/remax_desktop.jpg')} 
                  width="530"  height="490" 
                  alt='Portfolio' 
                  title='Real Estate' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>Real Estate: Web App</h3>
                    <span className='portfolio__subtitle'>Tech stack: LAMP stack</span>
                    <div className='portfolio__icons'>
                      <a href='https://github.com/JasmineKhalimova/Real_Estate_Management_System' target='_blank' rel="noreferrer">
                        Source Code <FaGithub className='portfolio__icon'/>
                        </a>
                      <a href='http://remax.esy.es/' target='_blank' rel="noreferrer">
                        Demo <FaExternalLinkAlt className='portfolio__icon'/></a>
                    </div>
                  </div>
                </div>

                <div className='portfolio__item'>
                  <img src={require('../../assets/portfolio/remax_mobile.jpg')} 
                  width="530"  height="490" 
                  alt='Portfolio' 
                  title='Real Estate Android' 
                  className='portfolio__item_img'/>
                  <div className='portfolio__item_content'>
                    <h3 className='portfolio__title'>Real Estate: Android App</h3>
                    <span className='portfolio__subtitle'>Tech: Java (Android studio & Firebase)</span>
                    <div className='portfolio__icons'>
                      <a href='https://github.com/JasmineKhalimova/Android_Real_Estate_App' target='_blank' rel="noreferrer">
                        Source Code <FaGithub className='portfolio__icon'/>
                      </a>
                    </div>
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