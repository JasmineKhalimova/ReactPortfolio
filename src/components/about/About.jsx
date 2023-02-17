import React from 'react';
import './about.css';
import '../../assets/profile-img.jpeg'
import CV from '../../assets/cv.pdf';
import { TbAward, TbBriefcase, TbPhoneCall, TbFileDownload} from 'react-icons/tb';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'> About Me</h2>
        <h3 className='section__subtitle'>Personal Summary</h3>
        <div className='about__container container grid'>
            <img src={require('../../assets/profile-img.jpeg')} alt='Profile' title='Profile' className='about__img'/>
            <div className='about__data'>
                <div className='about__info grid'>
                    <div className='about__box'>
                        <TbAward className='about__icon'/>
                        <h3 className='about__title'>Experience</h3>
                        <span className='about__subtitle'>5 Years Working</span>
                    </div>
                    <div className='about__box'>
                        <TbBriefcase className='about__icon'/>
                        <h3 className='about__title'>Completed</h3>
                        <span className='about__subtitle'>45+ Projects</span>
                    </div>
                    <div className='about__box'>
                        <TbPhoneCall className='about__icon'/>
                        <h3 className='about__title'>Support</h3>
                        <span className='about__subtitle'>Online 24/7</span>
                    </div>
                </div>
                <p className='about__description'>
                    Experienced web developer with a passion for developing innovative applications that expedite the efficiency 
                    and effectiveness of organizational success. Well-versed in technology and writing code to create systems 
                    that are reliable and user-friendly. Skilled team player who has the proven ability to motivate, educate, and 
                    manage a team of professionals to build software programs and effectively track changes. 
                </p>
                <a download="" href={CV} className='button button--flex'>
                    Download CV
                    <TbFileDownload />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About