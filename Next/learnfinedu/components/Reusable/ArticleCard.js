import React from 'react';
import Link from "next/link";

import '../../styles.scss';

const ArticleCard = () => (
  <div className="card">
    <img className="image-1" src="/static/books.jpg" alt="Avatar"/>
    <div className="container">
      <h4 className="align-text"><b>My Favorite Finance Books</b></h4> 
      <p className="align-text">Read Here!</p> 
    </div>
  </div>
);

export default ArticleCard;