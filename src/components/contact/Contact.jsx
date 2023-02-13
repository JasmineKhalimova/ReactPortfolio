import React from 'react';
import './contact.css';
import { FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='conatct section' id='contact'>
    <h2 className='section__title'>Conatct Me</h2>
    <h3 className='section__subtitle'>Get in touch</h3>

    <div className='contact__container container frid'>
        <div className='contact__content'>
            <h3 className='contact__title'>Conatact Info</h3>
            <div className='contact__info'>
                <div className='contact__card'>
                    <FaLinkedin className='contact__card-icon'/>
                    <h3 className='contact__card-title'>linkedin: </h3>
                    <span className='contact__card-data'>example@gmail.com</span>
                </div>
            </div>
        </div>
        <div className='contact__content'>
            <h3 className='contact__title'>Conatact Form</h3>
            
        </div>
    </div>
    </section>
  )
}

export default Contact