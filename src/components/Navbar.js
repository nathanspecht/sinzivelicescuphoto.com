import React from 'react'
import MediaQuery from 'react-responsive'
import Link from './Link'
import { Facebook, Instagram, Envelope, Bars } from './Icons'

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

    return (
      <MediaQuery minWidth="60em">
        {matches => {
          if (matches && this.state.open) this.close()
          if (matches && this.state.small) this.setBig()
          if (!matches && !this.state.small) this.setSmall()

          return (
            <nav className="flex pt1 pt3-l ph3 ph4-ns ph5-l justify-between items-center shrink-0">
              <div>
                <Link className="b f5 f4-m f3-l futura-bold" to="/" noUnderline>
                  SINZIANA VELICESCU
                </Link>
              </div>
              <div
                className="absolute pv3 mt1 ph3 ph4-ns top-0 right-0 z-2 db dn-l pointer"
                onClick={this.toggle}
              >
                <Bars />
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
                  <a className="link dim black mr3" href={links.facebook}>
                    <Facebook />
                  </a>
                  <a className="link dim black mr3" href={links.instagram}>
                    <Instagram />
                  </a>
                  <a className="link dim black mr3" href={links.email}>
                    <Envelope />
                  </a>
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
