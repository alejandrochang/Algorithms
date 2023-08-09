import { Outlet, Link } from "react-router-dom";

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
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/time">Time Load App</Link>
          </li>
          <li>
            <Link to="/poker">Poker Shuffle</Link>
          </li>
          <li>
            <Link to="/stoplight">Stoplight</Link>
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
    </>
  )
}

export default Layout;