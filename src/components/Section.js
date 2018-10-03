import React from 'react'

export default ({ children, className }) => (
  <div className={`ph2 ph3-ns ph4-l ${className || ''}`}>{children}</div>
)
