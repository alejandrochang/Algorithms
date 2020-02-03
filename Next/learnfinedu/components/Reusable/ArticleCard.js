import React from 'react';
import Link from "next/link";

import '../../styles.scss';

const ArticleCard = () => (
  <div className="card">
    <img className="image-1" src="/static/books.jpg" alt="Avatar"/>
    <div className="container">
      <h4><b>My Favorite Finance Books</b></h4> 
      <p>Improve your life by reading some of these books!</p> 
    </div>
  </div>
);

export default ArticleCard;