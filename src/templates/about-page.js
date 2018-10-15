import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout, { projectsFragment } from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'
import Title from '../components/Title'

export const AboutPageTemplate = ({
  title,
  content,
  image,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <Section className="mw8">
      <Title>{title}</Title>
      <div className="flex flex-column flex-row-l pv5">
        <div className="w-50-l pr4-l">
          <div>
            <PageContent content={content} />
          </div>
        </div>
        <div className="w-50-l">
          <p>
            <img className="w-100" src={image} />
          </p>
        </div>
      </div>
    </Section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { projects, markdownRemark: post } = data

  return (
    <Layout projects={projects}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        image
      }
    }
  }
`
