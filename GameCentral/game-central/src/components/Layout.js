import { Outlet, Link } from "react-router-dom";
import Homepage from './Home';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/medication">Medication</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

const Layout = () => {
  return (
    <>
      <Navigation />
      <Homepage />
    </>
  )
}

export default Layout;