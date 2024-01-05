import React from 'react';
import Logo from '../images/logo-white.svg';

// import social media icon
import '../css/Footer.css';

function Footer() {
   return (
      <footer id='Footer'>
         <div className="container">
            <div className='brand-n-social'>
               <img src={Logo} alt="logobrand" className='brand-logo'/>
               <ul className="social-media">
                  <li><a href="#"><span className="social-icon facebook"></span></a></li>
                  <li><a href="#"><span className="social-icon youtube"></span></a></li>
                  <li><a href="#"><span className="social-icon twitter"></span></a></li>
                  <li><a href="#"><span className="social-icon pinterest"></span></a></li>
                  <li><a href="#"><span className="social-icon instagram"></span></a></li>
               </ul>
            </div>

            <ul className="links">
               <li><a href="#Home">About Us</a></li>
               <li><a href="#Home">Contact</a></li>
               <li><a href="#Home">Blog</a></li>
               <li><a href="#Home">Careers</a></li>
               <li><a href="#Home">Support</a></li>
               <li><a href="#Home">Privacy Policy</a></li>
            </ul>
            
            <div className='request-n-copyright'>
               <div className="btn">Request Invite</div>
               <span>© Easybank. All Rights Reserved</span>
            </div>
         </div>
         
         <div className="attribution">
         Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
         Coded by <a href="https://github.com/AlfathCikal">Alfath Cikal</a>.
         </div>
      </footer>
   )
}

export default Footer;