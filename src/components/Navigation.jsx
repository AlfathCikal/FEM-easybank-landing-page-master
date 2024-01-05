import React, {useState} from 'react';

import Logo from '../images/logo.svg';
import BurgerIcon from '../images/icon-hamburger.svg';
import CloseIcon from '../images/icon-close.svg';
import '../css/Navigation.css';

function Navigation() {
   const [menuShow, setMenuShow] = useState(false);
   return (
      <header className={`navigation ${menuShow?'open':'close'}`} id='Nav'>
         <img className='logo' src={Logo} alt="BrandLogo" />

         <ul className={`menu ${menuShow?'open':'close'}`}>
            <li><a href="#Home" onClick={()=>setMenuShow(false)}>Home</a></li>
            <li><a href="#Home" onClick={()=>setMenuShow(false)}>About</a></li>
            <li><a href="#Home" onClick={()=>setMenuShow(false)}>Contact</a></li>
            <li><a href="#Home" onClick={()=>setMenuShow(false)}>Blog</a></li>
            <li><a href="#Home" onClick={()=>setMenuShow(false)}>Careers</a></li>
         </ul>

         <div className="btn">Request Invite</div>
         <div className={`toggleIcon ${menuShow?'open':'close'}`} onClick={() => menuShow ? setMenuShow(false) : setMenuShow(true)}>
            {
               menuShow ? <img className='Close-icon' src={CloseIcon} alt="Close icon" /> : <img className='Burger-icon' src={BurgerIcon} alt="Burger icon" />
            } 
         </div>
      </header>
   )
}

export default Navigation;