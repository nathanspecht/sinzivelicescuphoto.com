import React from 'react'

export default ({ children, className }) => (
  <div className={`ph4 ${className || ''}`}>{children}</div>
)
