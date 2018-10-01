import React from 'react'
import Helmet from 'react-helmet'
import 'tachyons/css/tachyons.min.css'
import './all.css'

import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => (
  <div className="mw9 center">
    <Helmet title="Sinziana Velicescu Photography" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
