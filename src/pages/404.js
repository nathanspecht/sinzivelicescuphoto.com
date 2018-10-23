import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Title from '../components/Title'

const NotFoundPage = ({ data }) => {
  const projects = data.projects
  const links = data.links
  return (
    <Layout links={links} projects={data.projects}>
      <Section>
        <Title>404</Title>
      </Section>
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

    links: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index" } } }
    ) {
      edges {
        node {
          frontmatter {
            facebook
            instagram
            email
          }
        }
      }
    }
  }
`

export default NotFoundPage
