import React from 'react'
import Layout, { projectsFragment } from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'

const Project = ({ data }) => {
  const { projects, markdownRemark: project, links } = data
  let { images } = project.frontmatter

  return (
    <Layout projects={projects} links={links}>
      <Section className="flex flex-auto mv4">
        <Slides images={images} />
      </Section>
    </Layout>
  )
}

export default Project

export const projectQuery = graphql`
  query ProjectById($id: String!) {
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          ...ProjectFragment
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        images
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
            keywords
            description
          }
        }
      }
    }
  }
`
