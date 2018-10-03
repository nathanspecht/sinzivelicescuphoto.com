import React from 'react'
import { Link } from 'gatsby'

export default ({ className, ...props }) => (
  <Link
    activeClassName="active-underline"
    className={`link dim black ${className} pb1 inactive-underline`}
    {...props}
  />
)
