import React from 'react';

import '../css/FeatureCard.css';

function FeatureCard({ data }) {
   // data object structure = {title, paragraft, icon}
   const title = data.title;
   const paragraft = data.paragraft;
   const icon = data.icon;

   return (
      <div className='feature-card card'>
         <img src={icon} alt={`Icon of ${title}`} />
         <h2>{title}</h2>
         <p>{paragraft}</p>
      </div>
   )
}

export default FeatureCard;