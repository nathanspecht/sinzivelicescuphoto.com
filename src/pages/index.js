import React from 'react'
import IndexPage from '../templates/index'

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`
