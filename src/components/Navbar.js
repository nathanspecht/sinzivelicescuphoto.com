import React from 'react'
import Link from './Link'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import tumblr from '../img/tumblr-icon.svg'

const Navbar = ({ projects }) => (
  <nav className="flex pv3 ph2 ph4-ns ph5-l justify-between items-center">
    <div>
      <Link className="b f3 futura-bold" to="/" noUnderline>
        SINZIANA VELICESCU
      </Link>
    </div>
    <div
      className={`
      flex flex-column flex-row-l
      absolute relative-l top-0
      z-1 bg-white
      w-100 h-100 w-auto-l h-auto-l
      pa4 pa0-l
    `}
    >
      {projects.edges.map(({ node: project }) => (
        <Link key={project.id} className="mr3" to={project.fields.slug}>
          {project.frontmatter.title}
        </Link>
      ))}
      <Link className="mr4" to="/about">
        About
      </Link>
      <Link to="/" className="mr3" activeClassName="">
        <img src={facebook} className="h1 w1 db" />
      </Link>
      <Link to="/" className="mr3" activeClassName="">
        <img src={instagram} className="h1 w1 db" />
      </Link>
      <Link to="/" activeClassName="">
        <img src={tumblr} className="h1 w1 db" />
      </Link>
    </div>
  </nav>
)

export default Navbar
