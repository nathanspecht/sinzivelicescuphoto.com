import { cold } from 'react-hot-loader'
import React from 'react'
import Layout, { projectsFragment } from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'
import { Images } from '../components/Images'
import { useMedia } from '../hooks/useMedia'

function _ProjectPageTemplate({ images }) {
  const isWide = useMedia('(min-width: 60em)', true)

  return isWide ? (
    <Section className="flex flex-auto mv4">
      <Slides images={images} />
    </Section>
  ) : (
    <Section className="mv4">
      <Images images={images} />
    </Section>
  )
}

export const ProjectPageTemplate = cold(_ProjectPageTemplate)

const Project = ({ data }) => {
  const { projects, markdownRemark: project, links } = data
  let { images } = project.frontmatter

  return (
    <Layout projects={projects} links={links}>
      <ProjectPageTemplate images={images} />
    </Layout>
  )
}

export default cold(Project)

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
        sortKey
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
