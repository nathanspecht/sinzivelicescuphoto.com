import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout, { projectsFragment } from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(this.props)

    const projects = data.projects

    const index = data.index.edges[0].node

    const featuredProject = projects.edges.find(
      ({ node: project }) =>
        project.frontmatter.title === index.frontmatter.featuredProject,
    )

    const images = featuredProject.node.frontmatter.images

    return (
      <Layout projects={projects}>
        <Section className="flex flex-auto mt4">
          <Slides images={images} />
        </Section>
      </Layout>
    )
  }
}

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
  }
`
