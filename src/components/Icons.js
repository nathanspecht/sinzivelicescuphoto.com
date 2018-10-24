import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '../icons/faEnvelope'
import { faBars } from '../icons/faBars'

library.add(faEnvelope)
library.add(faBars)
library.add(faFacebook)
library.add(faInstagram)

export const Envelope = () => <FA icon={['fal', 'envelope']} />
export const Facebook = () => <FA icon={['fab', 'facebook']} />
export const Instagram = () => <FA icon={['fab', 'instagram']} />
export const Bars = () => <FA icon={['fal', 'bars']} />
