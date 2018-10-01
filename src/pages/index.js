import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'
import Slides from '../components/Slides'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: photos } = data.allMarkdownRemark

    return (
      <Layout>
        <Section className="mt4">
          <Slides photos={photos} />
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
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "photo" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
