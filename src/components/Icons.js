import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope)
library.add(faFacebook)
library.add(faInstagram)

export const Envelope = () => <FA icon={['fal', 'envelope']} />
export const Facebook = () => <FA icon={['fab', 'facebook']} />
export const Instagram = () => <FA icon={['fab', 'instagram']} />
