import React from 'react';

// Import Icon
import OnlineIcon from '../images/icon-online.svg';
import BudgetingIcon from '../images/icon-budgeting.svg';
import OnboardingIcon from '../images/icon-onboarding.svg';
import ApiIcon from '../images/icon-api.svg';

import FeatureCard from './FeatureCard';
import '../css/Benefit.css';

function Benefit() {
   const featuresList = [
      {
         title: `Online Banking`,
         paragraft: `Our modern web and mobile applications allow you to keep track of your finances 
                     wherever you are in the world.`,
         icon : OnlineIcon,
      },
      {
         title: `Simple Budgeting`,
         paragraft: `See exactly where your money goes each month. Receive notifications when you’re 
                     close to hitting your limits.`,
         icon : BudgetingIcon,
      },
      {
         title: `Fast Onboarding`,
         paragraft: `We don’t do branches. Open your account in minutes online and start taking control 
         of your finances right away.`,
         icon : OnboardingIcon,
      },
      {
         title: `Open API`,
         paragraft: `Manage your savings, investments, pension, and much more from one account. Tracking 
         your money has never been easier.`,
         icon : ApiIcon,
      },
   ];

   return (
      <div className="Benefit" id="Benefit">
         <div className="heading">
            <h1 className='title'>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.</p>
         </div>
         <div className="features">
            {featuresList.map((data, key) => {
               return <FeatureCard data={data} key={key}/>
            })}
         </div>
      </div>
   )
}

export default Benefit;