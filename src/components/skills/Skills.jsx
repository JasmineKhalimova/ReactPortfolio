import React from 'react';
import './skills.css';
import { HiOutlineBadgeCheck } from 'react-icons/hi';


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h3 className='section__subtitle'>My Technical Skills</h3>
      <div className='skills__container container grid'>
        {/* Frontend */}
        <div className='skills__content'>
          <h3 className='skills__title'>Frontend Developing</h3>
          <div className='skills__group'>
            <div className='skills__data'>
              <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Frontend Technologies: </b>
                  HTML5, CSS3 (LESS, SASS, Tailwind & Bootstrap), JavaScript,
                   Typescript, jQuery, React.js and Alphine.js
                </h3>
              </div>
            </div>
            <div className='skills__data'>
              <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Application Programming Interfaces: </b>
                   REST APIs, JSON, and XML
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Android Mobile App Development: </b> 
                  Using Android Studio – Java Marshmallow API 23 and
                  Firebase cloud
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Graphic design: </b>
                  Adobe Photoshop, Illustrator and Figma
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Web Accessibility: </b>
                  Experienced in developing
                  digital solutions that comply with WCAG 2.0
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Testing: </b>
                  A/B, Unit & Manual testing (Frameworks: Jasmine & Cypress) and Q/A (BrowserStack)
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className='skills__content'>
          <h3 className='skills__title'>Backend Developing</h3>
          <div className='skills__group'>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Backend Technologies: </b>
                  PHP and Node.js
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Tech Stack: </b> Linux, Apache, MySQL, PHP (LAMP)
                  & MongoDB, Express.js, React.js, Node.js (MERN)
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Databases: </b> 
                  MySQL and NoSQL (MongoDB & Firebase)
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Version control systems: </b> 
                  Git Lab, GitHub, Azure Repos and Bitbucket.
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Operating Systems: </b> Linux (Ubuntu), Windows and Macintosh
                </h3>
              </div>
            </div>
            <div className='skills__data'>
            <HiOutlineBadgeCheck className='skills__badge-icon'/>
              <div>
                <h3 className='skills__name'>
                  <b>Cloud Computing: </b> Google Cloud, Microsoft
                  Azure and Amazon AWS and MongoDB Atlas, Nexcess
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills