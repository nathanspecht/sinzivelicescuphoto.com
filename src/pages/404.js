import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => {
  const projects = data.projects
  return (
    <Layout projects={data.projects}>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Four04Query {
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          ...ProjectFragment
        }
      }
    }
  }
`

export default NotFoundPage
