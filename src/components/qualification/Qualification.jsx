import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>Qualification & Education</h2>
        <h3 className='section__subtitle'>My qualification, education and experiences</h3>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className='qualification__button button--flex qualification__active'>
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    {""} Education
                </div>
                <div className='qualification__button button--flex'>
                    <i className='uil uil-briefcase qualification__icon'></i>
                    {""} Experience
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification