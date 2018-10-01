import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

const Project = ({ data }) => {
  const { markdownRemark: project } = data
  const title = project.frontmatter.title

  return (
    <Layout>
      <Section>
        <h3 className="f3">{title}</h3>
      </Section>
    </Layout>
  )
}

export default Project

export const projectQuery = graphql`
  query ProjectById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
