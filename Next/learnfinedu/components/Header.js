import Link from 'next/link';

import '../styles.scss';

const Navigation = () => (
  <div>
    <ul>
      <li>
        {/* <img className="image-1" src="/static/background.png" /> */}
      </li>
      <li>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="link">Home</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;