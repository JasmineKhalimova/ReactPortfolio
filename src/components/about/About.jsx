import React from 'react';
import './about.css';
import '../../assets/profile-img.jpeg'
import { TbAward, TbBriefcase} from 'react-icons/tb';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'> About Me</h2>
        <h3 className='section__subtitle'>Personal Summary</h3>
        <div className='about__container container grid'>
            <img src={require('../../assets/about.jpg')} alt='Profile' title='Profile' className='about__img'/>
            <div className='about__data'>
                <div className='about__info grid'>
                    <div className='about__box'>
                        <TbAward className='about__icon'/>
                        <h3 className='about__title'>Experience</h3>
                        <span className='about__subtitle'>5+ Years Working</span>
                    </div>
                    <div className='about__box'>
                        <TbBriefcase className='about__icon'/>
                        <h3 className='about__title'>Completed</h3>
                        <span className='about__subtitle'>45+ Projects</span>
                    </div>
                </div>
                <p className='about__description'>
                    Experienced software developer with over 5 years of expertise in designing and implementing
                     innovative applications that significantly improve organizational efficiency and effectiveness.
                      Proficient in modern JavaScript frameworks like React and Alphine Experienced in cloud technologies
                       like Google Cloud, Microsoft Azure, Amazon AWS and so on. Adept at collaborating within Agile/Scrum
                        environments, leading teams to achieve project goals, and utilising a broad range of technologies
                         to create reliable and user-friendly systems.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About