import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/Link'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProjectsPageTemplate = ({
  title,
  content,
  projects,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="ph4">
      <h3 className="f3">{title}</h3>
      <PageContent className="content" content={content} />
      {projects.map(({ node: project }) => (
        <div key={project.id} className="content">
          <p>
            <Link className="has-text-primary" to={project.fields.slug}>
              {project.frontmatter.title}
            </Link>
          </p>
        </div>
      ))}
    </section>
  )
}

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  projects: PropTypes.object,
}

const ProjectsPage = ({ data }) => {
  const {
    markdownRemark: post,
    allMarkdownRemark: { edges: projects },
  } = data

  return (
    <Layout>
      <ProjectsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        projects={projects}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
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
