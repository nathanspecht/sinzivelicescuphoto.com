import { cold } from 'react-hot-loader'
import React from 'react'
import MediaQuery from 'react-responsive'
import Link from './Link'
import { Facebook, Instagram, Envelope, Bars } from './Icons'
import { useMedia } from '../hooks/useMedia'

function Navbar(props) {
  const { projects } = props
  const links = props.links.edges[0].node.frontmatter

  const isWide = useMedia('(min-width: 60em)')
  const [open, setOpen] = React.useState(false)
  const [small, setIsSmall] = React.useState(false)

  const close = () => setOpen(false)
  const toggle = () => setOpen(!open)
  const setBig = () => setIsSmall(false)
  const setSmall = () => setIsSmall(true)

  if (isWide && open) close()
  if (isWide && small) setBig()
  if (!isWide && !small) setSmall()

  React.useEffect(
    () => {
      const removeScroll = () => {
        if (props.layoutRef.current) {
          props.layoutRef.current.style.overflowY = 'hidden'
        }
      }

      const addScroll = () => {
        if (props.layoutRef.current) {
          props.layoutRef.current.style.overflowY = 'scroll'
        }
      }

      if (open) {
        removeScroll()
      } else {
        addScroll()
      }

      return addScroll
    },
    [open],
  )

  const sortedProjects = projects.edges.sort(({ node: project }) => {
    return project.frontmatter.sortKey
  })

  return (
    <nav className="flex pt1 pt3-l ph3 ph4-ns ph5-l justify-between items-center shrink-0">
      <div>
        <Link className="b f5 f4-m f3-l futura-bold" to="/" noUnderline>
          SINZIANA VELICESCU
        </Link>
      </div>
      <div
        className="absolute pv3 mt1 ph3 ph4-ns top-0 right-0 z-2 db dn-l pointer"
        onClick={toggle}
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
          ${open ? 'open' : ''} 
          ${small ? 'transition-trans' : ''} 
        `}
      >
        {sortedProjects.map(({ node: project }) => (
          <Link
            key={project.id}
            className="mr0 mr3-l mv2 mv0-l"
            to={project.fields.slug}
            onClick={close}
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
}

export default cold(Navbar)
