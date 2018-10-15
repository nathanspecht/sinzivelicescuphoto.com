import React from 'react'

export default ({ children, className }) => (
  <div className={`ph2 ph4-ns ph5-l ${className || ''}`}>{children}</div>
)
