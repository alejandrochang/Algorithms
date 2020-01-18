import React from 'react';
import Link from 'next/link';

import '../styles/style.scss'


// import './logo3.png'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav id="nav" className="nav">
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Must-Read-Books</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li> */}
    </ul>
  </nav>
)

export default Nav
