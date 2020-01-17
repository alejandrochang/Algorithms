import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';


import '../styles/style.scss'

const Home = () => (
  <div className="header-color">
    <Head />
    <Nav />
  </div>
)

export default Home;
