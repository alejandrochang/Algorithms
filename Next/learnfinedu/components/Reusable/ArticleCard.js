import React from 'react';
import Link from "next/link";

import '../../styles.scss';

const ArticleCard = () => (
  <div className="card">
    <img className="image-1" src="/static/background.png" alt="Avatar"/>
    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
    <div className="container">
      <h4><b>John Doe</b></h4> 
      <p>Architect Engineer</p> 
    </div>
  </div>
);

export default ArticleCard;