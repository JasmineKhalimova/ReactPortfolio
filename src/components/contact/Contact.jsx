import React from 'react';
import './contact.css';
import { AiOutlineSend, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='conatct section' id='contact'>
    <h2 className='section__title'>Conatct Me</h2>
    <h3 className='section__subtitle'>Get in touch</h3>

    <div className='contact__container container grid'>
        <div className='contact__content'>
            <h3 className='contact__title'>Conatact Info</h3>
            <div className='contact__info'>
                <div className='contact__card'>
                    <a href='https://www.linkedin.com/in/jasmine-k-5bb6a9151/'>
                        <h3 className='contact__card-title'>Linkedin <AiFillLinkedin className='contact__card-icon'/></h3>
                    </a>
                </div>
            </div>
        </div>
        <div className='contact__content'>
            <h3 className='contact__title'>Contact</h3>
            <form className='contact__form'>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input type="text" name='name' className='contact__form-input' placeholder='Your name'></input>
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Email</label>
                    <input type="email" name='email' className='contact__form-input' placeholder='Your email'></input>
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Message</label>
                    <textarea name='message' cols='30' rows='10' className='contact__form-input' placeholder='Your message'></textarea>
                </div>
                <button className='button button--flex'>
                    Send <AiOutlineSend className='send-icon'/>
                </button>
            </form>
        </div>
    </div>
    </section>
  )
}

export default Contact