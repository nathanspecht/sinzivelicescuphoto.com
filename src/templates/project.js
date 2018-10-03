import React from 'react'
import Layout, { projectsFragment } from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'

const Project = ({ data }) => {
  const { projects, markdownRemark: project } = data
  let { photos } = project.frontmatter

  photos = photos.map(photo => ({
    photo: {
      id: photo.photo,
      src: photo.photo,
    },
  }))

  return (
    <Layout projects={projects}>
      <Section className="mt4">
        <Slides photos={photos} />
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        photos {
          photo
        }
      }
    }
  }
`
