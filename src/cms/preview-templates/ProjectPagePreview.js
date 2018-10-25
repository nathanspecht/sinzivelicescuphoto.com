import React from 'react'
import { ProjectPageTemplate } from '../../templates/project'

const ProjectPagePreview = ({ entry }) => (
  <ProjectPageTemplate images={entry.getIn(['data', 'images'])} />
)

export default ProjectPagePreview
