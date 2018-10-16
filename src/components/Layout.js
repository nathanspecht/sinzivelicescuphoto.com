import React from 'react'
import Helmet from 'react-helmet'
import 'tachyons/css/tachyons.min.css'
import './all.css'

import Navbar from '../components/Navbar'

const TemplateWrapper = ({ projects, children }) => (
  <div className="mw9 ma3 flex flex-column vh-100 relative">
    <Helmet title="Sinziana Velicescu Photography" />
    <Navbar projects={projects} />
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

export default TemplateWrapper
