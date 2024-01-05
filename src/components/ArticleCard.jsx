import React from 'react';
import '../css/ArticleCard.css';

function ArticlesCard({data}) {
   // data object structure = {img, author, title, paragraft}
   return (
      <div className='article-card card'>
         <div className="card-image">
            <img src={data.img} alt={data.title} />
         </div>
         <div className="card-text">
            <span className="author">{data.author}</span>
            <a href='#'>{data.title}</a>
            <p>{data.paragraft}</p>
         </div>
      </div>
   )
}

export default ArticlesCard;