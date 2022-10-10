import { Link, NavLink } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const TopNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <ul role="list" className="nav-links">
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="nav-toggle">
        <Hamburger size={25} toggle={setOpen} toggled={open} rounded/>
        <ul role="list" className={`dropdown ${open ? 'open' : ''} `}>
          <li><NavLink to="/work" onClick={() => setOpen(!open)}>Work</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setOpen(!open)}>Blog</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(!open)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default TopNav
