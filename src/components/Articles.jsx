import React from 'react';

import CurrencyImg from '../images/image-currency.jpg';
import RestaurantImg from '../images/image-restaurant.jpg'
import PlaneImg from '../images/image-plane.jpg';
import ConfettiImg from '../images/image-confetti.jpg';

import ArticlesCard from './ArticleCard';

import '../css/Articles.css';

function Articles() {
   const articleList = [
      {
         img : CurrencyImg,
         author : `By Claire Robinson`,
         title : `Receive money in any currency with no fees`,
         paragraft : `The world is getting smaller and we’re becoming more mobile. So why should you be 
         forced to only receive money in a single …`,
      },
      {
         img : RestaurantImg,
         author : `By Wilson Hutton`,
         title : `Treat yourself without worrying about money`,
         paragraft : `Our simple budgeting feature allows you to separate out your spending and set 
         realistic limits each month. That means you …`,
      },
      {
         img : PlaneImg,
         author : `By Wilson Hutton`,
         title : `Take your Easybank card wherever you go`,
         paragraft : `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
         while you’re abroad. We’ll even show you …`,
      },
      {
         img : ConfettiImg,
         author : `By Claire Robinson`,
         title : `Our invite-only Beta accounts are now live!`,
         paragraft : `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
         It’s easy to request an invite through the site ...`,
      },
   ];

   return (
      <div className='Articles' id='Articles'>
         <h1 className="title">Latest Articles</h1>
         <div className="article-list">
            {articleList.map((data, key) => {
               return <ArticlesCard data={data} key={key}/>
            })}
         </div>
      </div>
   )
}

export default Articles;