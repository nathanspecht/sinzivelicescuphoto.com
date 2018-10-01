import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'

export const AboutPageTemplate = ({
  title,
  content,
  image,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <h3 className="f3">{title}</h3>
      <div className="flex flex-column-reverse flex-row-l">
        <div className="w-100 w-50-l pr4-l">
          <div>
            <PageContent content={content} />
          </div>
        </div>
        <div className="w-100 w-50-l">
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
  const { markdownRemark: post } = data

  return (
    <Layout>
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
