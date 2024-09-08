import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h3 className='section__subtitle'>Technical Skills</h3>
      <div className='skills__container container grid'>
        {/* Frontend */}
        <div className='skills__content'>
          <div className='skills__group'>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Frontend Technologies: </b>
                  Advanced proficiency in HTML5, CSS3 (LESS, SASS, Tailwind & Bootstrap), 
                  React.js, React Native, JavaScript, TypeScript, Alphine.js and modern frameworks.
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Application Programming Interfaces: </b>
                  Experienced in designing and integrating REST APIs using JSON and XML
                   for data exchange and communication between systems.
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Android Mobile App Development: </b> 
                  Using Android Studio – Java Marshmallow API 23 and
                  Firebase cloud
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Graphic design: </b>
                  Adobe Photoshop, Illustrator and Figma
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Web Accessibility: </b>
                  Experienced in developing
                  digital solutions that comply with WCAG 2.0
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Testing and Automation: : </b>
                  Experience with test-driven development (JMeter, Jenkins, Jasmine & Cypress) 
                  and continuous integration. 
                  </p>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className='skills__content'>
          <div className='skills__group'>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Backend Technologies: </b>
                  Proficient in PHP, Node.js, Express and server-side logic with APIs.
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Tech Stack: </b> Linux, Apache, MySQL, PHP (LAMP)
                  & MongoDB, Express.js, React.js, Node.js (MERN)
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Databases: </b> 
                  Advanced knowledge of MySQL, PostgreSQL, NoSQL databases like MongoDB
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Version control systems: </b> 
                  Git Lab, GitHub, Azure Repos and Bitbucket.
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Operating Systems: </b> Linux (Ubuntu), Windows and Macintosh
                </p>
            </div>
            <div className='skills__data'>
                <p className='skills__name'>
                  - <b>Cloud Computing: </b> Google Cloud, Microsoft
                  Azure and Amazon AWS and MongoDB Atlas, Nexcess
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills