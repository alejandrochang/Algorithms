import React from 'react';
import Link from 'next/link';


// import '../styles/style.scss'

const Nav = () => (
  <nav class="nav">
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
