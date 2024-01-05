import React from "react";
import Mockup from "../images/image-mockups.png";
import DeskImg from "../images/bg-intro-desktop.svg"
import '../css/Hero.css';

function Hero() {
   const imgInitial = (
      <>
         <img src={Mockup} alt="mockup" className="mockup-img"/>
         <img src={DeskImg} alt="mockup" className="desk-img"/>
      </>
   )

   return (
      <div className="Hero" id="Hero">
         <div className="text">
            <h1>Next generation digital banking</h1>
            <p>
               Take your financial life online. Your Easybank account will be a one-stop-shop 
               for spending, saving, budgeting, investing, and much more.
            </p>
            <div className="btn">Request Invite</div>
         </div>
         <div className="hero-image"></div>
      </div>
   )
}

export default Hero;