import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Social = () => {
  return (
    <div className='home__social'>
        <a href='/' className='home__social-icon' target='_blank'  rel="noreferrer">
            <AiFillGithub className='contact__card-icon'/>
        </a>
        <a href='/' className='home__social-icon' target='_blank'  rel="noreferrer">
            <AiFillLinkedin className='contact__card-icon'/>
        </a>
    </div>
  )
}

export default Social