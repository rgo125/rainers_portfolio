import './Nav.css'
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) => isActive ? "nav-link-active" : "nav-link";

function Nav() {
  return (
    <>
      <nav>
        <h1 className='my-name'>Rainer Gardner-Olesen</h1>
        <div className="pages">
          <NavLink to="/" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav
