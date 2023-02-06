import React from 'react';
import '../skills/skills.css';

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
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Frontend Technologies: </b>
                  HTML5, CSS3(LESS & SASS), Bootstrap, 
                  Tailwind CSS, Vanilla JavaScript, jQuery, React.js
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Application Programming Interfaces: </b>
                   REST APIs, JSON, and XML
                </h3>
                <span className='skills__level'>Basic</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Android Mobile App Development: </b> 
                  Using Android Studio – Java Marshmallow API 23 and
                  Firebase cloud
                </h3>
                <span className='skills__level'>Basic</span>
              </div>
            </div>
          </div>
          <div className='skills__group'>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Graphic design: </b>
                  Adobe Photoshop and AdobeIllustrator.
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Web Accessibility: </b>
                  Experienced in developing
                  digital solutions that comply with WCAG 2.0
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Testing: </b> A/B, unit & manual testing, and Q/A
                  experience (BrowserStack)
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className='skills__content'>
          <h3 className='skills__title'>Backend Developing</h3>
          <div className='skills__group'>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Backend Technologies: </b>
                  PHP and Node.js
                </h3>
                <span className='skills__level'>Intermediate</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Full Stack: </b> Linux, Apache, MySQL, PHP (LAMP)
                  & MongoDB, Express.js, React.js, Node.js (MERN)
                </h3>
                <span className='skills__level'>Intermediate</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Databases: </b> MySQL, NoSQL (MongoDB) and
                  Firebase Cloud.
                </h3>
                <span className='skills__level'>Intermediate</span>
              </div>
            </div>
          </div>
          <div className='skills__group'>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Version control systems: </b> 
                  Git Lab, GitHub, Azure Repos and Bitbucket.
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Operating Systems: </b> Linux (Ubuntu desktop
                  version 18.04), Windows and Macintosh
                </h3>
                <span className='skills__level'>Advanced</span>
              </div>
            </div>
            <div className='skills__data'>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>
                  <b>Cloud Computing: </b> Google Cloud, Microsoft
                  Azure and Amazon AWS and MongoDB Atlas, Nexcess
                </h3>
                <span className='skills__level'>Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills