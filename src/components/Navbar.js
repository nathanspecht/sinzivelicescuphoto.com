import React from 'react'
import MediaQuery from 'react-responsive'
import Link from './Link'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import tumblr from '../img/tumblr-icon.svg'
import hamburger from '../img/hamburger-icon.svg'
import { Facebook, Instagram, Envelope } from './Icons'

class Navbar extends React.Component {
  state = {
    open: false,
  }

  close = () => this.setState({ open: false })

  toggle = () => this.setState({ open: !this.state.open })

  setBig = () => this.setState({ small: false })

  setSmall = () => this.setState({ small: true })

  render() {
    const { projects } = this.props

    const links = this.props.links.edges[0].node.frontmatter

    console.log({ links })

    return (
      <MediaQuery minWidth="60em">
        {matches => {
          if (matches && this.state.open) this.close()
          if (matches && this.state.small) this.setBig()
          if (!matches && !this.state.small) this.setSmall()

          return (
            <nav className="flex pt1 pt3-l ph2 ph4-ns ph5-l justify-between items-center shrink-0">
              <div>
                <Link className="b f5 f4-m f3-l futura-bold" to="/" noUnderline>
                  SINZIANA VELICESCU
                </Link>
              </div>
              <div
                className="absolute pv3 ph2 ph4-ns top-0 right-0 z-2 db dn-l pointer"
                onClick={this.toggle}
              >
                <img src={hamburger} className="h1 w1 db" />
              </div>
              <div
                className={`
                  flex flex-column flex-row-l
                  items-start
                  absolute relative-l top-0 left-0
                  z-1 bg-white
                  w-100 h-100 w-auto-l h-auto-l
                  pa4 pa0-l
                  nav-container 
                  ${this.state.open ? 'open' : ''} 
                  ${this.state.small ? 'transition-trans' : ''} 
                `}
              >
                {projects.edges.map(({ node: project }) => (
                  <Link
                    key={project.id}
                    className="mr0 mr3-l mv2 mv0-l"
                    to={project.fields.slug}
                    onClick={this.close}
                  >
                    {project.frontmatter.title}
                  </Link>
                ))}
                <Link className="mr0 mr4-l mv2 mv0-l" to="/about">
                  About
                </Link>
                <div className="flex mv2 mv0-l">
                  <Link to={links.facebook} className="mr3" activeClassName="">
                    <Facebook />
                  </Link>
                  <Link to={links.instagram} className="mr3" activeClassName="">
                    <Instagram />
                  </Link>
                  <Link to={links.email} activeClassName="">
                    <Envelope />
                  </Link>
                </div>
              </div>
            </nav>
          )
        }}
      </MediaQuery>
    )
  }
}

export default Navbar
