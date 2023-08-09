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