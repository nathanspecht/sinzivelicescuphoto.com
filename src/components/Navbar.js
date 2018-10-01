import React from 'react'
import Link from './Link'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import tumblr from '../img/tumblr-icon.svg'

const Navbar = () => (
  <nav className="flex pv3 ph4 justify-between items-center">
    <div>
      <Link className="b f3" to="/">
        SINZIANA VELICESCU
      </Link>
    </div>
    <div className="flex">
      <Link className="mr3" to="/projects">
        Projects
      </Link>
      <Link className="mr3" to="/about">
        About
      </Link>
      <Link to="/" className="mr3">
        <img src={facebook} className="h1 w1 db" />
      </Link>
      <Link to="/" className="mr3">
        <img src={instagram} className="h1 w1 db" />
      </Link>
      <Link to="/">
        <img src={tumblr} className="h1 w1 db" />
      </Link>
    </div>
  </nav>
)

export default Navbar
