import React from 'react'

export default ({ children, className }) => (
  <div className={`ph3 ph4-ns ph5-l ${className || ''}`}>{children}</div>
)
