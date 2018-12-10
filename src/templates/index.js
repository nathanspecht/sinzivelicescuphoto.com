import { cold } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { useMedia } from '../hooks/useMedia'
import Layout, { projectsFragment, linksFragment } from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'
import { Images } from '../components/Images'

function IndexPage({ data }) {
  const isWide = useMedia('(min-width: 60em)', true)
  const projects = data.projects

  const links = data.links

  const index = data.index.edges[0].node

  const featuredProject = projects.edges.find(
    ({ node: project }) =>
      project.frontmatter.title === index.frontmatter.featuredProject,
  )

  const images = featuredProject.node.frontmatter.images

  return (
    <Layout projects={projects} links={links}>
      {isWide ? (
        <Section className="flex flex-auto mv4">
          <Slides images={images} />
        </Section>
      ) : (
        <Section className="mv4">
          <Images images={images} />
        </Section>
      )}
    </Layout>
  )
}

export default cold(IndexPage)

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery2 {
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          ...ProjectFragment
        }
      }
    }

    index: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index" } } }
    ) {
      edges {
        node {
          frontmatter {
            featuredProject
          }
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
            keywords
            description
          }
        }
      }
    }
  }
`
