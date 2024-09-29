import React from 'react';
import './about.css';
import { TbAward, TbBriefcase} from 'react-icons/tb';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'> About Me</h2>
        <span className='section__subtitle'>Personal Summary</span>
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
                Experienced and versatile software developer with over 5 years of hands-on experience in designing
                 and implementing innovative, high- performance applications. Proficient in both front-end and back-end
                  technologies, including React.js, OOP PHP, and Node.js, I have a proven track record of delivering
                   scalable eCommerce platforms and cloud-based solutions. Skilled in cloud computing, using platforms
                    like Google Cloud, Microsoft Azure, and AWS, I thrive in Agile/Scrum environments where I lead teams
                     to meet project objectives efficiently. Additionally, I bring expertise in API integration, and
                      database management (MySQL, MongoDB) ensuring seamless, user- centric experiences across all projects.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About