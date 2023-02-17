import React from 'react'

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='footer__inner container grid'>
            <div className='copyrights'>
                <p>Copyright© {(new Date().getFullYear())} <a href="https://web-brickdesign.com/">Web-Brick Design</a> </p>
            </div>
            <div className='developed'>
                <p>Designed & Developed by Jasmine Khalimova</p>
            </div>
        </div>
    </div>
  )
}

export default Footer