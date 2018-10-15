import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout, { projectsFragment } from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'

/*
export const PhotoTemplate = ({ title, description, image }) => {
  return (
    <Section>
      <h3 className="f3">{title}</h3>
      <div className="flex flex-column-reverse">
        <div className="w-100 w-50-l pr4-l">
          <div>
            <Content content={description} />
          </div>
        </div>
        <div className="w-100">
          <img className="w-100" src={image} />
        </div>
      </div>
    </Section>
  )
}

PhotoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
}
*/

const Photo = ({ data }) => {
  const { projects, markdownRemark: post } = data

  return (
    <Layout projects={projects}>
      {/*
      <PhotoTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.frontmatter.description}
      />
 */}
    </Layout>
  )
}

Photo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Photo

export const photoQuery = graphql`
  query featuredPhoto($id: String!) {
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
      html
      frontmatter {
        title
      }
    }
  }
`
