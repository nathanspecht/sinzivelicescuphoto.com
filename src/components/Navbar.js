import React from 'react'
import Link from './Link'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import tumblr from '../img/tumblr-icon.svg'

const Navbar = ({ projects }) => (
  <nav className="flex pv3 ph2 ph3-ns ph4-l justify-between items-center">
    <div>
      <Link className="b f3" to="/">
        SINZIANA VELICESCU
      </Link>
    </div>
    <div className="flex">
      {projects.edges.map(({ node: project }) => (
        <Link key={project.id} className="mr3" to={project.fields.slug}>
          {project.frontmatter.title}
        </Link>
      ))}
      <Link className="mr3" to="/about">
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
