import React, { useState } from 'react';
import './qualification.css';
import { GiGraduateCap, GiBriefcase } from 'react-icons/gi';
import { VscCalendar } from 'react-icons/vsc';

const Qualification = () => {
    // Toggle between Qualification and Experiance
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>Qualification & Education</h2>
        <h3 className='section__subtitle'>My education and experiences</h3>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={
                    toggleState === 1 ? 'qualification__button button--flex qualification__active'
                    : 'qualification__button button--flex' } onClick = {() => toggleTab(1)}
                >
                     <GiBriefcase className='qualification__icon'/>
                    {""} Experience
                </div>
                <div className={
                    toggleState === 2 ? 'qualification__button button--flex qualification__active'
                    : 'qualification__button button--flex' } onClick = {() => toggleTab(2)}
                >
                    <GiGraduateCap className='qualification__icon'/>
                    {""} Education
                </div>
            </div>
            <div className='qualification__sections'>

                {/* Qualification/ Education */}
                <div className={
                    toggleState === 1 ? 'qualification__content qualification__content-active'
                    : 'qualification__content'} >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Software Developer</h3>
                            <span className='qualification__subtitle'>Aonach, Kenmare Kerry Ireland</span>
                            <div className='qualification__calendar'>
                                <VscCalendar />
                                June 2020 — Present
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                
                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Software Developer - Project Lead</h3>
                            <span className='qualification__subtitle'>Loadlink Technologies Mississauga, Canada</span>
                            <div className='qualification__calendar'>
                            <VscCalendar />
                                July 2019 — June 2020
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Software Developer</h3>
                            <span className='qualification__subtitle'>FlightSafety International Toronto, Canada</span>
                            <div className='qualification__calendar'>
                                <VscCalendar />
                                April 2019 — July 2019
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Web Developer</h3>
                            <span className='qualification__subtitle'>Apostrophe Solutions Corp, Toronto, Canada</span>
                            <div className='qualification__calendar'>
                                <VscCalendar />
                                April 2019 — July 2019
                            </div>
                        </div>
                    </div>

                </div>

                {/* Experiences */}
                <div className={
                    toggleState === 2 ? 'qualification__content qualification__content-active'
                    : 'qualification__content'} >
                                        <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>BSc in Information Technology</h3>
                            <span className='qualification__subtitle'>Dublin City University</span>
                            <div className='qualification__calendar'>
                                <VscCalendar />
                                Sept 2016 — May 2020
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                
                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Leaving Certificate</h3>
                            <span className='qualification__subtitle'>Mount Mercy College</span>
                            <div className='qualification__calendar'>
                                <VscCalendar />
                                Jan 2009 — June 2011
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification