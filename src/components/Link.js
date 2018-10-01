import React from 'react'
import { Link } from 'gatsby'

export default ({ className, ...props }) => (
  <Link className={`link dim black ${className}`} {...props} />
)
