import React from 'react'
import Helmet from 'react-helmet'
import 'tachyons/css/tachyons.min.css'
import './all.css'

import Navbar from '../components/Navbar'

const TemplateWrapper = ({ projects, children }) => (
  <div className="mw9 center">
    <Helmet title="Sinziana Velicescu Photography" />
    <Navbar projects={projects} />
    <div className="f6">{children}</div>
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
    }
  }
`

export default TemplateWrapper
