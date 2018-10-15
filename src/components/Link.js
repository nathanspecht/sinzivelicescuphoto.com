import React from 'react'
import { Link } from 'gatsby'

export default ({ className, ...props }) => (
  <Link
    activeClassName={props.noUnderline ? '' : 'active-underline'}
    className={`link dim black ${
      props.noUnderline ? 'pb0' : 'pb1'
    } inactive-underline ${className}`}
    {...props}
  />
)
