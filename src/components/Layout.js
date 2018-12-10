import React from 'react'
import Helmet from 'react-helmet'
import 'tachyons/css/tachyons.min.css'
import './all.css'

import Navbar from '../components/Navbar'

const Layout = ({ projects, links, children }) => (
  <div
    className="mw9 center px3 pt3 flex flex-column vh-100 relative"
    style={{
      overflowX: 'hidden',
      overflowY: 'scroll',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
    }}
  >
    <Helmet title="Sinziana Velicescu Photography">
      <meta
        name="keywords"
        content={links.edges[0].node.frontmatter.keywords}
      />
      <meta
        name="description"
        content={links.edges[0].node.frontmatter.description}
      />
    </Helmet>
    <Navbar projects={projects} links={links} />
    <div className="f6 flex-auto flex flex-column">{children}</div>
  </div>
)

export const projectsFragment = graphql`
  fragment ProjectFragment on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      title
      images
    }
  }
`

export const linksFragment = graphql`
  fragment LinksFragment on MarkdownRemark {
    frontmatter {
      facebook
      instagram
      email
      description
      keywords
    }
  }
`

export default Layout
